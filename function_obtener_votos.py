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
    #Getting votes
    try:
        response_list = []
        response = dynamodb_client.scan(
            TableName='VOTACION'
        )
        for item in response['Items']:
            response_list.append({
                                    'id': item['id']['N'], 
                                    'nombre': item['nombre']['S'],
                                    'partido': item['partido']['S'],
                                    'votos': item['votos']['N'],
                                    'order_id': item['order_id']['S']
                                })
        newlist = sorted(response_list, key=lambda k: k['order_id']) 
        return newlist
    except ClientError as e:
        logging.error(e)
        return e.response