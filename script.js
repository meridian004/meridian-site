// Simple form handler for the Meridian Strategic Resources contact page
// Prevents default submission and displays a success message on the page

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('quoteForm');
  const success = document.getElementById('successMessage');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // In a production environment this would send data via AJAX to a backend
      // For now we simply show a confirmation message and reset the form
      success.style.display = 'block';
      form.reset();
    });
  }
});
