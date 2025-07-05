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
