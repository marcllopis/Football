import React, { useContext, useEffect, useState, Fragment } from 'react';
import { fetchLeagueScorers } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';


export function LeagueScorers() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchLeagueScorers(state.league.id, setData) }, []);

  return (
    <Fragment>
        {data ?
          `Top Scorer for this league: ${data[0].player.name}`
          : `LEAGUE SCORERS INFO NOT LOADED`}
    </Fragment>
  );
};
