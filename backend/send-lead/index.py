import json
import os
import urllib.request
import urllib.parse
import urllib.error
import psycopg2


def save_lead(name: str, phone: str, message: str, telegram_sent: bool) -> None:
    dsn = os.environ['DATABASE_URL']
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor()
        cur.execute(
            f"INSERT INTO {schema}.leads (name, phone, message, telegram_sent) VALUES (%s, %s, %s, %s)",
            (name, phone, message, telegram_sent)
        )
        conn.commit()
        cur.close()
    finally:
        conn.close()


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта, сохраняет её в базу и отправляет уведомление в Telegram и WhatsApp"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    text = (
        f"📋 *Новая заявка с сайта ФорТЭК*\n\n"
        f"👤 *Имя:* {name}\n"
        f"📞 *Телефон:* {phone}\n"
    )
    if message:
        text += f"💬 *Сообщение:* {message}\n"

    data = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode()

    req = urllib.request.Request(
        f'https://api.telegram.org/bot{token}/sendMessage',
        data=data,
        method='POST'
    )

    telegram_sent = True
    telegram_error = None
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            resp.read()
    except Exception as e:
        telegram_sent = False
        telegram_error = str(e)

    whatsapp_error = None
    instance_id = os.environ.get('GREEN_API_INSTANCE_ID')
    green_token = os.environ.get('GREEN_API_TOKEN')
    notify_phone = os.environ.get('WHATSAPP_NOTIFY_PHONE')

    if instance_id and green_token and notify_phone:
        wa_text = (
            f"📋 Новая заявка с сайта ФорТЭК\n\n"
            f"👤 Имя: {name}\n"
            f"📞 Телефон: {phone}\n"
        )
        if message:
            wa_text += f"💬 Сообщение: {message}\n"

        wa_data = json.dumps({
            'chatId': f'{notify_phone}@c.us',
            'message': wa_text
        }).encode()

        wa_req = urllib.request.Request(
            f'https://api.green-api.com/waInstance{instance_id}/sendMessage/{green_token}',
            data=wa_data,
            method='POST',
            headers={'Content-Type': 'application/json'}
        )

        try:
            with urllib.request.urlopen(wa_req, timeout=8) as resp:
                resp.read()
        except Exception as e:
            whatsapp_error = str(e)

    try:
        save_lead(name, phone, message, telegram_sent)
    except Exception as e:
        return {
            'statusCode': 502,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Не удалось сохранить заявку', 'details': str(e)})
        }

    result = {'success': True}
    if not telegram_sent:
        result['telegram_error'] = telegram_error
    if whatsapp_error:
        result['whatsapp_error'] = whatsapp_error

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps(result)
    }