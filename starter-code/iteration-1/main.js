// Iteration 1
//* 1. Create an array of strings
var tasks = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    if (task) {
        tasks.push(task);
    }
    var insertion = "se ha insertado " + task + " a la lista ";
    var totalTask = " en tu lista tienes " + tasks + " con " + tasks.length + " tareas";
    return console.log("\n  =========== NEW TASK ===========\n       TASK : " + insertion + "\n       " + totalTask + "\n  ");
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(tasks) {
    tasks.forEach(function (element) {
        return console.log(element);
    });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    if (task) {
        var index = tasks.findIndex(function (tarea) { return tarea === task; });
        tasks.splice(index, 1);
    }
    return console.log("\n  se ha borrado la tarea con exito\n  aun tienes " + task.length + " tareas pendientes\n  ");
}
console.log(tasks.length);
// Execution
/**
 *
 */
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks(tasks);
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks(tasks);
