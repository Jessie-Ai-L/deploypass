
const HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Website Security Scanner — Free Pre-Deployment Scan | DeployPass</title>
  <meta name="description" content="Run a free website security scanner before you deploy. Check security headers, CORS, cookies, mixed content, frontend exposure and common configuration issues with 19 passive checks.">
  <meta name="robots" content="index,follow">
  <meta name="theme-color" content="#ffffff">
  <link rel="canonical" href="https://deploypass.com/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="DeployPass">
  <meta property="og:title" content="Website Security Scanner for Safer Deployments | DeployPass">
  <meta property="og:description" content="Run a free website security scanner with 19 passive checks before you deploy.">
  <meta property="og:url" content="https://deploypass.com/">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Website Security Scanner for Safer Deployments | DeployPass">
  <meta name="twitter:description" content="19 passive deployment security checks with actionable fixes and shareable reports.">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='15' fill='%232563EB'/%3E%3Cpath d='M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z' fill='white'/%3E%3Cpath d='m29 32 4 4 9-10' fill='none' stroke='%2310B981' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
  <style>
    :root{
      --blue:#2563eb;--cyan:#0ea5e9;--green:#10b981;--orange:#f59e0b;
      --ink:#0f172a;--ink2:#1e293b;--muted:#64748b;--line:#dbe4ef;
      --soft:#f4f7fb;--soft2:#eef5ff;--white:#fff;--danger:#dc2626;
      --shadow:0 20px 55px rgba(15,23,42,.08);
    }
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--ink);font:15px/1.55 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    a{color:inherit}.wrap{width:min(1120px,calc(100% - 36px));margin:auto}
    .topbar{position:sticky;top:0;z-index:30;background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid rgba(219,228,239,.85)}
    .nav{height:72px;display:flex;align-items:center;justify-content:space-between;gap:24px}
    .brand{display:inline-flex;align-items:center;gap:10px;text-decoration:none;font-size:20px;font-weight:850;letter-spacing:-.025em}
    .brandmark{width:28px;height:28px;flex:0 0 28px}.navlinks{display:flex;align-items:center;gap:26px;color:#334155;font-size:13px;font-weight:650}.navlinks a{text-decoration:none}.navlinks a:hover{color:var(--blue)}
    .navright{display:flex;align-items:center;gap:12px}.textlink{text-decoration:none;font-size:13px;font-weight:700;color:#334155}.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;border-radius:10px;padding:12px 16px;font:inherit;font-weight:800;cursor:pointer;text-decoration:none;transition:.18s ease}
    .btn-dark{background:var(--ink);color:#fff;box-shadow:0 8px 18px rgba(15,23,42,.15)}.btn-dark:hover{transform:translateY(-1px);background:#172033}.btn-light{background:#fff;color:var(--ink);border:1px solid var(--line)}.btn-blue{background:var(--blue);color:#fff}.btn:disabled{opacity:.6;cursor:wait;transform:none}
    .hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#fbfdff 0%,#f6f9ff 55%,#f8fdff 100%);border-bottom:1px solid var(--line)}
    .hero:before{content:"";position:absolute;width:520px;height:520px;border-radius:50%;right:-170px;top:-170px;background:radial-gradient(circle,rgba(37,99,235,.18),rgba(14,165,233,.09) 42%,transparent 68%)}
    .hero:after{content:"";position:absolute;width:420px;height:420px;border-radius:50%;right:180px;bottom:-300px;background:radial-gradient(circle,rgba(16,185,129,.12),transparent 70%)}
    .hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1.35fr) 330px;gap:58px;align-items:center;padding:74px 0 58px}
    .kicker{display:inline-flex;align-items:center;gap:7px;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:12px;font-weight:800}
    .hero h1{font-size:clamp(46px,6vw,72px);line-height:.98;letter-spacing:-.055em;margin:18px 0 20px;max-width:760px}.hero h1 em{font-style:normal;color:var(--blue)}
    .lead{font-size:18px;color:#41516a;max-width:680px;margin:0 0 26px}
    .scanbox{max-width:760px}.formrow{display:flex;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px;box-shadow:0 10px 28px rgba(37,99,235,.07)}
    .url{flex:1;min-width:0;border:0;outline:0;background:transparent;padding:13px 14px;font:inherit;color:var(--ink)}.url::placeholder{color:#94a3b8}
    .note{display:flex;align-items:center;gap:7px;margin:10px 8px 0;color:#64748b;font-size:12px}.note svg{flex:none}
    #status{display:none;margin-top:12px}.statusline{border-radius:10px;padding:11px 13px;background:#eef5ff;color:#334155;font-size:13px}
    .preview{background:rgba(255,255,255,.88);border:1px solid #d8e2ee;border-radius:18px;padding:22px;box-shadow:var(--shadow);transform:rotate(.15deg)}
    .preview .mini{font-size:12px;color:#64748b;font-weight:750}.preview-score{font-size:48px;font-weight:900;letter-spacing:-.05em;line-height:1;margin:7px 0}.preview-score small{font-size:16px;color:#64748b}.tag{display:inline-flex;border-radius:999px;padding:5px 8px;font-size:11px;font-weight:900}
    .pass{background:#e8f8f0;color:#087a4c}.review{background:#fff4d8;color:#946200}.fail{background:#feeceb;color:#b42318}.na{background:#eef2f7;color:#64748b}
    .meter{height:7px;background:#e7edf5;border-radius:999px;overflow:hidden;margin:14px 0 18px}.meter i{display:block;height:100%;width:94%;background:var(--green);border-radius:inherit}
    .mini-check{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 0;border-top:1px solid #edf1f6;color:#41516a;font-size:13px}.ok{color:var(--green);font-weight:900}.warn{color:var(--orange);font-weight:900}
    .stacks{position:relative;z-index:1;padding:0 0 30px;text-align:center}.stacks-label{color:#64748b;font-size:12px;margin-bottom:12px}.stackrow{display:flex;justify-content:center;gap:28px;flex-wrap:wrap;color:#334155;font-size:13px;font-weight:750}.stackrow span{display:inline-flex;align-items:center;gap:6px}
    .benefits{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:0 0 64px}.benefit{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px;box-shadow:0 12px 35px rgba(15,23,42,.035)}.benefit-icon{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:#eef5ff;color:var(--blue);font-weight:900;margin-bottom:13px}.benefit h3{font-size:16px;margin:0 0 6px}.benefit p{margin:0;color:#64748b;font-size:13px}
    #results{display:none;background:#f7f9fc;border-bottom:1px solid var(--line);padding:42px 0 70px}.result-head{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:18px}.backlink{font-size:13px;color:#475569;text-decoration:none;font-weight:750}
    .result-grid{display:grid;grid-template-columns:220px minmax(0,1fr);gap:18px}.scorepanel,.resultcard{background:#fff;border:1px solid var(--line);border-radius:16px}.scorepanel{padding:22px}.resultcard{padding:20px 22px}.score{font-size:58px;font-weight:900;line-height:1;letter-spacing:-.05em}.score small{font-size:17px;color:#64748b}.verdict{display:inline-flex;margin-top:10px;border-radius:999px;padding:6px 9px;font-size:11px;font-weight:900}
    .scoremeta{border-top:1px solid #edf1f6;margin-top:18px;padding-top:14px;display:grid;gap:5px;font-size:12px;color:#64748b}.scoremeta b{color:#334155}.scorebar{height:7px;background:#edf1f6;border-radius:999px;overflow:hidden;margin:15px 0}.scorebar i{display:block;height:100%;border-radius:inherit;background:var(--green)}
    .summary-banner{display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid #a7e8ce;background:#fbfffd;border-radius:12px;padding:16px 18px}.summary-copy{display:flex;align-items:center;gap:12px}.summary-icon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--green);color:#fff;font-size:20px;font-weight:900}.summary-banner h2{font-size:18px;margin:0 0 2px}.summary-banner p{margin:0;color:#64748b;font-size:12px}
    .share-actions{display:flex;gap:8px;flex-wrap:wrap}.sharebar{display:none;margin-top:12px;gap:8px;align-items:center}.sharelink{flex:1;min-width:230px;border:1px solid var(--line);border-radius:9px;padding:10px 11px;background:#fff;color:#475569;font-size:12px}.sharebtn{padding:10px 13px}
    .tabs{display:flex;align-items:center;gap:10px;margin:18px 0 12px;border-bottom:1px solid var(--line)}.tab{border:0;background:transparent;color:#64748b;padding:10px 10px 11px;font:inherit;font-size:13px;font-weight:800;cursor:pointer;border-bottom:2px solid transparent}.tab.active{color:var(--ink);border-color:var(--blue)}
    .topfixes{display:grid;gap:10px}.check,.fixcard{background:#fff;border:1px solid var(--line);border-radius:13px;padding:15px 16px}.checktop,.fixhead{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.check h3,.fixcard h3{font-size:14px;margin:0}.check p,.fixcard p{font-size:12px;color:#64748b;margin:5px 0 0}.badge{display:inline-flex;white-space:nowrap;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900}
    .guidance{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:11px}.guide{background:#f7f9fc;border-radius:9px;padding:9px 10px;color:#475569;font-size:11px}.guide b{color:#334155}
    .checks{display:grid;gap:8px}.check.compact-pass .guidance{display:none}.check.compact-pass{padding:13px 15px}.check[data-hidden="true"]{display:none}
    .sectiontitle{display:flex;align-items:center;justify-content:space-between;gap:14px;font-size:18px;margin:24px 0 11px}
    .scope{margin-top:18px;background:#eef5ff;border-radius:12px;padding:14px 15px;color:#526070;font-size:12px}
    .product-section{padding:76px 0}.section-head{max-width:690px;margin-bottom:28px}.section-head .eyebrow{font-size:12px;color:var(--blue);font-weight:850;letter-spacing:.12em;text-transform:uppercase}.section-head h2{font-size:clamp(30px,4vw,44px);line-height:1.05;letter-spacing:-.035em;margin:9px 0}.section-head p{margin:0;color:#64748b;font-size:16px}
    .howgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.howcard{border:1px solid var(--line);border-radius:16px;padding:22px}.step{font-size:11px;font-weight:900;color:var(--blue);text-transform:uppercase;letter-spacing:.12em}.howcard h3{font-size:18px;margin:9px 0 7px}.howcard p{margin:0;color:#64748b;font-size:13px}
    .checkgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.checkgroup{background:#f8fafc;border:1px solid var(--line);border-radius:15px;padding:18px}.checkgroup h3{font-size:15px;margin:0 0 9px}.checkgroup p{font-size:13px;color:#64748b;margin:0}
    .toolgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.toolcard{display:block;background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px;transition:.18s ease;box-shadow:0 8px 28px rgba(15,23,42,.025)}.toolcard:hover{transform:translateY(-2px);border-color:#bfd2ff;box-shadow:0 14px 34px rgba(15,23,42,.06)}.toolicon{width:38px;height:38px;border-radius:10px;background:#eef4ff;color:var(--blue);display:grid;place-items:center;font-weight:900;margin-bottom:16px}.toolcard h3{font-size:18px;margin:0 0 7px}.toolcard p{font-size:13px;color:#64748b;margin:0 0 15px;line-height:1.6}.toolgo{font-size:13px;font-weight:850;color:var(--blue)}
    .developer{background:#0f172a;color:#fff}.developer .section-head p{color:#aebbd0}.developer .section-head .eyebrow{color:#60a5fa}.devgrid{display:grid;grid-template-columns:1.1fr .9fr;gap:20px}.devbox{border:1px solid #28364c;background:#151f31;border-radius:16px;padding:22px}.devbox h3{margin:0 0 8px}.devbox p{color:#aebbd0;margin:0;font-size:13px}.code{margin-top:15px;background:#0a1220;border:1px solid #25334a;border-radius:12px;padding:14px;font:12px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;color:#d6e2f2;overflow:auto}
    .pricing{background:#f8fafc}.pricecard{max-width:650px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 15px 40px rgba(15,23,42,.04)}.pricecard h3{margin:0;font-size:21px}.pricecard p{color:#64748b}.pricebig{font-size:34px;font-weight:900}.pricebig small{font-size:14px;color:#64748b;font-weight:700}
    footer{border-top:1px solid var(--line);padding:28px 0 38px;background:#fff}.foot{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}.footcopy{color:#64748b;font-size:12px}.footlinks{display:flex;gap:18px;font-size:12px;color:#475569}
    @media(max-width:900px){.navlinks{display:none}.hero-grid{grid-template-columns:1fr;padding-top:54px}.preview{max-width:420px}.benefits,.howgrid{grid-template-columns:1fr}.checkgrid,.toolgrid{grid-template-columns:1fr}.devgrid{grid-template-columns:1fr}.result-grid{grid-template-columns:1fr}.scorepanel{display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:center}.scoremeta{margin:0;padding:0 0 0 20px;border-top:0;border-left:1px solid #edf1f6}.guidance{grid-template-columns:1fr}}
    @media(max-width:620px){.wrap{width:min(100% - 24px,1120px)}.nav{height:62px}.navright .textlink{display:none}.hero-grid{padding:42px 0 38px}.hero h1{font-size:44px}.lead{font-size:16px}.formrow{flex-direction:column}.formrow .btn{width:100%}.benefits{padding-bottom:42px}.preview{display:none}.stacks{padding-top:8px}.result-head{align-items:flex-start}.summary-banner{align-items:flex-start;flex-direction:column}.scorepanel{display:block}.scoremeta{margin-top:16px;padding:14px 0 0;border-left:0;border-top:1px solid #edf1f6}.sharebar{flex-direction:column;align-items:stretch}.sharelink{min-width:0;width:100%}}
  </style>
</head>
<body>
<header class="topbar">
  <div class="wrap nav">
    <a class="brand" href="/" aria-label="DeployPass home">
      <svg class="brandmark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span>Deploy<span style="color:#2563eb">Pass</span></span>
    </a>
    <nav class="navlinks" aria-label="Primary">
      <a href="#tools">Tools</a>
      <a href="#what-we-check">What we check</a>
      <a href="#faq-home">FAQ</a>
    </nav>
    <div class="navright">
      <a class="textlink" href="#tools">Free tools</a>
      <a class="btn btn-dark" href="#scanner">Start scanning <span aria-hidden="true">→</span></a>
    </div>
  </div>
</header>

<main>
<section class="hero" id="scanner">
  <div class="wrap hero-grid">
    <div>
      <span class="kicker">⚡ Free · No signup · 19 security checks</span>
      <h1>Website Security Scanner<br>for Safer <em>Deployments.</em></h1>
      <p class="lead">Scan your website before you deploy. Check security headers, CORS, cookies, mixed content, frontend exposure and common public deployment risks in seconds.</p>
      <div class="scanbox">
        <form id="scanForm">
          <div class="formrow">
            <input class="url" id="url" name="url" type="url" placeholder="Enter a website URL (e.g. yoursite.com)" autocomplete="url" required>
            <button class="btn btn-dark" id="scanBtn" type="submit">Run free scan <span aria-hidden="true">→</span></button>
          </div>
          <div class="note">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M7 10V8a5 5 0 0 1 10 0v2M6 10h12v10H6V10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Public, passive checks only. No login, brute force, port scan, or exploit attempts.
          </div>
        </form>
        <div id="status"><div class="statusline" id="statusText">Starting scan…</div></div>
      </div>
    </div>
    <aside class="preview" aria-label="Example DeployPass score">
      <div class="mini">Example score</div>
      <div class="preview-score">94<small>/100</small></div>
      <span class="tag pass">PASS</span>
      <div class="meter"><i></i></div>
      <div class="mini-check"><span>Security headers</span><b class="ok">✓</b></div>
      <div class="mini-check"><span>CORS configuration</span><b class="ok">✓</b></div>
      <div class="mini-check"><span>Cookie flags</span><b class="warn">!</b></div>
      <div class="mini-check"><span>Mixed content</span><b class="ok">✓</b></div>
      <div class="mini-check"><span>… 15 more checks</span><span></span></div>
    </aside>
  </div>
  <div class="wrap stacks">
    <div class="stacks-label">Works with modern deployment stacks</div>
    <div class="stackrow"><span>▲ Vercel</span><span>☁ Cloudflare</span><span>✣ Netlify</span><span>✦ Supabase</span><span>⌁ Render</span><span>◉ GitHub</span></div>
  </div>
  <div class="wrap benefits">
    <article class="benefit"><div class="benefit-icon">↯</div><h3>Fast & private</h3><p>Results in seconds. No account required.</p></article>
    <article class="benefit"><div class="benefit-icon">◇</div><h3>19 security checks</h3><p>Headers, cookies, CORS, frontend exposure, source maps, and more.</p></article>
    <article class="benefit"><div class="benefit-icon">✓</div><h3>Actionable fixes</h3><p>Understand what matters and what to change before launch.</p></article>
  </div>
</section>

<section id="results">
  <div class="wrap">
    <div class="result-head"><a class="backlink" href="#scanner">← Back to scan</a><button class="btn btn-dark" type="button" onclick="document.getElementById('url').focus();window.scrollTo({top:0,behavior:'smooth'})">New scan</button></div>
    <div class="result-grid">
      <aside class="scorepanel">
        <div>
          <div style="font-size:12px;color:#64748b;font-weight:750;margin-bottom:8px">Overall score</div>
          <div class="score"><span id="score">—</span><small>/100</small></div>
          <span class="verdict review" id="verdict">REVIEW</span>
          <div class="scorebar"><i id="scoreBar" style="width:0%"></i></div>
        </div>
        <div class="scoremeta">
          <div><b>Critical</b> <span id="criticalCount">0</span></div>
          <div><b>Warnings</b> <span id="warningCount">0</span></div>
          <div><b>Passed</b> <span id="passedCount">0</span></div>
          <div><b>N/A</b> <span id="naCount">0</span></div>
          <div style="margin-top:5px"><b>Scanned URL</b><br><span id="scannedUrl">—</span></div>
          <div><b>Checks performed</b><br><span id="checksPerformed">19 passive checks</span></div>
        </div>
      </aside>
      <div>
        <div class="summary-banner">
          <div class="summary-copy"><div class="summary-icon" id="summaryIcon">✓</div><div><h2 id="summaryTitle">Scan complete</h2><p id="summaryText"></p></div></div>
          <div class="share-actions"><button class="btn btn-light" id="shareBtn" type="button" style="display:none">Share report</button></div>
        </div>
        <div class="sharebar" id="shareBar"><input class="sharelink" id="shareLink" readonly aria-label="Shareable report URL"><button class="btn btn-light sharebtn" id="copyShareBtn" type="button">Copy report link</button></div>
        <div id="topFixesWrap" style="display:none">
          <div class="sectiontitle"><span>Issues to review</span></div>
          <div class="topfixes" id="topFixes"></div>
        </div>
        <div class="sectiontitle"><span>Checks</span></div>
        <div class="tabs" id="checkTabs">
          <button class="tab active" data-filter="all" type="button">All</button>
          <button class="tab" data-filter="pass" type="button">Passed</button>
          <button class="tab" data-filter="warning" type="button">Warnings</button>
          <button class="tab" data-filter="na" type="button">N/A</button>
        </div>
        <div class="checks" id="checks"></div>
        <div class="scope"><b>Important:</b> DeployPass v4.0 examines public responses and a limited sample of same-origin frontend assets. PASS means no obvious issue was detected by that check. N/A means the condition was not observable. Neither result proves an application is secure.</div>
      </div>
    </div>
  </div>
</section>

<section class="product-section" id="how-it-works">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">How it works</span><h2>A deployment check you can understand.</h2><p>DeployPass focuses on public signals a normal visitor can observe, then turns them into a short list of useful fixes.</p></div>
    <div class="howgrid">
      <article class="howcard"><div class="step">01 · Scan</div><h3>Enter a public URL</h3><p>DeployPass fetches the page and a limited sample of same-origin frontend assets.</p></article>
      <article class="howcard"><div class="step">02 · Review</div><h3>See what matters first</h3><p>Get a score, severity breakdown, and clear explanations for warnings and critical findings.</p></article>
      <article class="howcard"><div class="step">03 · Share</div><h3>Send the report</h3><p>Every successful scan can create a private, unlisted report link for your developer or team.</p></article>
    </div>
  </div>
</section>

<section class="product-section" id="tools" style="background:#fbfcfe;border-top:1px solid #eef2f7;border-bottom:1px solid #eef2f7">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Free website security tools</span><h2>Run a focused check or scan everything.</h2><p>Use a dedicated checker when you are troubleshooting one browser security control, or run the full 19-check DeployPass scan before launch.</p></div>
    <div class="toolgrid">
      <a class="toolcard" href="/security-headers-checker"><div class="toolicon">H</div><h3>Security Headers Checker</h3><p>Review CSP, HSTS, MIME sniffing protection, Referrer-Policy, clickjacking controls, CORS and cookie security signals.</p><span class="toolgo">Check security headers →</span></a>
      <a class="toolcard" href="/hsts-checker"><div class="toolicon">S</div><h3>HSTS Checker</h3><p>Inspect Strict-Transport-Security, max-age, includeSubDomains and preload directives with practical configuration guidance.</p><span class="toolgo">Check HSTS →</span></a>
      <a class="toolcard" href="/csp-checker"><div class="toolicon">C</div><h3>CSP Checker</h3><p>Analyze Content-Security-Policy directives, risky sources, framing controls and common CSP configuration issues.</p><span class="toolgo">Check CSP →</span></a>
      <a class="toolcard" href="/mixed-content-checker"><div class="toolicon">M</div><h3>Mixed Content Checker</h3><p>Find insecure HTTP images, scripts, stylesheets, iframes and other resources loaded by HTTPS pages.</p><span class="toolgo">Check mixed content →</span></a>
      <a class="toolcard" href="/cors-checker"><div class="toolicon">O</div><h3>CORS Checker</h3><p>Test cross-origin response headers, credentials behavior, allowed methods and preflight signals for a public endpoint.</p><span class="toolgo">Check CORS →</span></a>
      <a class="toolcard" href="/permissions-policy-checker"><div class="toolicon">P</div><h3>Permissions Policy Checker</h3><p>Inspect the Permissions-Policy header and review browser feature controls for camera, microphone, geolocation, payment and more.</p><span class="toolgo">Check Permissions Policy →</span></a>
      <a class="toolcard" href="/website-vulnerability-scanner"><div class="toolicon">V</div><h3>Website Vulnerability Scanner</h3><p>Run a free passive vulnerability scan for security misconfigurations, missing protections and public deployment risks.</p><span class="toolgo">Scan for vulnerabilities →</span></a>
      <a class="toolcard" href="#scanner"><div class="toolicon">19</div><h3>Full Website Security Scan</h3><p>Run all 19 passive public-surface checks across headers, cookies, CORS, frontend exposure, source maps and deployment hygiene.</p><span class="toolgo">Run full scan →</span></a>
    </div>
  </div>
</section>

<section class="product-section" id="what-we-check" style="background:#fbfcfe;border-top:1px solid #eef2f7;border-bottom:1px solid #eef2f7">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">What we check</span><h2>19 passive checks before launch.</h2><p>No exploit attempts. No credential testing. No port scans. DeployPass stays on the public surface.</p></div>
    <div class="checkgrid">
      <article class="checkgroup"><h3>Security headers</h3><p>HTTPS, CSP, HSTS, MIME sniffing protection, Referrer Policy and clickjacking controls.</p></article>
      <article class="checkgroup"><h3>Browser & cookie posture</h3><p>CORS behavior, Secure / HttpOnly / SameSite cookie signals and obvious mixed content.</p></article>
      <article class="checkgroup"><h3>Frontend exposure</h3><p>Secret-like patterns, public environment variables, source map references and debug indicators.</p></article>
      <article class="checkgroup"><h3>Deployment hygiene</h3><p>Verbose error leakage, framework disclosure, scan coverage and public response review.</p></article>
    </div>
  </div>
</section>

<section class="product-section" id="website-security-scanner">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Website security scanner</span><h2>A practical pre-deployment security scan for public websites.</h2><p>DeployPass is a lightweight website security scanner built for the moment between “it works” and “ship it.” Enter a public URL to review browser-facing security controls, configuration signals and frontend exposure without logging in, brute forcing credentials, scanning ports or attempting exploitation.</p></div>
    <div class="checkgrid">
      <article class="checkgroup"><h3>Check the public surface before launch</h3><p>A deployment can look correct while still shipping weak security headers, risky cookie flags, mixed HTTP resources, permissive cross-origin behavior or frontend debug signals. DeployPass groups these observable signals into one report so developers can review them before a release.</p></article>
      <article class="checkgroup"><h3>Focused checks when you need detail</h3><p>Use the dedicated Security Headers, HSTS, CSP, Mixed Content, CORS and Permissions Policy tools when troubleshooting one control. Use the full website security scan when you want a broader pre-deployment review and a shareable result.</p></article>
      <article class="checkgroup"><h3>Designed for modern deployment stacks</h3><p>The scanner works with public sites deployed on platforms such as Vercel, Cloudflare, Netlify, Render and GitHub Pages. Because DeployPass evaluates the response it can actually observe, a check may return N/A when a condition cannot be verified reliably.</p></article>
      <article class="checkgroup"><h3>Not a penetration test</h3><p>DeployPass does not claim to prove that an application is secure. It is a passive website security scanner for fast configuration review before and after deployment. Application logic, authenticated routes and server-side vulnerabilities still require deeper security testing.</p></article>
    </div>
  </div>
</section>

<section class="product-section developer" id="for-developers">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">For developers</span><h2>Built for the gap between “it works” and “ship it.”</h2><p>Use DeployPass as a quick public-surface review after a deploy, before a launch, or before handing a build to a client.</p></div>
    <div class="devgrid">
      <article class="devbox"><h3>Developer-friendly reports</h3><p>Share one stable report URL instead of screenshots. Re-scan after fixes and compare the new result manually.</p><div class="code">POST /api/scan<br>{ "url": "https://yourapp.com" }<br><br>→ score · verdict · checks · reportUrl</div></article>
      <article class="devbox"><h3>Designed to stay lightweight</h3><p>DeployPass samples large responses instead of blindly downloading everything. If a condition cannot be reliably checked, it returns N/A rather than pretending it passed.</p></article>
    </div>
  </div>
</section>

<section class="product-section pricing" id="pricing">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Pricing</span><h2>Free while we validate the product.</h2><p>No signup is required for the current public scanner.</p></div>
    <div class="pricecard"><h3>DeployPass Free</h3><div class="pricebig">$0 <small>during beta</small></div><p>19 passive checks, actionable fixes, and shareable saved reports. Paid monitoring and deeper verified scans may come later.</p><a class="btn btn-dark" href="#scanner">Run a free scan →</a></div>
  </div>
</section>
<section class="product-section" id="faq-home">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">FAQ</span><h2>DeployPass security scanner FAQ.</h2></div>
    <div class="checkgrid">
      <article class="checkgroup"><h3>Is DeployPass a penetration test?</h3><p>No. DeployPass performs passive checks against public website responses and a limited sample of same-origin frontend assets.</p></article>
      <article class="checkgroup"><h3>Which checker should I use?</h3><p>Use the focused HSTS, CSP or Security Headers checker for a specific configuration. Use the full scan for a broader pre-deployment review.</p></article>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="wrap foot">
    <a class="brand" href="/" style="font-size:16px"><svg class="brandmark" style="width:22px;height:22px;flex-basis:22px" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>DeployPass</span></a>
    <div class="footcopy">© 2026 DeployPass · Security checks for AI-built apps before deployment.</div>
    <div class="footlinks"><a href="#tools">Tools</a><a href="/security-headers-checker">Security Headers</a><a href="/hsts-checker">HSTS</a><a href="/csp-checker">CSP</a><a href="/mixed-content-checker">Mixed Content</a><a href="/cors-checker">CORS</a><a href="/permissions-policy-checker">Permissions Policy</a></div>
  </div>
</footer>

<script>
const form=document.getElementById('scanForm');
const btn=document.getElementById('scanBtn');
const status=document.getElementById('status');
const statusText=document.getElementById('statusText');
const results=document.getElementById('results');
const shareBar=document.getElementById('shareBar');
const shareLink=document.getElementById('shareLink');
const copyShareBtn=document.getElementById('copyShareBtn');
const shareBtn=document.getElementById('shareBtn');
const esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};

function actionHtml(c){
  var why=c.why||'This finding can weaken the public security posture of the deployed application.';
  var how=c.fix||'Review the affected configuration and apply the safest production setting supported by your stack.';
  if(c.level==='pass'||c.level==='na') return '';
  return '<div class="guidance"><div class="guide"><b>Why it matters:</b> '+esc(why)+'</div><div class="guide"><b>How to fix:</b> '+esc(how)+'</div></div>';
}

form.addEventListener('submit',async function(e){
  e.preventDefault();
  btn.disabled=true;btn.innerHTML='Scanning…';
  status.style.display='block';results.style.display='none';statusText.textContent='Fetching the public page and frontend assets…';
  try{
    var r=await fetch('/api/scan',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('url').value})});
    var data=await r.json();
    if(!r.ok) throw new Error(data.error||'Scan failed');
    render(data);statusText.textContent='Scan complete.';
  }catch(err){statusText.textContent=err.message||'Scan failed. Please try again.'}
  finally{btn.disabled=false;btn.innerHTML='Run free scan <span aria-hidden="true">→</span>'}
});

function render(d){
  results.style.display='block';
  document.getElementById('score').textContent=d.score;
  document.getElementById('scoreBar').style.width=Math.max(0,Math.min(100,d.score))+'%';
  document.getElementById('scannedUrl').textContent=d.target;
  document.getElementById('checksPerformed').textContent=d.checks.length+' passive checks';
  var v=document.getElementById('verdict');
  v.textContent=d.verdict;
  v.className='verdict '+(d.verdict==='PASS'?'pass':d.verdict==='FAIL'?'fail':'review');
  document.getElementById('criticalCount').textContent=d.counts.critical;
  document.getElementById('warningCount').textContent=d.counts.warning;
  document.getElementById('passedCount').textContent=d.counts.pass;
  document.getElementById('naCount').textContent=d.counts.na||0;

  var title=d.verdict==='FAIL'?'Fix critical issues before deployment':d.counts.warning>0?'Strong baseline — '+d.counts.warning+' item'+(d.counts.warning===1?'':'s')+' to review':'No obvious public issue detected';
  document.getElementById('summaryTitle').textContent=title;
  document.getElementById('summaryText').textContent='Scanned '+d.target+' using '+d.checks.length+' passive checks.';
  var icon=document.getElementById('summaryIcon');
  icon.textContent=d.verdict==='FAIL'?'!':'✓';
  icon.style.background=d.verdict==='FAIL'?'#dc2626':d.counts.warning>0?'#f59e0b':'#10b981';

  if(d.reportUrl){
    shareBar.style.display='flex';shareLink.value=d.reportUrl;shareBtn.style.display='inline-flex';
  }else{
    shareBar.style.display='none';shareLink.value='';shareBtn.style.display='none';
  }

  var tf=document.getElementById('topFixesWrap'),tfl=document.getElementById('topFixes');
  var fixes=(d.topFixes&&d.topFixes.length)?d.topFixes:(d.checks||[]).filter(function(c){return c.level==='critical'||c.level==='warning'}).slice(0,3);
  if(fixes.length){
    tf.style.display='block';
    tfl.innerHTML=fixes.map(function(c,i){
      var sev=c.level==='critical'?'HIGH':'MEDIUM';
      return '<article class="fixcard"><div class="fixhead"><div><h3>'+esc((i+1)+'. '+c.title)+'</h3><p>'+esc(c.detail)+'</p></div><span class="badge '+(c.level==='critical'?'fail':'review')+'">'+sev+'</span></div>'+actionHtml(c)+'</article>';
    }).join('');
  }else{tf.style.display='none';tfl.innerHTML=''}

  document.getElementById('checks').innerHTML=(d.checks||[]).map(function(c){
    var badgeClass=c.level==='pass'?'pass':c.level==='critical'?'fail':c.level==='na'?'na':'review';
    var label=c.level==='na'?'N/A':c.level.toUpperCase();
    var compact=c.level==='pass'?' compact-pass':'';
    return '<article class="check'+compact+'" data-level="'+esc(c.level)+'"><div class="checktop"><div><h3>'+esc(c.title)+'</h3><p>'+esc(c.detail)+'</p></div><span class="badge '+badgeClass+'">'+esc(label)+'</span></div>'+actionHtml(c)+'</article>';
  }).join('');

  document.querySelectorAll('#checkTabs .tab').forEach(function(t){t.classList.remove('active')});
  document.querySelector('#checkTabs .tab[data-filter="all"]').classList.add('active');
  applyFilter('all');
  results.scrollIntoView({behavior:'smooth',block:'start'});
}

function applyFilter(filter){
  document.querySelectorAll('#checks .check').forEach(function(el){
    var level=el.getAttribute('data-level');
    var show=filter==='all'||(filter==='warning'&&(level==='warning'||level==='critical'))||filter===level;
    el.setAttribute('data-hidden',show?'false':'true');
  });
}
document.getElementById('checkTabs').addEventListener('click',function(e){
  var t=e.target.closest('.tab');if(!t)return;
  document.querySelectorAll('#checkTabs .tab').forEach(function(x){x.classList.remove('active')});
  t.classList.add('active');applyFilter(t.getAttribute('data-filter'));
});

copyShareBtn.addEventListener('click',async function(){
  if(!shareLink.value)return;
  try{await navigator.clipboard.writeText(shareLink.value);copyShareBtn.textContent='Copied';setTimeout(function(){copyShareBtn.textContent='Copy report link'},1400)}
  catch(e){shareLink.select();document.execCommand('copy')}
});
shareBtn.addEventListener('click',async function(){
  if(!shareLink.value)return;
  if(navigator.share){try{await navigator.share({title:'DeployPass security report',url:shareLink.value});return}catch(e){}}
  try{await navigator.clipboard.writeText(shareLink.value);shareBtn.textContent='Copied';setTimeout(function(){shareBtn.textContent='Share report'},1400)}catch(e){}
});
</script>
</body></html>`;

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff"
};


const SECURITY_HEADERS_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Security Headers Checker – Check HTTP Security Headers Free | DeployPass</title>
<meta name="description" content="Free security headers checker for CSP, HSTS, X-Content-Type-Options, Referrer-Policy, clickjacking protection, CORS and cookie security signals.">
<meta name="robots" content="index,follow">
<meta name="theme-color" content="#ffffff">
<link rel="canonical" href="https://deploypass.com/security-headers-checker">
<meta property="og:type" content="website">
<meta property="og:site_name" content="DeployPass">
<meta property="og:title" content="Free Security Headers Checker | DeployPass">
<meta property="og:description" content="Check CSP, HSTS, MIME sniffing protection, Referrer-Policy, clickjacking controls and related browser security signals.">
<meta property="og:url" content="https://deploypass.com/security-headers-checker">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Free Security Headers Checker | DeployPass">
<meta name="twitter:description" content="Check important HTTP security headers and get practical fixes.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='15' fill='%232563EB'/%3E%3Cpath d='M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z' fill='white'/%3E%3Cpath d='m29 32 4 4 9-10' fill='none' stroke='%2310B981' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<style>
:root{--blue:#2563eb;--green:#10b981;--orange:#f59e0b;--red:#dc2626;--ink:#0f172a;--muted:#64748b;--line:#dbe4ef;--soft:#f7f9fc}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--ink);background:#fff;font:15px/1.58 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{color:inherit}.wrap{width:min(1060px,calc(100% - 34px));margin:auto}
.topbar{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}.nav{height:68px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:19px;font-weight:850;letter-spacing:-.025em}.mark{width:27px;height:27px}.navlinks{display:flex;gap:20px;align-items:center;font-size:12px;font-weight:750;color:#475569}.navlinks a{text-decoration:none}.navlinks a:hover{color:var(--blue)}
.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:10px;padding:12px 15px;font:inherit;font-weight:850;cursor:pointer;text-decoration:none}.btn-dark{background:var(--ink);color:#fff}.btn-light{background:#fff;border:1px solid var(--line);color:var(--ink)}
.hero{background:linear-gradient(135deg,#fbfdff,#f4f8ff 60%,#f8fdff);border-bottom:1px solid var(--line);padding:66px 0 58px}.crumb{font-size:12px;color:#64748b;margin-bottom:22px}.crumb a{color:#2563eb;text-decoration:none}.kicker{display:inline-flex;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:850}.hero h1{font-size:clamp(42px,6vw,64px);line-height:1;letter-spacing:-.05em;margin:16px 0 18px}.lead{font-size:17px;color:#475569;max-width:720px;margin:0 0 24px}.form{display:flex;max-width:760px;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px;box-shadow:0 12px 32px rgba(37,99,235,.07)}.form input{flex:1;min-width:0;border:0;outline:0;padding:13px 14px;background:transparent;font:inherit}.fine{margin-top:10px;color:#64748b;font-size:11px}.status{display:none;max-width:760px;margin-top:12px;padding:11px 13px;background:#eef5ff;border-radius:10px;color:#475569;font-size:12px}
.result{display:none;padding:44px 0 64px;background:var(--soft);border-bottom:1px solid var(--line)}.summary{display:grid;grid-template-columns:210px 1fr;gap:15px;margin-bottom:16px}.card{background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px}.score{font-size:55px;font-weight:900;line-height:1;letter-spacing:-.05em}.score small{font-size:16px;color:#64748b}.badge{display:inline-flex;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900}.pass{background:#e8f8f0;color:#087a4c}.warning{background:#fff4d8;color:#946200}.critical{background:#feeceb;color:#b42318}.na{background:#eef2f7;color:#64748b}.result h2{margin:0 0 6px;font-size:20px}.result p{margin:0;color:#64748b;font-size:12px}.stats{display:flex;gap:18px;flex-wrap:wrap;margin-top:15px}.stat b{font-size:18px}.stat span{display:block;font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.08em}
.headers{display:grid;gap:9px}.headerrow{background:#fff;border:1px solid var(--line);border-radius:13px;padding:15px 16px}.headtop{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.headerrow h3{margin:0;font-size:14px}.headerrow p{margin:5px 0 0;color:#64748b;font-size:12px}.fix{margin-top:10px;background:#f7f9fc;border-radius:9px;padding:9px 10px;color:#475569;font-size:11px}.fullcta{margin-top:18px;background:#0f172a;color:#fff;border-radius:14px;padding:18px;display:flex;align-items:center;justify-content:space-between;gap:16px}.fullcta p{color:#b9c4d4}.fullcta .btn{background:#fff;color:#0f172a}
.section{padding:70px 0}.section.alt{background:#fbfcfe;border-top:1px solid #eef2f7;border-bottom:1px solid #eef2f7}.eyebrow{font-size:11px;font-weight:900;color:#2563eb;text-transform:uppercase;letter-spacing:.12em}.section h2{font-size:clamp(29px,4vw,40px);line-height:1.08;letter-spacing:-.035em;margin:8px 0 13px}.intro{max-width:720px;color:#64748b;font-size:15px}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}.info{border:1px solid var(--line);border-radius:14px;padding:18px}.info h3{margin:0 0 7px;font-size:15px}.info p{margin:0;color:#64748b;font-size:12px}.code{margin-top:10px;background:#0f172a;color:#dbeafe;border-radius:9px;padding:10px 11px;font:11px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace;overflow:auto}
.faq{max-width:820px}.faq details{border-bottom:1px solid var(--line);padding:15px 0}.faq summary{cursor:pointer;font-weight:800}.faq p{color:#64748b;font-size:13px;margin:8px 0 0}
footer{border-top:1px solid var(--line);padding:28px 0 38px}.foot{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;align-items:center;color:#64748b;font-size:11px}
@media(max-width:760px){.navlinks{display:none}.hero{padding-top:44px}.form{flex-direction:column}.form .btn{width:100%}.summary{grid-template-columns:1fr}.grid{grid-template-columns:1fr}.fullcta{align-items:flex-start;flex-direction:column}}
</style>
</head>
<body>
<header class="topbar"><div class="wrap nav">
<a class="brand" href="/"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Deploy<span style="color:#2563eb">Pass</span></span></a>
<nav class="navlinks"><a href="/#tools">Tools</a><a href="/hsts-checker">HSTS</a><a href="/csp-checker">CSP</a><a href="/cors-checker">CORS</a><a href="#faq">FAQ</a></nav>
<a class="btn btn-dark" href="/">Run full scan →</a>
</div></header>

<main>
<section class="hero">
<div class="wrap">
<div class="crumb"><a href="/">DeployPass</a> / Security Headers Checker</div>
<span class="kicker">Free · No signup · Passive public check</span>
<h1>Free Security Headers Checker</h1>
<p class="lead">Check the browser-facing security headers on any public website. Review CSP, HSTS, MIME sniffing protection, Referrer-Policy, clickjacking controls, CORS and cookie security signals in seconds.</p>
<form class="form" id="headerForm"><input id="headerUrl" type="url" placeholder="Enter a website URL (e.g. example.com)" required><button class="btn btn-dark" id="headerBtn" type="submit">Check security headers →</button></form>
<div class="fine">DeployPass performs passive checks only. It does not attempt exploitation, credential testing, or port scanning.</div>
<div class="status" id="headerStatus">Checking public response headers…</div>
</div>
</section>

<section class="result" id="headerResult">
<div class="wrap">
<div class="summary">
<div class="card"><div style="font-size:11px;color:#64748b;font-weight:800;margin-bottom:8px">HEADER SCORE</div><div class="score"><span id="headerScore">—</span><small>/100</small></div><span class="badge warning" id="headerVerdict">REVIEW</span></div>
<div class="card"><h2 id="resultTitle">Security header review</h2><p id="resultTarget"></p><div class="stats"><div class="stat"><b id="hPassed">0</b><span>Passed</span></div><div class="stat"><b id="hWarnings">0</b><span>Warnings</span></div><div class="stat"><b id="hCritical">0</b><span>Critical</span></div><div class="stat"><b id="hNa">0</b><span>N/A</span></div></div></div>
</div>
<div class="headers" id="headerChecks"></div>
<div class="fullcta"><div><b>Need the complete pre-deployment review?</b><p>Run all 19 DeployPass checks for frontend exposure, source maps, mixed content, framework disclosure and more.</p></div><a class="btn" href="/">Run full DeployPass scan →</a></div>
</div>
</section>

<section class="section" id="headers"><div class="wrap">
<div class="eyebrow">What this tool checks</div><h2>Important browser security controls, explained.</h2><p class="intro">Security headers tell browsers how to handle content, framing, transport and referrer data. A missing header is not automatically a vulnerability, but weak or absent controls can make common web attacks easier.</p>
<div class="grid">
<article class="info"><h3>Content-Security-Policy (CSP)</h3><p>Restricts which scripts, styles, frames and other resources a browser may load. A carefully tested CSP can reduce the impact of cross-site scripting.</p><div class="code">Content-Security-Policy: default-src 'self'</div></article>
<article class="info"><h3>Strict-Transport-Security (HSTS)</h3><p>Tells compatible browsers to use HTTPS for future requests after a secure connection has been established.</p><div class="code">Strict-Transport-Security: max-age=31536000</div></article>
<article class="info"><h3>X-Content-Type-Options</h3><p>The <code>nosniff</code> value tells browsers not to reinterpret declared MIME types in ways that can create security problems.</p><div class="code">X-Content-Type-Options: nosniff</div></article>
<article class="info"><h3>Clickjacking protection</h3><p>Use CSP <code>frame-ancestors</code> or, where appropriate, X-Frame-Options to control whether another site may frame your pages.</p><div class="code">Content-Security-Policy: frame-ancestors 'none'</div></article>
<article class="info"><h3>Referrer-Policy</h3><p>Controls how much referrer information the browser sends when users navigate away or load cross-origin resources.</p><div class="code">Referrer-Policy: strict-origin-when-cross-origin</div></article>
<article class="info"><h3>CORS & cookie signals</h3><p>DeployPass also reviews obvious CORS behavior and Secure, HttpOnly and SameSite signals when cookies are observable on the scanned response.</p></article>
</div>
</div></section>

<section class="section alt"><div class="wrap">
<div class="eyebrow">How to use the result</div><h2>Fix warnings in context, not by checkbox.</h2><p class="intro">A strong header configuration depends on the application. For example, an overly strict CSP can break legitimate scripts, and HSTS should normally be enabled only after HTTPS is stable across the intended hostnames. DeployPass reports observable signals and gives practical starting points rather than claiming that one header set makes a site secure.</p>
</div></section>

<section class="section" id="faq"><div class="wrap faq">
<div class="eyebrow">FAQ</div><h2>Security headers checker FAQ</h2>
<details open><summary>What are HTTP security headers?</summary><p>They are HTTP response headers that instruct browsers to apply security-related behavior, such as enforcing HTTPS, limiting framing, controlling referrer information or restricting allowed content sources.</p></details>
<details><summary>Does a perfect header score mean my website is secure?</summary><p>No. Security headers cover only part of a web application's security posture. Server-side authorization, dependency vulnerabilities, authentication, business logic and database controls require other forms of review.</p></details>
<details><summary>Why can a cookie check show N/A?</summary><p>The scanned public response may not set a cookie. DeployPass reports N/A when a condition was not observable instead of treating it as a pass.</p></details>
<details><summary>Does DeployPass perform a penetration test?</summary><p>No. This tool performs passive public-surface checks and does not attempt exploitation, credential attacks or port scanning.</p></details>
<details><summary>What else does the full DeployPass scan check?</summary><p>The full scan adds checks for mixed content, source map exposure, frontend secret-like patterns, public environment-variable names, framework disclosure, verbose errors and other deployment signals.</p></details>
</div></section>
</main>
<footer><div class="wrap foot"><a class="brand" href="/" style="font-size:15px">DeployPass</a><span>© 2026 DeployPass · Public-surface deployment security checks.</span><a href="/">Full 19-check scanner →</a></div></footer>

<script>
const wanted=new Set(["Content Security Policy","HSTS","MIME sniffing protection","Referrer Policy","Clickjacking protection","CORS configuration","Cookie Secure flag","Cookie HttpOnly flag","Cookie SameSite policy"]);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
document.getElementById("headerForm").addEventListener("submit",async function(e){
 e.preventDefault();
 const btn=document.getElementById("headerBtn"),status=document.getElementById("headerStatus");
 btn.disabled=true;btn.textContent="Checking…";status.style.display="block";status.textContent="Checking public response headers…";
 try{
   const r=await fetch("/api/scan",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:document.getElementById("headerUrl").value})});
   const d=await r.json(); if(!r.ok) throw new Error(d.error||"Check failed");
   renderHeaders(d); status.textContent="Security header check complete.";
 }catch(err){status.textContent=err.message||"Check failed. Please try again."}
 finally{btn.disabled=false;btn.textContent="Check security headers →"}
});
function renderHeaders(d){
 const checks=(d.checks||[]).filter(c=>wanted.has(c.title));
 let points=0,max=0,passed=0,warnings=0,critical=0,na=0;
 checks.forEach(c=>{if(c.level==="na"){na++;return}max+=1;if(c.level==="pass"){points+=1;passed++}else if(c.level==="critical"){critical++}else{warnings++}});
 const score=max?Math.round(points/max*100):0;
 document.getElementById("headerScore").textContent=score;
 const verdict=document.getElementById("headerVerdict");
 verdict.textContent=critical?"ACTION NEEDED":warnings?"REVIEW":"PASS";
 verdict.className="badge "+(critical?"critical":warnings?"warning":"pass");
 document.getElementById("resultTarget").textContent="Checked "+d.target+" · "+checks.length+" browser-facing security signals.";
 document.getElementById("hPassed").textContent=passed;document.getElementById("hWarnings").textContent=warnings;document.getElementById("hCritical").textContent=critical;document.getElementById("hNa").textContent=na;
 document.getElementById("headerChecks").innerHTML=checks.map(c=>{
   const cls=c.level==="pass"?"pass":c.level==="critical"?"critical":c.level==="na"?"na":"warning";
   const label=c.level==="na"?"N/A":c.level.toUpperCase();
   const fix=c.fix&&c.level!=="pass"&&c.level!=="na"?'<div class="fix"><b>Suggested fix:</b> '+esc(c.fix)+'</div>':"";
   return '<article class="headerrow"><div class="headtop"><div><h3>'+esc(c.title)+'</h3><p>'+esc(c.detail)+'</p></div><span class="badge '+cls+'">'+label+'</span></div>'+fix+'</article>';
 }).join("");
 document.getElementById("headerResult").style.display="block";
 document.getElementById("headerResult").scrollIntoView({behavior:"smooth",block:"start"});
}
</script>
</body></html>`;

function json(data, status=200) {
  return new Response(JSON.stringify(data), {status, headers: JSON_HEADERS});
}

function isBlockedHostname(hostname) {
  const h = hostname.toLowerCase().replace(/\.$/, "");
  if (!h || h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || h.endsWith(".internal")) return true;
  if (h === "0.0.0.0" || h === "::" || h === "::1") return true;
  // Block literal IPv4. Domain names are allowed; Workers does not expose a portable DNS-to-IP preflight API.
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(h)) return true;
  // Block obvious IPv6 literals.
  if (h.includes(":")) return true;
  return false;
}

function normalizeTarget(input) {
  let raw = String(input || "").trim();
  if (!raw) throw new Error("Enter a website URL.");
  if (!/^https?:\/\//i.test(raw)) raw = "https://" + raw;
  const u = new URL(raw);
  if (!["http:", "https:"].includes(u.protocol)) throw new Error("Only http:// and https:// URLs are supported.");
  if (u.username || u.password) throw new Error("URLs with embedded credentials are not supported.");
  if (isBlockedHostname(u.hostname)) throw new Error("Local, private, or IP-literal targets are not supported.");
  const host = u.hostname.toLowerCase().replace(/\.$/, "");
  if (host === "deploypass.com" || host === "www.deploypass.com" || host.endsWith(".deploypass.com")) throw new Error("DeployPass can't scan its own production endpoint. Try another public website.");
  u.hash = "";
  return u;
}

async function safeFetch(url, opts={}) {
  let current = new URL(url);
  for (let i=0;i<4;i++) {
    if (isBlockedHostname(current.hostname)) throw new Error("Blocked redirect target.");
    const res = await fetch(current.toString(), {
      method: opts.method || "GET",
      headers: {
        "user-agent": "DeployPass/1.0 (+https://deploypass.com)",
        "accept": opts.accept || "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5",
        ...(opts.headers || {})
      },
      redirect: "manual"
    });
    if ([301,302,303,307,308].includes(res.status)) {
      const loc = res.headers.get("location");
      if (!loc) return {res, finalUrl: current};
      const next = new URL(loc, current);
      if (!["http:","https:"].includes(next.protocol) || isBlockedHostname(next.hostname)) throw new Error("Unsafe redirect target.");
      current = next;
      continue;
    }
    return {res, finalUrl: current};
  }
  throw new Error("Too many redirects.");
}

async function limitedText(res, maxBytes=450000) {
  const len = Number(res.headers.get("content-length") || 0);
  const text = await res.text();
  const truncated = (len && len > maxBytes) || text.length > maxBytes;
  return {
    text: text.length > maxBytes ? text.slice(0, maxBytes) : text,
    truncated,
    originalBytes: len || text.length
  };
}

function sameOrigin(base, candidate) {
  try { return new URL(candidate, base).origin === new URL(base).origin; } catch { return false; }
}

function extractScripts(html, baseUrl) {
  const out = [];
  const re = /<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html)) && out.length < 8) {
    try {
      const u = new URL(m[1], baseUrl);
      if (sameOrigin(baseUrl, u)) out.push(u.toString());
    } catch {}
  }
  return [...new Set(out)].slice(0, 8);
}

function sourceMapHints(text) {
  const out = [];
  const re = /[#@]\s*sourceMappingURL\s*=\s*([^\s*]+)/g;
  let m;
  while ((m = re.exec(text)) && out.length < 10) out.push(m[1].replace(/["']/g,""));
  return out;
}

const SECRET_PATTERNS = [
  ["OpenAI-style secret", /\bsk-(?:proj-)?[A-Za-z0-9_-]{24,}\b/g],
  ["Anthropic-style secret", /\bsk-ant-[A-Za-z0-9_-]{20,}\b/g],
  ["Stripe live secret", /\bsk_live_[A-Za-z0-9]{16,}\b/g],
  ["GitHub token", /\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}\b/g],
  ["AWS access key", /\bAKIA[0-9A-Z]{16}\b/g],
  ["Supabase service-role marker", /\bservice_role\b.{0,80}\beyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\b/gi]
];

function detectSecrets(text) {
  const hits = [];
  for (const [name, re] of SECRET_PATTERNS) {
    re.lastIndex = 0;
    if (re.test(text)) hits.push(name);
  }
  return [...new Set(hits)];
}

function cookieReview(headers) {
  const raw = headers.get("set-cookie") || "";
  if (!raw) return {present:false, secure:true, httpOnly:true, sameSite:true};
  // Workers may expose combined Set-Cookie; these checks are conservative indicators.
  const parts = raw.split(/,(?=[^;,]+=)/g);
  return {
    present:true,
    secure:parts.every(x=>/;\s*secure\b/i.test(x)),
    httpOnly:parts.every(x=>/;\s*httponly\b/i.test(x)),
    sameSite:parts.every(x=>/;\s*samesite=(?:lax|strict|none)\b/i.test(x))
  };
}
function hasMixedContent(html, finalUrl) {
  if (finalUrl.protocol !== "https:") return false;
  return /(?:src|href|action)\s*=\s*["']http:\/\//i.test(html);
}
function debugIndicators(text) {
  const pats=[/\bNODE_ENV\s*[:=]\s*["']development["']/i,/\bdebug\s*[:=]\s*true\b/i,/\bwebpackHotUpdate\b/i,/\b__vite_ping\b/i,/\bReact Refresh\b/i];
  return pats.some(r=>r.test(text));
}
function verboseErrorIndicators(text) {
  const pats=[/\b(?:TypeError|ReferenceError|SyntaxError):[^<\n]{0,180}/i,/\bat\s+[\w$.<>]+\s*\([^\n)]*:\d+:\d+\)/,/\bTraceback \(most recent call last\):/i,/\bException in thread\b/i];
  return pats.some(r=>r.test(text));
}
function publicEnvIndicators(text) {
  const names=[];
  const pats=[["VITE environment values",/\bVITE_[A-Z0-9_]{3,}\b/g],["NEXT_PUBLIC environment values",/\bNEXT_PUBLIC_[A-Z0-9_]{3,}\b/g],["REACT_APP environment values",/\bREACT_APP_[A-Z0-9_]{3,}\b/g]];
  for(const [name,re] of pats){re.lastIndex=0;if(re.test(text))names.push(name)}
  return names;
}
function corsReview(headers) {
  const origin=headers.get("access-control-allow-origin");
  const creds=(headers.get("access-control-allow-credentials")||"").toLowerCase()==="true";
  if(!origin) return {level:"pass",detail:"No permissive CORS response header was observed on the scanned page."};
  if(origin.trim()==="*" && creds) return {level:"critical",detail:"The response advertises wildcard CORS together with credentials. Review this configuration carefully."};
  if(origin.trim()==="*") return {level:"warning",detail:"Access-Control-Allow-Origin: * was detected on the scanned page."};
  return {level:"pass",detail:`CORS is restricted to ${origin}.`};
}
function versionDisclosure(headers) {
  const vals=[headers.get("x-powered-by"),headers.get("x-aspnet-version"),headers.get("x-generator")].filter(Boolean);
  return vals;
}

function add(checks, level, title, detail, fix="") { checks.push({level,title,detail,fix}); }

async function scan(target) {
  const started = Date.now();
  const {res, finalUrl} = await safeFetch(target.toString());
  if (!res.ok) throw new Error(`Target returned HTTP ${res.status}.`);
  const ctype = (res.headers.get("content-type") || "").toLowerCase();
  if (!ctype.includes("text/html")) throw new Error("The target did not return an HTML page.");
  const htmlSample = await limitedText(res);
  const html = htmlSample.text;
  let partialScan = htmlSample.truncated;
  const checks = [];

  add(checks,
    finalUrl.protocol === "https:" ? "pass" : "critical",
    "HTTPS",
    finalUrl.protocol === "https:" ? "The final page uses HTTPS." : "The final page is served over plain HTTP.",
    finalUrl.protocol === "https:" ? "" : "Enable HTTPS and redirect HTTP traffic to HTTPS."
  );

  const h = res.headers;
  const csp = h.get("content-security-policy");
  add(checks, csp ? "pass" : "warning", "Content Security Policy",
    csp ? "A Content-Security-Policy header is present." : "No Content-Security-Policy header was detected.",
    csp ? "" : "Add a restrictive Content-Security-Policy and test it before enforcing."
  );

  const hsts = h.get("strict-transport-security");
  add(checks, hsts ? "pass" : "warning", "HSTS",
    hsts ? "Strict-Transport-Security is present." : "Strict-Transport-Security was not detected.",
    hsts ? "" : "After HTTPS is stable, add an HSTS header with an appropriate max-age."
  );

  const nosniff = (h.get("x-content-type-options") || "").toLowerCase() === "nosniff";
  add(checks, nosniff ? "pass" : "warning", "MIME sniffing protection",
    nosniff ? "X-Content-Type-Options: nosniff is present." : "X-Content-Type-Options: nosniff was not detected.",
    nosniff ? "" : "Send X-Content-Type-Options: nosniff."
  );

  const ref = h.get("referrer-policy");
  add(checks, ref ? "pass" : "warning", "Referrer Policy",
    ref ? `Referrer-Policy is set to ${ref}.` : "Referrer-Policy was not detected.",
    ref ? "" : "Set a Referrer-Policy such as strict-origin-when-cross-origin."
  );

  const frame = h.get("x-frame-options") || (csp && /frame-ancestors/i.test(csp) ? "CSP frame-ancestors" : "");
  add(checks, frame ? "pass" : "warning", "Clickjacking protection",
    frame ? "A frame restriction was detected." : "No X-Frame-Options or CSP frame-ancestors restriction was detected.",
    frame ? "" : "Use CSP frame-ancestors (preferred) or X-Frame-Options where appropriate."
  );

  const cors=corsReview(h);
  add(checks,cors.level,"CORS configuration",cors.detail,cors.level==="pass"?"":"Restrict allowed origins to the sites that actually need browser access, and avoid wildcard origins for sensitive responses.");

  const cookies=cookieReview(h);
  add(checks,!cookies.present?"na":cookies.secure?"pass":"warning","Cookie Secure flag",!cookies.present?"Not observed: the scanned response did not set a cookie.":cookies.secure?"All observed cookies include the Secure flag.":"At least one observed cookie may be missing the Secure flag.",!cookies.present||cookies.secure?"":"Mark session and sensitive cookies Secure so browsers only send them over HTTPS.");
  add(checks,!cookies.present?"na":cookies.httpOnly?"pass":"warning","Cookie HttpOnly flag",!cookies.present?"Not observed: the scanned response did not set a cookie.":cookies.httpOnly?"All observed cookies include the HttpOnly flag.":"At least one observed cookie may be missing the HttpOnly flag.",!cookies.present||cookies.httpOnly?"":"Use HttpOnly for cookies that do not need JavaScript access, especially session cookies.");
  add(checks,!cookies.present?"na":cookies.sameSite?"pass":"warning","Cookie SameSite policy",!cookies.present?"Not observed: the scanned response did not set a cookie.":cookies.sameSite?"All observed cookies declare a SameSite policy.":"At least one observed cookie may be missing an explicit SameSite policy.",!cookies.present||cookies.sameSite?"":"Set SameSite=Lax or Strict where possible; use None only when cross-site use is required and pair it with Secure.");

  const mixed=hasMixedContent(html,finalUrl);
  add(checks,mixed?"warning":"pass","Mixed content",mixed?"The HTTPS page contains at least one obvious http:// resource reference.":"No obvious http:// resource reference was detected in the scanned HTML.",mixed?"Serve all page resources over HTTPS and replace hard-coded http:// URLs.":"");

  const versions=versionDisclosure(h);
  add(checks,versions.length?"warning":"pass","Framework version disclosure",versions.length?`Potential framework/runtime disclosure headers were observed: ${versions.join(", ")}.`:"No obvious framework/runtime version disclosure header was detected.",versions.length?"Remove unnecessary technology/version disclosure headers where your platform allows it.":"");

  const scripts = extractScripts(html, finalUrl.toString());
  let combined = html;
  let mapHints = sourceMapHints(html);
  let fetchedScripts = 0;

  for (const script of scripts) {
    try {
      const sr = await safeFetch(script, {accept:"application/javascript,text/javascript,*/*;q=0.5"});
      if (!sr.res.ok) continue;
      const ct = (sr.res.headers.get("content-type") || "").toLowerCase();
      if (ct && !ct.includes("javascript") && !ct.includes("text/plain") && !ct.includes("application/octet-stream")) continue;
      const jsSample = await limitedText(sr.res, 300000);
      const js = jsSample.text;
      if (jsSample.truncated) partialScan = true;
      combined += "\n" + js;
      mapHints.push(...sourceMapHints(js));
      fetchedScripts++;
    } catch {}
  }

  const secrets = detectSecrets(combined);
  add(checks, secrets.length ? "critical" : "pass", "Frontend secret patterns",
    secrets.length ? `Potential secret-like values detected: ${secrets.join(", ")}. Manual review is required because pattern matching can produce false positives.` : `No high-confidence secret patterns were detected in the page and ${fetchedScripts} same-origin frontend asset(s) checked.`,
    secrets.length ? "Rotate any real secret immediately, remove it from client-side code, and move privileged calls to a server-side endpoint." : ""
  );

  const debug=debugIndicators(combined);
  add(checks,debug?"warning":"pass","Development / debug indicators",debug?"Possible development or debug-mode indicators were found in sampled public frontend content.":"No obvious development/debug indicator was found in sampled public frontend content.",debug?"Verify the production build disables debug mode, hot reload, verbose diagnostics, and development-only tooling.":"");

  const verbose=verboseErrorIndicators(html);
  add(checks,verbose?"warning":"pass","Verbose error leakage",verbose?"The public HTML contains text resembling a stack trace or verbose runtime error.":"No obvious stack trace or verbose runtime error was detected in the scanned HTML.",verbose?"Return generic production error pages to users and keep detailed traces in server-side logs only.":"");

  const envs=publicEnvIndicators(combined);
  add(checks,envs.length?"warning":"pass","Public environment variables",envs.length?`Public-prefixed environment variable names were detected: ${envs.join(", ")}. These prefixes are often intentionally client-visible, but values should be reviewed for sensitive data.`:"No common public environment-variable prefixes were detected in the sampled frontend content.",envs.length?"Review every client-exposed environment value and ensure no privileged credential or private endpoint secret is included.":"");

  const uniqueMaps = [...new Set(mapHints)].filter(Boolean);
  let publicMap = null;
  for (const hint of uniqueMaps.slice(0,5)) {
    try {
      const candidate = new URL(hint, finalUrl);
      if (!sameOrigin(finalUrl, candidate)) continue;
      const mr = await safeFetch(candidate.toString(), {accept:"application/json,text/plain,*/*;q=0.5"});
      if (mr.res.ok) {
        const mapSample = await limitedText(mr.res, 120000);
        const t = mapSample.text;
        if (mapSample.truncated) partialScan = true;
        if (/"sources"\s*:/.test(t) || /"version"\s*:\s*3/.test(t)) { publicMap = candidate.toString(); break; }
      }
    } catch {}
  }
  add(checks, publicMap ? "warning" : "pass", "Source map exposure",
    publicMap ? `A publicly accessible source map was detected: ${publicMap}` : uniqueMaps.length ? "Source map references were seen, but no confirmed public source map was detected in the limited checks." : "No source map reference was detected in the sampled frontend assets.",
    publicMap ? "Disable production source maps if they are not required, or restrict access according to your deployment platform." : ""
  );

  const server = h.get("server");
  add(checks, partialScan ? "na" : "pass", "Scan coverage",
    partialScan ? "Large response detected. DeployPass analyzed a limited sample of the page and/or frontend assets." : "The sampled response stayed within the V2.3 analysis limits.",
    ""
  );

  add(checks, "pass", "Public response review",
    server ? `Public headers were reviewed. Server header: ${server}.` : "Public response headers were reviewed.",
    ""
  );

  const weights={
    "HTTPS":30,"Frontend secret patterns":32,"CORS configuration":20,
    "Content Security Policy":8,"HSTS":6,"MIME sniffing protection":5,"Referrer Policy":3,"Clickjacking protection":7,
    "Cookie Secure flag":6,"Cookie HttpOnly flag":6,"Cookie SameSite policy":4,"Mixed content":8,"Framework version disclosure":3,
    "Development / debug indicators":8,"Verbose error leakage":10,"Public environment variables":6,"Source map exposure":7
  };
  let score=100;
  for(const c of checks){if(c.level==="critical") score-=weights[c.title]||25; else if(c.level==="warning") score-=weights[c.title]||5;}
  score=Math.max(0,Math.min(100,score));
  const counts={critical:checks.filter(c=>c.level==="critical").length,warning:checks.filter(c=>c.level==="warning").length,pass:checks.filter(c=>c.level==="pass").length,na:checks.filter(c=>c.level==="na").length};
  const verdict=counts.critical?"FAIL":score<90?"REVIEW":"PASS";
  const topFixes=checks.filter(c=>c.level==="critical"||c.level==="warning").sort((a,b)=>(b.level==="critical"?100:weights[b.title]||5)-(a.level==="critical"?100:weights[a.title]||5)).slice(0,3);

  return {ok:true,target:finalUrl.toString(),finalUrl:finalUrl.toString(),score,verdict,counts,checks,topFixes,meta:{durationMs:Date.now()-started,scriptsSampled:fetchedScripts,scope:"passive-public-v3.3"}};
}

function newReportToken() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 16);
}

async function ensureReportsTable(env) {
  if (!env?.DB) return;
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS reports (
      token TEXT PRIMARY KEY,
      url TEXT NOT NULL,
      score INTEGER NOT NULL,
      verdict TEXT NOT NULL,
      result_json TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_reports_created_at
    ON reports(created_at)
  `).run();
}

async function saveScan(env, result) {
  if (!env?.DB) return null;

  await env.DB.prepare(`
    INSERT INTO scans (url, score, critical_count, warning_count, passed_count, na_count, checks_json)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    result.target,
    result.score,
    result.counts.critical,
    result.counts.warning,
    result.counts.pass,
    result.counts.na || 0,
    JSON.stringify(result.checks || [])
  ).run();

  await ensureReportsTable(env);

  for (let attempt = 0; attempt < 3; attempt++) {
    const token = newReportToken();
    try {
      await env.DB.prepare(`
        INSERT INTO reports (token, url, score, verdict, result_json)
        VALUES (?, ?, ?, ?, ?)
      `).bind(
        token,
        result.target,
        result.score,
        result.verdict,
        JSON.stringify(result)
      ).run();
      return token;
    } catch (err) {
      if (attempt === 2) throw err;
    }
  }
  return null;
}

function reportHtml(report) {
  const data = report.result;
  const escHtml = (value) => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));
  const statusClass = data.verdict === "PASS" ? "pass" : data.verdict === "FAIL" ? "fail" : "review";
  const checkRows = (data.checks || []).map((c, i) => {
    const cls = c.level === "pass" ? "pass" : c.level === "critical" ? "fail" : c.level === "na" ? "na" : "review";
    const label = c.level === "na" ? "N/A" : String(c.level || "").toUpperCase();
    const icon = c.level === "pass" ? "✓" : c.level === "critical" ? "!" : c.level === "na" ? "–" : "!";
    return `<article class="check" data-level="${escHtml(c.level)}"><div class="checkicon ${cls}">${icon}</div><div class="checkcopy"><h3>${escHtml(c.title)}</h3><p>${escHtml(c.detail)}</p></div><span class="badge ${cls}">${escHtml(label)}</span></article>`;
  }).join("");

  const countCritical = Number(data.counts?.critical)||0;
  const countWarning = Number(data.counts?.warning)||0;
  const countPass = Number(data.counts?.pass)||0;
  const countNa = Number(data.counts?.na)||0;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow">
<meta name="theme-color" content="#ffffff">
<title>DeployPass Security Report · ${escHtml(data.target)}</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='15' fill='%232563EB'/%3E%3Cpath d='M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z' fill='white'/%3E%3Cpath d='m29 32 4 4 9-10' fill='none' stroke='%2310B981' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<style>
:root{--blue:#2563eb;--green:#10b981;--orange:#f59e0b;--ink:#0f172a;--muted:#64748b;--line:#dbe4ef;--soft:#f5f8fc;--danger:#dc2626}
*{box-sizing:border-box}body{margin:0;background:#f7f9fc;color:var(--ink);font:15px/1.55 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
a{color:inherit}.wrap{width:min(960px,calc(100% - 32px));margin:auto}.topbar{background:#fff;border-bottom:1px solid var(--line)}.nav{height:70px;display:flex;align-items:center;justify-content:space-between;gap:16px}.brand{display:flex;align-items:center;gap:9px;text-decoration:none;font-size:19px;font-weight:850;letter-spacing:-.025em}.brandmark{width:27px;height:27px}.actions{display:flex;gap:8px}.btn{display:inline-flex;align-items:center;justify-content:center;border:1px solid var(--line);background:#fff;border-radius:9px;padding:10px 13px;font:inherit;font-size:12px;font-weight:800;text-decoration:none;cursor:pointer}.btn-dark{background:#0f172a;color:#fff;border-color:#0f172a}.btn-blue{border-color:#bcd1ff;color:#1d4ed8}
.hero{padding:42px 0 22px}.eyebrow{font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:#64748b}.hero h1{font-size:clamp(36px,6vw,58px);letter-spacing:-.045em;line-height:1.02;margin:10px 0}.meta{color:#64748b;font-size:13px}.reportid{display:inline-flex;align-items:center;gap:7px;margin-top:17px;font-size:12px;font-weight:750}.token{background:#eef5ff;color:#1d4ed8;border-radius:8px;padding:6px 9px}
.summary{display:grid;grid-template-columns:210px 1fr;gap:16px;margin:18px 0 34px}.card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px}.score{font-size:58px;font-weight:900;line-height:1;letter-spacing:-.05em}.score small{font-size:17px;color:#64748b}.verdict,.badge{display:inline-flex;border-radius:999px;padding:6px 9px;font-size:10px;font-weight:900}.verdict{margin-top:10px}.pass{background:#e8f8f0;color:#087a4c}.review{background:#fff4d8;color:#946200}.fail{background:#feeceb;color:#b42318}.na{background:#eef2f7;color:#64748b}.meter{height:7px;background:#edf1f6;border-radius:999px;overflow:hidden;margin-top:15px}.meter i{display:block;height:100%;background:#10b981;border-radius:inherit}
.card h2{font-size:17px;margin:0 0 13px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.stat{display:flex;align-items:center;gap:8px}.dot{width:8px;height:8px;border-radius:50%}.dot.red{background:#ef4444}.dot.orange{background:#f59e0b}.dot.green{background:#10b981}.dot.gray{background:#94a3b8}.stat b{font-size:16px}.stat span{display:block;color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:.07em}
.sectionrow{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 12px}.sectionrow h2{font-size:20px;margin:0}.filters{display:flex;gap:7px;flex-wrap:wrap}.filter{border:1px solid var(--line);background:#fff;color:#64748b;border-radius:9px;padding:8px 10px;font:inherit;font-size:11px;font-weight:800;cursor:pointer}.filter.active{background:#0f172a;color:#fff;border-color:#0f172a}
.checks{display:grid;gap:9px}.check{display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:12px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:13px;padding:14px 15px}.check[data-hidden="true"]{display:none}.checkicon{width:32px;height:32px;border-radius:9px;display:grid;place-items:center;font-weight:900}.checkcopy h3{font-size:13px;margin:0}.checkcopy p{font-size:11px;color:#64748b;margin:4px 0 0}
.cta{margin:28px 0 22px;background:linear-gradient(135deg,#eef5ff,#f8fbff);border:1px solid #dbe8ff;border-radius:16px;padding:18px;display:flex;align-items:center;justify-content:space-between;gap:14px}.cta h3{margin:0 0 3px;font-size:15px}.cta p{margin:0;color:#64748b;font-size:12px}.notice{padding:14px 15px;background:#eef5ff;border-radius:12px;color:#526070;font-size:11px;margin:0 0 40px}
footer{background:#fff;border-top:1px solid var(--line);padding:24px 0}.foot{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center}.footcopy{font-size:11px;color:#64748b}
@media(max-width:680px){.nav{height:auto;padding:14px 0;align-items:flex-start}.actions{flex-wrap:wrap;justify-content:flex-end}.summary{grid-template-columns:1fr}.stats{grid-template-columns:repeat(2,1fr)}.sectionrow{align-items:flex-start;flex-direction:column}.cta{align-items:flex-start;flex-direction:column}.check{grid-template-columns:30px minmax(0,1fr) auto}.checkicon{width:28px;height:28px}}
</style>
</head>
<body>
<header class="topbar"><div class="wrap nav">
<a class="brand" href="/"><svg class="brandmark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Deploy<span style="color:#2563eb">Pass</span></span></a>
<div class="actions"><a class="btn btn-blue" href="/">Scan another site</a><button class="btn btn-dark" id="shareReport" type="button">Share</button></div>
</div></header>
<main class="wrap">
<section class="hero"><div class="eyebrow">Shared security report</div><h1>${escHtml(data.target)}</h1><div class="meta">Generated by DeployPass · ${escHtml(report.created_at)} UTC</div><div class="reportid">Report ID <span class="token">${escHtml(report.token)}</span></div></section>
<section class="summary">
<div class="card"><div class="score">${Number(data.score)||0}<small>/100</small></div><span class="verdict ${statusClass}">${escHtml(data.verdict)}</span><div class="meter"><i style="width:${Math.max(0,Math.min(100,Number(data.score)||0))}%"></i></div></div>
<div class="card"><h2>Scan summary</h2><div class="stats">
<div class="stat"><i class="dot red"></i><div><b>${countCritical}</b><span>Critical</span></div></div>
<div class="stat"><i class="dot orange"></i><div><b>${countWarning}</b><span>Warnings</span></div></div>
<div class="stat"><i class="dot green"></i><div><b>${countPass}</b><span>Passed</span></div></div>
<div class="stat"><i class="dot gray"></i><div><b>${countNa}</b><span>N/A</span></div></div>
</div></div>
</section>
<div class="sectionrow"><h2>Checks</h2><div class="filters" id="filters"><button class="filter active" data-filter="all">All (${(data.checks||[]).length})</button><button class="filter" data-filter="pass">Passed (${countPass})</button><button class="filter" data-filter="warning">Warnings (${countWarning+countCritical})</button><button class="filter" data-filter="na">N/A (${countNa})</button></div></div>
<section class="checks" id="checks">${checkRows}</section>
<section class="cta"><div><h3>Scan your own site</h3><p>Find public deployment issues before they become launch problems.</p></div><a class="btn btn-dark" href="/">Scan now →</a></section>
<div class="notice"><b>Important:</b> This is a saved passive public-surface scan. It does not prove an application is secure, and the report can become outdated as the target changes.</div>
</main>
<footer><div class="wrap foot"><a class="brand" href="/" style="font-size:15px"><svg class="brandmark" style="width:21px;height:21px" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>DeployPass</a><div class="footcopy">© 2026 DeployPass · This report is powered by DeployPass.</div></div></footer>
<script>
document.getElementById('filters').addEventListener('click',function(e){
  var b=e.target.closest('.filter');if(!b)return;
  document.querySelectorAll('.filter').forEach(function(x){x.classList.remove('active')});b.classList.add('active');
  var f=b.getAttribute('data-filter');
  document.querySelectorAll('#checks .check').forEach(function(el){
    var level=el.getAttribute('data-level');
    var show=f==='all'||f===level||(f==='warning'&&(level==='warning'||level==='critical'));
    el.setAttribute('data-hidden',show?'false':'true');
  });
});
document.getElementById('shareReport').addEventListener('click',async function(){
  var link=location.href;
  if(navigator.share){try{await navigator.share({title:'DeployPass security report',url:link});return}catch(e){}}
  try{await navigator.clipboard.writeText(link);this.textContent='Copied';var b=this;setTimeout(function(){b.textContent='Share'},1400)}catch(e){}
});
</script>
</body></html>`;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ok:true, service:"deploypass", version:"scanner-v4.8.1"});
    }

const HSTS_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>HSTS Checker – Test Strict-Transport-Security Header Free | DeployPass</title>
<meta name="description" content="Free HSTS checker. Test a website's Strict-Transport-Security header and inspect max-age, includeSubDomains and preload configuration with practical fixes.">
<meta name="robots" content="index,follow"><link rel="canonical" href="https://deploypass.com/hsts-checker">
<meta property="og:title" content="Free HSTS Checker | DeployPass"><meta property="og:description" content="Check Strict-Transport-Security, max-age, includeSubDomains and preload settings."><meta property="og:url" content="https://deploypass.com/hsts-checker"><meta property="og:type" content="website">
<style>
:root{--blue:#2563eb;--green:#10b981;--orange:#f59e0b;--red:#dc2626;--ink:#0f172a;--muted:#64748b;--line:#dbe4ef;--soft:#f7f9fc}*{box-sizing:border-box}body{margin:0;color:var(--ink);font:15px/1.58 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}.wrap{width:min(1060px,calc(100% - 34px));margin:auto}a{color:inherit}.top{border-bottom:1px solid var(--line);background:#fff}.nav{height:68px;display:flex;align-items:center;justify-content:space-between}.mark{width:27px;height:27px;flex:0 0 27px}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:19px;font-weight:900}.brand b{color:var(--blue)}.links{display:flex;gap:20px;font-size:12px;font-weight:750}.links a{text-decoration:none}.btn{border:0;border-radius:10px;padding:12px 15px;font:inherit;font-weight:850;cursor:pointer;text-decoration:none;background:var(--ink);color:#fff}.hero{padding:64px 0 56px;background:linear-gradient(135deg,#fbfdff,#f3f8ff);border-bottom:1px solid var(--line)}.crumb{font-size:12px;color:var(--muted);margin-bottom:20px}.crumb a{color:var(--blue);text-decoration:none}.pill{display:inline-block;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:850}.hero h1{font-size:clamp(42px,6vw,64px);line-height:1;letter-spacing:-.05em;margin:16px 0}.lead{font-size:17px;color:#475569;max-width:740px}.form{display:flex;max-width:760px;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px;margin-top:24px;box-shadow:0 12px 32px rgba(37,99,235,.07)}.form input{flex:1;border:0;outline:0;padding:13px;font:inherit}.fine,.status{font-size:11px;color:var(--muted);margin-top:10px}.status{display:none;background:#eef5ff;max-width:760px;padding:10px;border-radius:9px}.result{display:none;background:var(--soft);padding:44px 0 62px;border-bottom:1px solid var(--line)}.summary{display:grid;grid-template-columns:220px 1fr;gap:15px}.card,.metric{background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px}.score{font-size:52px;font-weight:900;letter-spacing:-.05em;line-height:1}.score small{font-size:16px;color:var(--muted)}.badge{display:inline-block;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900;margin-top:10px}.pass{background:#e8f8f0;color:#087a4c}.warning{background:#fff4d8;color:#946200}.critical{background:#feeceb;color:#b42318}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:15px}.metric b{display:block;font-size:18px}.metric span{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.07em}.raw{margin-top:14px;background:#0f172a;color:#dbeafe;border-radius:12px;padding:14px;font:12px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;overflow:auto}.advice{margin-top:14px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px}.advice h3{margin:0 0 6px}.advice p{margin:0;color:var(--muted)}.section{padding:70px 0}.alt{background:#fbfcfe;border-block:1px solid #eef2f7}.eyebrow{font-size:11px;font-weight:900;color:var(--blue);text-transform:uppercase;letter-spacing:.12em}.section h2{font-size:clamp(29px,4vw,40px);line-height:1.08;letter-spacing:-.035em;margin:8px 0 13px}.intro{max-width:760px;color:var(--muted)}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}.info{border:1px solid var(--line);border-radius:14px;padding:18px}.info h3{margin:0 0 7px}.info p{margin:0;color:var(--muted);font-size:12px}.code{margin-top:10px;background:#0f172a;color:#dbeafe;border-radius:9px;padding:10px;font:11px/1.55 ui-monospace,monospace}.faq{max-width:820px}.faq details{border-bottom:1px solid var(--line);padding:15px 0}.faq summary{font-weight:800;cursor:pointer}.faq p{color:var(--muted)}footer{border-top:1px solid var(--line);padding:28px 0;color:var(--muted);font-size:11px}.foot{display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}@media(max-width:760px){.links{display:none}.form{flex-direction:column}.summary{grid-template-columns:1fr}.metrics,.grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.metrics,.grid{grid-template-columns:1fr}}
</style></head><body>
<header class="top"><div class="wrap nav"><a class="brand" href="/" aria-label="DeployPass home"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Deploy<b style="color:#2563eb">Pass</b></span></a><nav class="links"><a href="/#tools">Tools</a><a href="/security-headers-checker">Security headers</a><a href="/csp-checker">CSP</a><a href="/cors-checker">CORS</a><a href="#faq">FAQ</a></nav><a class="btn" href="/">Run full scan →</a></div></header>
<main><section class="hero"><div class="wrap"><div class="crumb"><a href="/">DeployPass</a> / <a href="/security-headers-checker">Security Headers Checker</a> / HSTS Checker</div><span class="pill">Free · No signup · Passive public check</span><h1>Free HSTS Checker</h1><p class="lead">Test the Strict-Transport-Security header on any public website. Inspect max-age, includeSubDomains and preload directives, then get a practical configuration review.</p><form class="form" id="form"><input id="url" type="url" placeholder="Enter a website URL (e.g. example.com)" required><button class="btn" id="btn">Check HSTS →</button></form><div class="fine">HSTS is only meaningful when delivered over HTTPS. DeployPass performs passive public checks only.</div><div class="status" id="status">Checking HSTS configuration…</div></div></section>
<section class="result" id="result"><div class="wrap"><div class="summary"><div class="card"><div style="font-size:11px;color:#64748b;font-weight:800">HSTS SCORE</div><div class="score"><span id="score">—</span><small>/100</small></div><span id="verdict" class="badge warning">REVIEW</span></div><div class="card"><h2 style="margin:0">Strict-Transport-Security review</h2><p id="target" style="color:#64748b"></p><div class="metrics"><div class="metric"><b id="present">—</b><span>Header</span></div><div class="metric"><b id="age">—</b><span>Max-age</span></div><div class="metric"><b id="subs">—</b><span>Subdomains</span></div><div class="metric"><b id="preload">—</b><span>Preload</span></div></div><div class="raw" id="raw">Strict-Transport-Security: —</div></div></div><div class="advice"><h3 id="adviceTitle">Configuration review</h3><p id="advice"></p></div></div></section>
<section class="section" id="guide"><div class="wrap"><div class="eyebrow">Understand the result</div><h2>What a strong HSTS policy contains.</h2><p class="intro">HSTS tells a browser to use HTTPS for future requests to a host. The header's directives control how long that rule lasts, whether it extends to subdomains, and whether the site signals an intent to join browser preload lists.</p><div class="grid"><article class="info"><h3>max-age</h3><p>The number of seconds a browser remembers the HTTPS-only policy. A one-year value is 31536000 seconds.</p><div class="code">max-age=31536000</div></article><article class="info"><h3>includeSubDomains</h3><p>Extends the policy to subdomains. Enable it only when all intended subdomains are ready for HTTPS.</p><div class="code">includeSubDomains</div></article><article class="info"><h3>preload</h3><p>Signals intent to participate in browser preload programs. The directive alone does not mean the domain is actually preloaded.</p><div class="code">preload</div></article><article class="info"><h3>Preload-style header</h3><p>A commonly used preload-ready form combines a long max-age with both directives.</p><div class="code">Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</div></article></div></div></section>
<section class="section alt"><div class="wrap"><div class="eyebrow">Important</div><h2>Do not enable preload casually.</h2><p class="intro">HSTS can make HTTP-only subdomains unreachable. Before using includeSubDomains or pursuing preload, confirm that the root domain and every affected subdomain can remain on HTTPS. DeployPass checks the observed header; it does not claim that a domain is present in a browser preload list.</p></div></section>
<section class="section" id="faq"><div class="wrap faq"><div class="eyebrow">FAQ</div><h2>HSTS checker FAQ</h2><details open><summary>What is HSTS?</summary><p>HTTP Strict Transport Security is a browser policy delivered through the Strict-Transport-Security response header. It tells supporting browsers to use HTTPS for future requests to the host.</p></details><details><summary>What max-age should HSTS use?</summary><p>The right rollout depends on your environment. For preload eligibility, a max-age of at least 31536000 seconds is required. Teams often begin more cautiously before committing to a long-lived policy.</p></details><details><summary>Does the preload directive mean my site is preloaded?</summary><p>No. The directive signals intent. Actual preload-list inclusion has additional requirements and a separate submission process.</p></details><details><summary>Why is includeSubDomains risky?</summary><p>It applies the HTTPS-only policy to subdomains too. A legacy or internal subdomain that cannot serve HTTPS can become inaccessible to browsers enforcing the policy.</p></details><details><summary>Can I check all security headers?</summary><p>Yes. Use DeployPass Security Headers Checker for CSP, HSTS, MIME sniffing, framing, Referrer-Policy, CORS and observable cookie signals.</p></details></div></section></main>
<footer><div class="wrap foot"><a class="brand" href="/" style="font-size:15px"><svg class="mark" style="width:21px;height:21px;flex-basis:21px" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>DeployPass</span></a><span>© 2026 DeployPass · Public-surface deployment security checks.</span><a href="/security-headers-checker">Security Headers Checker →</a></div></footer>
<script>
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.getElementById('form').addEventListener('submit',async e=>{e.preventDefault();const b=document.getElementById('btn'),st=document.getElementById('status');b.disabled=true;b.textContent='Checking…';st.style.display='block';st.textContent='Checking HSTS configuration…';try{const r=await fetch('/api/hsts',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('url').value})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Check failed');render(d);st.textContent='HSTS check complete.'}catch(x){st.textContent=x.message||'Check failed.'}finally{b.disabled=false;b.textContent='Check HSTS →'}});
function render(d){document.getElementById('score').textContent=d.score;const v=document.getElementById('verdict');v.textContent=d.verdict;v.className='badge '+(d.verdict==='PASS'?'pass':d.verdict==='FAIL'?'critical':'warning');document.getElementById('target').textContent='Checked '+d.target;document.getElementById('present').textContent=d.present?'Yes':'No';document.getElementById('age').textContent=d.maxAge==null?'Missing':d.maxAge+'s';document.getElementById('subs').textContent=d.includeSubDomains?'Yes':'No';document.getElementById('preload').textContent=d.preload?'Yes':'No';document.getElementById('raw').textContent='Strict-Transport-Security: '+(d.raw||'Not detected');document.getElementById('adviceTitle').textContent=d.title;document.getElementById('advice').textContent=d.advice;document.getElementById('result').style.display='block';document.getElementById('result').scrollIntoView({behavior:'smooth',block:'start'})}
</script></body></html>`;

function parseHsts(value){
  const out={present:!!value,maxAge:null,includeSubDomains:false,preload:false};
  if(!value)return out;
  for(const part of value.split(';')){const p=part.trim();const m=p.match(/^max-age\s*=\s*(\d+)$/i);if(m)out.maxAge=Number(m[1]);else if(/^includesubdomains$/i.test(p))out.includeSubDomains=true;else if(/^preload$/i.test(p))out.preload=true}
  return out;
}
async function hstsCheck(target){
  const {res,finalUrl}=await safeFetch(target.toString());
  if(!res.ok)throw new Error(`Target returned HTTP ${res.status}.`);
  const raw=res.headers.get('strict-transport-security')||'';
  const p=parseHsts(raw);let score=0;
  if(finalUrl.protocol==='https:')score+=20;if(p.present)score+=35;if(p.maxAge!==null&&p.maxAge>0)score+=15;if(p.maxAge!==null&&p.maxAge>=31536000)score+=10;if(p.includeSubDomains)score+=10;if(p.preload)score+=10;
  let verdict='REVIEW',title='HSTS is present, but review the policy.',advice='Review the observed directives against the HTTPS coverage of this domain and its subdomains.';
  if(finalUrl.protocol!=='https:'){verdict='FAIL';title='The final page is not HTTPS.';advice='HSTS must be delivered over HTTPS. Enable HTTPS and redirect HTTP traffic before relying on HSTS.'}
  else if(!p.present){verdict='FAIL';title='Strict-Transport-Security was not detected.';advice='After HTTPS is stable, add an HSTS policy with an appropriate max-age. Add includeSubDomains only when affected subdomains are HTTPS-ready.'}
  else if(p.maxAge===0){verdict='FAIL';title='HSTS is being disabled with max-age=0.';advice='If this is not intentional, deploy a positive max-age after confirming HTTPS is stable.'}
  else if(p.maxAge>=31536000&&p.includeSubDomains&&p.preload){verdict='PASS';title='Strong preload-style HSTS header detected.';advice='The observed header has a one-year-or-longer max-age plus includeSubDomains and preload. This does not by itself prove actual preload-list inclusion.'}
  else if(p.maxAge>=31536000){verdict='PASS';title='Strong long-lived HSTS policy detected.';advice='The observed max-age is at least one year. includeSubDomains and preload are optional policy choices and should only be enabled when their operational requirements are understood.'}
  return {ok:true,target:finalUrl.origin,raw,...p,score,verdict,title,advice};
}


const CSP_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>CSP Checker – Test Content Security Policy Header Free | DeployPass</title>
<meta name="description" content="Free CSP checker. Test a website's Content-Security-Policy header, review risky directives such as unsafe-inline and unsafe-eval, and get practical fixes.">
<meta name="robots" content="index,follow"><link rel="canonical" href="https://deploypass.com/csp-checker">
<meta property="og:title" content="Free CSP Checker | DeployPass"><meta property="og:description" content="Check Content-Security-Policy directives, risky sources, framing controls and common CSP configuration issues."><meta property="og:url" content="https://deploypass.com/csp-checker"><meta property="og:type" content="website">
<style>
:root{--blue:#2563eb;--green:#10b981;--orange:#f59e0b;--red:#dc2626;--ink:#0f172a;--muted:#64748b;--line:#dbe4ef;--soft:#f7f9fc}*{box-sizing:border-box}body{margin:0;color:var(--ink);font:15px/1.58 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}.wrap{width:min(1060px,calc(100% - 34px));margin:auto}a{color:inherit}.top{border-bottom:1px solid var(--line);background:#fff}.nav{height:68px;display:flex;align-items:center;justify-content:space-between}.mark{width:27px;height:27px;flex:0 0 27px}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:19px;font-weight:900}.links{display:flex;gap:20px;font-size:12px;font-weight:750}.links a{text-decoration:none}.btn{border:0;border-radius:10px;padding:12px 15px;font:inherit;font-weight:850;cursor:pointer;text-decoration:none;background:var(--ink);color:#fff}.hero{padding:64px 0 56px;background:linear-gradient(135deg,#fbfdff,#f3f8ff);border-bottom:1px solid var(--line)}.crumb{font-size:12px;color:var(--muted);margin-bottom:20px}.crumb a{color:var(--blue);text-decoration:none}.pill{display:inline-block;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:850}.hero h1{font-size:clamp(42px,6vw,64px);line-height:1;letter-spacing:-.05em;margin:16px 0}.lead{font-size:17px;color:#475569;max-width:780px}.form{display:flex;max-width:760px;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px;margin-top:24px;box-shadow:0 12px 32px rgba(37,99,235,.07)}.form input{flex:1;border:0;outline:0;padding:13px;font:inherit}.fine,.status{font-size:11px;color:var(--muted);margin-top:10px}.status{display:none;background:#eef5ff;max-width:760px;padding:10px;border-radius:9px}.result{display:none;background:var(--soft);padding:44px 0 62px;border-bottom:1px solid var(--line)}.summary{display:grid;grid-template-columns:220px 1fr;gap:15px}.card{background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px}.score{font-size:52px;font-weight:900;letter-spacing:-.05em;line-height:1}.score small{font-size:16px;color:var(--muted)}.badge{display:inline-block;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900;margin-top:10px}.pass{background:#e8f8f0;color:#087a4c}.warning{background:#fff4d8;color:#946200}.critical{background:#feeceb;color:#b42318}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:15px}.metric{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px}.metric b{display:block;font-size:17px}.metric span{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.07em}.raw{margin-top:14px;background:#0f172a;color:#dbeafe;border-radius:12px;padding:14px;font:12px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;overflow:auto;white-space:pre-wrap}.issues{display:grid;gap:9px;margin-top:15px}.issue{background:#fff;border:1px solid var(--line);border-radius:13px;padding:14px 16px;display:flex;justify-content:space-between;gap:14px}.issue h3{font-size:13px;margin:0 0 4px}.issue p{font-size:11px;color:var(--muted);margin:0}.section{padding:70px 0}.alt{background:#fbfcfe;border-block:1px solid #eef2f7}.eyebrow{font-size:11px;font-weight:900;color:var(--blue);text-transform:uppercase;letter-spacing:.12em}.section h2{font-size:clamp(29px,4vw,40px);line-height:1.08;letter-spacing:-.035em;margin:8px 0 13px}.intro{max-width:780px;color:var(--muted)}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}.info{border:1px solid var(--line);border-radius:14px;padding:18px}.info h3{margin:0 0 7px}.info p{margin:0;color:var(--muted);font-size:12px}.code{margin-top:10px;background:#0f172a;color:#dbeafe;border-radius:9px;padding:10px;font:11px/1.55 ui-monospace,monospace}.faq{max-width:820px}.faq details{border-bottom:1px solid var(--line);padding:15px 0}.faq summary{font-weight:800;cursor:pointer}.faq p{color:var(--muted)}footer{border-top:1px solid var(--line);padding:28px 0;color:var(--muted);font-size:11px}.foot{display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}@media(max-width:760px){.links{display:none}.form{flex-direction:column}.summary{grid-template-columns:1fr}.metrics,.grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.metrics,.grid{grid-template-columns:1fr}}
</style></head><body>
<header class="top"><div class="wrap nav"><a class="brand" href="/" aria-label="DeployPass home"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Deploy<b style="color:#2563eb">Pass</b></span></a><nav class="links"><a href="/#tools">Tools</a><a href="/security-headers-checker">Security headers</a><a href="/hsts-checker">HSTS</a><a href="#faq">FAQ</a></nav><a class="btn" href="/">Run full scan →</a></div></header>
<main><section class="hero"><div class="wrap"><div class="crumb"><a href="/">DeployPass</a> / <a href="/security-headers-checker">Security Headers Checker</a> / CSP Checker</div><span class="pill">Free · No signup · Passive public check</span><h1>Free CSP Checker</h1><p class="lead">Check the Content-Security-Policy header on any public website. Review risky directives, unsafe sources, framing controls and common CSP configuration issues in seconds.</p><form class="form" id="cspForm"><input id="cspUrl" type="url" placeholder="Enter a website URL (e.g. example.com)" required><button class="btn" id="cspBtn">Check CSP →</button></form><div class="fine">DeployPass reads the public response header only. It does not execute attacks or prove an application is secure.</div><div class="status" id="cspStatus">Checking Content-Security-Policy…</div></div></section>
<section class="result" id="cspResult"><div class="wrap"><div class="summary"><div class="card"><div style="font-size:11px;color:#64748b;font-weight:800">CSP SCORE</div><div class="score"><span id="cspScore">—</span><small>/100</small></div><span id="cspVerdict" class="badge warning">REVIEW</span></div><div class="card"><h2 style="margin:0">Content-Security-Policy review</h2><p id="cspTarget" style="color:#64748b"></p><div class="metrics"><div class="metric"><b id="cspPresent">—</b><span>Header</span></div><div class="metric"><b id="cspDirectives">—</b><span>Directives</span></div><div class="metric"><b id="cspWarnings">—</b><span>Warnings</span></div><div class="metric"><b id="cspFraming">—</b><span>Framing control</span></div></div><div class="raw" id="cspRaw">Content-Security-Policy: —</div></div></div><div class="issues" id="cspIssues"></div></div></section>
<section class="section" id="guide"><div class="wrap"><div class="eyebrow">Understand the result</div><h2>What a useful CSP policy controls.</h2><p class="intro">Content Security Policy tells browsers which sources may load scripts, styles, images, frames and other resources. DeployPass highlights high-signal public configuration choices rather than treating every policy difference as a vulnerability.</p><div class="grid"><article class="info"><h3>default-src</h3><p>Provides a fallback source list for many resource types when a more specific directive is absent.</p><div class="code">default-src 'self'</div></article><article class="info"><h3>script-src</h3><p>Controls JavaScript sources. Broad wildcards, unsafe-inline and unsafe-eval can weaken the protection CSP provides.</p><div class="code">script-src 'self' https://cdn.example.com</div></article><article class="info"><h3>object-src</h3><p>Restricts plugin content. Many modern policies disable it entirely when plugins are not needed.</p><div class="code">object-src 'none'</div></article><article class="info"><h3>frame-ancestors</h3><p>Controls which sites may embed the page in a frame and is a modern CSP defense against unwanted framing.</p><div class="code">frame-ancestors 'none'</div></article><article class="info"><h3>base-uri</h3><p>Restricts the URLs that can be used by the HTML base element and can reduce base-tag injection risk.</p><div class="code">base-uri 'self'</div></article><article class="info"><h3>form-action</h3><p>Restricts where forms may submit. It can reduce the impact of injected or modified form destinations.</p><div class="code">form-action 'self'</div></article></div></div></section>
<section class="section alt"><div class="wrap"><div class="eyebrow">Important</div><h2>Do not optimize CSP for a perfect score.</h2><p class="intro">A CSP must match the application it protects. Removing a source or adding a strict directive without testing can break legitimate scripts, styles, frames or forms. Use the findings as review points, then test changes in the real application. Report-Only can help during staged rollouts.</p></div></section>
<section class="section" id="faq"><div class="wrap faq"><div class="eyebrow">FAQ</div><h2>CSP checker FAQ</h2><details open><summary>What is a Content Security Policy?</summary><p>CSP is an HTTP response header that lets a site declare which sources browsers may use for scripts, styles, images, frames and other resource types.</p></details><details><summary>Is unsafe-inline always a vulnerability?</summary><p>No. It weakens an important CSP protection, but the real risk depends on the policy, use of nonces or hashes, browser behavior and the application. DeployPass flags it for review rather than claiming exploitation.</p></details><details><summary>What is the difference between CSP and CSP Report-Only?</summary><p>Content-Security-Policy is enforced by the browser. Content-Security-Policy-Report-Only can observe policy violations without enforcing the policy, which is useful while testing changes.</p></details><details><summary>Should object-src be set to none?</summary><p>For applications that do not need plugin content, object-src 'none' is a common restrictive choice. Confirm compatibility before changing a production policy.</p></details><details><summary>Can I check all security headers?</summary><p>Yes. DeployPass also provides a Security Headers Checker, an HSTS Checker and the full 19-check public deployment scan.</p></details></div></section></main>
<footer><div class="wrap foot"><a class="brand" href="/" style="font-size:15px"><svg class="mark" style="width:21px;height:21px;flex-basis:21px" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>DeployPass</span></a><span>© 2026 DeployPass · Public-surface deployment security checks.</span><a href="/security-headers-checker">Security Headers Checker →</a></div></footer>
<script>
const cspEsc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.getElementById('cspForm').addEventListener('submit',async e=>{e.preventDefault();const b=document.getElementById('cspBtn'),st=document.getElementById('cspStatus');b.disabled=true;b.textContent='Checking…';st.style.display='block';st.textContent='Checking Content-Security-Policy…';try{const r=await fetch('/api/csp',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('cspUrl').value})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Check failed');renderCsp(d);st.textContent='CSP check complete.'}catch(x){st.textContent=x.message||'Check failed.'}finally{b.disabled=false;b.textContent='Check CSP →'}});
function renderCsp(d){document.getElementById('cspScore').textContent=d.score;const v=document.getElementById('cspVerdict');v.textContent=d.verdict;v.className='badge '+(d.verdict==='PASS'?'pass':d.verdict==='FAIL'?'critical':'warning');document.getElementById('cspTarget').textContent='Checked '+d.target;document.getElementById('cspPresent').textContent=d.present?'Yes':(d.reportOnly?'Report-only':'No');document.getElementById('cspDirectives').textContent=d.directiveCount;document.getElementById('cspWarnings').textContent=d.warningCount;document.getElementById('cspFraming').textContent=d.hasFrameAncestors?'Yes':'No';document.getElementById('cspRaw').textContent=(d.present?'Content-Security-Policy: ':d.reportOnly?'Content-Security-Policy-Report-Only: ':'Content-Security-Policy: ')+(d.raw||'Not detected');const box=document.getElementById('cspIssues');box.innerHTML=(d.findings||[]).map(x=>'<article class="issue"><div><h3>'+cspEsc(x.title)+'</h3><p>'+cspEsc(x.detail)+'</p></div><span class="badge '+(x.level==='pass'?'pass':x.level==='critical'?'critical':'warning')+'">'+cspEsc(x.label)+'</span></article>').join('');document.getElementById('cspResult').style.display='block';document.getElementById('cspResult').scrollIntoView({behavior:'smooth',block:'start'})}
</script></body></html>`;

function parseCsp(value){
  const map={};
  if(!value)return map;
  for(const part of value.split(';')){const bits=part.trim().split(/\\s+/).filter(Boolean);if(!bits.length)continue;map[bits[0].toLowerCase()]=bits.slice(1)}
  return map;
}
async function cspCheck(target){
  const {res,finalUrl}=await safeFetch(target.toString());
  if(!res.ok)throw new Error(`Target returned HTTP ${res.status}.`);
  const enforced=res.headers.get('content-security-policy')||'';
  const reportOnly=res.headers.get('content-security-policy-report-only')||'';
  const raw=enforced||reportOnly; const directives=parseCsp(raw); const present=!!enforced; const ro=!present&&!!reportOnly;
  const findings=[]; let score=present?45:(ro?25:0);
  const vals=Object.values(directives).flat().map(x=>x.toLowerCase());
  const hasUnsafeInline=vals.includes("'unsafe-inline'"); const hasUnsafeEval=vals.includes("'unsafe-eval'"); const hasWildcard=vals.includes('*');
  const hasDefault=!!directives['default-src']; const hasObject=!!directives['object-src']; const objectNone=hasObject&&directives['object-src'].map(x=>x.toLowerCase()).includes("'none'");
  const hasFrame=!!directives['frame-ancestors']; const hasBase=!!directives['base-uri']; const hasForm=!!directives['form-action'];
  if(hasDefault)score+=10;if(objectNone)score+=10;if(hasFrame)score+=10;if(hasBase)score+=8;if(hasForm)score+=5;if(!hasUnsafeInline)score+=5;if(!hasUnsafeEval)score+=5;if(!hasWildcard)score+=2;score=Math.min(100,score);
  const add=(level,title,detail,label)=>findings.push({level,title,detail,label});
  if(!raw)add('critical','No CSP header detected','Neither an enforced Content-Security-Policy nor a Report-Only policy was observed on the final response.','MISSING');
  else if(ro)add('warning','Policy is Report-Only','The observed CSP is not enforced by the browser. This can be appropriate while testing a rollout.','REVIEW');
  else add('pass','Enforced CSP header detected','A Content-Security-Policy header is present on the final response.','PASS');
  if(raw){hasDefault?add('pass','default-src is defined','A default source policy is available as a fallback for applicable resource types.','PASS'):add('warning','default-src is missing','Consider whether a restrictive default-src fallback fits this application.','REVIEW');
    hasUnsafeInline?add('warning','unsafe-inline is allowed','Inline script or style execution is allowed in at least one source list. Review whether nonces or hashes can replace it.','REVIEW'):add('pass','No unsafe-inline token observed','The parsed policy does not contain the unsafe-inline source expression.','PASS');
    hasUnsafeEval?add('warning','unsafe-eval is allowed','Dynamic code evaluation is allowed in at least one source list and can weaken script protections.','REVIEW'):add('pass','No unsafe-eval token observed','The parsed policy does not contain the unsafe-eval source expression.','PASS');
    hasWildcard?add('warning','Wildcard source detected','At least one directive contains *. Review whether a narrower source list is possible.','REVIEW'):add('pass','No bare wildcard source observed','No standalone * source expression was found in the parsed policy.','PASS');
    objectNone?add('pass','object-src blocks plugin content',"object-src 'none' was observed.",'PASS'):add('warning','object-src is not set to none','If plugin content is not required, review whether object-src can be restricted to none.','REVIEW');
    hasFrame?add('pass','frame-ancestors is defined','The policy explicitly controls which origins may frame this page.','PASS'):add('warning','frame-ancestors is missing','Review whether CSP should explicitly restrict framing for this application.','REVIEW');
    hasBase?add('pass','base-uri is defined','The policy restricts base element URLs.','PASS'):add('warning','base-uri is missing','Review whether base-uri should be restricted, commonly to self or none.','REVIEW');
    hasForm?add('pass','form-action is defined','The policy restricts form submission destinations.','PASS'):add('warning','form-action is missing','For applications with forms, review whether submission destinations should be restricted.','REVIEW');}
  const warningCount=findings.filter(x=>x.level!=='pass').length; let verdict='REVIEW'; if(!raw)verdict='FAIL'; else if(present&&warningCount<=2&&score>=80)verdict='PASS';
  return {ok:true,target:finalUrl.origin,present,reportOnly:ro,raw,directiveCount:Object.keys(directives).length,warningCount,hasFrameAncestors:hasFrame,score,verdict,findings};
}


    if (url.pathname === "/robots.txt") {
      const robots = `User-agent: *\nAllow: /\n\nSitemap: https://deploypass.com/sitemap.xml\n`;
      return new Response(robots, {
        headers: {
          "content-type":"text/plain; charset=utf-8",
          "cache-control":"public, max-age=3600"
        }
      });
    }

    if (url.pathname === "/sitemap.xml") {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://deploypass.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://deploypass.com/website-vulnerability-scanner</loc>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://deploypass.com/security-headers-checker</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://deploypass.com/hsts-checker</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://deploypass.com/csp-checker</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://deploypass.com/mixed-content-checker</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://deploypass.com/cors-checker</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://deploypass.com/permissions-policy-checker</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
      return new Response(sitemap, {
        headers: {
          "content-type":"application/xml; charset=utf-8",
          "cache-control":"public, max-age=3600",
          "x-content-type-options":"nosniff"
        }
      });
    }




const FOCUSED_CSS = `
:root{--blue:#2563eb;--green:#10b981;--orange:#f59e0b;--red:#dc2626;--ink:#0f172a;--muted:#64748b;--line:#dbe4ef;--soft:#f7f9fc}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--ink);background:#fff;font:15px/1.58 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}a{color:inherit}
.wrap{width:min(1060px,calc(100% - 34px));margin:auto}.top{border-bottom:1px solid var(--line);background:#fff}.nav{height:68px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.mark{width:27px;height:27px;flex:0 0 27px}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:19px;font-weight:900}.brand b{color:var(--blue)}
.links{display:flex;gap:20px;font-size:12px;font-weight:750}.links a{text-decoration:none}.btn{border:0;border-radius:10px;padding:12px 15px;font:inherit;font-weight:850;cursor:pointer;text-decoration:none;background:var(--ink);color:#fff}
.hero{padding:64px 0 56px;background:linear-gradient(135deg,#fbfdff,#f3f8ff);border-bottom:1px solid var(--line)}.crumb{font-size:12px;color:var(--muted);margin-bottom:20px}.crumb a{color:var(--blue);text-decoration:none}
.pill{display:inline-block;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:850}.hero h1{font-size:clamp(42px,6vw,64px);line-height:1;letter-spacing:-.05em;margin:16px 0}
.lead,.copy{font-size:16px;color:#475569;max-width:800px}.form{display:flex;max-width:760px;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px;margin-top:24px;box-shadow:0 12px 32px rgba(37,99,235,.07)}
.form input{flex:1;min-width:0;border:0;outline:0;padding:13px;font:inherit}.micro{font-size:11px;color:var(--muted)}.status{max-width:760px;background:#eef5ff;color:#475569;border-radius:9px;padding:10px;margin-top:10px;font-size:12px}
.results{background:var(--soft);padding:44px 0 62px;border-bottom:1px solid var(--line)}.resultgrid{display:grid;grid-template-columns:210px 1fr;gap:15px}.scorebox,.panel{background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px}
.label{font-size:11px;color:#64748b;font-weight:800}.big{font-size:52px;font-weight:900;letter-spacing:-.05em;line-height:1}.big small{font-size:16px;color:#64748b}.badge{display:inline-block;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900;margin-top:10px}
.pass{background:#e8f8f0;color:#087a4c}.review{background:#fff4d8;color:#946200}.fail{background:#feeceb;color:#b42318}.panel h2{margin-top:0}.panel>p{color:#64748b}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:15px 0}.stats>div{border:1px solid var(--line);border-radius:12px;padding:13px}.stats b{display:block;font-size:18px}.stats span{font-size:10px;color:#64748b}
pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#0f172a;color:#dbeafe;border-radius:10px;padding:13px;font:11px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace}
.finding{display:flex;justify-content:space-between;gap:14px;border-top:1px solid #edf1f6;padding:13px 0}.finding p{margin:4px 0 0;color:#64748b;font-size:12px}
.section{padding:70px 0}.alt{background:#fbfcfe;border-block:1px solid #eef2f7}.eyebrow{font-size:11px;font-weight:900;color:var(--blue);letter-spacing:.12em}.section h2{font-size:clamp(29px,4vw,40px);line-height:1.08;letter-spacing:-.035em;margin:8px 0 13px}
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}.cards article{border:1px solid var(--line);border-radius:14px;padding:18px}.cards h3{margin:0 0 7px}.cards p{margin:0;color:#64748b;font-size:12px}.cards code{display:block;margin-top:10px;background:#0f172a;color:#dbeafe;border-radius:9px;padding:10px}
.faq{max-width:820px}.faq details{border-bottom:1px solid var(--line);padding:15px 0}.faq summary{font-weight:800;cursor:pointer}.faq p{color:#64748b}
footer{border-top:1px solid var(--line);padding:28px 0;color:#64748b;font-size:11px}.foot{display:flex;justify-content:space-between;gap:15px;align-items:center;flex-wrap:wrap}
@media(max-width:760px){.links{display:none}.form{flex-direction:column}.resultgrid{grid-template-columns:1fr}.stats,.cards{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.stats,.cards{grid-template-columns:1fr}}
`;

const VULNERABILITY_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Free Website Vulnerability Scanner — Passive Security Scan | DeployPass</title><meta name="description" content="Run a free website vulnerability scanner for public security misconfigurations, missing protections and deployment risks. 19 passive checks, no signup."><meta name="robots" content="index,follow"><link rel="canonical" href="https://deploypass.com/website-vulnerability-scanner"><meta property="og:type" content="website"><meta property="og:site_name" content="DeployPass"><meta property="og:title" content="Free Website Vulnerability Scanner | DeployPass"><meta property="og:description" content="Scan a public website for security misconfigurations and deployment risks with 19 passive checks."><meta property="og:url" content="https://deploypass.com/website-vulnerability-scanner"><style>
*{box-sizing:border-box}body{margin:0;color:#0f172a;font:15px/1.6 Inter,system-ui,-apple-system,"Segoe UI",sans-serif}a{color:inherit}.wrap{width:min(1120px,calc(100% - 40px));margin:auto}.top{border-bottom:1px solid #dbe4ef;background:#fff}.nav{height:72px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:9px;text-decoration:none;font-size:20px;font-weight:850}.mark{width:28px}.links{display:flex;gap:24px;font-size:13px;font-weight:700}.links a{text-decoration:none}.btn{border:0;border-radius:10px;padding:12px 16px;background:#0f172a;color:#fff;font-weight:800;text-decoration:none;cursor:pointer}.hero{background:linear-gradient(135deg,#fbfdff,#f1f6ff);border-bottom:1px solid #dbe4ef;padding:72px 0}.crumb{font-size:13px;color:#2563eb}.pill{display:inline-block;margin-top:24px;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:12px;font-weight:800}h1{font-size:clamp(46px,6vw,68px);line-height:1.02;letter-spacing:-.05em;margin:18px 0}h2{font-size:36px;line-height:1.1;letter-spacing:-.035em;margin:0 0 14px}h3{margin:0 0 7px}.lead{font-size:18px;color:#475569;max-width:760px}.form{display:flex;max-width:800px;margin-top:28px;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px}.form input{flex:1;min-width:0;border:0;outline:0;padding:13px;font:inherit}.small{font-size:12px;color:#64748b;margin-top:9px}.status{display:none;max-width:800px;margin-top:12px;background:#eef5ff;padding:10px 13px;border-radius:9px;color:#475569}.results{display:none;padding:44px 0;background:#f7f9fc;border-bottom:1px solid #dbe4ef}.resultgrid{display:grid;grid-template-columns:190px 1fr;gap:18px}.card{background:#fff;border:1px solid #dbe4ef;border-radius:15px;padding:20px}.score{font-size:58px;font-weight:900;line-height:1}.score small{font-size:16px;color:#64748b}.badge{display:inline-block;margin-top:9px;border-radius:999px;padding:5px 8px;font-size:11px;font-weight:900;background:#fff4d8;color:#946200}.checks{display:grid;gap:8px}.check{border:1px solid #e1e8f0;border-radius:10px;padding:12px}.check b{display:block}.check span{font-size:12px;color:#64748b}.section{padding:72px 0}.soft{background:#f8fafc;border-top:1px solid #eef2f7;border-bottom:1px solid #eef2f7}.eyebrow{text-transform:uppercase;letter-spacing:.12em;color:#2563eb;font-size:11px;font-weight:900}.intro{max-width:760px;color:#64748b}.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:26px}.info{border:1px solid #dbe4ef;border-radius:14px;padding:20px;background:#fff}.info p{color:#64748b;margin:0}.faq{max-width:850px}.faq details{border-bottom:1px solid #dbe4ef;padding:15px 0}.faq summary{font-weight:800;cursor:pointer}.faq p{color:#64748b}.footer{border-top:1px solid #dbe4ef;padding:28px 0;color:#64748b;font-size:12px}.foot{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}@media(max-width:760px){.links{display:none}.hero{padding:50px 0}.form{display:block}.form .btn{width:100%}.resultgrid,.grid{grid-template-columns:1fr}h2{font-size:30px}}
</style></head><body><header class="top"><div class="wrap nav"><a class="brand" href="/"><svg class="mark" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>Deploy<span style="color:#2563eb">Pass</span></a><nav class="links"><a href="/#tools">Tools</a><a href="/security-headers-checker">Security headers</a><a href="/csp-checker">CSP</a><a href="/cors-checker">CORS</a><a href="#faq">FAQ</a></nav><a class="btn" href="/">Run full scan →</a></div></header>
<main><section class="hero"><div class="wrap"><div class="crumb"><a href="/">DeployPass</a> / Website Vulnerability Scanner</div><div class="pill">Free · No signup · 19 passive checks</div><h1>Free Website<br>Vulnerability Scanner</h1><p class="lead">Scan a public website for security misconfigurations, missing protections and deployment risks. Get a practical vulnerability review without exploitation, login attempts or intrusive testing.</p><form class="form" id="vForm"><input id="vUrl" type="text" placeholder="Enter a website URL (e.g. yoursite.com)" required><button class="btn" id="vBtn">Scan website →</button></form><div class="small">Passive public-surface checks only. No brute force, credential testing, port scanning or exploit attempts.</div><div class="status" id="vStatus"></div></div></section>
<section class="results" id="vResults"><div class="wrap resultgrid"><aside class="card"><div style="font-size:11px;font-weight:800;color:#64748b">VULNERABILITY REVIEW</div><div class="score"><span id="vScore">—</span><small>/100</small></div><div class="badge" id="vVerdict">REVIEW</div></aside><div class="card"><h2 style="font-size:26px">Public-surface security findings</h2><p class="intro" id="vTarget"></p><div class="checks" id="vChecks"></div></div></div></section>
<section class="section"><div class="wrap"><span class="eyebrow">What this scanner checks</span><h2>Find common website security weaknesses before deployment.</h2><p class="intro">This free website vulnerability scanner reviews security signals that are visible from a public URL. It is designed to catch configuration mistakes and browser-facing weaknesses that can slip into production.</p><div class="grid"><article class="info"><h3>Security headers</h3><p>Review CSP, HSTS, MIME-sniffing protection, Referrer-Policy, clickjacking defenses and other response-header signals.</p></article><article class="info"><h3>CORS & cookie posture</h3><p>Look for risky cross-origin behavior and observable Secure, HttpOnly and SameSite cookie configuration signals.</p></article><article class="info"><h3>Mixed content & frontend exposure</h3><p>Check for insecure HTTP resources, public source maps, debug indicators and secret-like patterns visible in frontend assets.</p></article><article class="info"><h3>Deployment hygiene</h3><p>Review framework disclosure, verbose error leakage and other public signals that deserve attention before launch.</p></article></div></div></section>
<section class="section soft"><div class="wrap"><span class="eyebrow">Scope matters</span><h2>What this vulnerability scanner does not do.</h2><p class="intro">DeployPass is intentionally passive. It does not test SQL injection, authenticated application logic, server ports, malware, CVE exploitation or other intrusive attack paths. A clean result is useful evidence about the public surface, not proof that a website is vulnerability-free.</p><div class="grid"><article class="info"><h3>Safe for quick pre-deployment checks</h3><p>The scanner behaves more like a public visitor than a penetration tester, making it useful for fast checks after a deploy or before handing a build to a client.</p></article><article class="info"><h3>Use deeper testing when risk is higher</h3><p>For authenticated apps, sensitive systems or compliance work, combine passive checks with code review, dependency scanning and professional penetration testing.</p></article></div></div></section>
<section class="section"><div class="wrap"><span class="eyebrow">Related free tools</span><h2>Investigate a finding in more detail.</h2><div class="grid"><article class="info"><h3><a href="/security-headers-checker">Security Headers Checker →</a></h3><p>Review browser security headers individually.</p></article><article class="info"><h3><a href="/hsts-checker">HSTS Checker →</a></h3><p>Inspect Strict-Transport-Security configuration.</p></article><article class="info"><h3><a href="/csp-checker">CSP Checker →</a></h3><p>Analyze Content-Security-Policy directives and risky sources.</p></article><article class="info"><h3><a href="/cors-checker">CORS Checker →</a></h3><p>Test public cross-origin response behavior.</p></article></div></div></section>
<section class="section soft" id="faq"><div class="wrap faq"><span class="eyebrow">FAQ</span><h2>Website vulnerability scanner FAQ</h2><details open><summary>Is this website vulnerability scanner free?</summary><p>Yes. The current DeployPass public scanner is free and does not require signup.</p></details><details><summary>Can this scanner find every website vulnerability?</summary><p>No. It checks public, passive signals and common deployment misconfigurations. It cannot prove a website is secure or replace authenticated testing and penetration testing.</p></details><details><summary>Is passive vulnerability scanning safe?</summary><p>DeployPass avoids exploit attempts, brute force, credential testing and port scanning. It reads public responses and a limited sample of public frontend assets.</p></details><details><summary>What is the difference between vulnerability scanning and penetration testing?</summary><p>A vulnerability scan looks for known weaknesses or risky signals. Penetration testing goes further by actively attempting to validate exploitability and application-specific attack paths.</p></details><details><summary>What should I do after a warning?</summary><p>Open the relevant focused checker, review the affected configuration, test the change in your application context, then run the scan again.</p></details></div></section></main><footer class="footer"><div class="wrap foot"><b>DeployPass</b><span>© 2026 DeployPass · Public-surface deployment security checks.</span><span><a href="/">Full scan</a> · <a href="/#tools">All tools</a></span></div></footer>
<script>const esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));document.getElementById('vForm').addEventListener('submit',async e=>{e.preventDefault();const b=document.getElementById('vBtn'),st=document.getElementById('vStatus');b.disabled=true;b.textContent='Scanning…';st.style.display='block';st.textContent='Running 19 passive security checks…';try{const r=await fetch('/api/scan',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('vUrl').value})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Scan failed');document.getElementById('vResults').style.display='block';document.getElementById('vScore').textContent=d.score??'—';document.getElementById('vVerdict').textContent=d.verdict||'REVIEW';document.getElementById('vTarget').textContent='Checked '+(d.finalUrl||d.url||document.getElementById('vUrl').value);const checks=Array.isArray(d.checks)?d.checks:[];document.getElementById('vChecks').innerHTML=checks.map(x=>'<div class="check"><b>'+esc(x.title||x.name||'Security check')+'</b><span>'+esc(x.message||x.summary||x.detail||x.status||'Check complete')+'</span></div>').join('')||'<div class="check"><b>Scan complete</b><span>Use the full scan on the DeployPass homepage for the detailed check breakdown.</span></div>';st.textContent='Vulnerability scan complete.';document.getElementById('vResults').scrollIntoView({behavior:'smooth'});}catch(x){st.textContent=x.message||'Scan failed.'}finally{b.disabled=false;b.textContent='Scan website →'}});</script></body></html>`;

const PERMISSIONS_POLICY_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Permissions Policy Checker — Test Header Free | DeployPass</title>
<meta name="description" content="Free Permissions Policy checker. Test a website's Permissions-Policy header and review browser feature controls for camera, microphone, geolocation, payment and more.">
<meta name="robots" content="index,follow"><link rel="canonical" href="https://deploypass.com/permissions-policy-checker">
<meta property="og:title" content="Permissions Policy Checker | DeployPass"><meta property="og:description" content="Inspect Permissions-Policy browser feature controls on any public website."><meta property="og:url" content="https://deploypass.com/permissions-policy-checker"><meta property="og:type" content="website">
<style>${FOCUSED_CSS}</style></head><body>
<header class="top"><div class="wrap nav"><a class="brand" href="/" aria-label="DeployPass home"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Deploy<b>Pass</b></span></a><nav class="links"><a href="/#tools">Tools</a><a href="/security-headers-checker">Security headers</a><a href="/csp-checker">CSP</a><a href="/cors-checker">CORS</a><a href="#faq">FAQ</a></nav><a class="btn" href="/">Run full scan →</a></div></header>
<main><section class="hero"><div class="wrap"><div class="crumb"><a href="/">DeployPass</a> / Permissions Policy Checker</div><span class="pill">Free · No signup · Passive public check</span><h1>Free Permissions Policy Checker</h1><p class="lead">Inspect the Permissions-Policy response header on any public website. Review which browser features are restricted, allowed or not explicitly controlled.</p><form class="form" id="ppForm"><input id="ppUrl" type="url" required placeholder="Enter a website URL (e.g. example.com)"><button class="btn" id="ppBtn">Check policy →</button></form><p class="micro">DeployPass reads the public response header only. A missing policy is a hardening opportunity, not proof of a vulnerability.</p><div class="status" id="ppStatus" style="display:none"></div></div></section>
<section class="results" id="ppResults" style="display:none"><div class="wrap resultgrid"><aside class="scorebox"><div class="label">POLICY SCORE</div><div class="big" id="ppScore">—<small>/100</small></div><span class="badge" id="ppVerdict">—</span></aside><div class="panel"><h2>Permissions-Policy review</h2><p id="ppTarget"></p><div class="stats" id="ppStats"></div><pre id="ppRaw"></pre><div id="ppFindings"></div></div></div></section>
<section class="section"><div class="wrap"><span class="eyebrow">UNDERSTAND THE RESULT</span><h2>Control access to powerful browser features.</h2><p class="copy">Permissions-Policy lets a site limit access to browser capabilities such as camera, microphone, geolocation, payment and fullscreen. The right policy depends on the application: a marketing site may deny most powerful features, while a video or mapping app may intentionally allow a small set.</p><div class="cards"><article><h3>camera & microphone</h3><p>Restrict media capture when the page and its embedded frames do not need it.</p><code>camera=(), microphone=()</code></article><article><h3>geolocation</h3><p>Limit location access to the origins that genuinely require it.</p><code>geolocation=(self)</code></article><article><h3>payment</h3><p>Control whether the Payment Request API can be used by the page or embedded content.</p><code>payment=(self)</code></article><article><h3>fullscreen</h3><p>Fullscreen may be intentional for media apps, so evaluate it in application context.</p><code>fullscreen=(self)</code></article></div></div></section>
<section class="section alt"><div class="wrap"><span class="eyebrow">INTERPRET CAREFULLY</span><h2>A missing Permissions-Policy is not automatically a vulnerability.</h2><p class="copy">This header is a browser capability-control and defense-in-depth mechanism. DeployPass highlights broad or missing controls as review points, but does not assume every application needs the same directive list. Apply least privilege without breaking features your site intentionally uses.</p></div></section>
<section class="section" id="faq"><div class="wrap faq"><span class="eyebrow">FAQ</span><h2>Permissions Policy checker FAQ</h2><details open><summary>What is Permissions-Policy?</summary><p>It is an HTTP response header that controls whether a document and its embedded frames may use selected browser features.</p></details><details><summary>Is Permissions-Policy the same as Feature-Policy?</summary><p>Permissions-Policy is the newer mechanism that replaced the older Feature-Policy header and uses different syntax.</p></details><details><summary>Does every website need the same policy?</summary><p>No. The safest policy is application-specific. Deny features you do not use and scope required capabilities as narrowly as practical.</p></details><details><summary>Does a high score prove my website is secure?</summary><p>No. This focused checker reviews one public response header. Use the full DeployPass scan for broader public-surface checks and deeper testing for application security.</p></details></div></section></main>
<footer><div class="wrap foot"><a class="brand" href="/"><svg class="mark" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/></svg><span>DeployPass</span></a><span>© 2026 DeployPass · Public-surface deployment security checks.</span><a href="/">Full scan →</a></div></footer>
<script>
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.getElementById('ppForm').addEventListener('submit',async e=>{e.preventDefault();const b=document.getElementById('ppBtn'),st=document.getElementById('ppStatus');b.disabled=true;b.textContent='Checking…';st.style.display='block';st.textContent='Reading Permissions-Policy header…';try{const r=await fetch('/api/permissions-policy',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('ppUrl').value})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Check failed');document.getElementById('ppResults').style.display='block';document.getElementById('ppScore').innerHTML=d.score+'<small>/100</small>';const v=document.getElementById('ppVerdict');v.textContent=d.verdict;v.className='badge '+(d.verdict==='PASS'?'pass':d.verdict==='FAIL'?'fail':'review');document.getElementById('ppTarget').textContent='Checked '+d.target;document.getElementById('ppStats').innerHTML='<div><b>'+d.directiveCount+'</b><span>DIRECTIVES</span></div><div><b>'+d.restrictedCount+'</b><span>RESTRICTED</span></div><div><b>'+d.broadCount+'</b><span>BROAD</span></div><div><b>'+(d.present?'Yes':'No')+'</b><span>HEADER</span></div>';document.getElementById('ppRaw').textContent=d.raw||'Permissions-Policy: not detected';document.getElementById('ppFindings').innerHTML=d.findings.map(x=>'<div class="finding"><div><b>'+esc(x.title)+'</b><p>'+esc(x.text)+'</p></div><span class="badge '+(x.level==='pass'?'pass':x.level==='fail'?'fail':'review')+'">'+esc(x.label)+'</span></div>').join('');st.textContent='Permissions Policy check complete.';document.getElementById('ppResults').scrollIntoView({behavior:'smooth',block:'start'});}catch(err){st.textContent=err.message||'Check failed';}finally{b.disabled=false;b.textContent='Check policy →';}});
</script></body></html>`;

async function permissionsPolicyCheck(target){
  const {res,finalUrl}=await safeFetch(target.toString(),{method:'GET',accept:'text/html,application/xhtml+xml,*/*;q=0.8'});
  const raw=res.headers.get('permissions-policy')||'';
  const directives=[];
  if(raw){for(const part of raw.split(',')){const t=part.trim();if(!t)continue;const eq=t.indexOf('=');directives.push({name:(eq>=0?t.slice(0,eq):t).trim().toLowerCase(),value:(eq>=0?t.slice(eq+1):'').trim()});}}
  const restricted=directives.filter(d=>d.value==='()').length;
  const broad=directives.filter(d=>/\*/.test(d.value)).length;
  const important=['camera','microphone','geolocation','payment'];
  const byName=new Map(directives.map(d=>[d.name,d]));
  const findings=[]; const add=(level,title,text,label)=>findings.push({level,title,text,label});
  if(!raw)add('warning','Permissions-Policy header not detected','No Permissions-Policy response header was observed. This can be a hardening opportunity when the application does not need powerful browser features.','REVIEW');
  else add('pass','Permissions-Policy header detected','The final response includes a Permissions-Policy header.','PASS');
  for(const name of important){const d=byName.get(name);if(!d)add('warning',name+' is not explicitly controlled','The policy does not declare '+name+'. Review whether this browser feature should be denied or scoped for this application.','REVIEW');else if(d.value==='()')add('pass',name+' is denied','The policy explicitly disables '+name+' for this document.','PASS');else if(/\*/.test(d.value))add('warning',name+' uses a wildcard allowlist','The policy appears to allow '+name+' broadly. Confirm that this is intentional.','REVIEW');else add('pass',name+' is scoped','The policy explicitly scopes '+name+' to a defined allowlist.','PASS');}
  if(broad>0)add('warning','Broad feature allowlist detected',broad+' directive(s) contain a wildcard. Broad access can be intentional, but should be reviewed.','REVIEW');
  const score=!raw?60:Math.max(35,100-findings.filter(f=>f.level==='warning').length*8-broad*8);
  const verdict=!raw?'REVIEW':(score>=85?'PASS':'REVIEW');
  return {ok:true,target:finalUrl.origin,present:!!raw,raw,directiveCount:directives.length,restrictedCount:restricted,broadCount:broad,score,verdict,findings};
}

const CORS_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Free CORS Checker — Test CORS Headers Online | DeployPass</title>
<meta name="description" content="Free CORS checker for public websites and API endpoints. Test Access-Control-Allow-Origin, credentials, methods, headers and preflight response signals.">
<meta name="robots" content="index,follow"><link rel="canonical" href="https://deploypass.com/cors-checker">
<meta property="og:title" content="Free CORS Checker | DeployPass"><meta property="og:description" content="Test CORS response headers, origin behavior, credentials and preflight signals on a public endpoint."><meta property="og:url" content="https://deploypass.com/cors-checker"><meta property="og:type" content="website">
<style>
:root{--blue:#2563eb;--green:#10b981;--orange:#f59e0b;--red:#dc2626;--ink:#0f172a;--muted:#64748b;--line:#dbe4ef;--soft:#f7f9fc}*{box-sizing:border-box}body{margin:0;color:var(--ink);font:15px/1.58 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}.wrap{width:min(1060px,calc(100% - 34px));margin:auto}a{color:inherit}.top{border-bottom:1px solid var(--line);background:#fff}.nav{height:68px;display:flex;align-items:center;justify-content:space-between}.mark{width:27px;height:27px;flex:0 0 27px}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:19px;font-weight:900}.brand b{color:var(--blue)}.links{display:flex;gap:20px;font-size:12px;font-weight:750}.links a{text-decoration:none}.btn{border:0;border-radius:10px;padding:12px 15px;font:inherit;font-weight:850;cursor:pointer;text-decoration:none;background:var(--ink);color:#fff}.hero{padding:64px 0 56px;background:linear-gradient(135deg,#fbfdff,#f3f8ff);border-bottom:1px solid var(--line)}.crumb{font-size:12px;color:var(--muted);margin-bottom:20px}.crumb a{color:var(--blue);text-decoration:none}.pill{display:inline-block;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:850}.hero h1{font-size:clamp(42px,6vw,64px);line-height:1;letter-spacing:-.05em;margin:16px 0}.lead{font-size:17px;color:#475569;max-width:780px}.form{display:flex;max-width:760px;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px;margin-top:24px;box-shadow:0 12px 32px rgba(37,99,235,.07)}.form input{flex:1;border:0;outline:0;padding:13px;font:inherit}.fine,.status{font-size:11px;color:var(--muted);margin-top:10px}.status{display:none;background:#eef5ff;max-width:760px;padding:10px;border-radius:9px}.result{display:none;background:var(--soft);padding:44px 0 62px;border-bottom:1px solid var(--line)}.summary{display:grid;grid-template-columns:210px 1fr;gap:15px}.card{background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px}.score{font-size:52px;font-weight:900;letter-spacing:-.05em;line-height:1}.score small{font-size:16px;color:var(--muted)}.badge{display:inline-block;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900;margin-top:10px}.pass{background:#e8f8f0;color:#087a4c}.warning{background:#fff4d8;color:#946200}.critical{background:#feeceb;color:#b42318}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:15px}.metric{border:1px solid var(--line);border-radius:12px;padding:14px}.metric b{display:block;font-size:16px;overflow-wrap:anywhere}.metric span{font-size:10px;color:var(--muted);text-transform:uppercase}.checks{margin-top:15px;display:grid;gap:8px}.check{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px}.checktop{display:flex;justify-content:space-between;gap:12px}.check h3{font-size:13px;margin:0}.check p{font-size:12px;color:var(--muted);margin:5px 0 0}.raw{margin-top:8px;background:#f7f9fc;border-radius:8px;padding:8px 10px;font:11px/1.5 ui-monospace,monospace;overflow-wrap:anywhere}.section{padding:70px 0}.alt{background:#fbfcfe;border-block:1px solid #eef2f7}.eyebrow{font-size:11px;font-weight:900;color:var(--blue);text-transform:uppercase;letter-spacing:.12em}.section h2{font-size:clamp(29px,4vw,40px);line-height:1.08;letter-spacing:-.035em;margin:8px 0 13px}.intro{max-width:780px;color:var(--muted)}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}.info{border:1px solid var(--line);border-radius:14px;padding:18px}.info h3{margin:0 0 7px}.info p{margin:0;color:var(--muted);font-size:12px}.code{margin-top:10px;background:#0f172a;color:#dbeafe;border-radius:9px;padding:10px;font:11px/1.55 ui-monospace,monospace;overflow-wrap:anywhere}.faq{max-width:820px}.faq details{border-bottom:1px solid var(--line);padding:15px 0}.faq summary{font-weight:800;cursor:pointer}.faq p{color:var(--muted)}footer{border-top:1px solid var(--line);padding:28px 0;color:var(--muted);font-size:11px}.foot{display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}@media(max-width:760px){.links{display:none}.form{flex-direction:column}.summary{grid-template-columns:1fr}.metrics,.grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.metrics,.grid{grid-template-columns:1fr}}
</style></head><body>
<header class="top"><div class="wrap nav"><a class="brand" href="/" aria-label="DeployPass home"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Deploy<b>Pass</b></span></a><nav class="links"><a href="/#tools">Tools</a><a href="/security-headers-checker">Security headers</a><a href="/csp-checker">CSP</a><a href="/mixed-content-checker">Mixed content</a><a href="/cors-checker">CORS</a><a href="#faq">FAQ</a></nav><a class="btn" href="/">Run full scan →</a></div></header>
<main><section class="hero"><div class="wrap"><div class="crumb"><a href="/">DeployPass</a> / CORS Checker</div><span class="pill">Free · No signup · Public endpoint check</span><h1>Free CORS Checker</h1><p class="lead">Test the CORS configuration of a public website or API endpoint. Inspect Access-Control-Allow-Origin, credentials, allowed methods, allowed headers and preflight response signals.</p><form class="form" id="form"><input id="url" type="url" placeholder="Enter a website or API URL (e.g. api.example.com)" required><button class="btn" id="btn">Check CORS →</button></form><div class="fine">DeployPass sends a test Origin and a standard OPTIONS preflight request when possible. Results describe the tested public endpoint, not every route in an application.</div><div class="status" id="status">Testing CORS response behavior…</div></div></section>
<section class="result" id="result"><div class="wrap"><div class="summary"><div class="card"><div style="font-size:11px;color:#64748b;font-weight:800">CORS CONFIG SCORE</div><div class="score"><span id="score">—</span><small>/100</small></div><span id="verdict" class="badge warning">REVIEW</span></div><div class="card"><h2 style="margin:0">Cross-origin response review</h2><p id="target" style="color:#64748b"></p><div class="metrics"><div class="metric"><b id="origin">—</b><span>Allowed origin</span></div><div class="metric"><b id="creds">—</b><span>Credentials</span></div><div class="metric"><b id="methods">—</b><span>Methods</span></div><div class="metric"><b id="preflight">—</b><span>Preflight</span></div></div><div class="checks" id="checks"></div></div></div></div></section>
<section class="section"><div class="wrap"><div class="eyebrow">Understand the result</div><h2>CORS controls which browser origins may read a response.</h2><p class="intro">Cross-Origin Resource Sharing is an HTTP-header mechanism used by browsers. A broad policy can be intentional for public APIs, while credentialed endpoints usually need a carefully restricted origin policy.</p><div class="grid"><article class="info"><h3>Access-Control-Allow-Origin</h3><p>Identifies an origin allowed to read the response. A wildcard permits any origin for non-credentialed CORS requests.</p><div class="code">Access-Control-Allow-Origin: https://app.example.com</div></article><article class="info"><h3>Credentials</h3><p>Access-Control-Allow-Credentials allows browser credentials such as cookies to participate when the rest of the CORS policy also permits the request.</p><div class="code">Access-Control-Allow-Credentials: true</div></article><article class="info"><h3>Preflight requests</h3><p>Browsers can send OPTIONS before non-simple cross-origin requests to ask which methods and request headers are permitted.</p><div class="code">Access-Control-Request-Method: GET</div></article><article class="info"><h3>Vary: Origin</h3><p>When a server dynamically returns different allowed origins, Vary: Origin helps shared caches keep responses for different origins separate.</p><div class="code">Vary: Origin</div></article></div></div></section>
<section class="section alt"><div class="wrap"><div class="eyebrow">Interpret carefully</div><h2>“No CORS” is not automatically a problem.</h2><p class="intro">Many normal websites do not need to expose responses to other browser origins. Likewise, a wildcard policy can be appropriate for a deliberately public, non-credentialed API. DeployPass highlights observable configuration and risky combinations rather than treating every broad policy as a vulnerability.</p></div></section>
<section class="section" id="faq"><div class="wrap faq"><div class="eyebrow">FAQ</div><h2>CORS checker FAQ</h2><details open><summary>What does a CORS checker test?</summary><p>It sends cross-origin-style requests to a public endpoint and reviews CORS response headers such as Access-Control-Allow-Origin, credentials, methods and allowed headers.</p></details><details><summary>Is Access-Control-Allow-Origin: * insecure?</summary><p>Not necessarily. It is common for intentionally public resources. It deserves more scrutiny when sensitive data or credentialed access is involved.</p></details><details><summary>Why does the tool send an Origin header?</summary><p>CORS behavior can depend on the requesting origin. DeployPass uses a fixed test origin so it can observe whether the server denies, allows broadly, or reflects that origin.</p></details><details><summary>What is a CORS preflight?</summary><p>A preflight is an OPTIONS request browsers use before certain cross-origin requests to check which methods and headers the server permits.</p></details><details><summary>Does one result cover my whole API?</summary><p>No. CORS can differ by route, method, authentication state and environment. Test the specific public endpoints that matter.</p></details></div></section></main>
<footer><div class="wrap foot"><a class="brand" href="/" style="font-size:15px">DeployPass</a><span>© 2026 DeployPass · Public-surface deployment security checks.</span><span><a href="/security-headers-checker">Security Headers</a> · <a href="/mixed-content-checker">Mixed Content</a> · <a href="/">Full scan</a></span></div></footer>
<script>
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.getElementById('form').addEventListener('submit',async e=>{e.preventDefault();const b=document.getElementById('btn'),st=document.getElementById('status');b.disabled=true;b.textContent='Checking…';st.style.display='block';st.textContent='Testing CORS response behavior…';try{const r=await fetch('/api/cors',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('url').value})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Check failed');render(d);st.textContent='CORS check complete.'}catch(x){st.textContent=x.message||'Check failed.'}finally{b.disabled=false;b.textContent='Check CORS →'}});
function render(d){document.getElementById('score').textContent=d.score;const v=document.getElementById('verdict');v.textContent=d.verdict;v.className='badge '+(d.verdict==='PASS'?'pass':d.verdict==='FAIL'?'critical':'warning');document.getElementById('target').textContent='Checked '+d.target+' with test origin '+d.testOrigin;document.getElementById('origin').textContent=d.allowOrigin||'Not enabled';document.getElementById('creds').textContent=d.allowCredentials?'Yes':'No';document.getElementById('methods').textContent=d.allowMethods||'Not declared';document.getElementById('preflight').textContent=d.preflightStatus?String(d.preflightStatus):'No response';document.getElementById('checks').innerHTML=d.findings.map(x=>'<article class="check"><div class="checktop"><div><h3>'+esc(x.title)+'</h3><p>'+esc(x.detail)+'</p></div><span class="badge '+(x.level==='pass'?'pass':x.level==='critical'?'critical':'warning')+'">'+esc(x.level.toUpperCase())+'</span></div>'+(x.value?'<div class="raw">'+esc(x.value)+'</div>':'')+'</article>').join('');document.getElementById('result').style.display='block';document.getElementById('result').scrollIntoView({behavior:'smooth',block:'start'})}
</script></body></html>`;

const MIXED_CONTENT_HTML = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mixed Content Checker — Find Insecure HTTP Resources | DeployPass</title>
<meta name="description" content="Free mixed content checker. Scan an HTTPS page for insecure HTTP images, scripts, stylesheets, iframes and other resources, with practical fixes.">
<meta name="robots" content="index,follow"><link rel="canonical" href="https://deploypass.com/mixed-content-checker">
<meta property="og:title" content="Free Mixed Content Checker | DeployPass"><meta property="og:description" content="Find insecure HTTP resources loaded by HTTPS pages and get practical fixes."><meta property="og:url" content="https://deploypass.com/mixed-content-checker"><meta property="og:type" content="website">
<style>
:root{--blue:#2563eb;--green:#10b981;--orange:#f59e0b;--red:#dc2626;--ink:#0f172a;--muted:#64748b;--line:#dbe4ef;--soft:#f7f9fc}*{box-sizing:border-box}body{margin:0;color:var(--ink);font:15px/1.58 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}.wrap{width:min(1060px,calc(100% - 34px));margin:auto}a{color:inherit}.top{border-bottom:1px solid var(--line);background:#fff}.nav{height:68px;display:flex;align-items:center;justify-content:space-between}.mark{width:27px;height:27px;flex:0 0 27px}.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;font-size:19px;font-weight:900}.brand b{color:var(--blue)}.links{display:flex;gap:20px;font-size:12px;font-weight:750}.links a{text-decoration:none}.btn{border:0;border-radius:10px;padding:12px 15px;font:inherit;font-weight:850;cursor:pointer;text-decoration:none;background:var(--ink);color:#fff}.hero{padding:64px 0 56px;background:linear-gradient(135deg,#fbfdff,#f3f8ff);border-bottom:1px solid var(--line)}.crumb{font-size:12px;color:var(--muted);margin-bottom:20px}.crumb a{color:var(--blue);text-decoration:none}.pill{display:inline-block;border:1px solid #cfe0ff;background:#eef5ff;color:#1d4ed8;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:850}.hero h1{font-size:clamp(42px,6vw,64px);line-height:1;letter-spacing:-.05em;margin:16px 0}.lead{font-size:17px;color:#475569;max-width:760px}.form{display:flex;max-width:760px;background:#fff;border:1px solid #cdd9e8;border-radius:12px;padding:5px;margin-top:24px;box-shadow:0 12px 32px rgba(37,99,235,.07)}.form input{flex:1;border:0;outline:0;padding:13px;font:inherit}.fine,.status{font-size:11px;color:var(--muted);margin-top:10px}.status{display:none;background:#eef5ff;max-width:760px;padding:10px;border-radius:9px}.result{display:none;background:var(--soft);padding:44px 0 62px;border-bottom:1px solid var(--line)}.summary{display:grid;grid-template-columns:210px 1fr;gap:15px}.card{background:#fff;border:1px solid var(--line);border-radius:15px;padding:20px}.score{font-size:52px;font-weight:900;letter-spacing:-.05em;line-height:1}.score small{font-size:16px;color:var(--muted)}.badge{display:inline-block;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:900;margin-top:10px}.pass{background:#e8f8f0;color:#087a4c}.warning{background:#fff4d8;color:#946200}.critical{background:#feeceb;color:#b42318}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:15px}.metric{border:1px solid var(--line);border-radius:12px;padding:14px}.metric b{display:block;font-size:20px}.metric span{font-size:10px;color:var(--muted);text-transform:uppercase}.issues{margin-top:15px}.issue{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px;margin-top:8px}.issue b{display:block}.issue code{display:block;margin-top:5px;color:#475569;overflow-wrap:anywhere;font-size:11px}.section{padding:70px 0}.alt{background:#fbfcfe;border-block:1px solid #eef2f7}.eyebrow{font-size:11px;font-weight:900;color:var(--blue);text-transform:uppercase;letter-spacing:.12em}.section h2{font-size:clamp(29px,4vw,40px);line-height:1.08;letter-spacing:-.035em;margin:8px 0 13px}.intro{max-width:760px;color:var(--muted)}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:24px}.info{border:1px solid var(--line);border-radius:14px;padding:18px}.info h3{margin:0 0 7px}.info p{margin:0;color:var(--muted);font-size:12px}.code{margin-top:10px;background:#0f172a;color:#dbeafe;border-radius:9px;padding:10px;font:11px/1.55 ui-monospace,monospace}.faq{max-width:820px}.faq details{border-bottom:1px solid var(--line);padding:15px 0}.faq summary{font-weight:800;cursor:pointer}.faq p{color:var(--muted)}footer{border-top:1px solid var(--line);padding:28px 0;color:var(--muted);font-size:11px}.foot{display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}@media(max-width:760px){.links{display:none}.form{flex-direction:column}.summary{grid-template-columns:1fr}.metrics,.grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.metrics,.grid{grid-template-columns:1fr}}
</style></head><body>
<header class="top"><div class="wrap nav"><a class="brand" href="/" aria-label="DeployPass home"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Deploy<b>Pass</b></span></a><nav class="links"><a href="/#tools">Tools</a><a href="/security-headers-checker">Security headers</a><a href="/hsts-checker">HSTS</a><a href="/csp-checker">CSP</a><a href="/cors-checker">CORS</a><a href="#faq">FAQ</a></nav><a class="btn" href="/">Run full scan →</a></div></header>
<main><section class="hero"><div class="wrap"><div class="crumb"><a href="/">DeployPass</a> / Mixed Content Checker</div><span class="pill">Free · No signup · Passive public check</span><h1>Free Mixed Content Checker</h1><p class="lead">Scan an HTTPS page for insecure HTTP images, scripts, stylesheets, iframes and other resource references. See exactly what needs attention before you deploy.</p><form class="form" id="form"><input id="url" type="url" placeholder="Enter a website URL (e.g. example.com)" required><button class="btn" id="btn">Check mixed content →</button></form><div class="fine">DeployPass fetches public HTML only. It does not log in, exploit the site, or execute browser attacks.</div><div class="status" id="status">Checking page resources…</div></div></section>
<section class="result" id="result"><div class="wrap"><div class="summary"><div class="card"><div style="font-size:11px;color:#64748b;font-weight:800">MIXED CONTENT SCORE</div><div class="score"><span id="score">—</span><small>/100</small></div><span id="verdict" class="badge warning">REVIEW</span></div><div class="card"><h2 style="margin:0">Mixed content review</h2><p id="target" style="color:#64748b"></p><div class="metrics"><div class="metric"><b id="total">0</b><span>Resources</span></div><div class="metric"><b id="insecure">0</b><span>HTTP resources</span></div><div class="metric"><b id="active">0</b><span>Active</span></div><div class="metric"><b id="passive">0</b><span>Passive</span></div></div><div class="issues" id="issues"></div></div></div></div></section>
<section class="section"><div class="wrap"><div class="eyebrow">Understand the result</div><h2>Why mixed content matters.</h2><p class="intro">Mixed content happens when an HTTPS page references a resource over plain HTTP. Browsers can block risky resources, downgrade user trust, or leave part of a page exposed to network modification.</p><div class="grid"><article class="info"><h3>Active mixed content</h3><p>Scripts, stylesheets, iframes and similar executable or document resources are higher risk because changing them can alter page behavior.</p><div class="code">&lt;script src="http://example.com/app.js"&gt;</div></article><article class="info"><h3>Passive mixed content</h3><p>Images, audio and video are generally less powerful than scripts, but HTTP delivery can still expose or alter what visitors receive.</p><div class="code">&lt;img src="http://example.com/image.jpg"&gt;</div></article><article class="info"><h3>How to fix it</h3><p>Prefer HTTPS URLs for every external resource. For your own assets, update hard-coded HTTP links and verify the resource is available securely.</p><div class="code">https://example.com/resource</div></article><article class="info"><h3>Relative URLs</h3><p>Same-site relative URLs avoid hard-coding a protocol and normally inherit the HTTPS scheme of the page.</p><div class="code">/assets/app.js</div></article></div></div></section>
<section class="section alt"><div class="wrap"><div class="eyebrow">Important</div><h2>A clean HTML scan is a strong signal, not a browser trace.</h2><p class="intro">This focused checker reviews resource references visible in the fetched HTML. Resources injected later by JavaScript may require a real browser inspection. DeployPass reports what it can observe rather than claiming complete application security.</p></div></section>
<section class="section" id="faq"><div class="wrap faq"><div class="eyebrow">FAQ</div><h2>Mixed content checker FAQ</h2><details open><summary>What is mixed content?</summary><p>Mixed content is an HTTPS page loading one or more resources with an insecure HTTP URL.</p></details><details><summary>Which mixed content is most dangerous?</summary><p>Scripts, stylesheets, iframes and other active resources generally deserve the highest priority because they can affect page behavior or content.</p></details><details><summary>Does this checker execute JavaScript?</summary><p>No. This version passively reviews public HTML resource references. Dynamically injected resources may not be visible.</p></details><details><summary>How do I fix an HTTP resource?</summary><p>Change it to a working HTTPS URL, host the asset securely yourself, or remove the dependency if no secure version exists.</p></details><details><summary>Can I run a broader website security scan?</summary><p>Yes. DeployPass also provides a full 19-check scan plus focused Security Headers, HSTS and CSP checkers.</p></details></div></section></main>
<footer><div class="wrap foot"><a class="brand" href="/" style="font-size:15px"><svg class="mark" style="width:21px;height:21px;flex-basis:21px" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="15" fill="#2563EB"/><path d="M17 15h16c11 0 19 7 19 17s-8 17-19 17H17V15Zm10 9v16h7c5 0 9-3 9-8s-4-8-9-8h-7Z" fill="#fff"/><path d="m29 32 4 4 9-10" fill="none" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>DeployPass</span></a><span>© 2026 DeployPass · Public-surface deployment security checks.</span><a href="/security-headers-checker">Security Headers Checker →</a></div></footer>
<script>
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.getElementById('form').addEventListener('submit',async e=>{e.preventDefault();const b=document.getElementById('btn'),st=document.getElementById('status');b.disabled=true;b.textContent='Checking…';st.style.display='block';st.textContent='Checking page resources…';try{const r=await fetch('/api/mixed-content',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('url').value})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Check failed');render(d);st.textContent='Mixed content check complete.'}catch(x){st.textContent=x.message||'Check failed.'}finally{b.disabled=false;b.textContent='Check mixed content →'}});
function render(d){document.getElementById('score').textContent=d.score;const v=document.getElementById('verdict');v.textContent=d.verdict;v.className='badge '+(d.verdict==='PASS'?'pass':d.verdict==='FAIL'?'critical':'warning');document.getElementById('target').textContent='Checked '+d.target;document.getElementById('total').textContent=d.totalResources;document.getElementById('insecure').textContent=d.insecureCount;document.getElementById('active').textContent=d.activeCount;document.getElementById('passive').textContent=d.passiveCount;const box=document.getElementById('issues');if(!d.issues.length){box.innerHTML='<div class="issue"><b>No obvious mixed content detected.</b><span>The fetched HTML did not contain HTTP resource references on this HTTPS page.</span></div>'}else{box.innerHTML=d.issues.map(x=>'<div class="issue"><b>'+esc(x.type)+' · '+esc(x.severity)+'</b><code>'+esc(x.url)+'</code></div>').join('')}document.getElementById('result').style.display='block';document.getElementById('result').scrollIntoView({behavior:'smooth',block:'start'})}
</script></body></html>`;


async function corsCheck(target){
  const testOrigin = "https://cors-test.deploypass.com";
  const {res,finalUrl}=await safeFetch(target.toString(),{headers:{"origin":testOrigin,"sec-fetch-mode":"cors"}});
  const allowOrigin=(res.headers.get("access-control-allow-origin")||"").trim();
  const allowCredentials=/^true$/i.test((res.headers.get("access-control-allow-credentials")||"").trim());
  const exposeHeaders=(res.headers.get("access-control-expose-headers")||"").trim();
  const vary=(res.headers.get("vary")||"").trim();

  let preflightStatus=null, allowMethods="", allowHeaders="", maxAge="";
  try{
    const pf=await safeFetch(finalUrl.toString(),{
      method:"OPTIONS",
      accept:"*/*",
      headers:{
        "origin":testOrigin,
        "access-control-request-method":"GET",
        "access-control-request-headers":"x-deploypass-test"
      }
    });
    preflightStatus=pf.res.status;
    allowMethods=(pf.res.headers.get("access-control-allow-methods")||"").trim();
    allowHeaders=(pf.res.headers.get("access-control-allow-headers")||"").trim();
    maxAge=(pf.res.headers.get("access-control-max-age")||"").trim();
  }catch(_){}

  const findings=[];
  let score=100;
  const corsEnabled=!!allowOrigin;
  const wildcard=allowOrigin==="*";
  const reflectsTestOrigin=allowOrigin===testOrigin;

  if(!corsEnabled){
    findings.push({title:"Cross-origin access",level:"pass",detail:"The tested response did not advertise Access-Control-Allow-Origin. That is normal for endpoints that are not intended for browser cross-origin access.",value:"Access-Control-Allow-Origin: not detected"});
  } else if(wildcard && allowCredentials){
    score-=70;
    findings.push({title:"Wildcard origin with credentials",level:"critical",detail:"The response combines a wildcard allowed origin with credentialed CORS. Browsers reject this combination, and it usually indicates a policy mistake.",value:"Access-Control-Allow-Origin: * · Access-Control-Allow-Credentials: true"});
  } else if(wildcard){
    score-=20;
    findings.push({title:"Broad public origin policy",level:"warning",detail:"Any origin is allowed to read this response without credentials. This can be appropriate for a deliberately public API or asset.",value:"Access-Control-Allow-Origin: *"});
  } else if(reflectsTestOrigin){
    score-=20;
    findings.push({title:"Test origin allowed",level:"warning",detail:"The endpoint allowed DeployPass's arbitrary test origin. Confirm that this behavior is intentional, especially if responses can contain user-specific data.",value:"Access-Control-Allow-Origin: "+allowOrigin});
  } else {
    findings.push({title:"Restricted allowed origin",level:"pass",detail:"The response declares a specific allowed origin rather than a wildcard.",value:"Access-Control-Allow-Origin: "+allowOrigin});
  }

  if(allowCredentials){
    if(!corsEnabled){score-=10;findings.push({title:"Credentials header",level:"warning",detail:"Credentials are advertised but no allowed origin was observed on the tested response. Review whether the policy is assembled consistently.",value:"Access-Control-Allow-Credentials: true"});}
    else if(!wildcard){findings.push({title:"Credentialed CORS",level:"warning",detail:"Credentialed cross-origin requests are enabled. Restrict allowed origins to trusted applications and review sensitive routes individually.",value:"Access-Control-Allow-Credentials: true"});}
  }else{
    findings.push({title:"Credentialed requests",level:"pass",detail:"The tested response did not enable Access-Control-Allow-Credentials.",value:"Access-Control-Allow-Credentials: "+(res.headers.get("access-control-allow-credentials")||"not detected")});
  }

  if(corsEnabled && !wildcard && reflectsTestOrigin && !/\borigin\b/i.test(vary)){
    score-=10;
    findings.push({title:"Vary: Origin",level:"warning",detail:"The server appears to vary its allowed origin but Vary: Origin was not observed. Shared caches can require this header when responses differ by Origin.",value:"Vary: "+(vary||"not detected")});
  }else{
    findings.push({title:"Cache variation",level:"pass",detail:wildcard||!corsEnabled?"No dynamic origin cache issue was evident in this test.":"Vary behavior did not show the common missing-Origin warning.",value:"Vary: "+(vary||"not detected")});
  }

  const pfOk=preflightStatus!==null && preflightStatus>=200 && preflightStatus<400;
  if(pfOk && (allowMethods||allowHeaders)){
    findings.push({title:"Preflight response",level:"pass",detail:"The endpoint responded to the test OPTIONS preflight and advertised cross-origin request controls.",value:"Status "+preflightStatus+" · Methods: "+(allowMethods||"not declared")+" · Headers: "+(allowHeaders||"not declared")});
  }else if(corsEnabled){
    score-=10;
    findings.push({title:"Preflight response",level:"warning",detail:"CORS was observed on the GET response, but the test preflight did not clearly advertise methods or request headers. This may be fine for simple requests.",value:"Status: "+(preflightStatus??"unavailable")});
  }else{
    findings.push({title:"Preflight response",level:"pass",detail:"No cross-origin policy was advertised, so lack of preflight permission is consistent with a non-CORS endpoint.",value:"Status: "+(preflightStatus??"unavailable")});
  }

  if(allowMethods && /\*/.test(allowMethods)){score-=5;findings.push({title:"Allowed methods",level:"warning",detail:"The preflight advertises a wildcard method policy. Confirm that broad method access is intentional.",value:allowMethods});}
  if(exposeHeaders==="*"){score-=5;findings.push({title:"Exposed response headers",level:"warning",detail:"The response broadly exposes response headers to cross-origin scripts. Confirm this is intentional.",value:"Access-Control-Expose-Headers: *"});}

  score=Math.max(0,Math.min(100,score));
  const hasCritical=findings.some(x=>x.level==="critical");
  const hasWarning=findings.some(x=>x.level==="warning");
  const verdict=hasCritical?"FAIL":hasWarning?"REVIEW":"PASS";
  return {ok:true,target:finalUrl.toString(),testOrigin,status:res.status,corsEnabled,allowOrigin,allowCredentials,allowMethods,allowHeaders,exposeHeaders,maxAge,preflightStatus,score,verdict,findings};
}

async function mixedContentCheck(target){
  const {res,finalUrl}=await safeFetch(target.toString());
  if(!res.ok) throw new Error(`Target returned HTTP ${res.status}.`);
  const ct=(res.headers.get('content-type')||'').toLowerCase();
  if(!ct.includes('text/html')) throw new Error('The target did not return an HTML page.');
  const sample=await limitedText(res); const html=sample.text;
  const refs=[];
  const patterns=[
    ['script','active',/<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi],
    ['stylesheet','active',/<link\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi],
    ['iframe','active',/<iframe\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi],
    ['image','passive',/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi],
    ['audio/video','passive',/<(?:audio|video|source)\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi]
  ];
  for(const [type,severity,re] of patterns){let m;while((m=re.exec(html))&&refs.length<500){refs.push({type,severity,url:m[1]})}}
  const unique=[]; const seen=new Set();
  for(const r of refs){const key=r.type+'|'+r.url;if(!seen.has(key)){seen.add(key);unique.push(r)}}
  const issues=finalUrl.protocol==='https:'?unique.filter(r=>/^http:\/\//i.test(r.url)):[];
  const activeCount=issues.filter(x=>x.severity==='active').length, passiveCount=issues.length-activeCount;
  let score=100-Math.min(80,activeCount*20)-Math.min(30,passiveCount*6); score=Math.max(0,score);
  let verdict='PASS'; if(activeCount>0)verdict='FAIL'; else if(passiveCount>0)verdict='REVIEW';
  return {ok:true,target:finalUrl.toString(),pageHttps:finalUrl.protocol==='https:',totalResources:unique.length,insecureCount:issues.length,activeCount,passiveCount,score,verdict,issues:issues.slice(0,50),truncated:sample.truncated};
}

    if (url.pathname === "/website-vulnerability-scanner" || url.pathname === "/website-vulnerability-scanner/") {
      return new Response(VULNERABILITY_HTML, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=300","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}});
    }

    if (url.pathname === "/permissions-policy-checker" || url.pathname === "/permissions-policy-checker/") {
      return new Response(PERMISSIONS_POLICY_HTML, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=300","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}});
    }
    if (url.pathname === "/api/permissions-policy") {
      if (request.method !== "POST") return json({error:"Method not allowed"},405);
      try { const body=await request.json(); const target=normalizeTarget(body.url); return json(await permissionsPolicyCheck(target)); } catch(e) { return json({error:e.message||"Permissions Policy check failed"},400); }
    }

    if (url.pathname === "/cors-checker" || url.pathname === "/cors-checker/") {
      return new Response(CORS_HTML, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=300","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}});
    }
    if (url.pathname === "/api/cors") {
      if (request.method !== "POST") return json({error:"Method not allowed"},405);
      try { const body=await request.json(); const target=normalizeTarget(body.url); return json(await corsCheck(target)); } catch(e) { return json({error:e.message||"CORS check failed"},400); }
    }

    if (url.pathname === "/mixed-content-checker" || url.pathname === "/mixed-content-checker/") {
      return new Response(MIXED_CONTENT_HTML, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=300","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}});
    }
    if (url.pathname === "/api/mixed-content") {
      if (request.method !== "POST") return json({error:"Method not allowed"},405);
      try { const body=await request.json(); const target=normalizeTarget(body.url); return json(await mixedContentCheck(target)); } catch(e) { return json({error:e.message||"Mixed content check failed"},400); }
    }

    if (url.pathname === "/security-headers-checker" || url.pathname === "/security-headers-checker/") {
      return new Response(SECURITY_HEADERS_HTML, {
        headers: {
          "content-type":"text/html; charset=utf-8",
          "cache-control":"public, max-age=300",
          "x-content-type-options":"nosniff",
          "referrer-policy":"strict-origin-when-cross-origin"
        }
      });
    }

    if (url.pathname === "/csp-checker" || url.pathname === "/csp-checker/") {
      return new Response(CSP_HTML, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=300","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}});
    }

    if (url.pathname === "/api/csp") {
      if (request.method !== "POST") return json({error:"Method not allowed"},405);
      try { const body=await request.json(); const target=normalizeTarget(body.url); return json(await cspCheck(target)); } catch(e) { return json({error:e.message||"CSP check failed"},400); }
    }

    if (url.pathname === "/hsts-checker" || url.pathname === "/hsts-checker/") {
      return new Response(HSTS_HTML, {headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=300","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}});
    }

    if (url.pathname === "/api/hsts") {
      if (request.method !== "POST") return json({error:"Method not allowed"},405);
      try { const body=await request.json(); const target=normalizeTarget(body.url); return json(await hstsCheck(target)); } catch(e) { return json({error:e.message||"HSTS check failed"},400); }
    }

    const reportMatch = url.pathname.match(/^\/report\/([a-f0-9]{16})$/i);
    if (reportMatch) {
      if (!env?.DB) return new Response("Report storage is unavailable.", {status:503});
      try {
        const row = await env.DB.prepare(`
          SELECT token, url, score, verdict, result_json, created_at
          FROM reports
          WHERE token = ?
          LIMIT 1
        `).bind(reportMatch[1].toLowerCase()).first();

        if (!row) {
          return new Response("Report not found", {status:404, headers:{"content-type":"text/plain; charset=utf-8"}});
        }

        let result;
        try { result = JSON.parse(row.result_json); }
        catch { return new Response("Stored report is invalid", {status:500}); }

        return new Response(reportHtml({
          token: row.token,
          url: row.url,
          score: row.score,
          verdict: row.verdict,
          created_at: row.created_at,
          result
        }), {
          headers: {
            "content-type":"text/html; charset=utf-8",
            "cache-control":"public, max-age=300",
            "x-content-type-options":"nosniff",
            "referrer-policy":"no-referrer",
            "x-robots-tag":"noindex, follow"
          }
        });
      } catch (err) {
        console.error("Report read failed", err);
        return new Response("Report storage is not ready yet.", {status:503, headers:{"content-type":"text/plain; charset=utf-8"}});
      }
    }

    if (url.pathname === "/api/scan") {
      if (request.method !== "POST") return json({error:"Method not allowed."}, 405);
      const ct = request.headers.get("content-type") || "";
      if (!ct.includes("application/json")) return json({error:"Send JSON with a url field."}, 415);
      try {
        const body = await request.json();
        const target = normalizeTarget(body.url);
        const result = await scan(target);
        // Persistence is best-effort: a D1 problem must never break the scanner.
        try {
          const token = await saveScan(env, result);
          if (token) {
            result.reportToken = token;
            result.reportUrl = `${url.origin}/report/${token}`;
          }
        } catch (err) {
          console.error("D1 scan/report write failed", err);
        }
        return json(result);
      } catch (e) {
        return json({error: e?.message || "Scan failed."}, 400);
      }
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(HTML, {
        headers: {
          "content-type":"text/html; charset=utf-8",
          "cache-control":"public, max-age=300",
          "x-content-type-options":"nosniff",
          "referrer-policy":"strict-origin-when-cross-origin"
        }
      });
    }

    return new Response("Not found", {status:404, headers:{"content-type":"text/plain; charset=utf-8"}});
  }
};
