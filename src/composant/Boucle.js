import React from 'react';


function Boucle(){
    const fruit = ["pomme","poire","banane","fraise","faustin"];

    return (
        <div>
            <h1>Liste de fruits : </h1>
            <ul>
                {fruit.map(fruit =>
                    (
                        <li key={fruit}>{fruit}</li>
                    ))}
            </ul>
        </div>
    )
}
export default Boucle;