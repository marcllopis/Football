import React, { useContext, useEffect, useState, Fragment } from 'react';
import { fetchTeams } from '../../api/api-calls';
import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';
import { Scene } from '../../utils/carousel/carousel.styles';
import { OptionsSelector } from '../../utils/carousel/carousel';


export function TeamSelector() {
  const { state, dispatch } = useContext(MainContext);
  const [data, setData] = useState();

  useEffect(() => { fetchTeams(state.league.id, setData) }, []);

  return (
    <Fragment>
      <Scene>
        {data ?
          <OptionsSelector
            arr={data}
            length={data.length}
            action={() => dispatch({ type: Actions.GET_TEAM, team: data[0] })}
          />
          : `NO TEAMS BRO`}
      </Scene>
    </Fragment>
  );
};
