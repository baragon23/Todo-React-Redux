import { combineReducers } from 'redux';

// Reducers
import tasksReducer from './tasks';

// Combine Reducers
let reducers = combineReducers({
    todos: tasksReducer
});

export default reducers;
