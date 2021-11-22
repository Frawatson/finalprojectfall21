import React from 'react';

function KcacStanding (){
    const Teamnames = ['Oklahoma Wesleyan', 'Tabor','Friends','York','Sterling','Southwestern', 'Bethel', 'Saint Mary', 'Ottawa', 'Kansas Wesleyan', 'Bethany', 'Avila']
    return (
        <div className="Kcac-standing">
            {
                Teamnames.map(teamname => <li>{Teamnames}</li>)
            }
        </div>
    )
};

export default KcacStanding;
