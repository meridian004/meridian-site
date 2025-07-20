// Simple form handler for the Meridian Strategic Resources contact page
// Prevents default submission and displays a success message on the page
window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quoteForm');
  const success = document.getElementById('successMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // In production, this would send data via AJAX to a backend
      success.style.display = 'block';
      form.reset();
    });
  }

  // Simple testimonial slider: cycle through testimonials one at a time
  const testimonials = document.querySelectorAll('.testimonial-slider .testimonial-card');
  if (testimonials && testimonials.length > 0) {
    let testimonialIndex = 0;
    // Show the first testimonial
    testimonials[testimonialIndex].classList.add('active');
    setInterval(() => {
      // Hide current
      testimonials[testimonialIndex].classList.remove('active');
      // Move to next index (loop around)
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
      testimonials[testimonialIndex].classList.add('active');
    }, 7000); // change testimonial every 7 seconds
  }

  // Back to top button functionality
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    // Toggle visibility on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    // Scroll smoothly to top on click
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
