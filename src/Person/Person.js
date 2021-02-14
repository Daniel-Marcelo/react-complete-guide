import React from 'react';
import './Person.css';
import Radium  from 'radium';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //     }
    // }
    return (
        <div className="Person">
        {/* <div className="Person" style={style}> */}
            <p onClick={props.click}>Hi, my name is {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}></input>
        </div>
    )
}

// export default Radium(person);
export default person;