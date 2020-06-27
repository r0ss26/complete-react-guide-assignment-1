import React from 'react';
  
const UserInput = props => {
  return <input onChange={props.changed} value={props.userName} type="text"></input>
}

export default UserInput;