import { addTodo, getUser, getTodos } from '../local-storage-utils.js';


//grab the form element
const todoFormEl = document.getElementById('todo-form');
//console.log(todoForm);

//grab an empty UL element
const todoEl = document.getElementById('todo-items');

//grab input field
//const todoInput = document.getElementById('todo-input');

//grab the user from local storage and set it to a constant
const user = getUser();

//add event listener to the form
todoFormEl.addEventListener('submit', (event) => {
    //prevent default
    event.preventDefault();
    //package into javascript (newformdata)
    const data = new FormData(todoFormEl);
    const userInput = data.get('todo-input');
    //console.log(userInput);
    addTodo(userInput);
    //Inject the input text into UL (textcontent)
    //todoEl.textContent = data.get('todo-input');
    //set the input text to a const
    //push that const into todos array
    const todos = getTodos();
    console.log(todos);
    //set the user object with updated array to local storage
    
    //loop through todos and console log each todo
    for (let todo of todos) {
        
        const listItem = document.createElement('li');
        const completedButton = document.createElement('button');
        const text = document.createElement('p');

        //update text in li
        listItem.textContent = todoEl;
        //give text to the button
        completedButton.textContent = 'completed';
        //append text and button to LI
        listItem.append(text, completedButton);
        //append LI to todoEl
        listItem.append(todoEl);
    }
    
});
