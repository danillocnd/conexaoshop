let PRODUCTS = window.STATIC_PRODUCTS || {};
const CONFIG = {
  whatsappNumber: '5561992778924',
  instagramUrl: 'https://instagram.com/',
  supportPhoneDisplay: '(61) 99277-8924',
  supportHoursLine1: 'Seg. à Sex, de 09h00 às 18h00',
  supportHoursLine2: 'Domingo (Atendimento ONLINE)',
  storeAddress: 'Ed. Victória Office Tower, SAUS - Brasília/DF',
  mapsUrl: 'https://maps.app.goo.gl/ohkUqeDR229ebDHT8',
  wazeUrl: 'https://ul.waze.com/ul?ll=-15.80293592%2C-47.88204432&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
  highlightBadge: 'tag', // 'tag' | 'discount' | 'none'
  sheetBase: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-30fDporPUQVWvM2ToXiLVUaLk8Gw51VMSnTVdM-eutN0b6vlCYRyZ2AjZ89az-IPKEwOBomKKFq0/pub',
  gids: { smartphones: '0', smartwatches: '2121083194', tablets: '1933516438', acessorios: '1034165509', eletronicos: '1148834297', seminovos: '992048711' }
};

const CATS = [
  { key: 'smartphones', label: 'Smartphones', icon: 'bi-phone' },
  { key: 'smartwatches', label: 'Smartwatches', icon: 'bi-watch' },
  { key: 'tablets', label: 'Tablets', icon: 'bi-tablet' },
  { key: 'acessorios', label: 'Acessórios', icon: 'bi-earbuds' },
  { key: 'eletronicos', label: 'Eletrônicos', icon: 'bi-tv' },
  { key: 'seminovos', label: 'Seminovos', icon: 'bi-arrow-repeat' }
];

const BRANDS = [
  { key: 'apple', label: 'Apple', keywords: ['iphone', 'apple watch', 'ipad', 'macbook', 'airpods'], src: 'assets/brand-apple.png' },
  { key: 'samsung', label: 'Samsung', keywords: ['samsung', 'galaxy'], src: 'assets/brand-samsung.png' },
  { key: 'motorola', label: 'Motorola', keywords: ['motorola', 'moto '], src: 'assets/brand-motorola.png' },
  { key: 'lg', label: 'LG', keywords: ['lg '], src: 'assets/brand-lg.png' },
  { key: 'baseus', label: 'Baseus', keywords: ['baseus'], src: 'assets/brand-baseus.png' }
];


function formatPrice(n) {
  return 'R$ ' + Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function nameWithBreak(name) {
  return (name || '').replace(/\s*\(/g, '<br>(');
}
function waLink(product) {
  const phone = CONFIG.whatsappNumber.replace(/\D/g, '');
  const msg = 'Olá! Quero comprar: ' + product.name + ' - ' + formatPrice(product.price);
  return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg);
}
function generalWaLink() {
  const phone = CONFIG.whatsappNumber.replace(/\D/g, '');
  return 'https://wa.me/' + phone + '?text=' + encodeURIComponent('Olá! Vim pelo site da Conexão Celulares e quero saber mais sobre os produtos.');
}
function badgeFor(p) {
  if (CONFIG.highlightBadge === 'tag') return p.tag || null;
  if (CONFIG.highlightBadge === 'discount' && p.oldPrice) return '-' + Math.round((1 - p.price / p.oldPrice) * 100) + '%';
  return null;
}

function productCardHTML(p, imgIdPrefix) {
  const badge = badgeFor(p);
  return '<div class="prod-card">' +
    (badge ? '<span class="prod-badge">' + badge + '</span>' : '') +
    '<div class="prod-img-wrap"><img loading="lazy" src="' + p.img + '" alt="' + p.name + '"></div>' +
    '<div class="prod-name">' + nameWithBreak(p.name) + '</div>' +
    '<div class="prod-price-block"><div class="prod-price">' + formatPrice(p.price) + '</div>' +
    (p.oldPrice ? '<div class="prod-old-price">' + formatPrice(p.oldPrice) + '</div>' : '') + '</div>' +
    '<a class="buy-btn" href="' + waLink(p) + '" target="_blank"><i class="bi bi-bag-check-fill"></i>Comprar</a>' +
    '</div>';
}

function renderCategorySections() {
  const container = document.getElementById('category-sections');
  if (!container) return;
  container.innerHTML = '';
  CATS.forEach((cat) => {
    if (cat.key === 'seminovos') { container.appendChild(buildSeminovosSection()); return; }
    const list = (PRODUCTS[cat.key] || []);
    const featured = list.slice(0, cat.key === 'smartphones' ? 10 : 6);
    const section = document.createElement('section');
    section.className = 'card';
    section.innerHTML =
      '<div class="card-box"><div class="card-header">' +
      '<div class="card-header-left"><span class="card-header-icon"><i class="bi ' + cat.icon + '"></i></span>' +
      '<span class="card-header-title">' + cat.label + '</span></div>' +
      '<div class="card-header-right"><button class="link-white" data-goto-cat="' + cat.key + '">Ver todos</button>' +
      '<div style="display:flex;gap:8px"><button class="arrow-btn" data-scroll="-680" data-row="' + cat.key + '"><i class="bi bi-chevron-left"></i></button>' +
      '<button class="arrow-btn" data-scroll="680" data-row="' + cat.key + '"><i class="bi bi-chevron-right"></i></button></div></div></div>' +
      (cat.key === 'eletronicos'
        ? '<div style="display:flex;gap:16px;padding:20px 20px 4px" id="row-wrap-' + cat.key + '">' +
          inlinePromoCardHTML() +
          '<div class="row-scroll no-scrollbar" id="row-' + cat.key + '" style="padding:0">' +
          featured.map((p) => productCardHTML(p)).join('') + featured.map((p) => productCardHTML(p)).join('') + '</div></div>'
        : '<div class="row-scroll no-scrollbar' + (cat.key === 'smartphones' ? ' double' : '') + '" id="row-' + cat.key + '">' +
          featured.map((p) => productCardHTML(p)).join('') + featured.map((p) => productCardHTML(p)).join('') + '</div>') +
      '</div>';
    container.appendChild(section);

    if (cat.key === 'smartwatches') container.appendChild(buildPromoBanners());
    if (cat.key === 'acessorios') container.appendChild(buildBrandsSection());
  });
  initRowAutoScroll();
  sizeDoubleRows();
  window.addEventListener('resize', sizeDoubleRows);
}

function sizeDoubleRows() {
  const mobile = window.innerWidth <= 768;
  document.querySelectorAll('.row-scroll.double').forEach((el) => {
    if (mobile) { el.style.gridAutoColumns = '82%'; return; }
    const gap = 16;
    const colWidth = Math.max(190, (el.clientWidth - gap * 4) / 5);
    el.style.gridAutoColumns = colWidth + 'px';
  });
}

function inlinePromoCardHTML() {
  return '<a class="promo-inline-card" href="' + '#' + '" data-wa-link target="_blank">' +
    '<img src="assets/banner-eletronicos.png" alt="Banner promocional - Apple Mac Mini M4"></a>';
}

function buildPromoBanners() {
  const wrap = document.createElement('section');
  wrap.className = 'promo-grid';
  wrap.innerHTML =
    '<a class="promo-banner" href="' + generalWaLink() + '" target="_blank"><picture><source media="(max-width:768px)" srcset="assets/banner1-mobile.png"><img src="assets/banner-promo.png" alt="Atendimento totalmente humanizado"></picture></a>';
  return wrap;
}

function buildSeminovosSection() {
  const list = (PRODUCTS.seminovos || []).slice(0, 8);
  const wrap = document.createElement('section');
  wrap.className = 'card';
  const cards = list.map((p, i) => {
    const wide = i === 0 || i === 7;
    if (wide) {
      return '<a class="bento-card wide" href="' + waLink(p) + '" target="_blank">' +
        '<img src="' + p.img + '" alt="' + p.name + '">' +
        '<div><div class="bento-name">' + nameWithBreak(p.name) + '</div>' +
        '<div style="font-size:11px;color:var(--muted3);margin-top:6px">Seminovos</div>' +
        '<div class="bento-price-block" style="margin-top:10px"><div class="bento-price">' + formatPrice(p.price) + '</div>' +
        '<span class="bento-buy-icon"><i class="bi bi-bag-check-fill"></i></span></div></div></a>';
    }
    return '<a class="bento-card square" href="' + waLink(p) + '" target="_blank">' +
      '<img src="' + p.img + '" alt="' + p.name + '">' +
      '<div class="bento-name">' + nameWithBreak(p.name) + '</div>' +
      '<div class="bento-price-block"><div class="bento-price">' + formatPrice(p.price) + '</div>' +
      '<span class="bento-buy-icon"><i class="bi bi-bag-check-fill"></i></span></div></a>';
  }).join('');
  wrap.innerHTML =
    '<div class="card-box"><div class="card-header"><div class="card-header-left">' +
    '<span class="card-header-icon"><i class="bi bi-arrow-repeat"></i></span>' +
    '<span class="card-header-title">Seminovos</span></div>' +
    '<button class="link-white" data-goto-cat="seminovos">Ver todos</button></div>' +
    '<div class="bento-grid">' + cards + '</div></div>';
  return wrap;
}

function buildBrandsSection() {
  const wrap = document.createElement('section');
  wrap.className = 'brands-section';
  const items = [...BRANDS, ...BRANDS, ...BRANDS].map((b, i) =>
    '<button class="brand-item" data-goto-brand="' + b.key + '"><img src="' + b.src + '" alt="' + b.label + '"></button>'
  ).join('');
  wrap.innerHTML =
    '<div class="card-box"><div class="card-header"><div class="card-header-left">' +
    '<span class="card-header-icon"><i class="bi bi-award"></i></span>' +
    '<span class="card-header-title">Marcas</span></div></div>' +
    '<div class="brands-track-wrap"><div class="brands-track">' + items + '</div></div></div>';
  return wrap;
}

function initRowAutoScroll() {
  const visibleRows = new Set();
  const rows = CATS.filter((c) => c.key !== 'seminovos').map((c) => c.key);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const key = e.target.dataset.rowKey;
      if (e.isIntersecting) visibleRows.add(key); else visibleRows.delete(key);
    });
  }, { threshold: 0.15 });

  rows.forEach((key, i) => {
    const el = document.getElementById('row-' + key);
    if (!el) return;
    el.dataset.rowKey = key;
    observer.observe(el);
    setTimeout(() => {
      advanceRow(el, visibleRows, key);
      setInterval(() => advanceRow(el, visibleRows, key), 3200 + i * 450);
    }, i * 800);
  });

  const catGrid = document.getElementById('cat-grid');
  if (catGrid) {
    catGrid.dataset.rowKey = 'cat-grid';
    observer.observe(catGrid);
    setTimeout(() => {
      advanceRow(catGrid, visibleRows, 'cat-grid');
      setInterval(() => advanceRow(catGrid, visibleRows, 'cat-grid'), 2600);
    }, 400);
  }
}
function advanceRow(el, visibleRows, key) {
  if (!visibleRows.has(key) || el.matches(':hover')) return;
  const card = el.firstElementChild;
  const step = card ? card.getBoundingClientRect().width + 16 : 220;
  const halfWidth = el.scrollWidth / 2;
  if (el.scrollLeft >= halfWidth - 1) el.scrollLeft -= halfWidth;
  smoothScrollTo(el, el.scrollLeft + step);
}
function smoothScrollTo(el, target, duration = 900) {
  const start = el.scrollLeft, diff = target - start, startTime = performance.now();
  const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  function step(now) {
    const elapsed = Math.min((now - startTime) / duration, 1);
    el.scrollLeft = start + diff * ease(elapsed);
    if (elapsed < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ---- Views: home / category / brand ----
function showView(view) {
  const home = document.getElementById('view-home');
  if (!home) { window.location.href = 'index.html'; return; }
  home.classList.toggle('hidden', view !== 'home');
  document.getElementById('view-category').classList.toggle('hidden', view !== 'category');
  document.getElementById('view-brand').classList.toggle('hidden', view !== 'brand');
  window.scrollTo(0, 0);
}
function goHome() { showView('home'); }
function goToCategory(key) {
  const cat = CATS.find((c) => c.key === key);
  document.getElementById('category-title').textContent = cat ? cat.label : '';
  const grid = document.getElementById('category-grid');
  grid.innerHTML = (PRODUCTS[key] || []).map((p) => productCardHTML(p)).join('');
  showView('category');
}
function goToBrand(key) {
  const brand = BRANDS.find((b) => b.key === key);
  if (!brand) return;
  document.getElementById('brand-title').textContent = brand.label;
  const all = Object.values(PRODUCTS).flat();
  const seen = new Set();
  const matches = all.filter((p) => brand.keywords.some((k) => p.name.toLowerCase().includes(k)))
    .filter((p) => { if (seen.has(p.id)) return false; seen.add(p.id); return true; });
  document.getElementById('brand-grid').innerHTML = matches.map((p) => productCardHTML(p)).join('');
  showView('brand');
}

// ---- Hero carousel ----
let heroIndex = 0;
function renderHeroDots() {
  const dots = document.querySelectorAll('.hero-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === heroIndex));
}
function setHeroIndex(i) {
  heroIndex = (i + 3) % 3;
  document.querySelectorAll('.hero-slide').forEach((el, idx) => el.classList.toggle('active', idx === heroIndex));
  renderHeroDots();
}

// ---- Header scroll shrink ----
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  const nav = document.getElementById('site-nav');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    if (nav) {
      if (y > lastY && y > 80) nav.classList.add('nav-hidden');
      else nav.classList.remove('nav-hidden');
    }
    lastY = y;
  }, { passive: true });
}

// ---- Quick menu drawer + support dropdown ----
function initMenus() {
  const topBarMsgs = document.querySelectorAll('.top-bar-msg');
  if (topBarMsgs.length) {
    let topBarIdx = 0;
    setInterval(() => {
      topBarMsgs[topBarIdx].classList.remove('active');
      topBarIdx = (topBarIdx + 1) % topBarMsgs.length;
      topBarMsgs[topBarIdx].classList.add('active');
    }, 3500);
  }
  const footerToggleBtn = document.getElementById('footer-toggle-btn');
  const footerGrid = document.getElementById('footer-grid-collapsible');
  if (footerToggleBtn && footerGrid) {
    footerToggleBtn.addEventListener('click', () => {
      footerToggleBtn.classList.toggle('open');
      footerGrid.classList.toggle('open');
    });
  }
  const quickToggles = document.querySelectorAll('.menu-toggle-btn');
  const quickOverlay = document.getElementById('quick-overlay');
  const quickDrawer = document.getElementById('quick-drawer');
  const closeQuick = document.getElementById('quick-close');
  function openQuick() { quickOverlay.classList.remove('hidden'); quickDrawer.classList.remove('hidden'); }
  function closeQuickFn() { quickOverlay.classList.add('hidden'); quickDrawer.classList.add('hidden'); }
  quickToggles.forEach(btn => btn.addEventListener('click', openQuick));
  quickOverlay.addEventListener('click', closeQuickFn);
  closeQuick.addEventListener('click', closeQuickFn);

  const supportWrap = document.getElementById('support-wrap');
  const supportDropdown = document.getElementById('support-dropdown');
  const supportOverlay = document.getElementById('support-overlay');
  function openSupport() { supportDropdown.classList.remove('hidden'); supportOverlay.classList.remove('hidden'); }
  function closeSupport() { supportDropdown.classList.add('hidden'); supportOverlay.classList.add('hidden'); }
  supportWrap.addEventListener('mouseenter', openSupport);
  supportWrap.addEventListener('mouseleave', closeSupport);
  document.getElementById('support-toggle').addEventListener('click', () =>
    supportDropdown.classList.contains('hidden') ? openSupport() : closeSupport());
  supportOverlay.addEventListener('click', closeSupport);
}

function initClickDelegation() {
  document.body.addEventListener('click', (e) => {
    const catBtn = e.target.closest('[data-goto-cat]');
    if (catBtn) { if (!document.getElementById('category-sections')) { window.location.href = 'index.html'; return; } e.preventDefault(); goToCategory(catBtn.dataset.gotoCat); return; }
    const brandBtn = e.target.closest('[data-goto-brand]');
    if (brandBtn) { goToBrand(brandBtn.dataset.gotoBrand); return; }
    const home = e.target.closest('[data-goto-home]');
    if (home) { goHome(); return; }
    const scrollBtn = e.target.closest('[data-scroll]');
    if (scrollBtn) {
      const row = document.getElementById('row-' + scrollBtn.dataset.row);
      if (row) row.scrollBy({ left: Number(scrollBtn.dataset.scroll), behavior: 'smooth' });
      return;
    }
    const dot = e.target.closest('.hero-dot');
    if (dot) { setHeroIndex(Number(dot.dataset.index)); return; }
    if (e.target.closest('#hero-prev')) { setHeroIndex(heroIndex - 1); return; }
    if (e.target.closest('#hero-next')) { setHeroIndex(heroIndex + 1); return; }
  });
}

// ---- Google Sheets live sync (falls back to static products-data.js) ----
function parseCsvLine(line) {
  const out = []; let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQ = !inQ; continue; }
    if (ch === ',' && !inQ) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out;
}
function parseProductsCsv(text, prefix) {
  const lines = text.split('\n').map((l) => l.replace(/\r$/, '')).filter(Boolean);
  return lines.slice(1).map((line, i) => {
    const [name, priceRaw, img] = parseCsvLine(line);
    const numeric = (priceRaw || '').replace(/[^\d,]/g, '').replace(',', '.');
    return { id: prefix + (i + 1), name: (name || '').trim(), price: parseFloat(numeric), img: (img || '').trim() };
  }).filter((p) => p.name && !isNaN(p.price));
}
async function syncFromSheet() {
  try {
    const entries = await Promise.all(Object.entries(CONFIG.gids).map(async ([key, gid]) => {
      const url = CONFIG.sheetBase + '?gid=' + gid + '&single=true&output=csv';
      const res = await fetch(url);
      if (!res.ok) throw new Error('fetch failed for ' + key);
      const text = await res.text();
      return [key, parseProductsCsv(text, key.slice(0, 2))];
    }));
    PRODUCTS = Object.fromEntries(entries);
    renderCategorySections();
  } catch (e) {
    console.warn('Sheet sync failed, using static products-data.js', e);
  }
}

function initConfigBoundElements() {
  document.querySelectorAll('[data-wa-link]').forEach((el) => { el.href = generalWaLink(); });
  document.querySelectorAll('[data-instagram-link]').forEach((el) => { el.href = CONFIG.instagramUrl; });
  document.querySelectorAll('[data-maps-link]').forEach((el) => { el.href = CONFIG.mapsUrl; });
  document.querySelectorAll('[data-waze-link]').forEach((el) => { el.href = CONFIG.wazeUrl; });
  document.querySelectorAll('[data-support-phone]').forEach((el) => { el.textContent = CONFIG.supportPhoneDisplay; });
  document.querySelectorAll('[data-support-hours]').forEach((el) => {
    el.innerHTML = CONFIG.supportHoursLine1 + '<br>' + CONFIG.supportHoursLine2;
  });
  document.querySelectorAll('[data-store-address]').forEach((el) => { el.textContent = CONFIG.storeAddress; });
}

document.addEventListener('DOMContentLoaded', () => {
  initConfigBoundElements();
  initHeaderScroll();
  initMenus();
  initClickDelegation();
  renderCategorySections();
  setHeroIndex(0);
  setInterval(() => setHeroIndex(heroIndex + 1), 5000);
  syncFromSheet();
});
