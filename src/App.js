import React, { Component } from 'react';
import Person from './Person/Person';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Nusrath', age:'26'},
      { id: '2', name: 'Hussain', age:'21'},
      { id: '3', name: 'Mohammed', age:'25'}
    ],
    showPersons: false,
    otherState: 'This will not be changed because in setState we are changing persons'
  }

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
    this.setState({showPersons: togglePerson});
    console.log(togglePerson,this.state);
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    
    let persons = (
      this.state.showPersons ?
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name = {person.name} 
              age={person.age} 
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              change={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
        :
        null
    );
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */
        <div>
          <h1>This React App</h1>
          <button 
            style={style} 
            onClick={this.togglePersonsHandler}>Toogle Persons</button>
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
          />
          <Person 
            name={this.state.persons[1].name} 
            click={this.switchNameHandler.bind(this, 'Subhani!!')}
            change={this.nameChangeHandler}
            age={this.state.persons[1].age}>Sorry the age is wrong it's actually 26.
            </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
          /> */
          persons}
        </div>
        }
      </div>
    );
  }
}

export default App;
