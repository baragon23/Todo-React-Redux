import React from 'react'

let NewTodo = ({ onAddClick }) => {
    let inputField;

    return (
        <div className="row">
            <div className="large-4 columns"><p></p></div>
            <div className="large-4 columns">
                <input type="text" placeholder="Enter new todo..." ref={node => {
                    inputField = node;
                }} />
            </div>
            <div className="large-4 columns">
                <button className="button success" onClick={() => {
                    onAddClick(inputField.value);
                    inputField.value = '';
                }}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default NewTodo
