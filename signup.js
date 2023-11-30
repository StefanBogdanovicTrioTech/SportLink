// JavaScript for creating the sign-up form dynamically

document.addEventListener('DOMContentLoaded', function () {
    // Create form elements
    const container = document.getElementById('signupContainer');
  
    const form = document.createElement('form');
    form.id = 'signupForm';
  
    const userNameLabel = createLabel('userName', 'Username:');
    const userNameInput = createInput('text', 'userName', true);
  
    const passwordLabel = createLabel('password', 'Password:');
    const passwordInput = createInput('password', 'password', true);
  
  
    const sportistOption = createRadio('role', 'sportist', 'Sportist');
    const sponsorOption = createRadio('role', 'sponsor', 'Sponsor');
  
    const submitButton = createButton('submit', 'Sign Up');
  
    // Append form elements to the container
    container.appendChild(form);
    form.appendChild(userNameLabel);
    form.appendChild(userNameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(sportistOption.radio);
    form.appendChild(sportistOption.label);
    form.appendChild(sponsorOption.radio);
    form.appendChild(sponsorOption.label);
    form.appendChild(submitButton);
  
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      handleFormSubmission();
    });
  
    // Helper function to create label
    function createLabel(forAttribute, text) {
      const label = document.createElement('label');
      label.for = forAttribute;
      label.textContent = text;
      return label;
    }
  
    // Helper function to create input
    function createInput(type, id, required) {
      const input = document.createElement('input');
      input.type = type;
      input.id = id;
      input.name = id;
      if (required) {
        input.required = true;
      }
      return input;
    }
  
    // Helper function to create radio button
    function createRadio(name, value, text) {
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = name;
      radio.value = value;
      radio.id = value;
  
      const radioLabel = createLabel(value, text);
  
      return { radio, label: radioLabel };
    }
  
    // Helper function to create button
    function createButton(type, text) {
      const button = document.createElement('button');
      button.type = type;
      button.textContent = text;
      button.style.backgroundColor = '#007bff';
      button.style.color = '#fff';
      button.style.padding = '10px';
      button.style.border = 'none';
      button.style.borderRadius = '4px';
      button.style.cursor = 'pointer';
      button.style.width = '100%';
  
      // Event listener for button hover effect
      button.addEventListener('mouseover', function () {
        button.style.backgroundColor = '#0056b3';
      });
  
      // Event listener for button click
      button.addEventListener('click', function () {
        handleFormSubmission();
      });
  
      return button;
    }
  
    // Function to handle form submission
    function handleFormSubmission() {
      const userName = document.getElementById('userName').value;
      const password = document.getElementById('password').value;
      const role = document.querySelector('input[name="role"]:checked').value;
  
      // Perform actions with the form data as needed
      console.log('Username:', userName);
      console.log('Password:', password);
      console.log('Role:', role);
  
      // You can add code to submit the form data to the server using AJAX or other methods
    }
  });
  