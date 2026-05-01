variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Primary domain name"
  type        = string
  default     = "b1c.com"
}

variable "project_name" {
  description = "Project name for resource tagging"
  type        = string
  default     = "b1c-dashboard"
}
