/**
 * ═══════════════════════════════════════════════════════
 *   HARSHITH.LAB — Core App JS
 *   Handles: theme, data rendering, search/filter, hero
 *            animations, scroll reveals, detail page
 * ═══════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── 1. THEME ─── */
    const themeBtn = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme') || 'light';
    applyTheme(saved);

    themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        const icon = themeBtn ? themeBtn.querySelector('i') : null;
        if (icon) {
            icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }


    /* ─── 2. NAVBAR SCROLL ─── */
    const nav = document.getElementById('mainNav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 30);
        }, { passive: true });
    }


    /* ─── 3. HERO ENTRANCE ANIMATIONS ─── */
    const heroEls = [
        { id: 'hero-eyebrow',  delay: 100 },
        { id: 'hero-title',    delay: 300 },
        { id: 'hero-sub',      delay: 500 },
        { id: 'hero-badges',   delay: 650 },
        { id: 'hero-cta',      delay: 800 },
        { id: 'hero-deco',     delay: 900 },
    ];

    heroEls.forEach(({ id, delay }) => {
        const el = document.getElementById(id);
        if (!el) return;
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)';
            el.style.transform = 'translateY(0)';
            el.style.opacity = '1';
        }, delay);
        // start below
        el.style.transform = 'translateY(20px)';
    });

    /* ─── 4. TYPING EFFECT on hero title ─── */
    const nameEl = document.querySelector('.hero-title .name-highlight');
    if (nameEl) {
        const fullText = nameEl.textContent.trim();
        nameEl.innerHTML = '<span class="typing-cursor"></span>';
        const cursor = nameEl.querySelector('.typing-cursor');
        let i = 0;
        function typeChar() {
            if (i < fullText.length) {
                nameEl.insertBefore(document.createTextNode(fullText[i++]), cursor);
                setTimeout(typeChar, 90);
            }
        }
        setTimeout(typeChar, 800);
    }


    /* ─── 5. SCROLL REVEAL ─── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


    /* ─── 6. DATA RENDERING ─── */
    const isHomePage   = document.getElementById('featured-container');
    const isExpPage    = document.getElementById('experiments-grid');
    const isDetailPage = document.getElementById('experiment-content');

    const data = typeof experimentsData !== 'undefined' ? experimentsData : [];

    if (isHomePage)   renderFeatured(data);
    if (isExpPage)    initExperimentsPage(data);
    if (isDetailPage) renderDetails(data);


    /* — Render featured cards on home — */
    function renderFeatured(data) {
        const container = document.getElementById('featured-container');
        const featured  = data.filter(e => e.featured).slice(0, 3);

        if (featured.length === 0) {
            container.innerHTML = `<div class="col-12 text-center py-5"><p style="color:var(--text-muted)">No featured experiments yet.</p></div>`;
            return;
        }

        container.innerHTML = featured.map((exp, i) =>
            cardHTML(exp, i)
        ).join('');
    }

    /* — Experiments page with search + filter — */
    function initExperimentsPage(data) {
        const grid      = document.getElementById('experiments-grid');
        const searchEl  = document.getElementById('search-input');
        const filterBtns = document.querySelectorAll('.filter-btn');
        let activeFilter = 'All';

        renderGrid(data, 'All', '');

        if (searchEl) {
            searchEl.addEventListener('input', () =>
                renderGrid(data, activeFilter, searchEl.value));
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.dataset.filter;
                renderGrid(data, activeFilter, searchEl ? searchEl.value : '');
            });
        });

        function renderGrid(data, filter, search) {
            let list = data;
            if (filter !== 'All') list = list.filter(e => e.category === filter);
            if (search.trim())    list = list.filter(e =>
                e.title.toLowerCase().includes(search.toLowerCase()) ||
                e.description.toLowerCase().includes(search.toLowerCase())
            );

            if (list.length === 0) {
                grid.innerHTML = `<div class="col-12 text-center py-5">
                    <p style="color:var(--text-muted); font-family:'Inter',sans-serif;">No experiments match your criteria.</p>
                </div>`;
                return;
            }

            grid.innerHTML = list.map((exp, i) => cardHTML(exp, i)).join('');
        }
    }

    /* — Card HTML factory — */
    function cardHTML(exp, index = 0) {
        const inPages   = window.location.pathname.includes('/pages/');
        const imgPath   = inPages ? `../${exp.output_image}` : exp.output_image;
        const detailPath = inPages
            ? `experiment-details.html?id=${exp.id}`
            : `pages/experiment-details.html?id=${exp.id}`;
        const delay = index * 0.1;

        return `
        <div class="col-md-6 col-lg-4 reveal reveal-delay-${Math.min(index + 1, 4)}">
            <div class="experiment-card">
                <div class="card-img-wrap">
                    <img src="${imgPath}" class="card-img-top" alt="${exp.title}"
                         onerror="this.src='https://placehold.co/400x195/E8DCCF/C9A96E?text=${encodeURIComponent(exp.id.toUpperCase())}'">
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="category-badge">${exp.category}</span>
                        <span class="date-chip"><i class="fa-regular fa-calendar me-1"></i>${exp.date}</span>
                    </div>
                    <h5 class="card-title mb-2">${exp.title}</h5>
                    <p class="card-text flex-grow-1 mb-3" style="font-size:0.88rem;">${exp.description}</p>
                    <div class="mt-auto">
                        <a href="${detailPath}" class="btn-gold" style="font-size:0.82rem; padding:0.55rem 1.2rem;">
                            Read More <i class="fa-solid fa-arrow-right fa-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    }


    /* — Detail page — */
    function renderDetails(data) {
        const params = new URLSearchParams(window.location.search);
        const exp    = data.find(e => e.id === params.get('id'));

        if (!exp) {
            document.getElementById('experiment-content').innerHTML =
                `<div class="text-center py-5"><h2>Experiment Not Found</h2><a href="experiments.html" class="btn-gold mt-3">Back to Experiments</a></div>`;
            return;
        }

        document.title = `${exp.title} | HARSHITH.LAB`;

        const techBadges = exp.tech.map(t => `<span class="category-badge me-1 mb-1">${t}</span>`).join('');
        const procedures = exp.procedure.map((s, i) => `
            <div class="d-flex gap-3 align-items-start mb-3 fs-body">
                <span style="width:28px; height:28px; min-width:28px; border-radius:50%; background:rgba(201,169,110,0.12); border:1px solid rgba(201,169,110,0.3); display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; color:var(--gold); font-family:'Inter',sans-serif;">${i + 1}</span>
                <p class="mb-0" style="color:var(--charcoal-soft); padding-top:3px;">${s}</p>
            </div>`
        ).join('');

        document.getElementById('experiment-content').innerHTML = `
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-5">
                <ol class="breadcrumb fs-body" style="font-size:0.85rem;">
                    <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="experiments.html">Experiments</a></li>
                    <li class="breadcrumb-item active">${exp.id.toUpperCase()}</li>
                </ol>
            </nav>

            <!-- Header -->
            <div class="mb-5 reveal">
                <span class="category-badge mb-3 d-inline-block">${exp.category}</span>
                <h1 class="mb-3" style="font-size:clamp(1.8rem,4vw,2.8rem);">${exp.title}</h1>
                <div class="d-flex flex-wrap gap-3 fs-body" style="font-size:0.85rem; color:var(--text-muted);">
                    <span><i class="fa-regular fa-calendar me-1"></i>${exp.date}</span>
                    <span><i class="fa-solid fa-tags me-1"></i>${exp.tech.join(', ')}</span>
                </div>
            </div>

            <div class="row g-5 reveal">
                <!-- Main Content -->
                <div class="col-lg-8">

                    <section class="mb-5">
                        <h3 class="doc-section-title">1. Objective</h3>
                        <p class="fs-body" style="font-size:1rem; line-height:1.8;">${exp.objective}</p>
                    </section>

                    <section class="mb-5">
                        <h3 class="doc-section-title">2. Theory</h3>
                        <p class="fs-body" style="font-size:0.95rem; line-height:1.8;">${exp.theory}</p>
                    </section>

                    <section class="mb-5">
                        <h3 class="doc-section-title">3. Procedure</h3>
                        ${procedures}
                    </section>

                    <section class="mb-5">
                        <h3 class="doc-section-title">4. Source Code</h3>
                        <pre><code>${escapeHtml(exp.code)}</code></pre>
                    </section>
                </div>

                <!-- Sidebar -->
                <div class="col-lg-4">
                    <div class="sticky-top" style="top:88px;">
                        <div class="sidebar-card mb-4">
                            <div class="card-header">
                                <i class="fa-solid fa-desktop me-2" style="color:var(--gold)"></i>Expected Output
                            </div>
                            <img src="../${exp.output_image}" class="img-fluid" alt="Output Preview"
                                 onerror="this.src='https://placehold.co/400x260/E8DCCF/C9A96E?text=Output+Preview'">
                        </div>

                        <div class="sidebar-card p-3">
                            <p class="fw-700 mb-2 fs-body" style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--charcoal);">Technologies</p>
                            <div class="d-flex flex-wrap gap-2">
                                ${techBadges}
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        // Trigger reveal for newly added elements
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }


    /* — Utility — */
    function escapeHtml(text) {
        const d = document.createElement('div');
        d.textContent = text;
        return d.innerHTML;
    }

});
