// ═══════════════════════════════════════
// CRYPTO BETS HQ — app.js
// ═══════════════════════════════════════

// ── i18n ──
var TRANSLATIONS = {
  en: {
    nav_join: 'Join Cloudbet', nav_howto: 'How to', nav_casino: 'Casino',
    nav_sports: 'Sportsbook', nav_affiliates: 'Affiliates', nav_pulse: 'Cloudbet Pulse',
    hero_badge: 'Cloudbet Affiliate', hero_h1: 'Your Edge in\nCrypto Betting',
    hero_p: 'Expert casino picks, sports analysis and Cloudbet guides — all in one place.',
    hero_btn1: 'Join Cloudbet ↗', hero_btn2: 'How to get started',
    latest: 'Latest articles', more: 'More',
    cat_casino: 'Casino', cat_sports: 'Sports', cat_affiliates: 'Affiliates', cat_blog: 'Blog',
    footer_coins: 'Accepted on Cloudbet',
    footer_copy: 'This site is affiliated with', footer_rights: 'All rights reserved',
    footer_age: '18+', footer_gamble: 'Gamble responsibly',
    bc_home: 'Home',
    art_cta_title: 'Ready to play?', art_cta_desc: 'Get up to 5 BTC welcome bonus.',
    art_cta_btn: 'Join Cloudbet ↗',
    no_articles: 'No articles yet.',
  },
  cs: {
    nav_join: 'Přidat se na Cloudbet', nav_howto: 'Jak začít', nav_casino: 'Kasino',
    nav_sports: 'Sázky', nav_affiliates: 'Affiliate', nav_pulse: 'Cloudbet Pulse',
    hero_badge: 'Cloudbet Affiliate', hero_h1: 'Váš náskok\nv krypto sázkách',
    hero_p: 'Odborné tipy na kasino, sportovní analýzy a průvodce Cloudbet — vše na jednom místě.',
    hero_btn1: 'Přidat se na Cloudbet ↗', hero_btn2: 'Jak začít',
    latest: 'Nejnovější články', more: 'Více',
    cat_casino: 'Kasino', cat_sports: 'Sport', cat_affiliates: 'Affiliate', cat_blog: 'Blog',
    footer_coins: 'Přijímáno na Cloudbet',
    footer_copy: 'Tento web je přidružen k', footer_rights: 'Všechna práva vyhrazena',
    footer_age: '18+', footer_gamble: 'Hrajte zodpovědně',
    bc_home: 'Domů',
    art_cta_title: 'Připraveni hrát?', art_cta_desc: 'Získejte uvítací bonus až 5 BTC.',
    art_cta_btn: 'Přidat se na Cloudbet ↗',
    no_articles: 'Zatím žádné články.',
  },
};

// Language locked to English — multi-language inactive
// To re-enable: replace this with the auto-detect block and show .lang-switcher in CSS
localStorage.setItem('lang', 'en');

function getLang() { return localStorage.getItem('lang') || 'en'; }
function t(k) { var d = TRANSLATIONS[getLang()] || TRANSLATIONS.en; return d[k] || TRANSLATIONS.en[k] || k; }
function setLang(l) { localStorage.setItem('lang', l); location.reload(); }

// ── DATA STORE ──
var DB = {
  get: function(k) { try { return JSON.parse(localStorage.getItem(k)); } catch(e) { return null; } },
  set: function(k, v) { localStorage.setItem(k, JSON.stringify(v)); },
  push: function(k, item) {
    var arr = DB.get(k) || [];
    item.id = Date.now(); item.createdAt = new Date().toISOString();
    arr.unshift(item); DB.set(k, arr); return item;
  },
  del: function(k, id) { DB.set(k, (DB.get(k) || []).filter(function(i) { return i.id !== id; })); }
};

// ── SEED ARTICLES ──
(function() {
  if (DB.get('articles')) return;
  DB.set('articles', [
    { id:1,  cat:'casino',     lang:'en', title:'Sweet Bonanza Xmas — High Volatility, Max Win ×21,100', summary:'Pragmatic Play\'s scatter-pays mechanic rewards patience. We break down why this slot dominates crypto casinos.', img:'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&q=80', date:'2 Jun 2026', createdAt:new Date().toISOString() },
    { id:2,  cat:'casino',     lang:'en', title:'Cloudbet exclusive: new live blackjack tables now accepting USDT', summary:'Lightning-fast stablecoin settlements on the new live tables — everything you need to know.', img:'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&q=80', date:'1 Jun 2026', createdAt:new Date().toISOString() },
    { id:3,  cat:'casino',     lang:'en', title:'RTP explained: What return-to-player means for your bankroll', summary:'Most players misunderstand RTP. We explain how it works and which games give you the real edge.', img:'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=600&q=80', date:'30 May 2026', createdAt:new Date().toISOString() },
    { id:4,  cat:'sports',     lang:'en', title:'Champions League quarter-finals: best value bets according to the data', summary:'Statistical analysis of the eight remaining sides — where is the market undervaluing teams?', img:'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80', date:'2 Jun 2026', createdAt:new Date().toISOString() },
    { id:5,  cat:'sports',     lang:'en', title:'NBA Finals betting guide: all the angles you should know', summary:'Line movements, injury news, historical trends and the picks our analysts are most confident in.', img:'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80', date:'31 May 2026', createdAt:new Date().toISOString() },
    { id:6,  cat:'sports',     lang:'en', title:'How crypto sportsbooks set odds differently from traditional bookmakers', summary:'The margin difference is real. Here is why crypto odds consistently beat traditional books.', img:'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80', date:'29 May 2026', createdAt:new Date().toISOString() },
    { id:7,  cat:'affiliates', lang:'en', title:'How to build a crypto betting affiliate site in 2026: complete guide', summary:'Domain strategy, content clusters, conversion optimisation and tracking setup — all covered.', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', date:'2 Jun 2026', createdAt:new Date().toISOString() },
    { id:8,  cat:'affiliates', lang:'en', title:'Cloudbet affiliate program review: commission rates, payments, tracking', summary:'We signed up, ran traffic and report back with real numbers. Here is what to expect.', img:'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80', date:'28 May 2026', createdAt:new Date().toISOString() },
    { id:9,  cat:'affiliates', lang:'en', title:'Rev share vs CPA: which Cloudbet affiliate deal suits your traffic?', summary:'The maths, the trade-offs, and which model wins depending on your audience size and quality.', img:'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80', date:'25 May 2026', createdAt:new Date().toISOString() },
    { id:10, cat:'blog',       lang:'en', title:'Bitcoin crosses $120k: what it means for crypto gambling volumes', summary:'Deposit values are up, but so is volatility. We look at how big BTC moves affect player behaviour.', img:'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80', date:'2 Jun 2026', createdAt:new Date().toISOString() },
    { id:11, cat:'blog',       lang:'en', title:'No KYC betting in 2026: which platforms still respect your privacy', summary:'The regulatory wave is hitting hard, but a handful of platforms are holding the line on privacy.', img:'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80', date:'1 Jun 2026', createdAt:new Date().toISOString() },
    { id:12, cat:'blog',       lang:'en', title:'We tested Cloudbet deposits in 7 different cryptocurrencies', summary:'Speed, fees, confirmations required and any gotchas — our full test covering BTC, ETH, LTC, USDT and more.', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', date:'27 May 2026', createdAt:new Date().toISOString() },
  ]);
})();

// ── SHARED HTML ──
var AFFILIATE_URL = 'https://cldbt.cloud/go/en/auth/sign-up?af_token=98f8cd6cce4dc6a600e699ee62740188&aftm_campaign=join-cloudbet&aftm_source=website&aftm_medium=links&aftm_cid=join-cloudbet';

function getHeaderHTML(active) {
  var nav = [
    { label: t('nav_join'),       href: AFFILIATE_URL,             ext: true, cta: true },
    { label: t('nav_howto'),      href: 'how-to.html' },
    { label: t('nav_casino'),     href: 'casino.html' },
    { label: t('nav_sports'),     href: 'sportsbook.html' },
    { label: t('nav_affiliates'), href: 'affiliates.html' },
    { label: t('nav_pulse'),      href: 'https://www.cloudbet.com/en/pulse', ext: true },
  ];
  var navHTML = nav.map(function(n) {
    var cls = 'nav-link' + (n.cta ? ' nav-cta' : '') + (!n.ext && active === n.href.replace('.html','') ? ' active' : '');
    var ext = n.ext ? ' target="_blank" rel="noopener"' : '';
    return '<a href="' + n.href + '" class="' + cls + '"' + ext + '>' + n.label + '</a>';
  }).join('');

  // Determine correct path prefix for logo (admin pages are one level deeper)
  var isAdmin = window.location.pathname.indexOf('/admin') !== -1;
  var prefix = isAdmin ? '../' : '';

  return '<header class="site-header">'
    + '<div class="header-inner">'
    + '<a href="' + prefix + 'index.html" style="display:flex;align-items:center">'
    + '<img src="' + prefix + 'logo-desktop.png" class="logo-img logo-desktop" alt="Crypto Bets HQ">'
    + '<img src="' + prefix + 'logo-mobile.png"  class="logo-img logo-mobile"  alt="Crypto Bets HQ">'
    + '</a>'
    + '<nav class="nav">' + navHTML + '</nav>'
    + '<div class="header-right">'
    + '<div class="lang-switcher">'
    + '<button class="lang-btn" onclick="setLang(\'en\')">EN</button>'
    + '<button class="lang-btn" onclick="setLang(\'cs\')">CS</button>'
    + '</div>'
    + '<div class="social-btns">'
    + '<button class="social-btn" onclick="window.open(\'https://x.com\',\'_blank\')" title="X">'
    + '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
    + '</button>'
    + '<button class="social-btn" onclick="window.open(\'https://instagram.com\',\'_blank\')" title="Instagram">'
    + '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'
    + '</button>'
    + '</div>'
    + '<button class="hamburger" onclick="document.getElementById(\'mob-nav\').classList.toggle(\'open\')" aria-label="Menu">'
    + '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><rect y="3" width="20" height="2" rx="1"/><rect y="9" width="20" height="2" rx="1"/><rect y="15" width="20" height="2" rx="1"/></svg>'
    + '</button>'
    + '</div></div></header>'
    + '<nav class="mobile-nav" id="mob-nav">'
    + '<div class="mobile-nav-top">'
    + '<img src="' + prefix + 'logo-mobile.png" style="height:44px;width:auto" alt="Crypto Bets HQ">'
    + '<button class="close-btn" onclick="document.getElementById(\'mob-nav\').classList.remove(\'open\')">✕</button>'
    + '</div>'
    + '<a href="' + prefix + 'index.html">Home</a>'
    + '<a href="' + AFFILIATE_URL + '" target="_blank" rel="noopener">' + t('nav_join') + '</a>'
    + '<a href="' + prefix + 'how-to.html">' + t('nav_howto') + '</a>'
    + '<a href="' + prefix + 'casino.html">' + t('nav_casino') + '</a>'
    + '<a href="' + prefix + 'sportsbook.html">' + t('nav_sports') + '</a>'
    + '<a href="' + prefix + 'affiliates.html">' + t('nav_affiliates') + '</a>'
    + '</nav>';
}

function getFooterHTML() {
  var c7 = [
    ['BTC','#F7931A','<path d="M22.5 14.2c.3-2-1.2-3-3.3-3.7l.7-2.7-1.6-.4-.6 2.6-1.3-.3.6-2.6-1.6-.4-.7 2.7-1-.3-2.2-.5-.5 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.4.3.1-.3-.1-1.2 4.7c-.1.2-.3.5-.7.4l-1.2-.3-.8 1.8 2 .5 1.1.3-.7 2.7 1.6.4.7-2.7 1.3.3-.7 2.7 1.6.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2-.1-3.2-1.5-3.9 1-.2 1.8-1 2-2.3zm-3.6 5c-.5 2-3.9 1-5 .7l.9-3.5c1.1.3 4.6.8 4.1 2.8zm.5-5c-.5 1.8-3.3 1-4.2.7l.8-3.2c.9.2 3.9.7 3.4 2.5z" fill="white"/>'],
    ['ETH','#627EEA','<path d="M16.5 6v7.4l6.2 2.8L16.5 6z" fill="white" fill-opacity=".6"/><path d="M16.5 6L10.3 16.2l6.2-2.8V6z" fill="white"/><path d="M16.5 21.3v4.7l6.2-8.6-6.2 3.9z" fill="white" fill-opacity=".6"/><path d="M16.5 26V21.3l-6.2-3.9L16.5 26z" fill="white"/>'],
    ['USDT','#26A17B','<path d="M17.9 17.3c-.1 0-.9.1-1.9.1s-1.7-.1-1.9-.1C11 17 8.9 16.3 8.9 15.5s2.1-1.5 5.2-1.8v1.2c.2 0 1 .1 1.9.1.9 0 1.7-.1 1.9-.1v-1.2c3.1.2 5.2 1 5.2 1.8 0 .8-2.1 1.5-5.2 1.8zm0-3.5v-1.1h4.2V10H9.9v2.7h4.2v1.1C10.6 14.1 8 15.2 8 16.5c0 1.3 2.6 2.4 6.1 2.7v5.8h3.8v-5.8c3.5-.3 6.1-1.4 6.1-2.7 0-1.3-2.6-2.4-6.1-2.7z" fill="white"/>'],
    ['USDC','#2775CA','<path d="M20 18.9c0-2-1.2-2.7-3.6-3-1.7-.2-2-.7-2-1.4s.5-1.2 1.6-1.2c1 0 1.5.3 1.8 1.1.1.2.2.3.4.3h.9c.3 0 .4-.2.4-.4 0-.9-.8-1.9-2.1-2.1V11c0-.3-.2-.4-.4-.4h-.8c-.3 0-.4.2-.4.4v1.1c-1.5.3-2.4 1.2-2.4 2.5 0 1.9 1.1 2.6 3.5 2.9 1.6.3 2.1.6 2.1 1.5s-.7 1.4-1.9 1.4c-1.5 0-2-.6-2.2-1.4-.1-.2-.2-.3-.4-.3h-.9c-.3 0-.4.1-.4.4 0 1.1.7 2.1 2.3 2.4V22c0 .3.2.4.4.4h.8c.3 0 .4-.2.4-.4v-1.1c1.5-.3 2.6-1.3 2.6-2.8z" fill="white"/>'],
    ['SOL','#9945FF','<path d="M9 20.5h11.5l2.5-2.5H11.5L9 20.5zm0-7h11.5L23 11H11.5L9 13.5zm2.5 3.5L9 19.5h11.5l2.5-2.5H11.5z" fill="white"/>'],
    ['BNB','#F3BA2F','<path d="M12.1 14.3L16 10.4l3.9 3.9 2.3-2.3L16 5.8 9.8 12l2.3 2.3zM6 16l2.3-2.3L10.6 16l-2.3 2.3L6 16zm6.1 1.7L16 21.6l3.9-3.9 2.3 2.3L16 26.2l-6.2-6.2 2.3-2.3zm9.3-1.7l2.3-2.3L26 16l-2.3 2.3L21.4 16zm-3.2 0l-2.3-2.3-2.3 2.3 2.3 2.3 2.3-2.3z" fill="white"/>'],
    ['DOGE','#C2A633','<path d="M16 7h-4.5v18H16c5 0 9-4 9-9s-4-9-9-9zm0 14.5h-2V10.5h2c3.6 0 6.5 2.5 6.5 5.5s-2.9 5.5-6.5 5.5zm-1-8.5v6h1c1.9 0 3.5-1.3 3.5-3s-1.6-3-3.5-3h-1z" fill="white"/>'],
  ];
  var cExtra = [
    ['LTC','#BFBBBB','<path d="M10 22h12v1.5H10zm2-4.8l4.8-7.2 1.2.8-4.1 6.2H23v1.5H10l2-7.5 1.5.4L12 17.2z" fill="white"/>'],
    ['BCH','#8DC351','<path d="M21 13.5c.3-2.1-1.3-3.2-3.5-3.9l.7-2.9-1.7-.4-.7 2.8-1.4-.3.7-2.8-1.7-.4-.7 2.9-3.3-.8-.5 1.8 1.3.3c.7.2.9.6.8 1l-2 8c-.1.3-.4.6-.9.5l-1.3-.3-.6 2 3.3.8-.7 2.9 1.7.4.7-2.9 1.4.3-.7 2.9 1.7.4.7-2.9c3 .6 5.1.3 6-2.1.7-2-.1-3.1-1.5-3.9 1.1-.3 1.9-1.1 2.2-2.4z" fill="white"/>'],
    ['XRP','#346AA9','<path d="M23 8h2.3l-5.8 5.8c-1.9 1.9-5 1.9-6.9 0L6.7 8H9l4.7 4.7c1.3 1.3 3.3 1.3 4.6 0L23 8zm-16.3 16H4.4l5.9-5.9c1.9-1.9 5-1.9 6.9 0l5.9 5.9H21l-4.8-4.8c-1.3-1.3-3.3-1.3-4.6 0L6.7 24z" fill="white"/>'],
    ['ADA','#0033AD','<circle cx="16" cy="9" r="2" fill="white"/><circle cx="16" cy="23" r="2" fill="white"/><circle cx="9.5" cy="12.5" r="1.8" fill="white"/><circle cx="22.5" cy="12.5" r="1.8" fill="white"/><circle cx="9.5" cy="19.5" r="1.8" fill="white"/><circle cx="22.5" cy="19.5" r="1.8" fill="white"/>'],
    ['TRX','#FF0013','<path d="M22.5 11.5L8 9l5.5 15.5 9-13zm-2.5.8l-5.5 7.5-2.5-7 8-.5z" fill="white"/>'],
    ['DOT','#E6007A','<circle cx="16" cy="9" r="2.5" fill="white"/><circle cx="16" cy="23" r="2.5" fill="white"/><circle cx="9.5" cy="12.5" r="2" fill="white"/><circle cx="22.5" cy="12.5" r="2" fill="white"/><circle cx="9.5" cy="19.5" r="2" fill="white"/><circle cx="22.5" cy="19.5" r="2" fill="white"/>'],
    ['LINK','#2A5ADA','<path d="M16 7l-2 1.2v4.6L10 15v4l4 2.2v2.4L16 25l2-1.4v-2.4L22 19v-4l-4-2.2V8.2L16 7zm0 5.8l3 1.7v3.4l-3 1.7-3-1.7v-3.4l3-1.7z" fill="white"/>'],
    ['AVAX','#E84142','<path d="M19.5 21H23l-7-12-3.5 6 2 3.5h-5.5l1.5 2.5h8.5zm-7 0H10l1.5-2.5h1z" fill="white"/>'],
    ['MATIC','#8247E5','<path d="M20.5 13.5l-2-1.2-4 2.3v4.6l4 2.3 4-2.3v-4l-2-1.7zm0 5.5l-2 1.2-2-1.2v-2.4l2-1.2 2 1.2v2.4zM13.5 10L9 12.7v5.5l2 1.2V14l2.5-1.5 2.5 1.5v5l2-1.2V12.7L13.5 10z" fill="white"/>'],
    ['DAI','#F5AC37','<path d="M9 10h7.5c3.6 0 6.5 2.5 6.5 5.5h-14V10zm0 7h14c0 3-2.9 5.5-6.5 5.5H9V17zm1.5-4h11c-.5-1.7-2.5-3-4.9-3H10.5v3zm0 2v3h6.1c2.4 0 4.4-1.3 4.9-3H10.5z" fill="white"/>'],
  ];

  function coin(c) {
    return '<div class="crypto-icon" title="' + c[0] + '">'
      + '<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="' + c[1] + '"/>' + c[2] + '</svg>'
      + '<span>' + c[0] + '</span></div>';
  }

  return '<footer class="site-footer">'
    + '<div class="footer-inner">'
    + '<div>'
    + '<span class="footer-crypto-label">' + t('footer_coins') + '</span>'
    + '<div class="crypto-icons" id="footer-coins">'
    + c7.map(coin).join('')
    + '<div class="coins-extra" id="coins-extra">' + cExtra.map(coin).join('') + '</div>'
    + '<button class="expand-btn" id="expand-btn" onclick="toggleCoins()">'
    + '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    + ' more</button>'
    + '</div>'
    + '</div>'
    + '<div class="footer-copy">'
    + t('footer_copy') + ' <a href="https://www.cloudbet.com" target="_blank" rel="noopener">Cloudbet.com</a>'
    + ' &middot; ' + t('footer_rights') + ' &middot; ' + t('footer_age') + ' &middot; ' + t('footer_gamble')
    + '</div>'
    + '</div>'
    + '</footer>';
}

function toggleCoins() {
  var el = document.getElementById('coins-extra');
  var btn = document.getElementById('expand-btn');
  if (!el) return;
  var open = el.classList.toggle('open');
  btn.innerHTML = open
    ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 8l4-4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> less'
    : '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> more';
}

// ── ARTICLE CARDS HTML ──
function artCardHTML(a, catColor) {
  return '<div class="art-card" onclick="location.href=\'article.html?id=' + a.id + '\'">'
    + '<div class="art-thumb"><img src="' + a.img + '" alt="" loading="lazy"></div>'
    + '<div class="art-body">'
    + '<div class="art-cat" style="color:' + catColor + '">' + a.cat.toUpperCase() + '</div>'
    + '<div class="art-title">' + a.title + '</div>'
    + '<div class="art-date">' + a.date + '</div>'
    + '</div></div>';
}
function artSmallHTML(a) {
  return '<div class="art-small" onclick="location.href=\'article.html?id=' + a.id + '\'">'
    + '<div class="art-small-thumb"><img src="' + a.img + '" alt="" loading="lazy"></div>'
    + '<div class="art-small-info">'
    + '<div class="art-small-title">' + a.title + '</div>'
    + '<div class="art-small-date">' + a.date + '</div>'
    + '</div></div>';
}
function artCardFullHTML(a, catColor, catLabel) {
  return '<div class="art-card-full" onclick="location.href=\'article.html?id=' + a.id + '\'">'
    + '<div class="art-thumb"><img src="' + a.img + '" alt="" loading="lazy"></div>'
    + '<div class="art-body">'
    + '<div class="art-cat" style="color:' + catColor + '">' + catLabel + '</div>'
    + '<div class="art-title" style="font-size:16px">' + a.title + '</div>'
    + '<div style="font-size:13px;color:var(--text-sec);margin-top:5px;line-height:1.5">' + (a.summary||'') + '</div>'
    + '<div class="art-date" style="margin-top:7px">' + a.date + '</div>'
    + '</div></div>';
}

// ── PAGE INIT ROUTER ──
document.addEventListener('DOMContentLoaded', function() {
  var p = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  var isAdmin = window.location.pathname.indexOf('/admin') !== -1;
  var activeKey = isAdmin ? '' : p;

  var hm = document.getElementById('header-mount');
  var fm = document.getElementById('footer-mount');
  if (hm) hm.innerHTML = getHeaderHTML(activeKey);
  if (fm) fm.innerHTML = getFooterHTML();

  if      (p === 'index'      || p === '')     initIndex();
  else if (p === 'casino')                     initCat('casino',     '#f0a500', t('cat_casino'));
  else if (p === 'sportsbook')                 initCat('sports',     '#4ade80', t('cat_sports'));
  else if (p === 'affiliates')                 initCat('affiliates', '#60a5fa', t('cat_affiliates'));
  else if (p === 'article')                    initArticle();
});

function initIndex() {
  var grid = document.getElementById('articles-grid');
  if (!grid) return;
  var all = DB.get('articles') || [];
  var cats = [
    { key: 'casino',     color: '#f0a500', label: t('cat_casino')     },
    { key: 'sports',     color: '#4ade80', label: t('cat_sports')     },
    { key: 'affiliates', color: '#60a5fa', label: t('cat_affiliates') },
    { key: 'blog',       color: '#a78bfa', label: t('cat_blog')       },
  ];
  grid.innerHTML = cats.map(function(cat) {
    var items = all.filter(function(a) { return a.cat === cat.key; });
    var featured = items[0];
    var smalls = items.slice(1, 4);
    var moreHref = cat.key === 'blog' ? 'blog.html' : cat.key + '.html';
    return '<div class="article-column">'
      + '<div class="col-header"><div class="col-dot" style="background:' + cat.color + '"></div><span class="col-label">' + cat.label + '</span></div>'
      + (featured ? artCardHTML(featured, cat.color) : '')
      + smalls.map(artSmallHTML).join('')
      + '<a href="' + moreHref + '" class="col-more section-more">' + t('more') + ' ' + cat.label + ' \u2192</a>'
      + '</div>';
  }).join('');
}

function initCat(catKey, catColor, catLabel) {
  var grid = document.getElementById('cat-grid');
  if (!grid) return;
  var items = (DB.get('articles') || []).filter(function(a) { return a.cat === catKey; });
  grid.innerHTML = items.length
    ? items.map(function(a) { return artCardFullHTML(a, catColor, catLabel); }).join('')
    : '<p style="color:var(--text-sec)">' + t('no_articles') + '</p>';
}

function initArticle() {
  var el = document.getElementById('article-content');
  if (!el) return;
  var id = parseInt(new URLSearchParams(window.location.search).get('id'));
  var art = (DB.get('articles') || []).find(function(a) { return a.id === id; });
  if (!art) { el.innerHTML = '<p style="color:var(--text-sec)">Article not found. <a href="index.html">\u2190 Home</a></p>'; return; }
  var colors = { casino:'#f0a500', sports:'#4ade80', affiliates:'#60a5fa', blog:'#a78bfa' };
  var color = colors[art.cat] || 'var(--cta)';
  document.title = art.title + ' \u2013 Crypto Bets HQ';
  el.innerHTML = '<div class="breadcrumb"><a href="index.html">' + t('bc_home') + '</a><span>\u203a</span>'
    + '<a href="' + art.cat + '.html">' + art.cat.charAt(0).toUpperCase() + art.cat.slice(1) + '</a>'
    + '<span>\u203a</span><span style="color:var(--text-sec)">' + art.title.slice(0,50) + '\u2026</span></div>'
    + '<h1 style="font-family:\'Outfit\',sans-serif;font-size:32px;font-weight:800;margin:14px 0 8px;line-height:1.2">' + art.title + '</h1>'
    + '<p style="color:var(--text-sec);font-size:15px;line-height:1.6;margin-bottom:10px">' + (art.summary||'') + '</p>'
    + '<div style="font-size:12px;color:var(--text-dim);margin-bottom:20px">Published ' + art.date + '</div>'
    + '<div style="border-radius:var(--radius-lg);overflow:hidden;margin-bottom:26px;height:340px;background:var(--panel)">'
    + '<img src="' + (art.img||'') + '" alt="" style="width:100%;height:100%;object-fit:cover"></div>'
    + '<div style="color:var(--text-sec);line-height:1.85;font-size:15px">' + (art.body || '<p>Full content coming soon.</p>') + '</div>'
    + '<div style="margin-top:32px;padding:22px;background:var(--card);border:1px solid rgba(221,181,254,0.3);border-radius:var(--radius-lg);text-align:center">'
    + '<div style="font-family:\'Outfit\',sans-serif;font-size:20px;font-weight:700;margin-bottom:8px">' + t('art_cta_title') + '</div>'
    + '<div style="font-size:13px;color:var(--text-sec);margin-bottom:16px">' + t('art_cta_desc') + '</div>'
    + '<a href="' + AFFILIATE_URL + '" target="_blank" rel="noopener" class="btn btn-green">' + t('art_cta_btn') + '</a>'
    + '</div>';
}
