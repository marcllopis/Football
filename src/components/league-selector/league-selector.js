import React, { useContext } from 'react';
import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';
import { Leagues } from '../../data/leagues';

export function LeagueSelector() {
  const { state, dispatch } = useContext(MainContext);

  console.log('state', state.league)
  return (
    <div className='league-selector'>
      {Leagues.map(league => (
        <div key={league.id}>
          <img src={league.emblemUrl} alt={league.name} />
          <div>
            <button onClick={() =>
              dispatch({ type: Actions.GET_LEAGUE, league })}>
              Select {league.name}
            </button>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};
