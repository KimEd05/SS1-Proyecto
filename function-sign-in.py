import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key, Attr

import base64
import tempfile
import uuid
import logging

import json

def lambda_handler(event, context):
    content = event
    ext = "jpg"
    BUCKET_NAME = 'bucket-proyecto-ss1'
    FOLDER_NAME = 'Usuarios'
    
    # Source Image
    name = content['cui']
    b64_parts = content['sourceBase64'].split(',')
    image_64_encode_str = len(b64_parts) ==2 and b64_parts[1] or b64_parts[0]
    s3_client = boto3.client(
        's3',
    )

    # Source Image
    file_name = '%s.%s' % (name, ext)
    file_path = '%s/%s' % (FOLDER_NAME, file_name)
    image_64_encode = base64.b64decode((image_64_encode_str))
    f = tempfile.TemporaryFile()
    f.write(image_64_encode)
    f.seek(0)
    
    try:
        #Saving Images
        response = s3_client.put_object(Body=f, Bucket=BUCKET_NAME, Key=file_path, ACL='public-read')
        logging.info(response)

        #Saving to DB
        dynamodb_client = boto3.client(
            'dynamodb',
        )
        try:
            response = dynamodb_client.put_item(
                TableName='USUARIO',
                Item={
                    'cui': {'N': name},
                    'nombre': {'S': content['nombre']}
                },
            )
            logging.info(response)
            return {'estado': "ok"}
        except ClientError as e:
            logging.error(e)
            return e.response
    except ClientError as e:
        logging.error(e)
        return {
            'statusCode': 500,
            'body': e.response
        }