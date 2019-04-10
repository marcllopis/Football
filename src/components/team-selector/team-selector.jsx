import React, { useContext, useEffect, useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchTeams, fetchLeagueMatchDay } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';
import { Scene } from '../../utils/carousel/carousel.styles';
import { OptionsSelector } from '../../utils/carousel/carousel';
import { Loader } from '../../utils/loader/loader';


export function TeamSelector() {
  const { state, dispatch } = useContext(MainContext);

  const [data, setData] = useState();
  useEffect(() => { fetchTeams(state.league.id, setData); }, []);

  const [matchData, setMatchData] = useState();
  useEffect(() => { fetchLeagueMatchDay(state.league.id, setMatchData); }, []);

  const renderSelectorOrLoader = () => (
    data ?
      <OptionsSelector
        arr={data}
        length={data.length}
        linkTo="/team-info"
        action={() => dispatch({ type: Actions.GET_TEAM, team: data[0], matchDay: matchData.currentMatchday })}
      />
      : <Loader />
  );

  return (
    <Fragment>
      <Scene>
        {state.leagueSelected ?
          renderSelectorOrLoader()
          : <Redirect to="/leagues" />
        }
      </Scene>
    </Fragment>
  );
}
