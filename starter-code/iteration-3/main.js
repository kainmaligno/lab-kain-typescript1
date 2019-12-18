"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(taskTitle, taskStatus, taskUpdate) {
        this.title = "";
        this.updatedAt = new Date();
        this.title = taskTitle;
        this.status = taskStatus;
        this.updatedAt = taskUpdate;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !status;
        console.log("EL estado de " + this.title + ", ha cambiado a " + this.status);
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        if (task) {
            this.tasks.push(task);
            console.log("\n      Agregaste una task a la lista : " + task.title + " \n      en status " + task.status + "\n      con la fecha " + task.updatedAt + "\n      ");
        }
        return this.tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.tasks.forEach(function (element) { return console.log(element); });
    };
    TodoList.prototype.deleteTask = function (task) {
        if (task) {
            var deleteItem = this.tasks.splice(this.tasks.indexOf(task), 1);
            console.log("============ITEM REMOVED =============");
            console.log(deleteItem);
            console.log("tarea removida: " + task.title);
            console;
            return this.tasks.length;
        }
    };
    TodoList.prototype.showLeft = function () { };
    return TodoList;
}());
// Execution
var task1 = new TodoItem("This is our first task", true, Date.now());
var task2 = new TodoItem("Eat pizza 🍕 yummy!!!", true, Date.now());
var task3 = new TodoItem("Finish this iteration 1!! 🤓", true, Date.now());
var task4 = new TodoItem("Finish this iteration 2!! 🤓", true, Date.now());
var task5 = new TodoItem("Finish this iteration 3!! 🤓", true, Date.now());
var myTodos = new TodoList();
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
