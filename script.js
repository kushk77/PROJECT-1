
// ✅ Hero Slideshow
const slides = document.querySelectorAll('.hero img');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// ✅ Web3Forms Submission
const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: formData
  });

  if (response.ok) {
    status.style.color = 'green';
    status.textContent = '✅ Message sent successfully!';
    form.reset();
  } else {
    status.style.color = 'red';
    status.textContent = '❌ Failed to send message. Please try again.';
  }
});

// ✅ Copy Phone Number (works for desktop)
function copyPhoneNumber() {
  const phoneNumber = "+91 98765 43210";
  navigator.clipboard.writeText(phoneNumber).then(() => {
    // Show a small success pop-up instead of alert
    const popup = document.createElement("div");
    popup.textContent = "📋 Phone number copied!";
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.background = "#4CAF50";
    popup.style.color = "white";
    popup.style.padding = "10px 15px";
    popup.style.borderRadius = "6px";
    popup.style.fontSize = "14px";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy phone number:", err);
  });
}
