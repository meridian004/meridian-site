// script.js

// Update the copyright year automatically
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
  }

  // Quote form submission handler
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = document.getElementById('formStatus');
      status.textContent = 'Submitting...';
      // Simulate asynchronous form processing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Reset the form after submission
      quoteForm.reset();
      status.textContent = 'Thank you! Your submission has been received.';
    });
  }
});
