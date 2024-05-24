#/bin/sh

ACCOUNT_ID=$(aws sts get-caller-identity | jq -r ".Account")
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin "$ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com"