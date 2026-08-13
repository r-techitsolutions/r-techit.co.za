const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Contact email
const contactEmail = 'r-tech-itsolutions@outlook.com';

const revealButton = document.getElementById('revealEmail');

revealButton?.addEventListener('click', () => {
  window.location.href = `mailto:${contactEmail}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
