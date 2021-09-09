import { setUser } from '../local-storage-utils.js';

const newUserForm = document.getElementById('create-account-submit');



//set up event listener for new user form
//inside this event what do I want to have happen? Create a new user

newUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(newUserForm);
    const user = { username:data.get('username'), password:data.get('password'), todos:[] };
    setUser(user);

    window.location = '../todos/index.html';

});