function matchPasswords() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if(password === confirmPassword) {
    alert('Account created successfully')
  } else {
    alert('Passwords do not match')
  }
};