import React from 'react';

function ConditionalComponent(props) {
  return (
    <div>
      {props.condition ? (
        <h1>Welcome, User!</h1>
      ) : (
        <h1>Please log in to view this content</h1>
      )}
    </div>
  );
};

export default ConditionalComponent;
