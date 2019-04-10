import React, { useContext, useEffect, useState, Fragment } from 'react';
import shortId from 'shortid';
import { fetchLeagueMatches } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Loader } from '../../utils/loader/loader';

export function LeagueMatches() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => {
    fetchLeagueMatches(state.league.id, state.matchDay, setData);
  }, []);

  return (
    <Fragment>
      {data ? (
        <div>
          <h3>Last weekend games</h3>
          {data.map(game => (
            <div key={shortId.generate()}>{game.homeTeam.name}{game.score.fullTime.homeTeam} - {game.score.fullTime.awayTeam} {game.awayTeam.name}</div>
          ))}
        </div>
      )
        : <Loader />}
    </Fragment>
  );
}
