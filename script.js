/*
 * Client-side behavior for the Meridian Strategic Resources website.
 * The current implementation adds asynchronous form handling for the quote
 * submission form. On submit, it prevents the default browser refresh,
 * validates required fields, and displays a feedback message to the user.
 * In a production setting, this logic should be replaced with API calls
 * that integrate with an email service (e.g., Resend) and back‑end
 * processing to deliver the submission to the appropriate stakeholders.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quoteForm');
  const messageEl = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Simple client-side validation: ensure required fields are filled.
      const fullName = form.fullName.value.trim();
      const email = form.email.value.trim();
      const scope = form.scope.value.trim();

      // Reset message state
      messageEl.className = '';
      messageEl.classList.add('hidden');
      messageEl.textContent = '';

      if (!fullName || !email || !scope) {
        messageEl.textContent = 'Please complete all required fields before submitting.';
        messageEl.classList.remove('hidden');
        messageEl.classList.add('error');
        return;
      }

      // Here you would normally perform an AJAX POST request to your back‑end
      // service. For demonstration, we simulate a successful submission with
      // a timeout to mimic network latency.
      messageEl.textContent = 'Submitting your request…';
      messageEl.classList.remove('hidden');
      messageEl.classList.add('success');

      setTimeout(() => {
        messageEl.textContent = 'Your request has been submitted. We will reach out shortly.';
        messageEl.classList.remove('hidden');
        messageEl.classList.add('success');
        // Reset the form fields
        form.reset();
      }, 800);
    });
  }
});