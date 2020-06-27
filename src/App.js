import React from 'react';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends React.Component {
  state = {
    userName: 'Shanti'
  }

  handleUsernameChange(event) {
    this.setState({userName: event.target.value});
  }
  
  render() {
    return (
      <>
        <UserOutput userName={this.state.userName} />
        <UserInput changed={this.handleUsernameChange.bind(this)} userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserInput changed={this.handleUsernameChange.bind(this)} userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserInput changed={this.handleUsernameChange.bind(this)} userName={this.state.userName} />
      </>
    )
  }
}

export default App;