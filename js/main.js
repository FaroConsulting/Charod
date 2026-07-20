// ---------- header scroll state ----------
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ---------- reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- project filter (Proyectos page) ----------
// Each .grid-card carries data-category="diseno" or data-category="diseno-desarrollo"
function initFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.grid-card');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'todos' || card.dataset.category === filter;
        card.hidden = !match;
      });
    });
  });
}
initFilters();

// ---------- media carousel (project detail page) ----------
// Slides are plain HTML: <div class="carousel-slide"><img src="..."></div>
// or <div class="carousel-slide"><video controls poster="..."><source src="..."></video></div>
// Add/remove/reorder slides directly in the .html file — the carousel below
// (arrows, dots, counter) builds itself from whatever slides it finds.
function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(root => {
    const track = root.querySelector('.carousel-track');
    const slides = Array.from(root.querySelectorAll('.carousel-slide'));
    const dotsWrap = root.querySelector('.carousel-dots');
    const counter = root.querySelector('.carousel-counter');
    const prevBtn = root.querySelector('.carousel-nav.prev');
    const nextBtn = root.querySelector('.carousel-nav.next');
    let index = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

    function pauseAllVideos() {
      slides.forEach(s => {
        const v = s.querySelector('video');
        if (v) v.pause();
      });
    }

    function go(i) {
      pauseAllVideos();
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
      if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => go(index - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => go(index + 1));
    go(0);
  });
}
initCarousels();
