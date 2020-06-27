import React from 'react';
import UserOutput from './UserOutput';

class App extends React.Component {
  constructor() {
    super();
    this.state = { userName: 'Shanti' };
  }
  
  render() {
    return (
      <>
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </>
    )
  }
}

export default App;