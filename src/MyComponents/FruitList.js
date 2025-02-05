import React from 'react';
import './Fruitstyle.css';
// Child component
const FruitList = ({ fruits }) => {
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// Parent component
const ParentComponent = () => {
  // Example list of fruits
  const fruitItems = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

  return (
    <div>
      <FruitList fruits={fruitItems} />
    </div>
  );
};

export default ParentComponent;
