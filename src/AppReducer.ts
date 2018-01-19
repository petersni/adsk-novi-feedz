import { TodoProps } from './Todo';

export type State = {
  readonly todos: TodoProps[];
};

interface TodoAction {
  todo: TodoProps;
  type: string;
}
interface SearchAction {
  type: string;
  query: string;
}

export type Action = TodoAction | SearchAction;

const initialState: State = {
  todos: [
    { title: 'Eat Lunch', completed: false, important: false },
    { title: 'Teach TypeScript', completed: false, important: true },
    { title: 'Perform Review', completed: false, important: true },
    { title: 'Show off Elm', completed: false, important: false }
  ]
};

const AppReducer = (state: State = initialState, action: Action) => {
  console.group('Action Received');
  console.log(`State:`, state);
  console.log(`Action:`, action);
  switch (action.type) {
    case 'TODO_CLICKED':
      console.log('WOOOO! I was clicked');
      state.todos.map(function(todo: TodoProps) {
        if (todo.title === (action as TodoAction).todo.title) {
          todo.completed = !todo.completed;
        }
      });
      break;
    default:
      console.warn('I was not handled 😢');
  }
  console.groupEnd();
  return state;
};
export default AppReducer;
