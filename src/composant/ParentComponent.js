import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const ParentComponent = () => {
  const [child1State, setChild1State] = useState(false);
  const [child2State, setChild2State] = useState(false);

  const handleChild1Change = (state) => {
    setChild1State(state);
  };

  const handleChild2Change = (state) => {
    setChild2State(state);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Enfant 1 est {child1State ? 'ON' : 'OFF'}</p>
      <p>Enfant 2 est {child2State ? 'ON' : 'OFF'}</p>
      <ChildComponent1 onChange={handleChild1Change} />
      <ChildComponent2 onChange={handleChild2Change} />
    </div>
  );
};

export default ParentComponent;
