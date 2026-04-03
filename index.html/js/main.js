/**
 * NEXUS v1.0 — Main JS
 * ─────────────────────────────────────────────────────────────────
 * Features:
 *   • Lazy section loading via fetch() with loading indicator
 *   • Sections cached after first load — no double-fetching
 *   • Prefetch on nav hover for near-instant subsequent loads
 *   • Hash-based routing  (#s3  →  loads Module 03)
 *   • Keyboard shortcuts  (← →  cycle sections, / focus glossary)
 *   • Drilldown accordions + sub-tab switching
 *   • Glossary live filter
 *   • Progress tracker
 *   • Mobile sidebar toggle
 *   • Scroll-to-top button
 * ─────────────────────────────────────────────────────────────────
 */

// ─── SECTION REGISTRY ────────────────────────────────────────────
const SECTIONS = [
  's0','s1','s2','s3','s4','s5',
  's6','s6b','s6c',
  's7','s8','s9','s10','s11',
  's14','s15','s13'
];

const SECTION_FILES = {
  's0'  : 'sections/s0-introduction.html',
  's1'  : 'sections/s1-foundations.html',
  's2'  : 'sections/s2-terminology.html',
  's3'  : 'sections/s3-tracing.html',
  's4'  : 'sections/s4-osint.html',
  's5'  : 'sections/s5-tools.html',
  's6'  : 'sections/s6-economic-crimes.html',
  's6b' : 'sections/s6b-electronic-crimes.html',
  's6c' : 'sections/s6c-blockchain-pcmltf.html',
  's7'  : 'sections/s7-exchange-hacks.html',
  's8'  : 'sections/s8-ransomware-apts.html',
  's9'  : 'sections/s9-legal-process.html',
  's10' : 'sections/s10-asset-forfeiture.html',
  's11' : 'sections/s11-case-studies.html',
  's14' : 'sections/s14-dfir.html',
  's15' : 'sections/s15-malware.html',
  's13' : 'sections/s13-glossary.html',
};

// ─── STATE ───────────────────────────────────────────────────────
const visited  = new Set();
const loaded   = new Set();
const fetching = new Set();
let   currentId = null;

// ─── INIT ────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  attachNavHoverPrefetch();
  attachKeyboardNav();
  setupScrollTop();
  const hashId  = window.location.hash.replace('#', '');
  const startId = SECTIONS.includes(hashId) ? hashId : 's0';
  showSection(startId);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hidden');
  }, 1600);
});

window.addEventListener('hashchange', () => {
  const id = window.location.hash.replace('#', '');
  if (SECTIONS.includes(id) && id !== currentId) showSection(id, false);
});

// ─── SECTION LOADING ─────────────────────────────────────────────

async function showSection(id, pushHash = true) {
  if (!SECTIONS.includes(id)) return;
  setActiveNav(id);
  await loadSection(id);
  deactivateAll();
  document.getElementById(id)?.classList.add('active');
  currentId = id;
  visited.add(id);
  updateProgress();
  if (pushHash) history.pushState(null, '', '#' + id);
  const hero   = document.getElementById('heroSection');
  const header = document.querySelector('.site-header');
  window.scrollTo({ top: (hero?.offsetHeight || 0) + (header?.offsetHeight || 0), behavior: 'smooth' });
  document.getElementById('sidebar')?.classList.remove('open');
}

async function loadSection(id) {
  if (loaded.has(id)) return;
  if (fetching.has(id)) { await waitForLoad(id); return; }

  const file      = SECTION_FILES[id];
  const container = document.getElementById(id);
  if (!file || !container) return;

  fetching.add(id);
  showLoadingSpinner(container);

  try {
    const resp = await fetch(file, { cache: 'no-cache' });
    if (!resp.ok) throw new Error('HTTP ' + resp.status + ' — ' + file);
    const html = await resp.text();
    container.innerHTML = html;
    loaded.add(id);
    runInlineScripts(container);
  } catch (err) {
    container.innerHTML = buildErrorBlock(file, err.message);
    console.error('[NEXUS] Failed to load section ' + id + ':', err);
  } finally {
    fetching.delete(id);
  }
}

function prefetchSection(id) {
  if (loaded.has(id) || fetching.has(id) || !SECTION_FILES[id]) return;
  fetching.add(id);
  const container = document.getElementById(id);
  fetch(SECTION_FILES[id], { cache: 'no-cache' })
    .then(r => r.ok ? r.text() : Promise.reject(r.status))
    .then(html => {
      if (container && !loaded.has(id)) {
        container.innerHTML = html;
        runInlineScripts(container);
      }
      loaded.add(id);
    })
    .catch(() => {})
    .finally(() => fetching.delete(id));
}

function waitForLoad(id) {
  return new Promise(resolve => {
    const t = setInterval(() => {
      if (!fetching.has(id)) { clearInterval(t); resolve(); }
    }, 40);
  });
}

function showLoadingSpinner(container) {
  container.innerHTML =
    '<div class="section-loading">' +
      '<div class="section-loading-bar"><div class="section-loading-fill"></div></div>' +
      '<div class="section-loading-msg">Loading module\u2026</div>' +
    '</div>';
}

function buildErrorBlock(file, msg) {
  return '<div class="alert danger" style="margin:32px 0">' +
    '<div class="alert-label">\u26a0 Load Error</div>' +
    'Could not load <code>' + file + '</code><br><small>' + msg + '</small><br><br>' +
    '<small style="color:var(--text-dim)">Running locally? Use a static server:<br>' +
    '<code>python3 -m http.server 8080</code></small></div>';
}

function runInlineScripts(container) {
  container.querySelectorAll('script').forEach(old => {
    const s = document.createElement('script');
    s.textContent = old.textContent;
    old.parentNode.replaceChild(s, old);
  });
}

// ─── NAV HELPERS ─────────────────────────────────────────────────
function deactivateAll() {
  SECTIONS.forEach(s => document.getElementById(s)?.classList.remove('active'));
}

function setActiveNav(id) {
  const items = document.querySelectorAll('.nav-item');
  items.forEach(n => n.classList.remove('active'));
  const idx = SECTIONS.indexOf(id);
  if (items[idx]) items[idx].classList.add('active');
}

function attachNavHoverPrefetch() {
  document.querySelectorAll('.nav-item').forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
      if (SECTIONS[idx]) prefetchSection(SECTIONS[idx]);
    }, { passive: true });
  });
}

// ─── KEYBOARD NAVIGATION ─────────────────────────────────────────
function attachKeyboardNav() {
  document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea, [contenteditable]')) return;
    const idx = currentId ? SECTIONS.indexOf(currentId) : 0;
    if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && !e.altKey) {
      e.preventDefault();
      const next = SECTIONS[idx + 1];
      if (next) showSection(next);
    } else if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && !e.altKey) {
      e.preventDefault();
      const prev = SECTIONS[idx - 1];
      if (prev) showSection(prev);
    } else if (e.key === '/' && currentId === 's13') {
      e.preventDefault();
      document.getElementById('glossarySearch')?.focus();
    }
  });
}

// ─── PROGRESS TRACKER ────────────────────────────────────────────
function updateProgress() {
  const pct = Math.round((visited.size / SECTIONS.length) * 100);
  const fill  = document.getElementById('progressFill');
  const label = document.getElementById('progressPct');
  if (fill)  fill.style.width  = pct + '%';
  if (label) label.textContent = pct + '%';
}

// ─── DRILLDOWN ACCORDIONS ─────────────────────────────────────────
function toggleDrilldown(header) {
  const body   = header.nextElementSibling;
  const isOpen = body.classList.contains('open');
  header.closest('.section')
    ?.querySelectorAll('.drilldown-body.open')
    .forEach(b => {
      b.classList.remove('open');
      b.previousElementSibling?.classList.remove('open');
    });
  if (!isOpen) {
    body.classList.add('open');
    header.classList.add('open');
    const firstTab = body.querySelector('.sub-tab');
    if (firstTab) {
      body.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
      body.querySelectorAll('.subcategory-panel').forEach(p => p.classList.remove('active'));
      firstTab.classList.add('active');
      const pid = extractPanelId(firstTab.getAttribute('onclick'));
      if (pid) document.getElementById(pid)?.classList.add('active');
    }
    setTimeout(() => header.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150);
  }
}

// ─── SUB-TABS ─────────────────────────────────────────────────────
function switchTab(tabEl, panelId) {
  const body       = tabEl.closest('.drilldown-body');
  const tabGroup   = tabEl.closest('.subcategory-tabs');
  const panelGroup = body?.querySelector('.subcategory-panels');
  if (!tabGroup || !panelGroup) return;
  tabGroup.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
  panelGroup.querySelectorAll('.subcategory-panel').forEach(p => p.classList.remove('active'));
  tabEl.classList.add('active');
  document.getElementById(panelId)?.classList.add('active');
}

function extractPanelId(str) {
  if (!str) return null;
  const m = str.match(/'([^']+)'\)$/);
  return m ? m[1] : null;
}

// ─── GLOSSARY FILTER ──────────────────────────────────────────────
function filterGlossary() {
  const input = document.getElementById('glossarySearch');
  if (!input) return;
  const q = input.value.toLowerCase();
  document.querySelectorAll('.glossary-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

// ─── MOBILE SIDEBAR ───────────────────────────────────────────────
function toggleMobileNav() {
  document.getElementById('sidebar')?.classList.toggle('open');
}

// ─── SCROLL TO TOP ────────────────────────────────────────────────
function setupScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
