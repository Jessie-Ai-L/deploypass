# DeployPass

Security checks for AI-built apps before deployment.

## Cloudflare Worker

- Entry: `src/index.js`
- Config: `wrangler.jsonc`
- Deploy: `npx wrangler deploy`
- Health check: `/health`

This first version is intentionally minimal so the initial GitHub → Cloudflare deployment is easy to verify before building the scanner.
