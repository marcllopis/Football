import React, { useContext, useEffect, useState, Fragment } from 'react';
import { fetchTeamMatches } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';


export function TeamMatches() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchTeamMatches(state.team.id, state.league.name, setData) }, []);

  return (
    <Fragment>
        {data ?
          `Your team is: ${state.team.name} and the last game played was ${data[state.matchDay - 1].homeTeam.name} vs ${data[state.matchDay - 1].awayTeam.name}.
          The result was ${data[state.matchDay - 1].score.fullTime.homeTeam} - ${data[state.matchDay - 1].score.fullTime.awayTeam}.
          The next game is ${data[state.matchDay].homeTeam.name} vs ${data[state.matchDay].awayTeam.name}.`
          : `TEAM MATCHES INFO NOT LOADED`}
    </Fragment>
  );
};
