function showMessage() {
  document.getElementById("output").textContent = "You clicked the button!";
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// ✨ Fade-in Animation on Scroll
const fadeEls = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// 📨 Form Submission Simulation
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("form-status").textContent = "✅ Message Sent Successfully!";
    event.target.reset();
  } else {
    document.getElementById("form-status").textContent = "⚠️ Please fill in all fields!";
  }

  return false;
}
