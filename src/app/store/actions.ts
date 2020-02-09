import {Action} from 'redux';
import {AppState} from './store';
import {Todo} from './todo';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS';

export interface AppAction extends Action<string> {
  reduce: (state: AppState) => AppState;
}

export class AddTodo implements AppAction {
  public type = 'ADD_TODO';

  constructor(public todo: Todo) {
  }

  public reduce(state: AppState): AppState {
    this.todo.id = state.todos.length + 1;
    return {
      todos: [...state.todos, this.todo],
      lastUpdate: new Date()
    };
  }

}
