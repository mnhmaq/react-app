import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
// import logo from './logo.svg';
import Styles from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../Hoc/WithClass';
// import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

export const AuthContext = React.createContext(false);
class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js Constructor()');
    // Can Initialize state here by 
    this.state = {
      persons: [
        { id: '1', name: 'Nusrath', age:'26'},
        { id: '2', name: 'Hussain', age:'21'},
        { id: '3', name: 'Mohammed', age:'25'}
      ],
      showPersons: false,
      otherState: 'This will not be changed because in setState we are changing persons',
      toggleCount: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount()');
  }

  static getDerivedStateFromProps(nextprops, prevState) {
    console.log(
      "[UPDATE App.js] Inside getDerivedStateFromProps",
      nextprops,
      prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  // shouldComponentUpdate(nextprops, nextstate) {
  //   console.log('[App.js] shouldComponentUpdate()', nextprops, nextstate);
  //   return nextstate.showPersons !== this.state.showPersons;
  //   }

  // componentWillReceiveProps() {
  //   console.log('[App.js] componentDidMount()');
  // }

  // shouldComponentUpdate() {
  //   console.log('[App.js] componentDidMount()');
  // }
  
  // componentWillUpdate() {
  //   console.log('[App.js] componentDidMount()');
  // }
  // state = {
  //   persons: [
  //     { id: '1', name: 'Nusrath', age:'26'},
  //     { id: '2', name: 'Hussain', age:'21'},
  //     { id: '3', name: 'Mohammed', age:'25'}
  //   ],
  //   showPersons: false,
  //   otherState: 'This will not be changed because in setState we are changing persons'
  // }

  switchNameHandler = (name) => {
    // console.log('was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Subhani';
    this.setState({persons: [
      { name: name, age:'26'},
      { name: 'Subhani', age:'60'},
      { name: 'Mohammed', age:'25'}
    ]})
  }

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      })

      const person = {
        ...this.state.persons[personIndex]
      }
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons: persons});
    }

  deletePersonHandler = (id) => {
    let persons = this.state.persons;
    persons.splice(id, 1);
    this.setState({person: persons});
  }

  togglePersonsHandler = () => {
    let togglePerson = !this.state.showPersons;
    // this.setState({showPersons: togglePerson, toggleCount: this.state.toggleCount + 1});
    // console.log(togglePerson,this.state);
    this.setState ( (prevState, props) => {
      return {
        showPersons: togglePerson,
        toggleCount: prevState.toggleCount + 1
      }
    }
    )
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render()');
    // let btnClass = '';

    let persons = (
      this.state.showPersons ?
        <div>
          {/* {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person 
              name = {person.name} 
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              change={(event) => this.nameChangeHandler(event, person.id)} /></ErrorBoundary>
          })} */}
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div>
        :
        null
    );

    // btnClass = this.state.showPersons ? Styles.Red : '';

    // const classes = [];
    // if ( this.state.persons.length <= 2 ) {
    //   classes.push( Styles.red ); // classes = ['red']
    // }
    // if ( this.state.persons.length <= 1 ) {
    //   classes.push( Styles.bold ); // classes = ['red', 'bold']
    // }

    return (
      <WithClass class={Styles.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
        <Cockpit
          titleAPP = {this.props.title}
          showPersons = {this.state.showPersons}
          length = {this.state.persons.length}
          login={this.loginHandler}
          click = {this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
