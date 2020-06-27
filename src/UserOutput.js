import React from 'react';

class UserOutput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div>
        <span>{this.props.userName}</span>
        <p>This is paragraph 1.</p>
        <p>This is paragraph 2.</p>
      </div>
    );
  }
}


export default UserOutput;