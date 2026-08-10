import json
import os
import psycopg2
import psycopg2.extras


def handler(event: dict, context) -> dict:
    """Возвращает список заявок с сайта. Требует пароль в заголовке X-Auth-Token"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    headers = event.get('headers', {}) or {}
    token = headers.get('X-Auth-Token') or headers.get('x-auth-token')
    expected = os.environ['LEADS_PASSWORD']

    if token != expected:
        return {
            'statusCode': 401,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Неверный пароль'})
        }

    dsn = os.environ['DATABASE_URL']
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(dsn)
    try:
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur.execute(
            f"SELECT id, name, phone, message, telegram_sent, created_at FROM {schema}.leads ORDER BY created_at DESC LIMIT 500"
        )
        rows = cur.fetchall()
        cur.close()
    finally:
        conn.close()

    leads = []
    for row in rows:
        leads.append({
            'id': row['id'],
            'name': row['name'],
            'phone': row['phone'],
            'message': row['message'],
            'telegram_sent': row['telegram_sent'],
            'created_at': row['created_at'].isoformat() if row['created_at'] else None
        })

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'leads': leads})
    }
