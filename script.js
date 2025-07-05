const form = document.querySelector('.waitlist-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.email.value;
    localStorage.setItem('joga_waitlist_email', email);
    alert('Thanks for joining the waitlist!');
    form.reset();
  });
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}
