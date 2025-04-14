document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector('.gallery');
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  // Memory Click Alert using Event Delegation
  if (gallery) {
      gallery.addEventListener('click', (event) => {
          if (event.target.closest('.image-card')) {
              alert('You clicked on a memory!');
          }
      });
  }

  // Smooth scrolling effect only if needed
  if (window.scrollY > 0) {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  }

  // Toggle Navbar on Hamburger Click
  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
  });

  // Close Navbar when clicking outside (for better UX)
  document.addEventListener("click", (event) => {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
          navLinks.classList.remove("show");
      }
  });
});
