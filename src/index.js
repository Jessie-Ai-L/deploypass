
const HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>AI App Security Scanner | DeployPass</title>
  <meta name="description" content="Run passive public-surface security checks for AI-built apps before you deploy. Check security headers, source maps, frontend secret patterns, HTTPS, and more.">
  <meta name="robots" content="index,follow">
  <style>
    :root{--bg:#f7f9fc;--card:#fff;--text:#0f172a;--muted:#526070;--line:#dbe3ef;--soft:#eef4fb;--good:#147d4f;--warn:#9a6700;--bad:#b42318;--blue:#2457e6}
    *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--text);font:16px/1.55 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    a{color:inherit}.wrap{width:min(1040px,calc(100% - 36px));margin:auto}
    header{padding:24px 0}.nav{display:flex;align-items:center;justify-content:space-between}.brand{font-size:22px;font-weight:800;text-decoration:none}.pill{font-size:13px;border:1px solid var(--line);padding:7px 11px;border-radius:999px;background:#fff}
    .hero{padding:54px 0 28px;text-align:center}.eyebrow{font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#53657c}
    h1{font-size:clamp(42px,7vw,74px);line-height:.98;letter-spacing:-.055em;margin:14px auto 18px;max-width:850px}.sub{font-size:19px;color:var(--muted);max-width:760px;margin:0 auto}
    .scanbox{margin:34px auto 0;max-width:800px;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:18px;box-shadow:0 18px 50px rgba(15,23,42,.07)}
    .formrow{display:flex;gap:10px}.url{flex:1;font:inherit;padding:15px 16px;border:1px solid #c9d5e5;border-radius:12px;outline:none}.url:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(36,87,230,.12)}
    button{border:0;border-radius:12px;padding:14px 20px;font-weight:800;font-size:15px;background:var(--text);color:#fff;cursor:pointer}button:disabled{opacity:.55;cursor:wait}
    .note{margin:10px 2px 0;font-size:13px;color:#6b7788;text-align:left}
    #status{display:none;margin:18px 0 0;text-align:left}.statusline{padding:13px 14px;border-radius:12px;background:var(--soft);color:#314158}
    #results{display:none;padding:32px 0 64px}.summary{display:grid;grid-template-columns:210px 1fr;gap:18px}.scorecard,.card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px}
    .score{font-size:64px;font-weight:900;letter-spacing:-.06em;line-height:1}.score small{font-size:20px;color:#718096}.verdict{display:inline-block;margin-top:13px;font-size:13px;font-weight:900;letter-spacing:.08em;padding:7px 10px;border-radius:999px}
    .pass{background:#e9f8f0;color:var(--good)}.review{background:#fff6db;color:var(--warn)}.fail{background:#fff0ee;color:var(--bad)}.na{background:#eef2f7;color:#65748a}
    .summary h2{font-size:28px;margin:0 0 8px}.summary p{margin:0;color:var(--muted)}.stats{display:flex;gap:18px;margin-top:17px;flex-wrap:wrap}.stat b{font-size:20px}.stat span{display:block;font-size:12px;color:#748196;text-transform:uppercase;letter-spacing:.08em}
    .checks{display:grid;gap:12px;margin-top:18px}.check{background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 18px}.checktop{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}.check h3{margin:0;font-size:17px}.badge{font-size:12px;font-weight:900;padding:5px 8px;border-radius:999px;white-space:nowrap}.check p{margin:7px 0 0;color:var(--muted);font-size:14px}.fix{margin-top:10px;padding:11px 12px;background:#f8fafc;border-radius:10px;font-size:13px;color:#405065}.guidance{display:grid;gap:8px;margin-top:10px}.guide{padding:11px 12px;background:#f8fafc;border-radius:10px;font-size:13px;color:#405065}.guide b{color:var(--text)}
    .sectiontitle{font-size:23px;margin:26px 0 10px}.scope{margin:30px 0 70px;background:#eef4fb;border-radius:18px;padding:18px 20px;color:#405065}.scope b{color:var(--text)}
    footer{border-top:1px solid var(--line);padding:24px 0 36px;color:#748196;font-size:13px}
    @media(max-width:700px){.formrow{flex-direction:column}.summary{grid-template-columns:1fr}.hero{padding-top:34px}}
  </style>
</head>
<body>
<header><div class="wrap nav"><a class="brand" href="/">DeployPass</a><span class="pill">Passive security checks</span></div></header>
<main>
  <section class="hero"><div class="wrap">
    <div class="eyebrow">AI App Security Scanner</div>
    <h1>Know before you deploy.</h1>
    <p class="sub">Check an AI-built app for obvious public exposure and security misconfigurations before launch.</p>
    <div class="scanbox">
      <form id="scanForm">
        <div class="formrow">
          <input class="url" id="url" name="url" type="url" placeholder="https://yourapp.com" autocomplete="url" required>
          <button id="scanBtn" type="submit">Run free scan</button>
        </div>
        <div class="note">Public, passive checks only. No login, brute force, port scan, or exploit attempts.</div>
      </form>
      <div id="status"><div class="statusline" id="statusText">Starting scan…</div></div>
    </div>
  </div></section>
  <section id="results"><div class="wrap">
    <div class="summary">
      <div class="scorecard"><div class="score"><span id="score">—</span><small>/100</small></div><span class="verdict review" id="verdict">REVIEW</span></div>
      <div class="card"><h2 id="summaryTitle">Scan complete</h2><p id="summaryText"></p><div class="stats">
        <div class="stat"><b id="criticalCount">0</b><span>Critical</span></div>
        <div class="stat"><b id="warningCount">0</b><span>Warnings</span></div>
        <div class="stat"><b id="passedCount">0</b><span>Passed</span></div><div class="stat"><b id="naCount">0</b><span>N/A</span></div>
      </div></div>
    </div>
    <div id="topFixesWrap" style="display:none"><h2 class="sectiontitle">Top things to fix before deployment</h2><div class="card" style="padding:14px"><div class="checks" id="topFixes" style="margin-top:0"></div></div></div><h2 class="sectiontitle">Checks</h2>
    <div class="checks" id="checks"></div>
    <div class="scope"><b>Important:</b> DeployPass V2.3.1 examines public responses and a limited sample of same-origin frontend assets. PASS means no obvious issue was detected by that check. N/A means the condition was not observable on the scanned response. Neither result proves an application is secure.</div>
  </div></section>
</main>
<footer><div class="wrap">© 2026 DeployPass · Security checks for AI-built apps before deployment.</div></footer>
<script>
const form=document.getElementById('scanForm'), btn=document.getElementById('scanBtn'), status=document.getElementById('status'), statusText=document.getElementById('statusText'), results=document.getElementById('results');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const GUIDANCE={
  'Cookie HttpOnly flag':{why:'Cookies readable by JavaScript can be exposed if the page is affected by cross-site scripting.',how:'Set HttpOnly on authentication and session cookies that do not need JavaScript access.'},
  'Public environment variables':{why:'Client-visible environment variables are shipped to browsers, so sensitive values can become public.',how:'Review every public-prefixed variable and keep credentials, private API keys, and privileged endpoints server-side.'},
  'Framework version disclosure':{why:'Unnecessary framework or runtime details can give attackers extra information about the application stack.',how:'Remove or minimize technology/version disclosure headers where your framework or hosting platform allows it.'},
  'Content Security Policy':{why:'Without a CSP, injected scripts and other unwanted resources may be easier to execute in a browser.',how:'Add a restrictive Content-Security-Policy, start in report-only mode if needed, test it, then enforce it.'},
  'HSTS':{why:'Without HSTS, returning visitors may still be exposed to HTTP downgrade attempts before HTTPS is enforced.',how:'After HTTPS is stable, add Strict-Transport-Security with an appropriate max-age and expand carefully.'},
  'MIME sniffing protection':{why:'Browsers may interpret a response as a different content type than intended, which can create avoidable security risk.',how:'Send X-Content-Type-Options: nosniff on applicable responses.'},
  'Referrer Policy':{why:'URLs and path information can leak to other sites through the Referer header.',how:'Set a Referrer-Policy such as strict-origin-when-cross-origin unless your application requires something different.'},
  'Clickjacking protection':{why:'Without framing restrictions, another site may embed your pages and trick users into unintended clicks.',how:'Use CSP frame-ancestors (preferred) or X-Frame-Options where appropriate.'},
  'CORS configuration':{why:'Overly broad cross-origin access can let untrusted websites read responses that were intended for your own app.',how:'Allow only origins that genuinely need browser access and avoid wildcard origins for sensitive responses.'}
};
function guidance(c){var g=GUIDANCE[c.title]||{};return {why:g.why||'This finding can weaken the public security posture of the deployed application.',how:g.how||c.fix||'Review this configuration and apply the suggested remediation before deployment.'};}
function actionHtml(c){if(!(c.level==='warning'||c.level==='critical'))return '';var g=guidance(c);return '<div class="guidance"><div class="guide"><b>Why it matters:</b> '+esc(g.why)+'</div><div class="guide"><b>How to fix:</b> '+esc(g.how)+'</div></div>';}
form.addEventListener('submit',async e=>{
  e.preventDefault(); btn.disabled=true; btn.textContent='Scanning…'; status.style.display='block'; results.style.display='none'; statusText.textContent='Fetching the public page and frontend assets…';
  try{
    const r=await fetch('/api/scan',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:document.getElementById('url').value})});
    const data=await r.json();
    if(!r.ok) throw new Error(data.error||'Scan failed');
    render(data);
    statusText.textContent='Scan complete.';
  }catch(err){statusText.textContent=err.message||'Scan failed. Please try again.'}
  finally{btn.disabled=false;btn.textContent='Run free scan'}
});
function render(d){
  results.style.display='block';
  document.getElementById('score').textContent=d.score;
  const v=document.getElementById('verdict'); v.textContent=d.verdict; v.className='verdict '+(d.verdict==='PASS'?'pass':d.verdict==='FAIL'?'fail':'review');
  document.getElementById('summaryTitle').textContent=d.verdict==='PASS'?'No obvious public issue detected':d.verdict==='FAIL'?'Fix critical issues before deployment':'Review these items before deployment';
  document.getElementById('summaryText').textContent='Scanned '+d.target+' using '+d.checks.length+' passive checks.';
  document.getElementById('criticalCount').textContent=d.counts.critical;
  document.getElementById('warningCount').textContent=d.counts.warning;
  document.getElementById('passedCount').textContent=d.counts.pass;
  document.getElementById('naCount').textContent=d.counts.na||0;
  var tf=document.getElementById('topFixesWrap'), tfl=document.getElementById('topFixes');
  var fixes=(d.topFixes&&d.topFixes.length)?d.topFixes:(d.checks||[]).filter(function(c){return c.level==='critical'||c.level==='warning';}).slice(0,3);
  if(fixes.length){
    tf.style.display='block';
    tfl.innerHTML=fixes.map(function(c,i){
      return '<article class="check"><div class="checktop"><div><h3>'+ (i+1)+'. '+esc(c.title)+'</h3><p>'+esc(c.detail)+'</p></div><span class="badge '+(c.level==='critical'?'fail':'review')+'">'+(c.level==='critical'?'HIGH':'MEDIUM')+'</span></div>'+actionHtml(c)+'</article>';
    }).join('');
  } else {
    tf.style.display='none'; tfl.innerHTML='';
  }
  document.getElementById('checks').innerHTML=d.checks.map(function(c){
    var badgeClass=c.level==='pass'?'pass':c.level==='critical'?'fail':c.level==='na'?'na':'review';
    var label=c.level==='na'?'N/A':c.level.toUpperCase();
    var fixHtml=actionHtml(c);
    return '<article class="check"><div class="checktop"><div><h3>'+esc(c.title)+'</h3><p>'+esc(c.detail)+'</p></div><span class="badge '+badgeClass+'">'+esc(label)+'</span></div>'+fixHtml+'</article>';
  }).join('');
  results.scrollIntoView({behavior:'smooth',block:'start'});
}
</script>
</body></html>`;

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff"
};

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
        "accept": opts.accept || "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5"
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

  return {ok:true,target:finalUrl.origin,finalUrl:finalUrl.toString(),score,verdict,counts,checks,topFixes,meta:{durationMs:Date.now()-started,scriptsSampled:fetchedScripts,scope:"passive-public-v2.1"}};
}

async function saveScan(env, result) {
  if (!env?.DB) return;
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
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ok:true, service:"deploypass", version:"scanner-v2.1"});
    }

    if (url.pathname === "/api/scan") {
      if (request.method !== "POST") return json({error:"Method not allowed."}, 405);
      const ct = request.headers.get("content-type") || "";
      if (!ct.includes("application/json")) return json({error:"Send JSON with a url field."}, 415);
      try {
        const body = await request.json();
        const target = normalizeTarget(body.url);
        const result = await scan(target);
        // Saving scan history is best-effort: a D1 write problem must never break the scanner.
        const persist = saveScan(env, result).catch(err => console.error("D1 scan history write failed", err));
        if (ctx?.waitUntil) ctx.waitUntil(persist);
        else await persist;
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
