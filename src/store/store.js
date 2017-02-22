import { createStore } from 'redux';
import reducers from '../reducers/tasks';

const store = createStore(reducers);
export default store;
