import TopNav from './components/TopNav';
import TrackList from './components/TrackList';
import Players from './components/Players';
import NewRun from './components/NewRun';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import tracks_data from "./tracks.json"

function App() {
  const [players, setPlayers] = useState([
    {
      nimi : "Ray"
    },
    {
      nimi : "Cele"
    },
  ]);



  return (
    <Router>
    <Container maxWidth="md">

      <TopNav />


      <Route path="/friba/tracklist" component={TrackList}>
        <TrackList
          tracks_data = {tracks_data["Radat"]}
          />
      </Route>

      <Route path="/friba/players" component={Players}>
        <Players
          players = {players}
          />
      </Route>

      <Route path="/friba/newrun/" exact component={NewRun}>
        <NewRun
          players = {players}
          />
      </Route>

    </Container>
    </Router>
  
  );
}

export default App;
