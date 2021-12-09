import React, { useContext, useRef, useState } from 'react';

import { RecordContext } from '../App';

const MatchPredictor = () => {
    const { record, setRecord } = useContext(RecordContext); 

    const homeTeamRef = useRef(); 
    const awayTeamRef = useRef(); 

    const [ winner, setWinner ] = useState(''); 
    
    const handleSubmit = () => {
        const homeTeam = homeTeamRef.current.options[homeTeamRef.current.selectedIndex]; 
        const awayTeam = awayTeamRef.current.options[awayTeamRef.current.selectedIndex]; 

        let homeWins = ''; 
        for(let i = 0; i < 2; i++) {
            const number = +homeTeam.getAttribute('data-value').charAt(i);  
            if(+number < 10) {
                homeWins += number; 
            }
        }
        const homeTeamData = {
            name: homeTeam.text, 
            wins: +homeWins, 
        }; 

        let awayWins = ''; 
        for(let i = 0; i < 2; i++) {
            const number = +awayTeam.getAttribute('data-value').charAt(i);  
            if(+number < 10) {
                awayWins += number; 
            }
        }
        const awayTeamData = {
            name: awayTeam.text, 
            wins: +awayWins, 
        }; 

        if(homeWins > awayWins) {
            setWinner(homeTeamData.name); 
        } else {
            setWinner(awayTeamData.name); 
        }
    }
    
    return(
        <div className="Match-Predictor">
            <h1>Match Predictor</h1>

            <label htmlFor="home-team">
                Home Team
            </label>
            <select id="home-team" ref={ homeTeamRef }>
                { record.map(team => (
                    <option data-value={ team.wins }>
                        { team.name }
                    </option>
                ))}
            </select>

            <label htmlFor="away-team">
                Away Team
            </label>
            <select id="away-team" ref={ awayTeamRef }>
                { record.map(team => (
                    <option data-value={ team.wins }>
                        { team.name }
                    </option>
                ))}
            </select>

            <button type="submit" onClick={handleSubmit }>Predict</button>

            <div className="prediction">
                WINNER: { winner }
            </div>
        </div>
    )
};

export default MatchPredictor;