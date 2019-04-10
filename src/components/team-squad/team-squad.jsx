import React, { useContext, useEffect, useState, Fragment } from 'react';
import shortId from 'shortid';
import { fetchTeamSquad } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Loader } from '../../utils/loader/loader';


export function TeamSquad() {
  const { state } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchTeamSquad(state.team.id, setData); }, []);

  return (
    <Fragment>
      {data ? (
        <div>
          <h3>Squad</h3>
          {data.map(player => (
            <div key={shortId.generate()}>
              {player.name} | {player.position}
            </div>
          ))}
        </div>
      )
        : <Loader />}
    </Fragment>
  );
}
