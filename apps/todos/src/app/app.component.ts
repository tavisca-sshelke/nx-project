import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '../../../../libs/data/src/lib/data'


@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  // addTodo() {
  //   this.todos.push({
  //     title: `New todo ${Math.floor(Math.random() * 1000)}`,
  //   });
  // }
  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}