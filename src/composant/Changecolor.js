import React, { useState } from 'react';

function Changecolor() {
  const [textColor, setTextColor] = useState('#718292');

  // Fonction pour générer une couleur aléatoire au format hexadécimal
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      {/* Utilisation de style en ligne pour appliquer la couleur dynamique */}
      <h3
        style={{ color: textColor }}
        onMouseEnter={() => setTextColor(getRandomColor())}
      >
        Survolez-moi pour changer de couleur !
      </h3>
    </div>
  );
}

export default Changecolor;
