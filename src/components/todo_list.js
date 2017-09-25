import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAll} from "../actions"; //same as '../actions/index'


class TodoList extends Component {
    componentWillMount(){
        this.props.getAll();
    }

    render(){
        console.log('TodoList Props:', this.props);

        const todosList = this.props.todos.map((item,index)=>{
            return <li>{item.title}</li>
        });

        return (
            <div>
                <h1 className="text-center mt-3">Todo List</h1>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        todos: state.todos.all
    }
}

export default connect(mapStateToProps, {getAll})(TodoList);
