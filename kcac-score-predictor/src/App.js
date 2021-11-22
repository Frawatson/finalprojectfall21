import './App.css';
import Live from './components/Live.js'; 
import KcacStanding from './components/KcacStanding';
import FutureMatches from './components/FutureMatches';
import MatchPredictor from './components/MatchPredictor';

function App () {
    return(
        <div className="container">
            <iframe id="kcac-data" src="https://www.kcacsports.com/"></iframe>
            {/*{document.querySelector('#kcac-data').contentWindow.document.body}*/}
            <KcacStanding/>
            <Live/>
            <FutureMatches/>
            <MatchPredictor/>
        </div>
    );
}

export default App;