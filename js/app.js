// ── DATA STORE (localStorage) ──
const DB = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  push: (key, item) => {
    const arr = DB.get(key) || [];
    item.id = Date.now();
    item.createdAt = new Date().toISOString();
    arr.unshift(item);
    DB.set(key, arr);
    return item;
  },
  del: (key, id) => {
    const arr = (DB.get(key) || []).filter(i => i.id !== id);
    DB.set(key, arr);
  }
};

// Seed sample data if empty
(function seedData() {
  if (!DB.get('tips')) {
    DB.set('tips', [
      { id: 1, sport: 'football', home: 'Real Madrid', away: 'Man City', time: '20:45', date: 'Today', pick: 'Real Madrid Win', odds: '2.15', conf: 4, analysis: 'Real Madrid are unbeaten in their last 8 home UCL matches. Man City missing key midfielder. Expect a controlled home performance with high pressure early.', createdAt: new Date().toISOString() },
      { id: 2, sport: 'esports', home: 'Natus Vincere', away: 'Team Liquid', time: '18:00', date: 'Today', pick: 'NaVi -1.5 Maps', odds: '1.87', conf: 3, analysis: 'NaVi on strong form with s1mple dropping 30+ frags per map in recent games. Liquid struggling on Inferno. Map pool heavily favors NaVi.', createdAt: new Date().toISOString() },
      { id: 3, sport: 'basketball', home: 'Lakers', away: 'Celtics', time: '02:30', date: 'Tonight', pick: 'Over 218.5 pts', odds: '1.92', conf: 5, analysis: 'Both teams ranked top-5 in offensive rating this month. Pace of play has increased for both sides. Last 4 head-to-head games all went over 220.', createdAt: new Date().toISOString() },
      { id: 4, sport: 'tennis', home: 'Djokovic', away: 'Alcaraz', time: '14:00', date: 'Tomorrow', pick: 'Alcaraz Win', odds: '2.40', conf: 3, analysis: 'Alcaraz on clay is virtually unmatched in current form. Won 12 of last 13 on this surface. Djokovic showing minor fitness concerns post-Australian Open.', createdAt: new Date().toISOString() },
    ]);
  }
  if (!DB.get('articles')) {
    DB.set('articles', [
      { id: 1, cat: 'casino', title: 'Sweet Bonanza: Why this slot is dominating crypto casinos in 2026', summary: 'We break down the mechanics, volatility, and why high-rollers are flocking to this Pragmatic Play hit.', img: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&q=80', date: '2 Jun 2026', createdAt: new Date().toISOString() },
      { id: 2, cat: 'casino', title: 'Cloudbet exclusive: new live blackjack tables now accepting USDT', summary: "Lightning-fast settlements in stablecoins — here's everything you need to know about the new tables.", img: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&q=80', date: '1 Jun 2026', createdAt: new Date().toISOString() },
      { id: 3, cat: 'casino', title: 'RTP explained: What return-to-player actually means for your bankroll', summary: 'Most players misunderstand RTP. We explain how it works in practice and which games give you the real edge.', img: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=600&q=80', date: '30 May 2026', createdAt: new Date().toISOString() },
      { id: 4, cat: 'sports', title: 'Champions League quarter-finals: best value bets according to the data', summary: 'Statistical analysis of the eight remaining sides — where is the market undervaluing teams?', img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80', date: '2 Jun 2026', createdAt: new Date().toISOString() },
      { id: 5, cat: 'sports', title: 'NBA Finals betting guide: all the angles you should know before wagering', summary: 'Line movements, injury news, historical trends and the picks our analysts are most confident in.', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80', date: '31 May 2026', createdAt: new Date().toISOString() },
      { id: 6, cat: 'sports', title: 'How crypto sportsbooks set odds differently from traditional bookmakers', summary: 'The margin difference is real and it matters. Here is why crypto odds consistently beat traditional books.', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80', date: '29 May 2026', createdAt: new Date().toISOString() },
      { id: 7, cat: 'affiliates', title: 'How to build a crypto betting affiliate site in 2026: complete guide', summary: 'Everything from domain strategy to content clusters, conversion optimisation and tracking setup.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', date: '2 Jun 2026', createdAt: new Date().toISOString() },
      { id: 8, cat: 'affiliates', title: 'Cloudbet affiliate program review: commission rates, payments, tracking', summary: 'We signed up, ran traffic and report back with real numbers. Here is what to expect.', img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80', date: '28 May 2026', createdAt: new Date().toISOString() },
      { id: 9, cat: 'affiliates', title: 'Rev share vs CPA: which Cloudbet affiliate deal suits your traffic?', summary: 'The maths, the trade-offs, and which model wins depending on your audience size and quality.', img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80', date: '25 May 2026', createdAt: new Date().toISOString() },
      { id: 10, cat: 'blog', title: 'Bitcoin crosses $120k: what it means for crypto gambling volumes', summary: 'Deposit values are up, but so is volatility. We look at how big BTC moves affect player behaviour.', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80', date: '2 Jun 2026', createdAt: new Date().toISOString() },
      { id: 11, cat: 'blog', title: 'No KYC betting in 2026: which platforms still respect your privacy', summary: 'The regulatory wave is hitting hard, but a handful of platforms are holding the line on privacy.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80', date: '1 Jun 2026', createdAt: new Date().toISOString() },
      { id: 12, cat: 'blog', title: 'We tested Cloudbet deposits in 7 different cryptocurrencies — here are the results', summary: 'Speed, fees, confirmations required and any gotchas: our full test covering BTC, ETH, LTC, USDT and more.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', date: '27 May 2026', createdAt: new Date().toISOString() },
    ]);
  }
})();


// ── SPORT SVG ICON MAP ──
const SPORT_SVG = {
  football: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.2"/><path d="M12 2.5c0 0-2.5 3-2.5 5s1 4 2.5 4 2.5-2 2.5-4-2.5-5-2.5-5z" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M2.5 12h4M17.5 12h4M6.5 6.5l2.5 2.5M15 9l2.5-2.5M6.5 17.5l2.5-2.5M15 15l2.5 2.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>`,

  esports: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="7" width="19" height="11" rx="3.5" stroke="currentColor" stroke-width="1.2"/><path d="M8 11v4M6 13h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="16" cy="12" r="0.8" fill="currentColor"/><circle cx="14" cy="14" r="0.8" fill="currentColor"/></svg>`,

  basketball: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.2"/><path d="M12 2.5v19M2.5 12h19" stroke="currentColor" stroke-width="1.1"/><path d="M5 5.5c2 2 2 5 2 6.5s0 4.5-2 6.5" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M19 5.5c-2 2-2 5-2 6.5s0 4.5 2 6.5" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>`,

  tennis: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.2"/><path d="M4 7.5c2.5 1.5 3.5 3 3.5 4.5s-1 3-3.5 4.5" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M20 7.5c-2.5 1.5-3.5 3-3.5 4.5s1 3 3.5 4.5" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>`,

  baseball: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.2"/><path d="M8.5 4.5c1 2.5 1 5 1 7.5s0 5-1 7.5" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M15.5 4.5c-1 2.5-1 5-1 7.5s0 5 1 7.5" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M8.5 8.5l1.5 0.5M8.5 12l1.5 0M8.5 15.5l1.5-0.5M13.5 8.5l1.5-0.5M13.5 12l1.5 0M13.5 15.5l1.5 0.5" stroke="currentColor" stroke-width="0.9" stroke-linecap="round"/></svg>`,

  hockey: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4l4 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M10 16c0 0 1.5 2.5 4.5 2.5s4.5-1.5 4.5-2.5-1.5-1.5-4.5-1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="7.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>`,

  boxing: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="5" width="8" height="9" rx="3" stroke="currentColor" stroke-width="1.2"/><path d="M7 10h8" stroke="currentColor" stroke-width="1"/><path d="M9 14v3M13 14v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M7 17h8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,

  mma: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6c0 0-3 2-3 6s3 6 3 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M16 6c0 0 3 2 3 6s-3 6-3 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><rect x="9" y="8" width="6" height="8" rx="2" stroke="currentColor" stroke-width="1.2"/><path d="M12 8v8" stroke="currentColor" stroke-width="0.9"/></svg>`,

  golf: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M12 3l5 3-5 3" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" fill="none"/><ellipse cx="12" cy="19" rx="4" ry="1.5" stroke="currentColor" stroke-width="1.1"/><circle cx="12" cy="17" r="1.2" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>`,

  rugby: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="8" ry="5.5" stroke="currentColor" stroke-width="1.2" transform="rotate(-35 12 12)"/><path d="M7.5 7.5l9 9" stroke="currentColor" stroke-width="1"/><path d="M10 8.5l1 1M12 7l1 1M8.5 10l1 1M13 15.5l1 1M15 14l1 1M13.5 16.5l1 1" stroke="currentColor" stroke-width="0.9" stroke-linecap="round"/></svg>`,

  volleyball: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.2"/><path d="M3 10c3 0 5 1 6 3" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M9 13c1 3 1 5 3 8.5" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M21 10c-2.5 0.5-4 2-5 4" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M16 14c-2 2-2 5-4 7.5" stroke="currentColor" stroke-width="1.1" fill="none"/><path d="M7.5 3c0.5 3 2 4.5 4.5 5" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>`,

  cricket: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 4L7 20" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M14 4l3 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="6" cy="18.5" r="2" stroke="currentColor" stroke-width="1.1" fill="none"/></svg>`,

  other: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
};

function sportEmoji(sport) {
  return SPORT_SVG[sport] || SPORT_SVG.other;
}

// ── TIP POPUP ──
function openTipPopup(tipId) {
  const tips = DB.get('tips') || [];
  const tip = tips.find(t => t.id == tipId);
  if (!tip) return;
  const sportColors = { football: '#4ade80', esports: '#a78bfa', basketball: '#fb923c', tennis: '#facc15' };
  const color = sportColors[tip.sport] || '#9998b0';
  const confDots = Array.from({length:5}, (_,i) => `<div class="conf-dot ${i < tip.conf ? 'on' : ''}"></div>`).join('');
  document.getElementById('popup-sport').innerHTML = `<span class="tip-sport-icon tip-sport-icon-lg">${sportEmoji(tip.sport)}</span> <span class="tip-sport-badge ${tip.sport}">${tip.sport.toUpperCase()}</span>`;
  document.getElementById('popup-teams').textContent = `${tip.home} vs ${tip.away}`;
  document.getElementById('popup-pick').textContent = tip.pick;
  document.getElementById('popup-pick').style.color = color;
  document.getElementById('popup-odds').textContent = tip.odds;
  document.getElementById('popup-time').textContent = `${tip.date} · ${tip.time}`;
  document.getElementById('popup-conf-dots').innerHTML = confDots;
  document.getElementById('popup-analysis').textContent = tip.analysis;
  document.getElementById('tip-popup').classList.add('open');
}
function closeTipPopup() {
  document.getElementById('tip-popup').classList.remove('open');
}

// ── MOBILE NAV ──
function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

// ── SHARED HTML FRAGMENTS ──
function getHeaderHTML(activePage) {
  const navItems = [
    { label: 'Join Cloudbet',  href: 'https://cldbt.cloud/go/en/auth/sign-up?af_token=98f8cd6cce4dc6a600e699ee62740188&aftm_campaign=join-cloudbet&aftm_source=website&aftm_medium=links&aftm_cid=join-cloudbet', external: true, cta: true },
    { label: 'Casino',         href: 'casino.html' },
    { label: 'Sportsbook',     href: 'sportsbook.html' },
    { label: 'Affiliates',     href: 'affiliates.html' },
    { label: 'Cloudbet Pulse', href: 'https://www.cloudbet.com/en/pulse', external: true },
  ];
  const navHTML = navItems.map(function(item) {
    var active = !item.external && activePage === item.href.replace('.html','') ? ' active' : '';
    var ext = item.external ? ' target="_blank" rel="noopener"' : '';
    var cls = item.cta ? ' cta' : '';
    return '<a href="' + item.href + '" class="nav-link' + active + cls + '"' + ext + '>' + item.label + '</a>';
  }).join('');

  return `
<header class="site-header">
  <div class="header-inner">
    <a href="index.html" class="header-logo">
      <img src="logo-desktop.png" alt="Crypto Bets Headquarters" class="logo-img logo-img-desktop">
      <img src="logo-mobile.png" alt="Crypto Bets HQ" class="logo-img logo-img-mobile">
    </a>
    <div class="crypto-strip">
      <!-- BTC -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#F7931A"/>
          <path d="M22.5 14.2c.3-2-1.2-3-3.3-3.7l.7-2.7-1.6-.4-.6 2.6-1.3-.3.6-2.6-1.6-.4-.7 2.7-1-.3-2.2-.5-.5 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.4c.1 0 .2.1.3.1l-.3-.1-1.2 4.7c-.1.2-.3.5-.7.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2 .5 1.1.3-.7 2.7 1.6.4.7-2.7 1.3.3-.7 2.7 1.6.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2-.1-3.2-1.5-3.9 1-.2 1.8-1 2-2.3zm-3.6 5c-.5 2-3.9 1-5 .7l.9-3.5c1.1.3 4.6.8 4.1 2.8zm.5-5c-.5 1.8-3.3 1-4.2.7l.8-3.2c.9.2 3.9.7 3.4 2.5z" fill="white"/>
        </svg>
        <span>BTC</span>
      </div>
      <!-- ETH -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#627EEA"/>
          <path d="M16.5 6v7.4l6.2 2.8L16.5 6z" fill="white" fill-opacity=".6"/>
          <path d="M16.5 6L10.3 16.2l6.2-2.8V6z" fill="white"/>
          <path d="M16.5 21.3v4.7l6.2-8.6-6.2 3.9z" fill="white" fill-opacity=".6"/>
          <path d="M16.5 26V21.3l-6.2-3.9L16.5 26z" fill="white"/>
          <path d="M16.5 20.2l6.2-3.9-6.2-2.8v6.7z" fill="white" fill-opacity=".2"/>
          <path d="M10.3 16.3l6.2 3.9v-6.7l-6.2 2.8z" fill="white" fill-opacity=".6"/>
        </svg>
        <span>ETH</span>
      </div>
      <!-- USDT -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#26A17B"/>
          <path d="M17.9 17.3c-.1 0-.9.1-1.9.1s-1.7-.1-1.9-.1C11 17 8.9 16.3 8.9 15.5s2.1-1.5 5.2-1.8v1.2c.2 0 1 .1 1.9.1.9 0 1.7-.1 1.9-.1v-1.2c3.1.2 5.2 1 5.2 1.8 0 .8-2.1 1.5-5.2 1.8zm0-3.5v-1.1h4.2V10H9.9v2.7h4.2v1.1C10.6 14.1 8 15.2 8 16.5c0 1.3 2.6 2.4 6.1 2.7v5.8h3.8v-5.8c3.5-.3 6.1-1.4 6.1-2.7 0-1.3-2.6-2.4-6.1-2.7z" fill="white"/>
        </svg>
        <span>USDT</span>
      </div>
      <!-- LTC -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#BFBBBB"/>
          <path d="M10 22h12v1.5H10zm2-4.8l4.8-7.2 1.2.8-4.1 6.2H23v1.5H10l2-7.5 1.5.4L12 17.2z" fill="white"/>
        </svg>
        <span>LTC</span>
      </div>
      <!-- XRP -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#346AA9"/>
          <path d="M23 8h2.3l-5.8 5.8c-1.9 1.9-5 1.9-6.9 0L6.7 8H9l4.7 4.7c1.3 1.3 3.3 1.3 4.6 0L23 8zm-16.3 16H4.4l5.9-5.9c1.9-1.9 5-1.9 6.9 0l5.9 5.9H21l-4.8-4.8c-1.3-1.3-3.3-1.3-4.6 0L6.7 24z" fill="white"/>
        </svg>
        <span>XRP</span>
      </div>
    </div>
    <div class="header-right">
      ${navHTML}
      <div class="social-icons">
        <button class="social-btn" title="X / Twitter" onclick="window.open('https://x.com','_blank')">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </button>
        <button class="social-btn" title="Instagram" onclick="window.open('https://instagram.com','_blank')">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </button>
      </div>
      <button class="mobile-menu-btn" onclick="toggleMobileNav()" aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><rect y="3" width="20" height="2" rx="1"/><rect y="9" width="20" height="2" rx="1"/><rect y="15" width="20" height="2" rx="1"/></svg>
      </button>
    </div>
  </div>
</header>

<nav class="mobile-nav" id="mobile-nav">
  <div class="mobile-nav-header">
    <div class="header-logo">
      <img src="logo-desktop.png" alt="Crypto Bets Headquarters" class="logo-img logo-img-desktop">
      <img src="logo-mobile.png" alt="Crypto Bets HQ" class="logo-img logo-img-mobile">
    </div>
    <button onclick="toggleMobileNav()" style="background:none;border:none;color:var(--text-pri);font-size:22px;">✕</button>
  </div>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="casino.html">Casino</a>
  <a href="sportsbook.html">Sportsbook</a>
  <a href="affiliates.html">Affiliates</a>
</nav>`;
}


function sportEmoji(sport) {
  return SPORT_SVG[sport] || SPORT_SVG.other;
}

// ── TIP POPUP ──
function openTipPopup(tipId) {
  const tips = DB.get('tips') || [];
  const tip = tips.find(t => t.id == tipId);
  if (!tip) return;
  const sportColors = { football: '#4ade80', esports: '#a78bfa', basketball: '#fb923c', tennis: '#facc15' };
  const color = sportColors[tip.sport] || '#9998b0';
  const confDots = Array.from({length:5}, (_,i) => `<div class="conf-dot ${i < tip.conf ? 'on' : ''}"></div>`).join('');
  document.getElementById('popup-sport').innerHTML = `<span class="tip-sport-icon tip-sport-icon-lg">${sportEmoji(tip.sport)}</span> <span class="tip-sport-badge ${tip.sport}">${tip.sport.toUpperCase()}</span>`;
  document.getElementById('popup-teams').textContent = `${tip.home} vs ${tip.away}`;
  document.getElementById('popup-pick').textContent = tip.pick;
  document.getElementById('popup-pick').style.color = color;
  document.getElementById('popup-odds').textContent = tip.odds;
  document.getElementById('popup-time').textContent = `${tip.date} · ${tip.time}`;
  document.getElementById('popup-conf-dots').innerHTML = confDots;
  document.getElementById('popup-analysis').textContent = tip.analysis;
  document.getElementById('tip-popup').classList.add('open');
}
function closeTipPopup() {
  document.getElementById('tip-popup').classList.remove('open');
}

// ── MOBILE NAV ──
function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

// ── SHARED HTML FRAGMENTS ──
function getHeaderHTML(activePage) {
  const navItems = [
    { label: 'Join Cloudbet',  href: 'https://cldbt.cloud/go/en/auth/sign-up?af_token=98f8cd6cce4dc6a600e699ee62740188&aftm_campaign=join-cloudbet&aftm_source=website&aftm_medium=links&aftm_cid=join-cloudbet', external: true, cta: true },
    { label: 'Casino',         href: 'casino.html' },
    { label: 'Sportsbook',     href: 'sportsbook.html' },
    { label: 'Affiliates',     href: 'affiliates.html' },
    { label: 'Cloudbet Pulse', href: 'https://www.cloudbet.com/en/pulse', external: true },
  ];
  const navHTML = navItems.map(function(item) {
    var active = !item.external && activePage === item.href.replace('.html','') ? ' active' : '';
    var ext = item.external ? ' target="_blank" rel="noopener"' : '';
    var cls = item.cta ? ' cta' : '';
    return '<a href="' + item.href + '" class="nav-link' + active + cls + '"' + ext + '>' + item.label + '</a>';
  }).join('');

  return `
<header class="site-header">
  <div class="header-inner">
    <a href="index.html" class="header-logo">
      <img src="logo-desktop.png" alt="Crypto Bets Headquarters" class="logo-img logo-img-desktop">
      <img src="logo-mobile.png" alt="Crypto Bets HQ" class="logo-img logo-img-mobile">
    </a>
    <div class="crypto-strip">
      <!-- BTC -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#F7931A"/>
          <path d="M22.5 14.2c.3-2-1.2-3-3.3-3.7l.7-2.7-1.6-.4-.6 2.6-1.3-.3.6-2.6-1.6-.4-.7 2.7-1-.3-2.2-.5-.5 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.4c.1 0 .2.1.3.1l-.3-.1-1.2 4.7c-.1.2-.3.5-.7.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2 .5 1.1.3-.7 2.7 1.6.4.7-2.7 1.3.3-.7 2.7 1.6.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2-.1-3.2-1.5-3.9 1-.2 1.8-1 2-2.3zm-3.6 5c-.5 2-3.9 1-5 .7l.9-3.5c1.1.3 4.6.8 4.1 2.8zm.5-5c-.5 1.8-3.3 1-4.2.7l.8-3.2c.9.2 3.9.7 3.4 2.5z" fill="white"/>
        </svg>
        <span>BTC</span>
      </div>
      <!-- ETH -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#627EEA"/>
          <path d="M16.5 6v7.4l6.2 2.8L16.5 6z" fill="white" fill-opacity=".6"/>
          <path d="M16.5 6L10.3 16.2l6.2-2.8V6z" fill="white"/>
          <path d="M16.5 21.3v4.7l6.2-8.6-6.2 3.9z" fill="white" fill-opacity=".6"/>
          <path d="M16.5 26V21.3l-6.2-3.9L16.5 26z" fill="white"/>
          <path d="M16.5 20.2l6.2-3.9-6.2-2.8v6.7z" fill="white" fill-opacity=".2"/>
          <path d="M10.3 16.3l6.2 3.9v-6.7l-6.2 2.8z" fill="white" fill-opacity=".6"/>
        </svg>
        <span>ETH</span>
      </div>
      <!-- USDT -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#26A17B"/>
          <path d="M17.9 17.3c-.1 0-.9.1-1.9.1s-1.7-.1-1.9-.1C11 17 8.9 16.3 8.9 15.5s2.1-1.5 5.2-1.8v1.2c.2 0 1 .1 1.9.1.9 0 1.7-.1 1.9-.1v-1.2c3.1.2 5.2 1 5.2 1.8 0 .8-2.1 1.5-5.2 1.8zm0-3.5v-1.1h4.2V10H9.9v2.7h4.2v1.1C10.6 14.1 8 15.2 8 16.5c0 1.3 2.6 2.4 6.1 2.7v5.8h3.8v-5.8c3.5-.3 6.1-1.4 6.1-2.7 0-1.3-2.6-2.4-6.1-2.7z" fill="white"/>
        </svg>
        <span>USDT</span>
      </div>
      <!-- LTC -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#BFBBBB"/>
          <path d="M10 22h12v1.5H10zm2-4.8l4.8-7.2 1.2.8-4.1 6.2H23v1.5H10l2-7.5 1.5.4L12 17.2z" fill="white"/>
        </svg>
        <span>LTC</span>
      </div>
      <!-- XRP -->
      <div class="crypto-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#346AA9"/>
          <path d="M23 8h2.3l-5.8 5.8c-1.9 1.9-5 1.9-6.9 0L6.7 8H9l4.7 4.7c1.3 1.3 3.3 1.3 4.6 0L23 8zm-16.3 16H4.4l5.9-5.9c1.9-1.9 5-1.9 6.9 0l5.9 5.9H21l-4.8-4.8c-1.3-1.3-3.3-1.3-4.6 0L6.7 24z" fill="white"/>
        </svg>
        <span>XRP</span>
      </div>
    </div>
    <div class="header-right">
      ${navHTML}
      <div class="social-icons">
        <button class="social-btn" title="X / Twitter" onclick="window.open('https://x.com','_blank')">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </button>
        <button class="social-btn" title="Instagram" onclick="window.open('https://instagram.com','_blank')">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </button>
      </div>
      <button class="mobile-menu-btn" onclick="toggleMobileNav()" aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><rect y="3" width="20" height="2" rx="1"/><rect y="9" width="20" height="2" rx="1"/><rect y="15" width="20" height="2" rx="1"/></svg>
      </button>
    </div>
  </div>
</header>

<nav class="mobile-nav" id="mobile-nav">
  <div class="mobile-nav-header">
    <div class="header-logo">
      <img src="logo-desktop.png" alt="Crypto Bets Headquarters" class="logo-img logo-img-desktop">
      <img src="logo-mobile.png" alt="Crypto Bets HQ" class="logo-img logo-img-mobile">
    </div>
    <button onclick="toggleMobileNav()" style="background:none;border:none;color:var(--text-pri);font-size:22px;">✕</button>
  </div>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="casino.html">Casino</a>
  <a href="sportsbook.html">Sportsbook</a>
  <a href="affiliates.html">Affiliates</a>
</nav>`;
}

function getFooterHTML() {
  return `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-crypto">
      <span class="footer-crypto-label">Accepted cryptocurrencies</span>
      <div class="footer-crypto-icons" id="footer-coins">
        <div class="footer-crypto-icon" title="Bitcoin"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path d="M22.5 14.2c.3-2-1.2-3-3.3-3.7l.7-2.7-1.6-.4-.6 2.6-1.3-.3.6-2.6-1.6-.4-.7 2.7-1-.3-2.2-.5-.5 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.4c.1 0 .2.1.3.1l-.3-.1-1.2 4.7c-.1.2-.3.5-.7.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2 .5 1.1.3-.7 2.7 1.6.4.7-2.7 1.3.3-.7 2.7 1.6.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2-.1-3.2-1.5-3.9 1-.2 1.8-1 2-2.3zm-3.6 5c-.5 2-3.9 1-5 .7l.9-3.5c1.1.3 4.6.8 4.1 2.8zm.5-5c-.5 1.8-3.3 1-4.2.7l.8-3.2c.9.2 3.9.7 3.4 2.5z" fill="white"/></svg><span>BTC</span></div>
        <div class="footer-crypto-icon" title="Ethereum"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#627EEA"/><path d="M16.5 6v7.4l6.2 2.8L16.5 6z" fill="white" fill-opacity=".6"/><path d="M16.5 6L10.3 16.2l6.2-2.8V6z" fill="white"/><path d="M16.5 21.3v4.7l6.2-8.6-6.2 3.9z" fill="white" fill-opacity=".6"/><path d="M16.5 26V21.3l-6.2-3.9L16.5 26z" fill="white"/><path d="M16.5 20.2l6.2-3.9-6.2-2.8v6.7z" fill="white" fill-opacity=".2"/><path d="M10.3 16.3l6.2 3.9v-6.7l-6.2 2.8z" fill="white" fill-opacity=".6"/></svg><span>ETH</span></div>
        <div class="footer-crypto-icon" title="Tether"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path d="M17.9 17.3c-.1 0-.9.1-1.9.1s-1.7-.1-1.9-.1C11 17 8.9 16.3 8.9 15.5s2.1-1.5 5.2-1.8v1.2c.2 0 1 .1 1.9.1.9 0 1.7-.1 1.9-.1v-1.2c3.1.2 5.2 1 5.2 1.8 0 .8-2.1 1.5-5.2 1.8zm0-3.5v-1.1h4.2V10H9.9v2.7h4.2v1.1C10.6 14.1 8 15.2 8 16.5c0 1.3 2.6 2.4 6.1 2.7v5.8h3.8v-5.8c3.5-.3 6.1-1.4 6.1-2.7 0-1.3-2.6-2.4-6.1-2.7z" fill="white"/></svg><span>USDT</span></div>
        <div class="footer-crypto-icon" title="USD Coin"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2775CA"/><path d="M20 18.9c0-2-1.2-2.7-3.6-3-1.7-.2-2-.7-2-1.4s.5-1.2 1.6-1.2c1 0 1.5.3 1.8 1.1.1.2.2.3.4.3h.9c.3 0 .4-.2.4-.4 0-.9-.8-1.9-2.1-2.1V11c0-.3-.2-.4-.4-.4h-.8c-.3 0-.4.2-.4.4v1.1c-1.5.3-2.4 1.2-2.4 2.5 0 1.9 1.1 2.6 3.5 2.9 1.6.3 2.1.6 2.1 1.5s-.7 1.4-1.9 1.4c-1.5 0-2-.6-2.2-1.4-.1-.2-.2-.3-.4-.3h-.9c-.3 0-.4.1-.4.4 0 1.1.7 2.1 2.3 2.4V22c0 .3.2.4.4.4h.8c.3 0 .4-.2.4-.4v-1.1c1.5-.3 2.6-1.3 2.6-2.8-.1-.1-.1-.1-.2-.2z" fill="white"/></svg><span>USDC</span></div>
        <div class="footer-crypto-icon" title="Litecoin"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#BFBBBB"/><path d="M10 22h12v1.5H10zm2-4.8l4.8-7.2 1.2.8-4.1 6.2H23v1.5H10l2-7.5 1.5.4L12 17.2z" fill="white"/></svg><span>LTC</span></div>
        <div class="footer-crypto-icon" title="Bitcoin Cash"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#8DC351"/><path d="M21 13.5c.3-2.1-1.3-3.2-3.5-3.9l.7-2.9-1.7-.4-.7 2.8-1.4-.3.7-2.8-1.7-.4-.7 2.9-3.3-.8-.5 1.8 1.3.3c.7.2.9.6.8 1l-2 8c-.1.3-.4.6-.9.5l-1.3-.3-.6 2 3.3.8-.7 2.9 1.7.4.7-2.9 1.4.3-.7 2.9 1.7.4.7-2.9c3 .6 5.1.3 6-2.1.7-2-.1-3.1-1.5-3.9 1.1-.3 1.9-1.1 2.2-2.4zm-3.8 5.3c-.5 2-3.9 1-5 .7l.9-3.6c1.1.3 4.7.8 4.1 2.9zm.5-5.4c-.5 1.8-3.5 1-4.4.7l.8-3.3c1 .3 4.1.7 3.6 2.6z" fill="white"/></svg><span>BCH</span></div>
        <div class="footer-crypto-icon" title="BNB"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path d="M12.1 14.3L16 10.4l3.9 3.9 2.3-2.3L16 5.8 9.8 12l2.3 2.3zM6 16l2.3-2.3L10.6 16l-2.3 2.3L6 16zm6.1 1.7L16 21.6l3.9-3.9 2.3 2.3L16 26.2l-6.2-6.2 2.3-2.3zm9.3-1.7l2.3-2.3L26 16l-2.3 2.3L21.4 16zm-3.2 0l-2.3-2.3-2.3 2.3 2.3 2.3 2.3-2.3z" fill="white"/></svg><span>BNB</span></div>
        <div class="footer-crypto-icon" title="Dogecoin"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#C2A633"/><path d="M16 7h-4.5v18H16c5 0 9-4 9-9s-4-9-9-9zm0 14.5h-2V10.5h2c3.6 0 6.5 2.5 6.5 5.5s-2.9 5.5-6.5 5.5zm-1-8.5v6h1c1.9 0 3.5-1.3 3.5-3s-1.6-3-3.5-3h-1z" fill="white"/></svg><span>DOGE</span></div>
        <div class="footer-crypto-icon" title="Solana"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#9945FF"/><path d="M9 20.5h11.5l2.5-2.5H11.5L9 20.5zm0-7h11.5L23 11H11.5L9 13.5zm2.5 3.5L9 19.5h11.5l2.5-2.5H11.5z" fill="white"/></svg><span>SOL</span></div>
        <div class="footer-crypto-icon" title="Ripple XRP"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#346AA9"/><path d="M23 8h2.3l-5.8 5.8c-1.9 1.9-5 1.9-6.9 0L6.7 8H9l4.7 4.7c1.3 1.3 3.3 1.3 4.6 0L23 8zm-16.3 16H4.4l5.9-5.9c1.9-1.9 5-1.9 6.9 0l5.9 5.9H21l-4.8-4.8c-1.3-1.3-3.3-1.3-4.6 0L6.7 24z" fill="white"/></svg><span>XRP</span></div>
        <div class="footer-crypto-icon" title="Cardano"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#0033AD"/><path d="M16 8a8 8 0 1 0 0 16A8 8 0 0 0 16 8zm0 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-4 2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm8 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-9 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-7.5 2.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm5 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-2.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="white" fill-opacity=".9"/></svg><span>ADA</span></div>
        <div class="footer-crypto-icon" title="Tron"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF0013"/><path d="M22.5 11.5L8 9l5.5 15.5 9-13zm-2.5.8l-5.5 7.5-2.5-7 8-.5z" fill="white"/></svg><span>TRX</span></div>
        <div class="footer-crypto-icon" title="Polkadot"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#E6007A"/><circle cx="16" cy="9" r="2.5" fill="white"/><circle cx="16" cy="23" r="2.5" fill="white"/><circle cx="9.5" cy="12.5" r="2" fill="white"/><circle cx="22.5" cy="12.5" r="2" fill="white"/><circle cx="9.5" cy="19.5" r="2" fill="white"/><circle cx="22.5" cy="19.5" r="2" fill="white"/></svg><span>DOT</span></div>
        <div class="footer-crypto-icon" title="Chainlink"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2A5ADA"/><path d="M16 7l-2 1.2v4.6L10 15v4l4 2.2v2.4L16 25l2-1.4v-2.4L22 19v-4l-4-2.2V8.2L16 7zm0 5.8l3 1.7v3.4l-3 1.7-3-1.7v-3.4l3-1.7z" fill="white"/></svg><span>LINK</span></div>
        <div class="footer-crypto-icon" title="Avalanche"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#E84142"/><path d="M19.5 21H23l-7-12-3.5 6 2 3.5h-5.5l1.5 2.5h8.5zm-7 0H10l1.5-2.5h1z" fill="white"/></svg><span>AVAX</span></div>
        <div class="footer-crypto-icon" title="Polygon"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#8247E5"/><path d="M20.5 13.5l-2-1.2-4 2.3v4.6l4 2.3 4-2.3v-4l-2-1.7zm0 5.5l-2 1.2-2-1.2v-2.4l2-1.2 2 1.2v2.4zM13.5 10L9 12.7v5.5l2 1.2V14l2.5-1.5 2.5 1.5v5l2-1.2V12.7L13.5 10z" fill="white"/></svg><span>MATIC</span></div>
        <div class="footer-crypto-icon" title="Dai"><svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F5AC37"/><path d="M9 10h7.5c3.6 0 6.5 2.5 6.5 5.5h-14V10zm0 7h14c0 3-2.9 5.5-6.5 5.5H9V17zm1.5-4h11c-.5-1.7-2.5-3-4.9-3H10.5v3zm0 2v3h6.1c2.4 0 4.4-1.3 4.9-3H10.5z" fill="white"/></svg><span>DAI</span></div>
      </div>
    </div>
    <div class="footer-copy">
      This site is affiliated with <a href="https://www.cloudbet.com" target="_blank" rel="noopener">Cloudbet.com</a> · All rights reserved · 18+ · Gamble responsibly
    </div>
  </div>
</footer>`;
}

function getTipPopupHTML() {
  return `
<div class="popup-overlay" id="tip-popup" onclick="if(event.target===this)closeTipPopup()">
  <div class="popup-box">
    <button class="popup-close" onclick="closeTipPopup()">✕</button>
    <div id="popup-sport" class="popup-sport"></div>
    <div class="popup-teams" id="popup-teams"></div>
    <div class="popup-grid">
      <div class="popup-stat">
        <div class="popup-stat-label">Our pick</div>
        <div class="popup-stat-val gold" id="popup-pick"></div>
      </div>
      <div class="popup-stat">
        <div class="popup-stat-label">Best odds</div>
        <div class="popup-stat-val gold" id="popup-odds"></div>
      </div>
      <div class="popup-stat">
        <div class="popup-stat-label">Kick-off</div>
        <div class="popup-stat-val" style="font-size:16px;" id="popup-time"></div>
      </div>
      <div class="popup-stat">
        <div class="popup-stat-label">Confidence</div>
        <div class="conf-dots" id="popup-conf-dots"></div>
      </div>
    </div>
    <div class="popup-analysis" id="popup-analysis"></div>
    <div style="margin-top:16px;">
      <a href="https://www.cloudbet.com" target="_blank" rel="noopener" class="btn-gold" style="width:100%;display:block;text-align:center;">Bet on Cloudbet ↗</a>
    </div>
  </div>
</div>`;
}

// ── FOOTER COINS EXPAND ──
function toggleFooterCoins() {
  var extra = document.getElementById('footer-coins-extra');
  var btn = document.getElementById('footer-expand-btn');
  if (!extra) return;
  var expanded = extra.classList.toggle('open');
  btn.innerHTML = expanded
    ? '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 9l4-4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> less'
    : '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> more';
}
