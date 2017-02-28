import { combineReducers } from 'redux';

// Reducers
import tasksReducer from './tasks';

// Combine Reducers
var reducers = combineReducers({
    todos: tasksReducer
});

export default reducers;
