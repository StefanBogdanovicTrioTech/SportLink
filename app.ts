document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;
  
      const email = emailInput.value;
      const password = passwordInput.value;
  
      // Perform client-side validation
      if (isValidEmail(email) && isValidPassword(password)) {
        alert('Login successful!');
        // Redirect or perform other actions upon successful login
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  
    function isValidEmail(email: string): boolean {
      // Add your email validation logic here
      return /\S+@\S+\.\S+/.test(email);
    }
  
    function isValidPassword(password: string): boolean {
      // Add your password validation logic here
      return password.length >= 6;
    }
  });

  