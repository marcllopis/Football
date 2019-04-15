import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { array, number, func, string } from 'prop-types';
import {
  EmblemContainer,
  EmblemContainerSecondLast,
  EmblemContainerLast,
  EmblemContainerFirst,
  EmblemContainerSecond,
} from './carousel.styles';
import { Emblem } from '../emblem/emblem';
import {
  EmblemButton,
  PrevButton,
  NextButton,
} from '../emblem-buttons/emblem-buttons';


export function OptionsSelector(props) {
  const {
    arr,
    length,
    action,
    linkTo,
  } = props;

  const [value, set] = useState(true); // simulate a re-render with custom hook
  const [imageLoadError] = useState(true);

  const fallbackImage = (e) => {
    if (imageLoadError) e.target.src = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
  };

  const prevButton = () => {
    const temp = arr.pop();
    arr.unshift(temp);
    set(!value);
  };

  const nextButton = () => {
    const temp = arr.shift();
    arr.push(temp);
    set(!value);
  };

  return (
    <Fragment>
      <EmblemContainerSecondLast index={length - 2} length={length}>
        <Emblem
          src={arr[length - 2].crestUrl}
          alt={arr[length - 2].name}
          onError={fallbackImage}
          option="selector"
        />
      </EmblemContainerSecondLast>

      <EmblemContainerLast index={length - 1} length={length}>
        <Emblem
          src={arr[length - 1].crestUrl}
          alt={arr[length - 1].name}
          onError={fallbackImage}
          option="selector"
        />
      </EmblemContainerLast>

      <EmblemContainer index={0} length={length}>
        <Emblem
          src={arr[0].crestUrl}
          alt={arr[0].name}
          onError={fallbackImage}
          option="selector"
        />
        <div>
          <PrevButton onClick={() => prevButton()}>
            {'<'}
          </PrevButton>
          <Link to={linkTo}>
            <EmblemButton onClick={() =>
              action()}
            >
              {arr[0].name}
            </EmblemButton>
          </Link>
          <NextButton onClick={() => nextButton()}>
            {'>'}
          </NextButton>
        </div>
      </EmblemContainer>

      <EmblemContainerFirst index={1} length={length}>
        <Emblem
          src={arr[1].crestUrl}
          alt={arr[1].name}
          onError={fallbackImage}
          option="selector"
        />
      </EmblemContainerFirst>

      <EmblemContainerSecond index={2} length={length}>
        <Emblem
          src={arr[2].crestUrl}
          alt={arr[2].name}
          onError={fallbackImage}
          option="selector"
        />
      </EmblemContainerSecond>
    </Fragment>
  );
}

OptionsSelector.propTypes = {
  arr: array.isRequired,
  length: number.isRequired,
  action: func.isRequired,
  linkTo: string.isRequired,
};
