import { addTodo, getUser, getTodos } from '../local-storage-utils.js';
import { renderTodoItem } from '../render-utils.js';


//grab the form element
// const todoFormEl = document.getElementById('todo-form');
//console.log(todoForm);

//grab an empty UL element
// const todoEl = document.getElementById('todo-items');

//grab input field
//const todoInput = document.getElementById('todo-input');

//grab the user from local storage and set it to a constant
// const user = getUser();

// const list = getTodos();

// for (let todo of list) {
//     const listItem = renderTodoItem(todo);
//         //append LI to todoEl
//     todoEl.append(listItem);
const todoFormEl = document.getElementById('todo-form');
// }
renderTodoItem();
//add event listener to the form
todoFormEl.addEventListener('submit', (e) => {
    //prevent default form activity
    e.preventDefault();
    //package into javascript (newformdata)
    const data = new FormData(todoFormEl);
    addTodo(data.get('todo-input'));
    //console.log(userInput);
    //Inject the input text into UL (textcontent)
    //todoEl.textContent = data.get('todo-input');
    //set the input text to a const
    //push that const into todos array
    //set the user object with updated array to local storage
    // addTodo(userInput);
    // //Getting the user and returning the users todos...
    // const todos = getTodos();
    // // clear out existing todo list
    // todoEl.textContent = '';
    // //loop through todos and render each todo to the UL (Including to do just added)
    // for (let todo of todos) {

    //     const listItem = renderTodoItem(todo);
    //             //append LI to todoEl
    //     todoEl.append(listItem);
    // }
        
    renderTodoItem();
    todoFormEl.reset();
});


