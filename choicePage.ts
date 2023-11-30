document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
    const signUpButton = document.getElementById('signUpButton') as HTMLButtonElement;
  
    loginButton.addEventListener('click', () => {
      window.location.href = 'login.html'; // Replace with the actual login page URL
    });
  
    signUpButton.addEventListener('click', () => {
      window.location.href = 'signup.html'; // Replace with the actual sign up page URL
    });
  });