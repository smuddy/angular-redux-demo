import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {Todo} from '../../store/todo';
import {AppState} from '../../store/store';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../../store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @select() public todos: Observable<Todo[]>;
  public model: Todo = {
    id: 0,
    isCompleted: false,
    description: '',
    priority: 'low',
    responsible: ''
  };

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit(): void {
  }

  public onNew(): void {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }

  public toggleTodo(id: number): void {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id});
  }

  public removeTodo(id: number): void {
    this.ngRedux.dispatch({type: REMOVE_TODO, id});
  }

}
