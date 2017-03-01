import NewTodo from '../components/NewTodo'

import { connect } from 'react-redux'
import { addTodo } from '../actions/index'


const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            dispatch(addTodo(text))
        }
    }
}

let NewTodoContainer = connect(null, mapDispatchToProps)(NewTodo)

export default NewTodoContainer
