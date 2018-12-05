import { combineReducers } from 'redux';
import todos from './todosreducer';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;