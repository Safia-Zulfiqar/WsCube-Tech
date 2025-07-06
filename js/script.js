const form = document.getElementById('Demo-registerForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default form submission

    if (form.checkValidity()) {
      //Form is valid, show modal
      const modal = new bootstrap.Modal(document.getElementById('register-modal'));
      modal.show();
      form.reset(); // Optional: clear form after successful registration
    } else {
      //Form is invalid, show browser's validation
      form.reportValidity(); // Shows HTML5 validation messages
    }
  });