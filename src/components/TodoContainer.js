import React from 'react'
import Todos from './Todos.js'

const TodoContainer = props => {
    return (
        <div className="row">
            { props.todos.map((todo, i) => <Todos key={i} todo={todo} removeTodo={props.removeTodo} /> )}
        </div>
    )
}

export default TodoContainer
