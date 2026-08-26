# Terraform

tf-init:
	cd terraform && terraform init

tf-verify:
	cd terraform && tflint
	cd terraform && terraform test

tf-plan:
	cd terraform && terraform plan

tf-apply:
	cd terraform && terraform apply

# TypeScript

ts-init:
	npm ci

ts-verify:
	npm test

.PHONY: tf-init tf-verify tf-plan tf-apply ts-init ts-verify