# DeployPass v4.8.0

Adds homepage SEO targeting for **website security scanner** while preserving the pre-deployment positioning, plus a new **Permissions Policy Checker**.

## New
- `/permissions-policy-checker`
- `/api/permissions-policy`
- Homepage title/H1/description optimized around `website security scanner`
- Added useful homepage SEO section without keyword stuffing
- Permissions Policy card in Tools Hub
- Sitemap updated

## Deploy
Replace the repository files with this package and push to GitHub/Cloudflare.

## v4.8.1 Worker hotfix

- Fixes Cloudflare Error 1101 introduced in v4.8.0.
- Root cause: `PERMISSIONS_POLICY_HTML` interpolated an undefined `FOCUSED_CSS` variable, which caused every Worker request (including `/`) to throw before routing completed.
- Adds the focused-page stylesheet explicitly.
- Fixes the Permissions Policy backend to use the existing `safeFetch()` helper instead of undefined `fetchTextSample` / `UA` names.
- Homepage SEO changes and `/permissions-policy-checker` remain included.


## v5.1.0 — Website Vulnerability Scanner SEO enhancement
Expanded /website-vulnerability-scanner with intent-focused explanatory content, eight FAQs, internal links, shorter metadata, and FAQPage / SoftwareApplication / BreadcrumbList JSON-LD. Existing scanner API and other routes are unchanged.
