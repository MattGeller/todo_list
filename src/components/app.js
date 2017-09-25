import React from 'react';
import {Route} from 'react-router-dom'
import TodoList from './todo_list';
import AddForm from './add_form';

const App = () => (
    <div className="container">
        <Route path="/" exact component={TodoList}/>
        <Route path="/add-todo" component={AddForm}/>
    </div>
);

export default App;
