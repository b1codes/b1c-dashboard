# B1C Dashboard - Infrastructure Design Spec

## 1. Objective
To establish a resilient, scalable, and secure AWS-based hosting environment for the B1C Dashboard and Sanity CMS, managed entirely through Terraform (IaC).

## 2. Architecture Overview
The system follows a "Static Site on AWS" pattern, utilizing CloudFront for global content delivery and S3 for origin storage.

### 2.1 Core Components
*   **Static Hosting:** Two separate S3 buckets (Dashboard & CMS Studio).
*   **Content Delivery:** Two AWS CloudFront distributions with Origin Access Control (OAC) to ensure S3 buckets remain private.
*   **Security (SSL):** Wildcard certificate (`*.b1c.com`) managed via AWS Certificate Manager (ACM).
*   **DNS:** Managed by Cloudflare (DNS-only mode) pointing to CloudFront distributions.

## 3. Infrastructure Details

### 3.1 State Management (Remote State)
*   **S3 Bucket:** `b1c-terraform-state` (to store the `terraform.tfstate` file).
*   **DynamoDB Table:** `b1c-terraform-locks` (to handle state locking and prevent concurrent modifications).

### 3.2 Resource Breakdown
| Resource | Purpose | Configuration |
| :--- | :--- | :--- |
| **S3 Bucket (App)** | Origin for `b1c.com` | Private, OAC restricted, Versioning enabled. |
| **S3 Bucket (CMS)** | Origin for `studio.b1c.com` | Private, OAC restricted, Versioning enabled. |
| **CloudFront (App)** | Delivery for `b1c.com` | Standard cache policy, HTTPS only, IPv6 enabled. |
| **CloudFront (CMS)** | Delivery for `studio.b1c.com` | Standard cache policy, HTTPS only. |
| **ACM Certificate** | SSL for `*.b1c.com` | DNS validation (via Cloudflare). |

## 4. DNS Configuration
DNS is managed at Cloudflare. Records will be created/maintained to point subdomains to the specific CloudFront Domain Names.

| Record Type | Name | Content | Proxy (Cloudflare) |
| :--- | :--- | :--- | :--- |
| **CNAME** | `b1c.com` | `[App-Distribution].cloudfront.net` | Off (DNS Only) |
| **CNAME** | `studio` | `[CMS-Distribution].cloudfront.net` | Off (DNS Only) |

## 5. Deployment Workflow
1.  **Terraform Apply:** Provision the AWS environment.
2.  **Build:** Generate static exports for `frontend/` and `cms/`.
3.  **Deploy:** Sync local `dist/` folders to respective S3 buckets and invalidate CloudFront caches.

## 6. Success Criteria
*   The dashboard is reachable at `https://b1c.com`.
*   The Sanity Studio is reachable at `https://studio.b1c.com`.
*   All traffic is forced to HTTPS.
*   Origin S3 buckets are not publicly accessible via S3 URLs.
