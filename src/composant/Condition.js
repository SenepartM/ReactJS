import React, { useState } from 'react';

function Condition() {
  const [estVrai, setEstVrai] = useState(true);

  const changerCondition = () => {
    setEstVrai(!estVrai);
  };

  return (
    <div>
      <p>{estVrai ? "C'est vrai" : "C'est faux"}</p>
      <button onClick={changerCondition}>
        Changer la condition en {estVrai ? "Faux" : "Vrai"}
      </button>
    </div>
  );
}

export default Condition;
