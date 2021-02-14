import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 12 },
      { name: 'Dan', age: 22 }
    ],
    otherState: 'hello there'
  });console.log(personsState)

  const switchNameHandler = () => {
    // dont do this  personsState.persons[0].name='Juan'
    setPersonsState({
      persons: [
        { name: 'ABCDEF', age: 12 },
        { name: 'Dan', age: 22 }
      ],
    otherState: personsState.otherState
    })
  }

  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person 
        click={}
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>What is crackin</Person>
    </div>
  );
}
export default app;

