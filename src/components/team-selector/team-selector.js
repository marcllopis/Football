import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MAIN_URL, TOKEN } from '../../data/tokens';
import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';

export function TeamSelector() {
  const { state, dispatch } = useContext(MainContext);
  const [data, setData] = useState();

  const fetchData = async () => {
    const { data } = await axios({
      method: 'get',
      url: `${MAIN_URL}competitions/${state.league.id}/teams`,
      headers: {
        'X-Auth-Token': TOKEN,
      },
    });
    setData(data.teams);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log('dataaa', data);

  
  return (
    <div className='league-selector'>
    League: {state.league.name}
      {data ?
        data.map(team => (
        <div key={team.id}>
          <img src={team.crestUrl} alt={team.name} />
          <div>
            <button onClick={() =>
              dispatch({ type: Actions.GET_TEAM, team })}>
              Select {team.name}
            </button>
          </div>
        </div>
      ))
      : `NO TEAMS BRO`}
      <br />
    </div>
  );
};
