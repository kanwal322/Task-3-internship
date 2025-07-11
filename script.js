document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  function setError(el, msg) {
    const errorEl = document.getElementById(el.id + 'Error');
    if (!errorEl) return;
    if (msg) {
      errorEl.textContent = msg;
      errorEl.classList.add('visible');
    } else {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value.trim());
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let hasError = false;

    if (!fullName.value.trim()) {
      setError(fullName, 'Full Name is required.');
      hasError = true;
    } else {
      setError(fullName, '');
    }

    if (!email.value.trim()) {
      setError(email, 'Email is required.');
      hasError = true;
    } else if (!isValidEmail(email.value)) {
      setError(email, 'Please enter a valid email address.');
      hasError = true;
    } else {
      setError(email, '');
    }

    if (!message.value.trim()) {
      setError(message, 'Message is required.');
      hasError = true;
    } else {
      setError(message, '');
    }

    const successMessage = document.getElementById('successMessage');
    if (!hasError) {
      successMessage.style.display = 'block';
      form.reset();
    } else {
      successMessage.style.display = 'none';
    }
  });
});
