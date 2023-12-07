import React from 'react';

const FormulaireEnfantComponent = ({ connexionReussie }) => {
  const couleur = connexionReussie ? 'green' : 'red';

  return (
    <div style={{
      marginTop: '20px',
      width: '200px',
      height: '200px',
      backgroundColor: couleur,
      borderRadius: '50%',
      margin: 'auto'
    }}></div>
  );
};

export default FormulaireEnfantComponent;
