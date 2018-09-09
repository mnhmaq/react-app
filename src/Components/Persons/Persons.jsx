import React, {Component} from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';


class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js Constructor()');
        this.lastPeronRef = React.createRef();
      }
    
    componentWillMount() {
    console.log('[Persons.js] componentWillMount()');
    }

    componentDidMount() {
    console.log('[Persons.js] componentDidMount()');
    this.lastPeronRef.current.focus();
    }

    componentWillReceiveProps(nextprops) {
    console.log('[Persons.js] componentWillReceiveProps()', nextprops);
    }

    // shouldComponentUpdate(nextprops, nextstate) {
    // console.log('[Persons.js] shouldComponentUpdate()', nextprops, nextstate);
    // return nextprops.persons !== this.props.persons;
    // }

    componentWillUpdate(nextprops, nextstate) {
    console.log('[Persons.js] componentWillUpdate()', nextprops, nextstate);
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate()');
    }
    render() {
        console.log('[Persons.js] render()');
        return (
            this.props.persons.map((person, index) => {
                return <Person 
                name = {person.name} 
                age={person.age}
                key={person.id}
                position={index}
                ref={this.lastPeronRef}
                click={this.props.click.bind(this, index)}
                isAuthenticated={this.props.isAuthenticated}
                change={(event) => this.props.change(event, person.id)} />
            })
        )
    };
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.string,
  Changed: PropTypes.bool
};

export default Persons;