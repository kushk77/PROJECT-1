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

// ✅ Web3Forms Submission (unchanged)
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

// ✅ Hamburger Menu (added for mobile)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // Optional: toggle between ☰ and ✖ icon
    if (navMenu.classList.contains('show')) {
      hamburger.textContent = '✖';
    } else {
      hamburger.textContent = '☰';
    }
  });

  // Close menu when a link is clicked (mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      hamburger.textContent = '☰';
    });
  });

  // Close menu when clicking outside (optional)
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('show');
      hamburger.textContent = '☰';
    }
  });
}
