

export function renderTodoItem(singleTodoItem) {
    const listItem = document.createElement('li');
    const completedButton = document.createElement('button');
    

    //update text in li
    listItem.textContent = singleTodoItem.todo;
    //give text to the button
    completedButton.textContent = 'completed';
    //append text and button to LI
    listItem.append(completedButton);
    
    return listItem;
}