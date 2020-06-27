import React from 'react';


class UserInput extends React.Component {
  

  render() {
    return (
      <input onChange={this.props.changed} value={this.props.userName} type="text"></input>
    );
  }

}


export default UserInput;