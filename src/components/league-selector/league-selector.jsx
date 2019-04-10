import React, { useContext, Fragment } from 'react';

import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';
import { Leagues } from '../../data/leagues';
import { Scene } from '../../utils/carousel/carousel.styles';
import { OptionsSelector } from '../../utils/carousel/carousel';


export function LeagueSelector() {
  const { dispatch } = useContext(MainContext);

  return (
    <Fragment>
      <Scene>
        <OptionsSelector
          arr={Leagues}
          length={Leagues.length}
          linkTo="/teams"
          action={() => dispatch(
            { type: Actions.GET_LEAGUE, leagues: Leagues[0] },
          )}
        />
      </Scene>
    </Fragment>
  );
}
