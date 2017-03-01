import React from 'react';
import NewTodoContainer from '../containers/NewTodoContainer'
import TodoContainer from '../containers/TodoContainer'

const App = () => (
        <div>
            <div className="body row">
                <div className="large-4 columns"><p /></div>
                <div className="large-4 columns"><h1>Ben's Amazing Todo List</h1></div>
                <div className="large-4 columns" />
            </div>
            <NewTodoContainer />
            <TodoContainer />
        </div>
)

export default App
