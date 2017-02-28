import React from 'react'
import { addTodo } from '../actions/index'
import { connect } from 'react-redux'

let NewTodo = ({ dispatch }) => {
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
                    dispatch(addTodo(inputField.value));
                    inputField.value = '';
                }}>
                    Add
                </button>
            </div>
        </div>
    );
};

NewTodo = connect()(NewTodo)

export default NewTodo
