locals {
    aws_region = "us-west-2"
}

resource "aws_vpc" "vpc_example_app" {
    cidr_block = "10.0.0.0/16"
    enable_dns_hostnames = true
    enable_dns_support = true
}

resource "aws_subnet" "public_a" {
    vpc_id = "${aws_vpc.vpc_example_app.id}"
    cidr_block = "10.0.1.0/24"
    availability_zone = "${local.aws_region}a"
}

resource "aws_subnet" "public_b" {
    vpc_id = "${aws_vpc.vpc_example_app.id}"
    cidr_block = "10.0.2.0/24"
    availability_zone = "${local.aws_region}b"
}

resource "aws_internet_gateway" "internet_gateway" {
    vpc_id = "${aws_vpc.vpc_example_app.id}"
}

resource "aws_route" "internet_access" {
    route_table_id = "${aws_vpc.vpc_example_app.main_route_table_id}"
    destination_cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.internet_gateway.id}"
}

resource "aws_security_group" "security_group_example_app" {
    name = "security_group_example_app"
    description = "Allow TLS inbound traffic on port 80 (http)"
    vpc_id = "${aws_vpc.vpc_example_app.id}"

    ingress {
        from_port = 80
        to_port = 3000
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}


resource "aws_iam_role" "ecs_role" {
  name = "ecs_role_example_app"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "ecs_policy_attachment" {
  role = "${aws_iam_role.ecs_role.name}"

  // This policy adds logging + ecr permissions
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_ecs_task_definition" "backend_task" {
    family = "backend_example_app_family"

    // Fargate is a type of ECS that requires awsvpc network_mode
    requires_compatibilities = ["FARGATE"]
    network_mode = "awsvpc"

    // Valid sizes are shown here: https://aws.amazon.com/fargate/pricing/
    memory = "512"
    cpu = "256"

    // Fargate requires task definitions to have an execution role ARN to support ECR images
    execution_role_arn = "${aws_iam_role.ecs_role.arn}"

    container_definitions = <<EOT
[
    {
        "name": "superapp-container",
        "image": "767398072397.dkr.ecr.us-west-2.amazonaws.com/superapp:latest",
        "memory": 512,
        "essential": true,
        "portMappings": [
            {
                "containerPort": 3000,
                "hostPort": 3000
            }
        ]
    }
]
EOT
}

resource "aws_ecs_cluster" "backend_cluster" {
    name = "backend_cluster_example_app"
}

resource "aws_ecs_service" "backend_service" {
    name = "backend_service"

    cluster = "${aws_ecs_cluster.backend_cluster.id}"
    task_definition = "${aws_ecs_task_definition.backend_task.arn}"

    launch_type = "FARGATE"
    desired_count = 1

    network_configuration {
        subnets = ["${aws_subnet.public_a.id}", "${aws_subnet.public_b.id}"]
        security_groups = ["${aws_security_group.security_group_example_app.id}"]
        assign_public_ip = true
    }

    load_balancer {
    target_group_arn = aws_lb_target_group.foo.arn
    container_name   = "mongo"
    container_port   = 8080
  }
}
