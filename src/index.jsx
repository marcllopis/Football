import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { LeagueSelector } from './components/league-selector/league-selector';
import { TeamSelector } from './components/team-selector/team-selector';
import { TeamInfo } from './components/team-info/team-info';
import { MainContextProvider } from './context-provider/context-provider';


ReactDOM.render(
  <Router>
    <MainContextProvider>
      <Route exact path="/" component={App} />
      <Route exact path="/leagues" component={LeagueSelector} />
      <Route exact path="/teams" component={TeamSelector} />
      <Route exact path="/team-info" component={TeamInfo} />
    </MainContextProvider>
  </Router>,
  document.getElementById('root'),
);
