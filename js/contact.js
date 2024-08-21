document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById("contact_name").value.trim();
    const email = document.getElementById("contact_email").value.trim();
    const phone = document.getElementById("contact_phone").value.trim();
    const message = document.getElementById("contact_message").value.trim();

    // Validation flags
    let isValid = true;

    // Name validation: Minimum 5 characters
    if (name.length < 5) {
      alert("Name must be at least 5 characters long.");
      isValid = false;
    }

    // Email validation: Must be a valid email address
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    // Phone validation: Must contain only numbers
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
      alert("Phone number must contain only numbers.");
      isValid = false;
    }

    // Message validation: Minimum 5 characters
    if (message.length < 5) {
      alert("Message must be at least 5 characters long.");
      isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
