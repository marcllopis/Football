import React, { useContext, useEffect, useState, Fragment } from 'react';
import { fetchLeagueMatches } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';


export function LeagueMatches() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => {
    fetchLeagueMatches(state.league.id, state.matchDay, setData)
  }, []);

  return (
    <Fragment>
        {data ?
          `This is the matchday: ${state.matchDay} and one of the last games played was ${data[0].homeTeam.name} vs ${data[0].awayTeam.name}. The result was ${data[0].score.fullTime.homeTeam} - ${data[0].score.fullTime.awayTeam}`
          : `LEAGUE MATCHES INFO NOT LOADED`}
    </Fragment>
  );
};
