# AWS Infrastructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Provision a secure, scalable AWS environment for the B1C Dashboard and Sanity CMS using Terraform, including remote state, static hosting, and global CDN delivery.

**Architecture:** A modular Terraform setup using S3 for storage and CloudFront for delivery. Remote state is managed via a dedicated S3 bucket and DynamoDB table. ACM provides a wildcard certificate for `b1c.com` and `*.b1c.com`.

**Tech Stack:** Terraform, AWS (S3, CloudFront, ACM, Route53/Cloudflare), DynamoDB.

---

### Task 1: Terraform & Provider Initialization

**Files:**
- Create: `infra/terraform.tf`
- Create: `infra/provider.tf`
- Create: `infra/variables.tf`

- [ ] **Step 1: Define Variables**

```hcl
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
```

- [ ] **Step 2: Configure Provider**

```hcl
provider "aws" {
  region = var.region

  default_tags {
    tags = {
      Project   = var.project_name
      ManagedBy = "Terraform"
    }
  }
}
```

- [ ] **Step 3: Configure Backend (Placeholders for manual first run)**

```hcl
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
```

- [ ] **Step 4: Initialize Terraform**

Run: `cd infra && terraform init`
Expected: Success.

- [ ] **Step 5: Commit**

```bash
git add infra/terraform.tf infra/provider.tf infra/variables.tf
git commit -m "infra: initialize terraform and provider config"
```

---

### Task 2: SSL Certificate (ACM)

**Files:**
- Create: `infra/acm.tf`

- [ ] **Step 1: Request Wildcard Certificate**

```hcl
resource "aws_acm_certificate" "main" {
  domain_name               = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
```

- [ ] **Step 2: Plan and Verify**

Run: `terraform plan`
Expected: Plan shows 1 resource to add.

- [ ] **Step 3: Commit**

```bash
git add infra/acm.tf
git commit -m "infra: add ACM certificate request"
```

---

### Task 3: Static Hosting S3 Buckets

**Files:**
- Create: `infra/s3.tf`

- [ ] **Step 1: Create Dashboard and CMS Buckets**

```hcl
resource "aws_s3_bucket" "app" {
  bucket = "${var.project_name}-app-origin"
}

resource "aws_s3_bucket" "cms" {
  bucket = "${var.project_name}-cms-origin"
}

resource "aws_s3_bucket_versioning" "app" {
  bucket = aws_s3_bucket.app.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_versioning" "cms" {
  bucket = aws_s3_bucket.cms.id
  versioning_configuration {
    status = "Enabled"
  }
}
```

- [ ] **Step 2: Plan and Verify**

Run: `terraform plan`
Expected: Plan shows 4 resources to add.

- [ ] **Step 3: Commit**

```bash
git add infra/s3.tf
git commit -m "infra: create S3 buckets for app and cms"
```

---

### Task 4: CloudFront Delivery with OAC

**Files:**
- Create: `infra/cloudfront.tf`

- [ ] **Step 1: Define Origin Access Control (OAC)**

```hcl
resource "aws_cloudfront_origin_access_control" "main" {
  name                              = "s3-oac"
  description                       = "OAC for S3 origins"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
```

- [ ] **Step 2: Define App Distribution**

```hcl
resource "aws_cloudfront_distribution" "app" {
  origin {
    domain_name              = aws_s3_bucket.app.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.main.id
    origin_id                = "S3-App"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = [var.domain_name]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-App"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.main.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
```

- [ ] **Step 3: Define CMS Distribution**

```hcl
resource "aws_cloudfront_distribution" "cms" {
  origin {
    domain_name              = aws_s3_bucket.cms.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.main.id
    origin_id                = "S3-CMS"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["studio.${var.domain_name}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-CMS"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.main.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add infra/cloudfront.tf
git commit -m "infra: configure CloudFront distributions with OAC"
```

---

### Task 5: S3 Bucket Policies for CloudFront

**Files:**
- Modify: `infra/s3.tf`

- [ ] **Step 1: Add Bucket Policies**

```hcl
resource "aws_s3_bucket_policy" "app" {
  bucket = aws_s3_bucket.app.id
  policy = data.aws_iam_policy_document.app_oac.json
}

data "aws_iam_policy_document" "app_oac" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.app.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.app.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "cms" {
  bucket = aws_s3_bucket.cms.id
  policy = data.aws_iam_policy_document.cms_oac.json
}

data "aws_iam_policy_document" "cms_oac" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.cms.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.cms.arn]
    }
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add infra/s3.tf
git commit -m "infra: apply S3 bucket policies for CloudFront OAC"
```

---

### Task 6: Outputs

**Files:**
- Create: `infra/outputs.tf`

- [ ] **Step 1: Define Outputs**

```hcl
output "app_cloudfront_domain" {
  value = aws_cloudfront_distribution.app.domain_name
}

output "cms_cloudfront_domain" {
  value = aws_cloudfront_distribution.cms.domain_name
}

output "acm_validation_options" {
  value = aws_acm_certificate.main.domain_validation_options
}
```

- [ ] **Step 2: Commit**

```bash
git add infra/outputs.tf
git commit -m "infra: add outputs for distribution domains and ACM validation"
```
