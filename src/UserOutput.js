import React from 'react';

const UserOutput = props => {
  return (
    <div>
      <span>{props.userName}</span>
      <p>This is paragraph 1.</p>
      <p>This is paragraph 2.</p>
    </div>
  );
}

export default UserOutput;