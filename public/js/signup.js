// any logic for the signup functionality would go here
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name: name, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
  
        alert('Failed to sign up.');
      }
    } else {
      alert('You need both a username and password to sign up');
    }
  };
  
  document.querySelector('#signup_btn').addEventListener('click', signupFormHandler);

// hint- remember to import them in your handlebars!
