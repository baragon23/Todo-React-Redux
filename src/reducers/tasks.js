import * as types from '../constants/ActionTypes';

let nextTaskId = 0;

const taskReducer = (state = [], action) => {

    switch(action.type) {

        case types.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    id: nextTaskId++
                }
            ]

        case types.DELETE_TODO:
            const taskId = action.id;
            return state.filter((task) => task.id !== taskId);

        default:
            return state;
    }
}

export default taskReducer
