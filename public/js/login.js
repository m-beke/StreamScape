// any logic for the login functionality would go here
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    console.log(email,username,password);
    if (username && password && email) {
      const response = await fetch('/api/users/login/', {
        method: 'POST',
        body: JSON.stringify({ username:username, password:password,email:email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document.querySelector('#login_btn').addEventListener('submit', loginFormHandler);
// hint- remember to import them in your handlebars!
