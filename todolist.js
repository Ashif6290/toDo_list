const todos = ['wake up', 'Brush Teeth', 'Study'];
let input;
do {
    input = prompt("What would you like to do?");
    if (input === "new") {
        let newTodo = prompt("Enter a new Task:");
        todos.push(newTodo);
        console.log("task added:",newTodo);
    }
    else if (input === 'list') {
        for (let i of todos) {
            console.log(i);
        }
    }
    else if (input === 'delete') {
        let indx = prompt("Which index element you want to remove?");
        indx = parseInt(indx);

        if (indx >= 0 && indx < todos.length) {
            let removeTodo = todos.splice(indx, 1);
            console.log("Task Removed:", removeTodo);
        } else {
            console.log("Invalid index");
        }
    }
} while (input !== 'quit' && input !== 'q');

console.log("Ok Quit the app")