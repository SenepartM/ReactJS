import React, { useState } from 'react';
import FormulaireEnfantComponent from './FormulaireEnfantComponent';

const FormulaireParentComponent = () => {
  // État pour stocker les valeurs du formulaire
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // État pour stocker la couleur du formulaire
  const [formColor, setFormColor] = useState(''); // Par défaut, pas de couleur spécifique

  // État pour stocker le message de connexion
  const [loginMessage, setLoginMessage] = useState('');

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification du mot de passe
    if (password === '1234') {
      setFormColor('green'); // Si le mot de passe est correct, changez la couleur en vert
      setLoginMessage('Vous êtes connecté');
    } else {
      setFormColor('red'); // Sinon, changez la couleur en rouge
      setLoginMessage('Mauvais mot de passe');
    }
  };

  // Vérification si les champs de login et mot de passe sont remplis
  const isFormFilled = login.trim() !== '' && password.trim() !== '';

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ borderColor: formColor }} className="form-container">
        <label>
          Login:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <br />
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Soumettre</button>
      </form>

      <FormulaireEnfantComponent connexionReussie={isFormFilled} /> {/* Passer l'état au composant enfant */}

      <p style={{ color: formColor }}>{loginMessage}</p>
    </div>
  );
};

export default FormulaireParentComponent;
