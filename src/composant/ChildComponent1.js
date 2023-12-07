import React, { useState } from 'react';

const ChildComponent1 = ({ onChange }) => {
  const [state, setState] = useState(false);

  const handleChange = () => {
    const newState = !state;
    setState(newState);
    onChange(newState);
  };

  return (
    <div>
      <h3>Enfant 1</h3>
      <label>
        <input type="checkbox" checked={state} onChange={handleChange} />
        ON/OFF
      </label>
    </div>
  );
};

export default ChildComponent1;
