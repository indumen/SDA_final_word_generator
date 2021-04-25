import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo.model';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  activeTodo: Todo = new Todo();
  todoList: Todo[] = [];
  constructor() {
    this.activeTodo = new Todo(null, null, null);
  }

  ngOnInit(): void {
    this.todoList = [
      new Todo(uuid(), 'go to the market', false),
      new Todo(uuid(), 'talk to a dealer', false),
      new Todo(uuid(), 'buy some laptops', false),
      new Todo(uuid(), 'find the perfect pen', true),
      new Todo(uuid(), 'eat some apples', false)
    ];
  }
  onChangeTodoStatus(todoId?: string): void {
    this.todoList.map((currentTodoItem) => {
      if (currentTodoItem.id === todoId) {
        currentTodoItem.isCompleted = !currentTodoItem.isCompleted;
        return;
      }
    });
  }
  onDeleteTodo(todoId: string): void {
    this.todoList = this.todoList.filter(
      (currentTodoItem) => currentTodoItem.id !== todoId
    );
  }
  onAddTodo(newTodoText: string): void {
    if ( newTodoText === '' ) { return; }
    const taskId = uuid();
    this.todoList.unshift(
      new Todo(taskId, newTodoText, false)
    );
  }
  updateTodo(): void {
    this.todoList.map((currentTodoItem) => {
      if (currentTodoItem.id === this.activeTodo.id) {
        currentTodoItem.task = this.activeTodo.task;
        return;
      }
    });
  }
}
