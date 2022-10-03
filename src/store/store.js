import {createStore} from 'redux';
import ExpensesSlice from './ExpensesSlice';
import {combineReducers} from 'redux';
const reduser = combineReducers({
  ExpensesSlice: ExpensesSlice,
});

const store = createStore(reduser);

export default store;
