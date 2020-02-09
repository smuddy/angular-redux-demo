import {Todo} from './todo';
import {ADD_TODO, REMOVE_ALL_TODOS, REMOVE_TODO, TOGGLE_TODO} from './actions';

export interface AppState {
  todos: Todo[];
  lastUpdate: Date;
}


export const INITIAL_STATE: AppState = {
  todos: [],
  lastUpdate: null,
};


function addTodo(action: any, state: AppState) {
  action.todo.id = state.todos.length + 1;
  return {
    todos: [...state.todos, {...action.todo}],
    lastUpdate: new Date()
  };
}

function toggleTodo(state: AppState, action: any) {
  const todo = state.todos.find(_ => _.id === action.id);
  const index = state.todos.indexOf(todo);
  return {
    todos: [
      ...state.todos.slice(0, index),
      {...todo, isCompleted: !todo.isCompleted},
      ...state.todos.slice(index + 1)
    ],
    lastUpdate: new Date()
  };
}

function removeTodo(state: AppState, action: any) {
  const todo = state.todos.find(_ => _.id === action.id);
  const index = state.todos.indexOf(todo);
  return {
    todos: [
      ...state.todos.slice(0, index),
      ...state.todos.slice(index + 1)
    ],
    lastUpdate: new Date()
  };
}

export function rootReducer(state: AppState, action: any): AppState {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(action, state);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    case REMOVE_TODO:
      return removeTodo(state, action);
    case REMOVE_ALL_TODOS:
      return {
        todos: [],
        lastUpdate: new Date()
      };
  }
  return state;
}

