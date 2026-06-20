/* ── Nav: scroll state ── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Nav: mobile toggle ── */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
const toggleSpans = navToggle.querySelectorAll('span');

function openNav() {
  navLinks.classList.add('is-open');
  toggleSpans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
  toggleSpans[1].style.opacity   = '0';
  toggleSpans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  navToggle.setAttribute('aria-expanded', 'true');
}

function closeNav() {
  navLinks.classList.remove('is-open');
  toggleSpans[0].style.transform = '';
  toggleSpans[1].style.opacity   = '';
  toggleSpans[2].style.transform = '';
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  navLinks.classList.contains('is-open') ? closeNav() : openNav();
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

/* ── Hero: typewriter ── */
const phrases = [
  'Module Lead.',
  'AI Developer.',
  'Full Stack Engineer.',
  'Builder of things.',
];

const typer = document.getElementById('typewriter');
let pIdx = 0;
let cIdx = 0;
let erasing = false;

function tick() {
  const word = phrases[pIdx];

  if (erasing) {
    cIdx--;
    typer.textContent = word.slice(0, cIdx);
    if (cIdx === 0) {
      erasing = false;
      pIdx = (pIdx + 1) % phrases.length;
      setTimeout(tick, 380);
      return;
    }
    setTimeout(tick, 48);
  } else {
    cIdx++;
    typer.textContent = word.slice(0, cIdx);
    if (cIdx === word.length) {
      setTimeout(() => { erasing = true; tick(); }, 2200);
      return;
    }
    setTimeout(tick, 82);
  }
}

tick();

/* ── Scroll reveal ── */
const revealTargets = [
  '.section-heading',
  '.project-card',
  '.stat-card',
  '.skill-group',
  '.timeline-row',
  '.contact-wrap',
];

const revealEls = document.querySelectorAll(revealTargets.join(', '));

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in a grid
      const siblings = Array.from(entry.target.parentElement.children)
        .filter(c => c.classList.contains('reveal'));
      const delay = siblings.indexOf(entry.target) * 80;

      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -48px 0px',
});

revealEls.forEach(el => observer.observe(el));

/* ── Smooth anchor offset (fallback for older browsers) ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY
              - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
