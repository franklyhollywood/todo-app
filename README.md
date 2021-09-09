## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


HTML page for user sign up: 
    form for new user to crate account: 
    username and password field
    on submit: Create new user object with that username and password - inject into local storage.
    on submit: create empty array of To do's, inject it into local storage and send the user to todo page

HTML page for user log in:
    username and password field
    get user from local storage
    check that the password is correct, if so send the user to todo page / if not show error.


HTML page for to do's
    UL to inject new to do's into
    form to add new to do's.

Events:
    on loading the page: renderTodos()
    on submitting a new todo: 
        updat state
            get the todo data from the form.
            make a new to do object with an id, completed, and to todo properties.
            push the new todo into the new todo array
        update DOM
            renderToDos()
    Clicking on a todo:
        update state
            find the todo we clicked on
            change it's completed property to true
        updat DOM
            renderTodos()
                clear out the old todos from the DOM (ul.textContent = '')
                get todos from local storage
                loop over the todos and for each todo, create a LI and append it to our UL
                when we loop, render completd todos differently from incomplete todos
    local storage functions:
        getUser()
        setUser()
        getToDos()
            return an array of todos (NOT the whole object)
        setToDos(todos)
            put the todos in the right place in local storage
        addTodo(message)
            create a todo using teh is message and put it into local storage
        completeToDo(id)
            find teh correct to do in your array
            set that to do to completed true