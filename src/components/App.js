import React, { Component } from 'react';
// import '../App.css';
import NewTodoContainer from './NewTodoContainer'
import TodoContainer from './TodoContainer'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="body row">
                    <div className="large-4 columns"><p></p></div>
                    <div className="large-4 columns"><h1>Ben's Amazing Todo List</h1></div>
                    <div className="large-4 columns"></div>
                </div>
                <NewTodoContainer />
                <TodoContainer />
            </div>
        )
    }
}
