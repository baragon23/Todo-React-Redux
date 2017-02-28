import React from 'react'
import TodoList from './TodoList'
import store from '../store/store'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return  {
        todos: state.todos
    }
};

const TodoContainer = connect(mapStateToProps)(TodoList);

export default TodoContainer
