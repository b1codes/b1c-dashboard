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
