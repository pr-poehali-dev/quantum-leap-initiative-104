import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет уведомление на email"""

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

    smtp_email = os.environ['SMTP_EMAIL']
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'fortek.info@mail.ru'

    text = (
        f"Новая заявка с сайта ФорТЭК\n\n"
        f"Имя: {name}\n"
        f"Телефон: {phone}\n"
    )
    if message:
        text += f"Сообщение: {message}\n"

    msg = MIMEMultipart()
    msg['From'] = smtp_email
    msg['To'] = to_email
    msg['Subject'] = f'Новая заявка с сайта ФорТЭК от {name}'
    msg.attach(MIMEText(text, 'plain', 'utf-8'))

    try:
        with smtplib.SMTP_SSL('smtp.mail.ru', 465, timeout=8) as server:
            server.login(smtp_email, smtp_password)
            server.sendmail(smtp_email, [to_email], msg.as_string())
    except Exception as e:
        return {
            'statusCode': 502,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Не удалось отправить письмо', 'details': str(e)})
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
