import React, { useContext, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { MainContext } from '../../context-provider/context-provider';
import { Actions } from './actions';
import { Leagues } from '../../data/leagues';
import {
  Scene,
  OptionsSelector,
  EmblemContainer,
  EmblemContainerSecondLast,
  EmblemContainerLast,
  EmblemContainerFirst,
  EmblemContainerSecond,
} from '../../utils/league-team-selector/league-team-selector';
import { Emblem } from '../../utils/emblem/emblem';
import {
  EmblemButton,
  PrevButton,
  NextButton,
} from '../../utils/emblem-buttons/emblem-buttons';


export function LeagueSelector() {
  const { state, dispatch } = useContext(MainContext);
  const [value, set] = useState(true); //simulate a re-render with custom hook

  const prevButton = () => {
    let temp = Leagues.pop();
    Leagues.unshift(temp);
    set(!value);
  };

  const nextButton = () => {
    let temp = Leagues.shift();
    Leagues.push(temp);
    set(!value);
  };

  return (
    <Fragment>
      <Scene>
        <OptionsSelector>
          <EmblemContainerSecondLast index={Leagues.length - 2} length={Leagues.length}>
            <Emblem src={Leagues[Leagues.length - 2].emblemUrl} alt={Leagues[Leagues.length - 2].name} />
          </EmblemContainerSecondLast>

          <EmblemContainerLast index={Leagues.length - 1} length={Leagues.length}>
            <Emblem src={Leagues[Leagues.length - 1].emblemUrl} alt={Leagues[Leagues.length - 1].name} />
          </EmblemContainerLast>

          <EmblemContainer index={0} length={Leagues.length}>
            <Emblem src={Leagues[0].emblemUrl} alt={Leagues[0].name} />
            <div>
              <PrevButton onClick={() => prevButton()}>
                {'<'}
              </PrevButton>
              <Link to="/teams">
                <EmblemButton onClick={() =>
                  dispatch({ type: Actions.GET_LEAGUE, leagues: Leagues[0] })}>
                  {Leagues[0].name}
                </EmblemButton>
              </Link>
              <NextButton onClick={() => nextButton()}>
                {'>'}
              </NextButton>
            </div>
          </EmblemContainer>

          <EmblemContainerFirst index={1} length={Leagues.length}>
            <Emblem src={Leagues[1].emblemUrl} alt={Leagues[1].name} />
          </EmblemContainerFirst>

          <EmblemContainerSecond index={2} length={Leagues.length}>
            <Emblem src={Leagues[2].emblemUrl} alt={Leagues[2].name} />
          </EmblemContainerSecond>
        </OptionsSelector>
      </Scene>
    </Fragment>
  );
};
