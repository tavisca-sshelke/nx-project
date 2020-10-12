import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../../data/src/lib/data';

@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}

}
