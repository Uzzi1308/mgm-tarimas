  /* ── CONFIG ─────────────────────────────────────────── */
    const CONFIG = {
      whatsappNumber: '521XXXXXXXXXX', // ← Reemplaza con tu número real
      messages: {
        nuevas:    'Hola, quiero cotizar tarimas nuevas',
        recicladas:'Hola, quiero cotizar tarimas recicladas',
        medida:    'Hola, quiero cotizar una tarima hecha a la medida',
        general:   'Hola, me gustaría recibir más información sobre sus productos y servicios',
      },
    };

    /* ── WHATSAPP ─────────────────────────────────────── */
    function cotizar(tipo = 'general') {
      const msg = CONFIG.messages[tipo] ?? CONFIG.messages.general;
      window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }

    /* ── NAVBAR SCROLL ────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    /* ── MOBILE MENU ──────────────────────────────────── */
    const menuBtn    = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('hamburger-open');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.contains('open');
      if (open) { closeMobileMenu(); }
      else {
        mobileMenu.classList.add('open');
        menuBtn.classList.add('hamburger-open');
        document.body.style.overflow = 'hidden';
      }
    });

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });

    /* ── REVEAL ───────────────────────────────────────── */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* ── SCROLL-TO-TOP ────────────────────────────────── */
    const stBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      stBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

    /* ── SMOOTH LINKS ─────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight, behavior: 'smooth' });
        }
      });
    });

    /* ── YEAR ─────────────────────────────────────────── */
    document.getElementById('year').textContent = new Date().getFullYear();

    //todo: HERO ANIMATION ON LOAD
window.addEventListener('load', () => {

  //* activar textos
  document.querySelectorAll('.hero-anim').forEach(el => {
    el.classList.add('show');
  });

  //* activar imagen
  const img = document.querySelector('.hero-img');
  if (img) img.classList.add('show');

});