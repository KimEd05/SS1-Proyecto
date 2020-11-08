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
    FOLDER_NAME = 'Login'
    
    # Source Image
    name = content['name']
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

    #Saving Images
    response = s3_client.put_object(Body=f, Bucket=BUCKET_NAME, Key=file_path, ACL='public-read')
    logging.info(response)

    #DB
    dynamodb_client = boto3.client(
        'dynamodb',
    )

    #Getting students
    try:
        response = dynamodb_client.scan(
            TableName='USUARIO'
        )
        logging.info(response)

        response_items = []
        #Recognition
        rekognition_client = boto3.client(
            'rekognition',
        )
        
        for item in response['Items']:
            resp = rekognition_client.compare_faces(
                SourceImage={
                    'S3Object': {
                        'Bucket': BUCKET_NAME,
                        'Name': "Usuarios/" + str(item['cui']['N']) + ".jpg",
                    }
                },
                TargetImage={
                    'S3Object': {
                        'Bucket': BUCKET_NAME,
                        'Name': file_path,
                    }
                },
                SimilarityThreshold = 0
            )
            
            if(len(resp['FaceMatches']) > 0):
                if(resp['FaceMatches'][0]['Similarity'] > 85):
                    return {'estado': "ok"}
                else:
                    return {'estado': "no ok"}

        
    except ClientError as e:
        logging.error(e)
        return e.response
