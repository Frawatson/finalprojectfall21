import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <iframe id="kcac-data" src="https://www.kcacsports.com/"></iframe> */}

      <div id="match-data">
          <div class = "kcac-standing">
              <h1> KCAC Standing </h1>
              <ol></ol>
          </div>

          <div class="todays-matches">
              <div class = "Matches">
                  <h1>Today's Matches</h1>
                  <br />
                  <h1>ScoreBoard</h1>
                  <p><class id='current_date'></class></p>
                  <p>Home Team</p>
                  <p id="elapsed">45'</p>
                  <p>Away Team</p>
              </div>

              <div class="matches">
                  <div class="team">
                      <img id="Homelogo" />
                      <p id="homeName">Team name</p>
                  </div>
                  <p id="goals">0 - 0</p>
                  <div class="team">
                      <img id="awaylogo" />
                      <p id="awayName">Team name</p>
                  </div>

              </div>
          </div>
          
          <div class="future-matches">
              <div class = "Match">
                  <h1>Future Matches</h1>
                  <br />
                  <h1>ScoreBoard</h1>
                  <p><class id='future_date'></class></p>
                  <p>Home Team</p>
                  <p id="elapsed">45'</p>
                  <p>Away Team</p>
              </div>

              <div class="match">
                  <div class="team">
                      <img id="Homelogo" />
                      <p id="home">Team name</p>
                  </div>
                  <p id="goals">0 - 0</p>
                  <div class="teamName">
                      <img id="awaylogo" />
                      <p id="awayName">Team name</p>
                  </div>

              </div>
          </div>
      </div>

      <div class="team-selection">
          <label for="teamSelection">Select Home team</label>
          <input type="text" list="HomeTeamSelector"/>
          <datalist id="HomeTeamSelector"></datalist>
          <button class="submit">Submit</button>
          
          <label for="teamSelection">Select Away team</label>
          <input type="text" list="AwayTeamSelector"/>
          <datalist id="AwayTeamSelector"></datalist>
          <button class="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
