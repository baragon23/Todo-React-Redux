import * as types from '../actions/index';

export const newTask = (task) => ({
    type: types.NEW_TASK,
    task: task
});

export const deleteTask = (taskId) => ({
    type: types.DELETE_TASK,
    taskId: taskId
});
