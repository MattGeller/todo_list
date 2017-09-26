import React from 'react';
import {Link} from 'react-router-dom';

export default props => {

    const { title, complete, _id } = props.listItem;

    // let itemClass = 'text-danger';

    // if(complete){
    //     itemClass = 'text-success';
    // }

    return <li className={`list-group-item text-${complete ? 'success' : 'danger'}`}>
        <Link to={`/view-item/${_id}`}>{title}</Link>
        </li>;
}
