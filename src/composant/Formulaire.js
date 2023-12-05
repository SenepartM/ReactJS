import React from 'react';

function Formulaire() {


    const login = "Mathias Légende";
    const pass = "Mon MDP";
    const isConnected = true;

    const logins = ["Mathias","Crack","Dieu"];

    const User = {
        login : "Mathias mais en objet",
        pass : "MON MDP MAIS EN OBJET"
    };

    return(

        // AFFICHAGE SANS OBJET EN BRUT DEUX VARIABLES
        <div>
        {isConnected ? (<div>Vous êtes {login} et votre mot de passe est {pass}</div>)
        :
        (<div>
            <ul>
            {
                logins.map(login=>(
                    <li>{login}</li>
                ))
            }
            </ul>
            Veuillez vous connecter</div>)
            // AFFICHAGE AVEC OBJET 
    }
  
      {isConnected ? (<div>Vous êtes {User.login} et votre mot de passe est {User.pass}</div>)
        :
        (<div>
            <ul>
            {
                logins.map(login=>(
                    <li>{login}</li>
                ))
            }
            </ul>
            Veuillez vous connecter</div>)
    }
            
        </div>

        
    );
}

export default Formulaire;