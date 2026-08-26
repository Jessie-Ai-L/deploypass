# DeployPass Scanner V2

Passive, public-surface security checks for AI-built web apps.

## Routes

- `/` — Scanner UI
- `/health` — Health check
- `POST /api/scan` — Passive scan API

## Deployment

Cloudflare Workers deployment command:

```bash
npx wrangler deploy
```

No build command is required.

## Safety scope

V1 only inspects resources that a normal browser can retrieve publicly. It does not brute-force paths,
bypass authentication, exploit vulnerabilities, scan ports, or attempt destructive actions.

A PASS means "no obvious issue was detected by these checks", not "the application is secure".
