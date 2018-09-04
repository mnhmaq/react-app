import React from 'react';
import Styles from './Person.css';

const person = (props) => {
    // const random = Math.random();

    // if (random > .7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className={Styles.Person}>
            <h1 onClick={props.click}> This is Person Component</h1>
            <p>I am {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;