import * as types from '../constants/ActionTypes';

let nextTaskId = 0;

export const addTodo = (task) => ({
    type: types.ADD_TODO,
    text: task,
    id: nextTaskId++
});

export const deleteTodo = (taskId) => ({
    type: types.DELETE_TODO,
    id: taskId
});
