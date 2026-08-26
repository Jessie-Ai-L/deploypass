export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "deploypass" });
    }

    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>DeployPass — Security checks before you deploy</title>
  <meta name="description" content="DeployPass helps you check AI-built apps for common security and deployment risks before you ship.">
  <style>
    *{box-sizing:border-box}body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8fafc;color:#0f172a}main{min-height:100vh;display:grid;place-items:center;padding:32px}.wrap{width:min(860px,100%);text-align:center}.badge{display:inline-block;padding:7px 11px;border:1px solid #cbd5e1;border-radius:999px;background:white;font-size:13px;font-weight:700}h1{font-size:clamp(42px,8vw,76px);line-height:1;margin:24px 0 16px;letter-spacing:-.055em}p{max-width:680px;margin:0 auto;color:#475569;font-size:clamp(17px,2vw,21px);line-height:1.6}.card{margin:38px auto 0;padding:24px;max-width:680px;background:white;border:1px solid #e2e8f0;border-radius:18px;box-shadow:0 12px 35px rgba(15,23,42,.06)}.label{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#64748b}.status{font-size:26px;font-weight:850;margin-top:8px}.small{font-size:14px;margin-top:8px}code{background:#f1f5f9;padding:3px 7px;border-radius:6px}</style>
</head>
<body>
<main><div class="wrap">
  <span class="badge">DeployPass V1</span>
  <h1>Know before you deploy.</h1>
  <p>Security checks for AI-built apps. DeployPass will help find exposed secrets, risky configuration and common deployment issues before your app goes live.</p>
  <div class="card">
    <div class="label">Deployment status</div>
    <div class="status">✓ Worker foundation is live</div>
    <p class="small">Next: build the real scanner and connect <code>deploypass.com</code>.</p>
  </div>
</div></main>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin"
      }
    });
  }
};
