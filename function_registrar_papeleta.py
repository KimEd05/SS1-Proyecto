import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key, Attr

import base64
import tempfile
import uuid
import logging

import json

def lambda_handler(event, context):
    dynamodb_client = boto3.client(
        'dynamodb',
    )
    #Getting groups
    try:
        response = dynamodb_client.put_item(
                TableName='VOTACION',
                Item={
                    'id': {'N': event['id']},
                    'nombre': {'S': event['nombre']},
                    'votos': {'N': event['votos']},
                    'partido': {'S': event['partido']},
                    'order_id': {'S': event['order_id']}
                },
            )
        logging.info(response)

        return response
    except ClientError as e:
        logging.error(e)
        return e.response