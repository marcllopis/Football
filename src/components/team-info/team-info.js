import React, { useContext, Fragment } from 'react';
import { MainContext } from '../../context-provider/context-provider';
import { LeagueStandings } from '../league-standings/league-standings';
import { LeagueMatches } from '../league-matches/league-matches';
import { LeagueScorers } from '../league-scorers/league-scorers';
import { TeamMatches } from '../team-matches/team-matches';
import { TeamDetails } from '../team-details/team-details';


export function TeamInfo() {
  const { state } = useContext(MainContext);

  return (
    <Fragment>
      <div>{state.team.name}</div>
      <div><LeagueStandings /></div>
      <div><LeagueMatches /></div>
      <div><LeagueScorers /></div>
      <div><TeamMatches /></div>
      <div><TeamDetails /></div>
    </Fragment>
  );
};
