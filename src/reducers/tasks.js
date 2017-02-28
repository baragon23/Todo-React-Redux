import * as types from '../constants/ActionTypes';

const taskReducer = function(state = [], action) {
    switch(action.type) {

        case types.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text
                }
            ]

        case types.DELETE_TASK:
            const todoList = state.tasks.filter((task) => {
                if(task.key !== action.key) {
                    return task;
                }
            });
            return Object.assign({}, state, { tasks: todoList });

        default:
            return state;
    }
}

export default taskReducer
