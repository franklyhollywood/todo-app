        
export const USER = 'USER';
        
    //getUser() Gets user from local storage:
export function getUser() {
    let stringyUser = localStorage.getItem(USER);
    
    return JSON.parse(stringyUser);
}
  

    //set user: puts user into local storage:
export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}
 

//get the users to do list:
export function getTodos() {
    const user = getUser();

    return user.todos;
}


//put todos into the local storage when created:
export function setTodos(todos) {
    const user = getUser();

    user.todos = todos;

    setUser(user);
}

// add the todo to the list of todos, and set it in localstorage
export function addTodo(message) {
    const todos = getTodos();

    const newTodo = {
        id: Math.ceil(Math.random() * 10000),
        todo: message,
        completed: false,
    };
    todos.push(newTodo);

    setTodos(todos);
}


// 
export function completeTodo(id) {
    const todos = getTodos();

    const matchingTodo = todos.find((todo) => todo.id === id);

    matchingTodo.completed = true;

    setTodos(todos);
}

