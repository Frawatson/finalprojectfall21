import React, { useContext } from 'react';

import { RecordContext } from '../App'; 

function KcacStanding (){
    const { record, setRecord } = useContext(RecordContext); 
    
    return (
        <div className="Kcac-standing">
            <h1>
                KCAC Standings
            </h1>
            {
                record.map((team, index) => {
                    return (
                        <div>
                            {index + 1}. {team.name} : {team.wins}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default KcacStanding;
