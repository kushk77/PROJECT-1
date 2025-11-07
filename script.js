// ✅ Hero Slideshow
const slides = document.querySelectorAll('.hero img');
let index = 0;
if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
}

// ✅ Web3Forms Submission
const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, { method: form.method, body: formData });
      if (response.ok) {
        status.style.color = 'green';
        status.textContent = '✅ Message sent successfully!';
        form.reset();
      } else {
        status.style.color = 'red';
        status.textContent = '❌ Failed to send message. Please try again.';
      }
    } catch (err) {
      status.style.color = 'red';
      status.textContent = '❌ Failed to send message. Please try again.';
      console.error(err);
    }
  });
}
