const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Change this address if required.
const emailUser = 'info';
const emailDomain = 'r-techit.co.za';

const revealButton = document.getElementById('revealEmail');
const emailLink = document.getElementById('emailLink');

revealButton?.addEventListener('click', () => {
  const email = `${emailUser}@${emailDomain}`;
  emailLink.textContent = email;
  emailLink.href = `mailto:${email}`;
  emailLink.classList.remove('hidden');
  revealButton.classList.add('hidden');
});

document.getElementById('year').textContent = new Date().getFullYear();
