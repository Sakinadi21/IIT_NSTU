document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image-card');
  
    images.forEach(image => {
      image.addEventListener('click', () => {
        alert('You clicked on a memory!');
      });
    });
  
    // Smooth scrolling effect
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  