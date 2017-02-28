import React from 'react'

const TodoList = ({ todos, onDeleteClick }) => (
    <div>
        { todos.map((todo) =>
            <div className="row" key={todo.id}>
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
                        onClick={() => {
                            onDeleteClick(todo.id)
                        }}>
                        Delete
                    </button>
                </div>
            </div>
        )}
    </div>
);

export default TodoList
