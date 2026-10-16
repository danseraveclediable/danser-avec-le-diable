const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const subject = encodeURIComponent('Nouvelles de Danser avec le diable');
    const body = encodeURIComponent(
      'Bonjour,\n\nJe souhaite être informé(e) des nouvelles de Danser avec le diable.\nMon adresse e-mail : ' + email + '\n\nMerci.'
    );
    if (status) status.textContent = 'Ouverture de ton application e-mail…';
    window.location.href = 'mailto:contact@exemple.fr?subject=' + subject + '&body=' + body;
  });
}
