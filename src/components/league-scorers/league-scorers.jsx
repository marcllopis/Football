import React, { useContext, useEffect, useState, Fragment } from 'react';
import shortId from 'shortid';
import { fetchLeagueScorers } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Loader } from '../../utils/loader/loader';


export function LeagueScorers() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchLeagueScorers(state.league.id, setData) }, []);

  return (
    <Fragment>
      {data ? (
        <div>
          <h3>Top Scorers</h3>
          {data.map((player, i) => (
            <div key={shortId.generate()}>{i + 1}. {player.player.name} | {player.team.name} | {player.numberOfGoals} goals</div>
          ))}
        </div>
      )
        : <Loader />}
    </Fragment>
  );
};
