terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  required_version = "~> 1.13"
}

provider "aws" {
  region = "us-east-2"
}

#
# Example EC2 Instance
#

data "aws_ami" "ubuntu" {
  owners = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }

  most_recent = true
}

resource "aws_instance" "application" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.nano"

  tags = {
    Name = "interview-application"
  }
}
