// Add the reference to the interface
import { TodoItemInterface } from "./interfaces";
import { TodoListInterface } from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: string = "";
  status: boolean;
  updatedAt: Date = new Date();
  constructor(taskTitle: string, taskStatus: boolean, taskUpdate: any) {
    this.title = taskTitle;
    this.status = taskStatus;
    this.updatedAt = taskUpdate;
  }

  toggleStatus() {
    this.status = !status;
    console.log(`EL estado de ${this.title}, ha cambiado a ${this.status}`);
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks: Array<TodoItem> = [];
  constructor() {}
  addTask(task: TodoItem): void {
    if (task) {
      this.tasks.push(task);
      console.log(`
      Agregaste una task a la lista : ${task.title} 
      en status ${task.status}
      con la fecha ${task.updatedAt}
      `);
    }
  }
  listAllTasks() {
    this.tasks.forEach(element => console.log(element));
  }
  deleteTask(task: TodoItem) {
    if (task) {
      let deleteItem = this.tasks.splice(this.tasks.indexOf(task), 1);
      console.log(`============ITEM REMOVED =============`);
      console.log(deleteItem);
      console.log(`tarea removida: ${task}`);
      console;
      return this.tasks.length;
    }
  }
  showLeft() {}
}
// Execution
let task1 = new TodoItem("This is our first task", true, Date.now());
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!", true, Date.now());
let task3 = new TodoItem("Finish this iteration 1!! 🤓", true, Date.now());
let task4 = new TodoItem("Finish this iteration 2!! 🤓", true, Date.now());
let task5 = new TodoItem("Finish this iteration 3!! 🤓", true, Date.now());

let myTodos = new TodoList();
console.log(myTodos.tasks);
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
//myTodos.listUncomplete();
