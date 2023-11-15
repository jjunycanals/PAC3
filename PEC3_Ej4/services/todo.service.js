"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Service
 *
 * Manages the data of the application.
 */
var todo_model_1 = require("../models/todo.model");
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(function (todo) { return new todo_model_1.Todo(todo); });
    }
    TodoService.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    TodoService.prototype.onTodoListChanged = function (todos) { };
    TodoService.prototype._commit = function (todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    TodoService.prototype.addTodo = function (text) {
        this.todos.push(new todo_model_1.Todo({ text: text }));
        this._commit(this.todos);
    };
    TodoService.prototype.editTodo = function (id, updatedText) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id
                ? new todo_model_1.Todo(__assign(__assign({}, todo), { text: updatedText }))
                : todo;
        });
        this._commit(this.todos);
    };
    TodoService.prototype.deleteTodo = function (_id) {
        this.todos = this.todos.filter(function (_a) {
            var id = _a.id;
            return id !== _id;
        });
        this._commit(this.todos);
    };
    TodoService.prototype.toggleTodo = function (_id) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === _id ? new todo_model_1.Todo(__assign(__assign({}, todo), { complete: !todo.complete })) : todo;
        });
        this._commit(this.todos);
    };
    return TodoService;
}());
