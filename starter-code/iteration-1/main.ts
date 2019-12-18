// Iteration 1
//* 1. Create an array of strings
let tasks: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string) {
  if (task) {
    tasks.push(task);
  }
  let insertion = `se ha insertado ${task} a la lista `;
  let totalTask = ` en tu lista tienes ${tasks} con ${tasks.length} tareas`;
  return console.log(`
  =========== NEW TASK ===========
       TASK : ${insertion}
       ${totalTask}
  `);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(tasks: Array<string>) {
  tasks.forEach(element => {
    return console.log(element);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string) {
  if (task) {
    let index = tasks.findIndex(tarea => tarea === task);
    tasks.splice(index, 1);
  }
  return console.log(`
  se ha borrado la tarea con exito
  aun tienes ${task.length} tareas pendientes
  `);
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
