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

data "aws_iam_policy_document" "app_bucket_policy" {
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

resource "aws_s3_bucket_policy" "app" {
  bucket = aws_s3_bucket.app.id
  policy = data.aws_iam_policy_document.app_bucket_policy.json
}

data "aws_iam_policy_document" "cms_bucket_policy" {
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

resource "aws_s3_bucket_policy" "cms" {
  bucket = aws_s3_bucket.cms.id
  policy = data.aws_iam_policy_document.cms_bucket_policy.json
}
