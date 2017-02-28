import React, { Component } from 'react';
// import '../App.css';
import NewTodoContainer from './NewTodoContainer.js'
import TodoContainer from './TodoContainer.js'

export default class App extends Component {
    /*constructor(props) {
        super(props)
        this.state = {
            todos: [ ]
        }
    }

    addTodo(newValue) {
        if (newValue !== '') {
            this.state.todos.push({
                text: newValue,
                key: Date.now()
            });
        }
        this.setState({ todos: this.state.todos });
    }

    removeTodo(key) {
        const todoList = this.state.todos.filter((todo) => {
            if(todo.key !== key) {
                return todo;
            }
        });
        this.setState({ todos: todoList });
    }*/

    render() {
        return (
            <div>
                <div className="body row">
                    <div className="large-4 columns"><p></p></div>
                    <div className="large-4 columns"><h1>Todo App</h1></div>
                    <div className="large-4 columns"></div>
                </div>
                <NewTodoContainer /*addTodo={this.addTodo.bind(this)}*/ />
                <TodoContainer /*todos={this.state.todos} removeTodo={this.removeTodo.bind(this)}*/ />
            </div>
        )
    }
}
