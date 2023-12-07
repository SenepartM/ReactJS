import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Formulaire from './composant/Formulaire';
import Condition from './composant/Condition';
import Boucle from './composant/Boucle';
import Form1234 from './composant/Form1234';
import Changecolor from './composant/Changecolor';
import FormulaireParentComponent from './composant/FormulaireParentComponent';
import ParentComponent from './composant/ParentComponent';

// Importez les styles de votre choix pour améliorer l'apparence de la page

const root = ReactDOM.createRoot(document.getElementById('root'));

// Mettez en place une mise en page organisée
root.render(
  <React.StrictMode>
    <header>
      <h1>Ma Page d'Exercices React</h1>
    </header>
    <main>
      <section>
        <h2>Formulaire</h2>
        <Formulaire />
      </section>
      <section>
        <h2>Condition</h2>
        <Condition />
      </section>
      <section>
        <h2>Boucle</h2>
        <Boucle />
      </section>
      <section>
        <h2>Formulaire Avec Verification</h2>
        <Form1234 />
      </section>
      <section>
        <h2>Changer ma couleur</h2>
        <Changecolor />
      </section>
      <section>
        <h2>Formulaire Parent/Enfant</h2>
        <FormulaireParentComponent/>
      </section>
      <section>
        <h2>Enfant1 et Enfant2 Statement</h2>
        <ParentComponent/>
      </section>
    </main>
  </React.StrictMode>
);

// Si vous souhaitez mesurer les performances de votre application, utilisez reportWebVitals
reportWebVitals();
