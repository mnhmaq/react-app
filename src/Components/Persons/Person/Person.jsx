import React, {Component, Fragment} from 'react';
import Styles from './Person.css';
import withClasses from '../../../Hoc/withClassComp';
import {AuthContext} from '../../../Containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js Constructor()');
        this.inputElement = React.createRef();
      }
    
    componentWillMount() {
    console.log('[Person.js] componentWillMount()');
    }

    componentDidMount() {
    console.log('[Person.js] componentDidMount()');
    //Use Ref in React 16.2 or earlier
    // this.inputElement.focus();
    if(this.props.position === 0) {
        this.inputElement.current.focus();
    }
    }

    focus() {
        this.inputElement.current.focus();
    }
       

    // componentWillReceiveProps(props) {
    // console.log('[Person.js] componentWillReceiveProps()', props);
    // }

    // // shouldComponentUpdate(props, state) {
    // // console.log('[Person.js] shouldComponentUpdate()', props, state);
    // // }

    // componentWillUpdate(props, state) {
    // console.log('[Person.js] componentWillUpdate()', props, state);
    // }

    render() {
        console.log('[Person.js] render()');
        return (
            <Fragment>
                {this.props.isAuthenticated &&
                    <div>I'm authenticated</div>
                }
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated using React Context introduced in React 16.3</p> : null}
                </AuthContext.Consumer>
            
                <h1 onClick={this.props.click}> This is Person Component</h1>
                <p>I am {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                
                {/* One way to initialize red
                 <input type="text" 
                    ref={(inp) => {this.inputElement = inp}}
                    onChange={this.props.change} 
                    value={this.props.name}/> */}
                {/* another way to initialize ref in React 16.3 or above */}
                <input type="text" 
                ref = {this.inputElement}
                onChange={this.props.change} 
                value={this.props.name}/>
            </Fragment>
        );
    };
}

export default withClasses(Person, Styles.Person);