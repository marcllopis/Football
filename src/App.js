import React, { Component } from 'react';
import axios from 'axios';
import { MAIN_URL, TOKEN } from './data/tokens';
import './App.css';
import { LeagueSelector } from './components/league-selector/league-selector';

class App extends Component {
  render() {
    axios({
      method:'get',
      url: `${MAIN_URL}competitions?plan=TIER_ONE`,
      headers: {
        'X-Auth-Token': TOKEN,
      },
    })
    .then(function ({data}) {
      console.log(data);
    })
    return (
      <div className="App">
          <LeagueSelector />
      </div>
    );
  }
}

export default App;
