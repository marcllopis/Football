import React, { useContext, useEffect, useState, Fragment } from 'react';
import { fetchLeagueStandings } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';


export function LeagueStandings() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchLeagueStandings(state.league.id, setData) }, []);

  return (
    <Fragment>
        {data ?
          `This is the matchday: ${state.matchDay} and that's the first team on the league: ${data[0].table[0].team.name}`
          : `LEAGUE STANDINGS INFO NOT LOADED`}
    </Fragment>
  );
};
