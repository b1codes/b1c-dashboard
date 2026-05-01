output "app_cloudfront_domain" {
  value = aws_cloudfront_distribution.app.domain_name
}

output "cms_cloudfront_domain" {
  value = aws_cloudfront_distribution.cms.domain_name
}

output "acm_validation_options" {
  value = aws_acm_certificate.main.domain_validation_options
}
