import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Todo} from '../store/todo';
import {AppState} from '../store/store';
import {REMOVE_ALL_TODOS} from '../store/actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  @select() todos: Observable<Todo[]>;
  @select() lastUpdate: Observable<Date>;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit(): void {
  }

  public clearTodos(): void {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }

}
