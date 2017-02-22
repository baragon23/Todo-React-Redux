import * as types from '../actions/index';

const initialState = {
    tasks: []
};

export default const taskReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.NEW_TASK:
            return Object.assign({}, state, { task: action.task });

        case types.DELETE_TASK:

            const todoList = state.tasks.filter((task) => {
                if(task.key !== action.key) {
                    return todo;
                }
            });
            return Object.assign({}, state, tasks: todoList);

        default:
            return state;
    }
}
