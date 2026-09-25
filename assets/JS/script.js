const root = document.documentElement;
const header = document.querySelector('.site-header');
const nav = document.querySelector('#site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const themeToggle = document.querySelector('.theme-toggle');

function currentTheme() {
  const explicitTheme = root.getAttribute('data-theme');
  if (explicitTheme) return explicitTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

themeToggle.addEventListener('click', () => {
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  try {
    localStorage.setItem('theme', nextTheme);
  } catch (e) {}
});

function setMenuOpen(isOpen) {
  nav.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(!nav.classList.contains('is-open'));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

let pendingReveals = Array.from(document.querySelectorAll('.reveal'));

function revealSectionsInView() {
  const revealLine = window.innerHeight * 0.9;
  pendingReveals = pendingReveals.filter((section) => {
    if (section.getBoundingClientRect().top < revealLine) {
      section.classList.add('is-visible');
      return false;
    }
    return true;
  });
}

function handleScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
  revealSectionsInView();
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', revealSectionsInView);
handleScroll();

document.getElementById('ano-atual').textContent = new Date().getFullYear();
