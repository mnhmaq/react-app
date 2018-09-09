import React, {Fragment} from 'react';
import Styles from './Cockpit.css';

const Cockpit = (props) => {
    const btnClass = Styles.button + ' ' + (props.showPersons ? Styles.Red : '');

    const classes = [];
    if ( props.length <= 2 ) {
      classes.push( Styles.red ); // classes = ['red']
    }
    if ( props.length <= 1 ) {
      classes.push( Styles.bold ); // classes = ['red', 'bold']
    }
    return (
        <Fragment>
            <h1>This React App</h1>
            <h4>{props.titleAPP}</h4>
            <p className={classes.join( ' ' )}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.click}>Toogle Persons
            </button>
            <button onClick={props.login}>Login</button>
        </Fragment>
    );
}

export default Cockpit;