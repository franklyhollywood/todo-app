import todoList from './data-model.js';
import { completeTodo, getTodos } from './local-storage-utils.js';

const ul = document.getElementById('todo-items');

export function renderTodoItem() {

    const getTodo = getTodos();

    ul.textContent = '';
    
    for (let todo of getTodo) {
        const listItem = document.createElement('li');
        const div = document.createElement('div');
        const completedButton = document.createElement('button');
        div.textContent = todo.todo;
        //give text to the button
        completedButton.textContent = 'completed';
        if (todo.completed === true) {
            div.style.textDecoration = 'line-through';
        }
   
    

    //update text in li
        
    //give text to the button

    //append text and button to LI
        
    
    //add event listener to button
    //set todo items completed property to true
        completedButton.addEventListener('click', () => { 
            completeTodo(todo.id);
            div.style.textDecoration = 'line-through';
            
        });
        listItem.append(div, completedButton);
        ul.append(listItem);
        console.log(ul);
    //if (singleTodoItem.completed === true) {
      //  var result = str.strike();
        //document.getElementById('listItem').innerHTML = result;
    //}
    //within function but outside eventlistener:
    //if completed property is true: then cross out the text 
    //and disable button
    } 


    


}