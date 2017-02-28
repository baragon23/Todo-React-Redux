import TodoList from './TodoList'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/index'

const mapStateToProps = (state) => {
    return  {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        }
    }
};

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContainer
