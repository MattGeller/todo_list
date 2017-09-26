import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleTodo, toggleComplete} from "../actions";

class SingleItem extends Component {
    componentWillMount(){
        console.log('Item ID', this.props.match.params.id);

        this.props.getSingleTodo(this.props.match.params.id);
    }

    handleToggle(){
        console.log('handleToggle');
        this.props.toggleComplete(this.props.match.params.id);
    }

    render(){
        console.log('SingleItem props:', this.props);

        const {todo} = this.props;

        if(!todo){
            return <h1 className="text-center">Loading...</h1>
        }

        return (
            <div>
                <h1>Todo Item</h1>
                <h3>Title: {todo.title}</h3>
                <button onClick={() => this.handleToggle()}>{todo.complete ? 'Incomplete' : 'Complete'}</button>
                {/*<p>{this.props.match.params.id}</p>*/}
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, {getSingleTodo,toggleComplete})(SingleItem);