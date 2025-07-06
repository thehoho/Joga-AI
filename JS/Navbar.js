document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Load saved mode
  if (localStorage.getItem("dark") === "true") {
    body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("dark", body.classList.contains("dark"));
    // Switch icon between sun and moon
    if (body.classList.contains("dark")) {
      toggle.innerHTML = "🌞"; // Sun icon
    } else {
      toggle.innerHTML = "🌙"; // Moon icon
    }
  });

  // Set initial icon based on mode
  if (body.classList.contains("dark")) {
    toggle.innerHTML = "🌞";
  } else {
    toggle.innerHTML = "🌙";
  }

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Optional: Close menu when clicking a link (for better UX)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 700 && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
