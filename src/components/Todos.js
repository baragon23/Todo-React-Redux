import React from 'react'

const Todos = ({
    todo,
    removeTodo
}) => (
    <div>
        <div className="large-4 columns"><p></p></div>
        <div className="large-4 columns">
            <input
                onChange={() => {}}
                type="text"
                value={todo.text}
            />
        </div>
        <div className="large-4 columns">
            <button type="button" className="alert button"
                onClick={() => {
                    removeTodo(todo.key)
                }}>
                Delete
            </button>
        </div>
    </div>
)

export default Todos
