<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  // Initialize EmailJS
  (function() {
    emailjs.init("your-user-id"); // Replace with your EmailJS user ID
  })();

  // Function to send email
  function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = event.target;
    const formData = new FormData(form);

    emailjs
      .send("service_q63fuqs", "your-template-id", {
        from_name: formData.get("from_name"),
        from_email: formData.get("from_email"),
        message: formData.get("message"),
      })
      .then(
        function(response) {
          alert("Email sent successfully!");
          form.reset(); // Clear the form after successful submission
        },
        function(error) {
          alert("Failed to send email. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  }
</script>
