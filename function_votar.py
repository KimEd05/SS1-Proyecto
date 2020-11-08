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
    
    votes = dynamodb_client.scan(
                TableName='VOTACION',
                FilterExpression='#name = :my_name',
                ExpressionAttributeNames={
                    '#name': 'id',
                },
                ExpressionAttributeValues={
                    ':my_name': {'N': event["id"]},
                }
            )['Items'][0]

    #Setting vote
    try:
        response = dynamodb_client.put_item(
                TableName='VOTACION',
                Item={
                    'id': {'N': event['id']},
                    'nombre': {'S': votes['nombre']['S']},
                    'votos': {'N': str(int(votes['votos']['N']) + 1)},
                    'partido': {'S': votes['partido']['S']},
                    'order_id': {'S': votes['order_id']['S']}
                },
            )
        logging.info(response)

        return response
    except ClientError as e:
        logging.error(e)
        return e.response

