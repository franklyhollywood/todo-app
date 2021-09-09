// import functions and grab DOM elements
import { getTodos, getUser } from './local-storage-utils.js';

const loginForm = document.getElementById('log-in-submit');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(loginForm);
    const user = getUser();
    //see if user already has an account
    if (data.get('username') === user.username) {
      //if so, check if password matches
        if (data.get('password') === user.password) {
        //if so, log in and display their todo's
            const todos = getTodos();
            window.location = './todos/index.html';
        //if not, display error message
        } else alert('Your password is wrong');
    } else {
        alert('you do not have an account');
        window.location = './newuser/index.html';
    }
});



