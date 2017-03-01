import * as types from '../constants/ActionTypes';

export const addTodo = (task) => ({
    type: types.ADD_TODO,
    text: task
});

export const deleteTodo = (taskId) => ({
    type: types.DELETE_TODO,
    id: taskId
});
