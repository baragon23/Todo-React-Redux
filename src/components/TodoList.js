import React from 'react'

const TodoList = ({ todos }) => (

    /*h2> { todos.map((todo) => todo.text ) } </h2>*/

    <div>
        { todos.map((todo) =>
            <div className="row">
                <div className="large-4 columns"><p></p></div>
                <div className="large-4 columns">
                    <input
                        onChange={() => {}}
                        type="text"
                        value={ todo.text }
                    />
                </div>
                <div className="large-4 columns">
                    <button type="button" className="alert button"
                        /*onClick={() => {
                            removeTodo(todo.key)
                        }}*/>
                        Delete
                    </button>
                </div>
            </div>
        )}
    </div>
)

export default TodoList
