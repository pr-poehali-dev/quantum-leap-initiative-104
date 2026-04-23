import boto3
import os
import json

def handler(event: dict, context) -> dict:
    """Получить список всех файлов из S3 хранилища"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )

    result = {}
    for bucket_name in ['files']:
        try:
            resp = s3.list_objects_v2(Bucket=bucket_name, MaxKeys=200)
            items = []
            for obj in resp.get('Contents', []):
                items.append({'key': obj['Key'], 'size': obj['Size'], 'last_modified': str(obj['LastModified'])})
            result[bucket_name] = {'count': resp.get('KeyCount', 0), 'items': items, 'truncated': resp.get('IsTruncated', False)}
        except Exception as e:
            result[bucket_name] = f"error: {str(e)}"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'result': result})
    }