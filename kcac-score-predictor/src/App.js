import './App.css';
import Live from './components/Live.js'; 
import KcacStanding from './components/KcacStanding';
import FutureMatches from './components/FutureMatches';
import MatchPredictor from './components/MatchPredictor';

import octoparse from './mocking/octoparse.json'; 

function App () {
    const standings = []; 
    standings.push(octoparse[0].Field12_text); 
    
    return(
        <div className="container">
            <iframe id="kcac-data" src="https://www.kcacsports.com/"></iframe>
            {/*{document.querySelector('#kcac-data').contentWindow.document.body}*/}
            <KcacStanding/>
            <Live/>
            <FutureMatches/>
            <MatchPredictor/>
            { standings[0] }
        </div>
    );
}

export default App;