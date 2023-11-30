

document.addEventListener('DOMContentLoaded', function () {

  const container = document.getElementById('loginContainer');

  const form = document.createElement('form');
  form.id = 'loginForm';

  const emailLabel = createLabel('username', 'Username:');
  const emailInput = createInput('username', 'username', true);

  const passwordLabel = createLabel('password', 'Password:');
  const passwordInput = createInput('password', 'password', true);

  const submitButton = createButton('submit', 'Login');


  container.appendChild(form);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);


  form.addEventListener('submit', function (event) {
    event.preventDefault();
    handleFormSubmission();
  });


  function createLabel(forAttribute, text) {
    const label = document.createElement('label');
    label.for = forAttribute;
    label.textContent = text;
    return label;
  }


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


    button.addEventListener('mouseover', function () {
      button.style.backgroundColor = '#0056b3';
    });

    button.addEventListener('click', function () {
      handleFormSubmission();
    });

    return button;
  }


  function handleFormSubmission() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    console.log('Username:', username);
    console.log('Password:', password);


  }
});
