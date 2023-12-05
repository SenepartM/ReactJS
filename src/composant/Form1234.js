import React, { useState } from 'react';
import '../Form1234.css'; // Assurez-vous d'avoir le fichier de styles CSS approprié

const Form1234 = () => {
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

      <p style={{ color: formColor }}>{loginMessage}</p>
    </div>
  );
};

export default Form1234;
