// Menú móvil
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario de contacto (placeholder: aún no conectado a un backend)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let status = contactForm.querySelector('.form-status');
  if (!status) {
    status = document.createElement('p');
    status.className = 'form-status';
    contactForm.appendChild(status);
  }
  status.textContent = 'Gracias, te vamos a contactar pronto. (Formulario de ejemplo: falta conectar a un servicio de envío real.)';

  contactForm.reset();
});
