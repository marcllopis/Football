import React, { Fragment, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { MainContext } from '../../context-provider/context-provider';
import { LeagueStandings } from '../league-standings/league-standings';
import { LeagueMatches } from '../league-matches/league-matches';
import { LeagueScorers } from '../league-scorers/league-scorers';
import { TeamMatches } from '../team-matches/team-matches';
import { TeamSquad } from '../team-squad/team-squad';
import { TeamDetails } from '../team-details/team-details';


export const TeamInfoSeparator = styled.div`
  display:flex;
  justify-content: space-evenly;
`;

export function TeamInfo() {
  const { state } = useContext(MainContext);
  return (
    <Fragment>
      {state.leagueSelected ?
        <div>
          <div><TeamDetails /></div>
          <TeamInfoSeparator>
            <div>
              <div><TeamMatches /></div>
              <div><TeamSquad /></div>
            </div>
            <div>
              <div><LeagueMatches /></div>
              <div><LeagueStandings /></div>
              <div><LeagueScorers /></div>
            </div>
          </TeamInfoSeparator>
        </div>
        : <Redirect to="/leagues" />
      }
    </Fragment>

  );
}
