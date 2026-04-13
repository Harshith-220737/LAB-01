/**
 * ═══════════════════════════════════════════════════════════════
 *   BANDARI HARSHITH — Portfolio JS
 *   Features: dark mode, scroll progress, scrollspy, reveal,
 *             hero entrance animations, typing effect
 * ═══════════════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── 1. THEME ─── */
    const themeBtn = document.getElementById('theme-toggle');
    const saved    = localStorage.getItem('ph-theme') || 'light';
    setTheme(saved);

    themeBtn.addEventListener('click', () => {
        setTheme(
            document.documentElement.getAttribute('data-theme') === 'dark'
                ? 'light' : 'dark'
        );
    });

    function setTheme(t) {
        document.documentElement.setAttribute('data-theme', t);
        localStorage.setItem('ph-theme', t);
        const ico = themeBtn.querySelector('i');
        if (ico) ico.className = t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }


    /* ─── 2. SCROLL PROGRESS BAR ─── */
    const progressBar = document.getElementById('progress-bar');
    function updateProgress() {
        const scrolled  = window.scrollY;
        const totalH    = document.documentElement.scrollHeight - window.innerHeight;
        const pct       = totalH > 0 ? (scrolled / totalH) * 100 : 0;
        if (progressBar) progressBar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });


    /* ─── 3. NAVBAR: elevation + active link (scrollspy) ─── */
    const nav       = document.getElementById('mainNav');
    const navLinks  = document.querySelectorAll('#mainNav .nav-link[href^="#"]');
    const sections  = Array.from(document.querySelectorAll('section[id]'));

    function onScroll() {
        /* Elevation */
        if (nav) nav.classList.toggle('nav-elevated', window.scrollY > 40);

        /* Active link */
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) - 24;
            if (window.scrollY >= top) current = sec.id;
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load


    /* ─── 4. SMOOTH NAV-LINK CLICKS (close mobile menu) ─── */
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const collapse = document.getElementById('navMenu');
            if (collapse && collapse.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(collapse).hide();
            }
        });
    });


    /* ─── 5. HERO ENTRANCE ANIMATIONS ─── */
    const heroItems = [
        { id: 'h-eye',   delay: 200 },
        { id: 'h-name',  delay: 420 },
        { id: 'h-title', delay: 600 },
        { id: 'h-tag',   delay: 760 },
        { id: 'h-cta',   delay: 900 },
        { id: 'h-deco',  delay: 1000 },
    ];

    heroItems.forEach(({ id, delay }) => {
        const el = document.getElementById(id);
        if (!el) return;
        setTimeout(() => {
            el.style.transition = 'opacity .75s cubic-bezier(0.25,0.46,0.45,0.94), transform .75s cubic-bezier(0.25,0.46,0.45,0.94)';
            el.style.opacity    = '1';
            el.style.transform  = 'translateY(0)';
        }, delay);
    });


    /* ─── 6. TYPING EFFECT on hero name ─── */
    const typedEl = document.querySelector('#h-name .last');
    if (typedEl) {
        const full = typedEl.textContent.trim();
        typedEl.innerHTML = '<span class="typing-cursor"></span>';
        const cur = typedEl.querySelector('.typing-cursor');
        let i = 0;
        function typeNext() {
            if (i < full.length) {
                typedEl.insertBefore(document.createTextNode(full[i++]), cur);
                setTimeout(typeNext, 85);
            }
        }
        setTimeout(typeNext, 700);
    }


    /* ─── 7. SCROLL REVEAL ─── */
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                revealObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

});
