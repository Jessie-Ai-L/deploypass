# DeployPass Scanner V2.1

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

## V2.1 changes

- Top 3 fixes always render when warnings/critical findings exist.
- Cookie checks use N/A when no Set-Cookie header is observable.
- N/A findings do not affect the score.
- Scope/version wording updated to V2.1.

## V2.3 changes

- Large responses are sampled instead of failing the entire scan.
- Adds a Scan coverage result.
- Sampling-sensitive negative checks can return N/A instead of a false PASS.
- Keeps bounded response and asset sampling for resource-safety.
