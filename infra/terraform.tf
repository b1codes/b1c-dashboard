terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # NOTE: Backend will be initialized AFTER the state resources are created manually or in a bootstrap step.
  # backend "s3" {
  #   bucket         = "b1c-terraform-state"
  #   key            = "infra/terraform.tfstate"
  #   region         = "us-east-1"
  #   dynamodb_table = "b1c-terraform-locks"
  #   encrypt        = true
  # }
}
