import React, { useContext, useEffect, useState } from 'react';
import { fetchTeams } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';
import {
  OptionsSelector,
  EmblemContainer
} from '../../utils/league-team-selector/league-team-selector';
import { Emblem } from '../../utils/emblem/emblem';
import { EmblemButton } from '../../utils/emblem-buttons/emblem-buttons';


export function TeamSelector() {
  const { state, dispatch } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchTeams(state.league.id, setData) }, []);
  
  return (
    <OptionsSelector className='league-selector'>
      {data ?
        data.map(team => (
        <div key={team.id}>
          <Emblem src={team.crestUrl} alt={team.name} />
          <EmblemContainer>
            <EmblemButton onClick={() =>
              dispatch({ type: Actions.GET_TEAM, team })}>
              {team.name}
            </EmblemButton>
          </EmblemContainer>
        </div>
      ))
      : `NO TEAMS BRO`}
      <br />
    </OptionsSelector>
  );
};
