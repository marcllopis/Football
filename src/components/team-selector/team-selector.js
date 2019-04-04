import React, { useContext, useEffect, useState, Fragment } from 'react';
import { fetchTeams, fetchLeagueMatchDay } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';
import { Scene } from '../../utils/carousel/carousel.styles';
import { OptionsSelector } from '../../utils/carousel/carousel';


export function TeamSelector() {
  const { state, dispatch } = useContext(MainContext);
  
  const [data, setData] = useState();
  useEffect(() => { fetchTeams(state.league.id, setData) }, []);
  
  const [matchData, setMatchData] = useState();
  useEffect(() => { fetchLeagueMatchDay(state.league.id, setMatchData) }, []);

  return (
    <Fragment>
      <Scene>
        {data ?
          <OptionsSelector
            arr={data}
            length={data.length}
            linkTo="/team-info"
            action={() => dispatch({ type: Actions.GET_TEAM, team: data[0], matchDay: matchData.currentMatchday })}
          />
          : `NO TEAMS BRO`}
      </Scene>
    </Fragment>
  );
};
