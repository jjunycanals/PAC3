/**
 * @class View
 *
 * Visual representation of the model.
 */
import { Todo } from "../models/todo.model";

export class TodoView {
  private app: HTMLFormElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private submitButton: HTMLButtonElement;
  private title: HTMLHeadingElement;
  private todoList: HTMLFormElement;
  private _temporaryTodoText: string;

  constructor() {
    this.app = this.getElement("#root") as HTMLFormElement;
    this.form = this.createElement("form") as HTMLFormElement;
    this.input = this.createElement("input") as HTMLInputElement;
    this.input.type = "text";
    this.input.placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button") as HTMLButtonElement;
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1") as HTMLHeadingElement;
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list") as HTMLFormElement;
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  get _todoText(): string {
    return this.input.value;
  }

  private _resetInput(): void {
    this.input.value = "";
  }

  private createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  private getElement(selector: string): HTMLElement {
    const element = document.querySelector(selector);
    if (element) {
      return element as HTMLElement;
    } else {
        throw new Error(`L'element amb el selector ${selector} no es troba.`);
    }
  }

  displayTodos(todos: Todo[]): void {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input") as HTMLInputElement;
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span") as HTMLSpanElement;
        span.contentEditable = "true";
        span.classList.add("editable");

        if (todo.complete) {
          const strike = this.createElement("s") as HTMLElement;
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete") as HTMLButtonElement;
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }

    // Debugging
    console.log(todos);
  }

  private _initLocalListeners(): void {
    this.todoList.addEventListener("input", event => {
      if (event.target instanceof HTMLElement && event.target.className === "editable") {
        this._temporaryTodoText = event.target.innerText;
      }
    });
  }

  bindAddTodo(handler: (text: string) => void): void {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("click", event => {
      if (event.target instanceof HTMLElement && event.target.className === "delete") {
        const id = event.target.parentElement?.id;
        if (id) {
          handler(id);
        }

      }
    });
  }

  bindEditTodo(handler: (id: string, text: string) => void): void {
    this.todoList.addEventListener("focusout", event => {
      if (this._temporaryTodoText) {
        const id = event.target instanceof HTMLElement ? event.target.parentElement?.id : null;
        if (id) {
          handler(id, this._temporaryTodoText);
          this._temporaryTodoText = "";
        }

      }
    });
  }

  bindToggleTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("change", event => {
      if (event.target instanceof HTMLInputElement && event.target.type === "checkbox") {
        const id = event.target.parentElement?.id;
        if (id) {
          handler(id);
        }

      }
    });
  }
}
