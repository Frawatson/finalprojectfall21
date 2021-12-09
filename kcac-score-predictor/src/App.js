import { createContext, useMemo, useState } from 'react';

import './App.css';
import Live from './components/Live.js'; 
import KcacStanding from './components/KcacStanding';
import FutureMatches from './components/FutureMatches';
import MatchPredictor from './components/MatchPredictor';

import octoparse from './mocking/octoparse.json'; 

export const RecordContext = new createContext()

function App () {
    
    const standings = []; 
    standings.push(octoparse[0].Field2_text);
    standings.push(octoparse[0].Field3_text);
    standings.push(octoparse[0].Field4_text);
    standings.push(octoparse[0].Field5.trim('\n'));
    standings.push(octoparse[0].Field6_text);
    standings.push(octoparse[0].Field7_text);
    standings.push(octoparse[0].Field8_text);
    standings.push(octoparse[0].Field9_text);
    standings.push(octoparse[0].Field10_text);
    standings.push(octoparse[0].Field11_text);
    standings.push(octoparse[0].Field12_text);
    standings.push(octoparse[0].Field13_text);
    standings.push(octoparse[0].Field14_text);

    const wins = [];
    wins.push(octoparse[0].Field15)
    wins.push(octoparse[0].Time)
    wins.push(octoparse[0].Time1)
    wins.push(octoparse[0].Time2)
    wins.push(octoparse[0].Time3)
    wins.push(octoparse[0].Time4)
    wins.push(octoparse[0].Time5)
    wins.push(octoparse[0].Time6)
    wins.push(octoparse[0].Time7)
    wins.push(octoparse[0].Time8)
    wins.push(octoparse[0].Time9)
    wins.push(octoparse[0].Time10)
    wins.push(octoparse[0].Time11)

    const [ record, setRecord ] = useState([]); 
    for (let index = 0; index < wins.length; index++) {
        record.push({
            name: standings[index], 
            wins: wins[index], 
        }); 
    }
    const recordContext = useMemo(() => ({
        record, setRecord
    }), [ record, setRecord ]); 
    console.log('RECORD', record); 
    
    return(
        <div className="container">
            <iframe id="kcac-data" src="https://www.kcacsports.com/"></iframe>
            {/*{document.querySelector('#kcac-data').contentWindow.document.body}*/}
            <RecordContext.Provider value={ recordContext }>
                <KcacStanding/>
                <Live/>
                <FutureMatches/>
                <MatchPredictor/>
            </RecordContext.Provider>
        </div>
        
    );
}

export default App;