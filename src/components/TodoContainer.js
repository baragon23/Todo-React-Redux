import React from 'react'
import Todos from './Todos.js'
import store from '../store/store'
import { connect } from 'react-redux'

/*const TodoContainer = props => {
    return (
        <div className="row">
            { props.todos.map((todo, i) => <Todos key={i} todo={todo} removeTodo={props.removeTodo} /> )}
        </div>
    )
}

export default TodoContainer */

const TodoContainer = React.createClass({

    render: function() {
        return (
            <div className="row">
                { props.todos.map((todo, i) => <Todos key={i} todo={todo} removeTodo={props.removeTodo} /> )}
            </div>
        );
    }
});

const mapStateToProps = function(store) {
    return  {
        todos: store.taskState.tasks
    }
};

export default connect(mapStateToProps)(TodoContainer)
