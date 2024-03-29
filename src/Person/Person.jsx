import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}> This is Person Component</h1>
            <p>I am {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;