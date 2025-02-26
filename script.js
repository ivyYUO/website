document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validation
    if (password !== confirmPassword) {
      document.getElementById('feedback').textContent = 'Passwords do not match.';
      return;
    }
  
    if (password.length < 8) {
      document.getElementById('feedback').textContent = 'Password must be at least 8 characters long.';
      return;
    }
  
    // Simulate form submission
    document.getElementById('feedback').textContent = 'Registration successful!';
    console.log({ name, email, password });
  
    // Clear form
    document.getElementById('registrationForm').reset();
  });