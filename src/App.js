import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {

  // reserved word
  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 12 },
      { id: 'asasdsadd', name: 'Dan', age: 22 },
      { id: 'asasdd', name: 'Phil', age: 123 }
    ],
    otherState: 'Some other value',
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ... this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
          })
          }
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'purple',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    /* </StyleRoot> */
    );
  }
}

export default App;
// export default Radium(App);
