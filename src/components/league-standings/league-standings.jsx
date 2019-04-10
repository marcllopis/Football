import React, { useContext, useEffect, useState, Fragment } from 'react';
import shortId from 'shortid';
import { fetchLeagueStandings } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Loader } from '../../utils/loader/loader';


export function LeagueStandings() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();
  useEffect(() => { fetchLeagueStandings(state.league.id, setData); }, []);

  return (
    <Fragment>
      {data ? (
        <div>
          <h3>League Standings</h3>
          <table>
            <tbody>
              <tr>
                <td />
                <td>Teams</td>
                <td>PT</td>
                <td>PG</td>
                <td>GW</td>
                <td>GD</td>
                <td>GL</td>
                <td>GF</td>
                <td>GA</td>
                <td>GD</td>
              </tr>
              {data.map(team => (
                <tr key={shortId.generate()}>
                  <td>{team.position}</td>
                  <td>{team.team.name}</td>
                  <td>{team.points}</td>
                  <td>{team.playedGames}</td>
                  <td>{team.won}</td>
                  <td>{team.draw}</td>
                  <td>{team.lost}</td>
                  <td>{team.goalsFor}</td>
                  <td>{team.goalsAgainst}</td>
                  <td>{team.goalDifference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
        : <Loader />}
    </Fragment>
  );
}
