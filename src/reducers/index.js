import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
  books: BooksReducer,
  users: UsersReducer
});

export default rootReducer;
