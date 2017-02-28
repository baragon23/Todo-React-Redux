import * as types from '../constants/ActionTypes';

export const addTodo = (task) => ({
    type: types.ADD_TODO,
    text: task
});

export const deleteTask = (taskId) => ({
    type: types.DELETE_TASK,
    taskId: taskId
});
