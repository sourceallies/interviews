# AWS + Terraform Project

## Tech Stack

- AWS CLI
- Terraform
- Docker (Docker in Docker)
- Python

## Common Commands

- `make init`
    - initialize terraform
- `make verify`
    - lint and test
- `make plan`
    - plan changes
- `make apply`
    - apply changes

## AWS Credentials

An interviewer will need to:

- create a new IAM user in the sandbox account
- create a new access key for the new user

Afterwards, run `aws configure` and apply the credentials locally.
