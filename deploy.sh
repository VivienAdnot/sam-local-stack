#!/usr/bin/env bash

STACK_NAME=SimpleLambdaStackLocal

sam deploy \
  --template-file template.yaml \
  --stack-name $STACK_NAME \
  --region eu-west-3 \
  --capabilities CAPABILITY_IAM \
  --resolve-s3
