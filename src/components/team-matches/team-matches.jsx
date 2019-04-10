import React, { useContext, useEffect, useState, Fragment } from 'react';
import format from 'date-fns/format';
import { fetchTeamMatches } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Loader } from '../../utils/loader/loader';


export function TeamMatches() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => {
    fetchTeamMatches(
      state.team.id, state.league.name, setData);
  }, []);

  return (
    <Fragment>
      {data ? (
        <div>
          <div><h3>Next Game</h3>
            {data[state.matchDay].homeTeam.name} vs {data[state.matchDay].awayTeam.name} at {format(new Date(data[state.matchDay].utcDate), 'MM/DD/YYYY HH:MM a')}
          </div>
          <div><h3>Last Games</h3>
            <div>{data[state.matchDay - 1].homeTeam.name} {data[state.matchDay - 1].score.fullTime.homeTeam} vs {data[state.matchDay - 1].score.fullTime.awayTeam} {data[state.matchDay - 1].awayTeam.name} at {format(new Date(data[state.matchDay - 1].utcDate), 'MM/DD/YYYY')}</div>
            <div>{data[state.matchDay - 2].homeTeam.name} {data[state.matchDay - 2].score.fullTime.homeTeam} vs {data[state.matchDay - 2].score.fullTime.awayTeam}  {data[state.matchDay - 2].awayTeam.name} at {format(new Date(data[state.matchDay - 2].utcDate), 'MM/DD/YYYY')}</div>
            <div>{data[state.matchDay - 3].homeTeam.name} {data[state.matchDay - 3].score.fullTime.homeTeam} vs {data[state.matchDay - 3].score.fullTime.awayTeam}  {data[state.matchDay - 3].awayTeam.name} at {format(new Date(data[state.matchDay - 3].utcDate), 'MM/DD/YYYY')}</div>
          </div>
        </div>
      )
        : <Loader />}
    </Fragment>
  );
}
