import React, { useContext } from 'react';
import { MainContext } from '../../context-provider/context-provider';
import { Emblem } from '../../utils/emblem/emblem';

export function TeamDetails() {
  const { state } = useContext(MainContext);

  return (
    <div>
      Name: {state.team.name}
      Stadium: {state.team.venue}
      Founded: {state.team.founded}
      Colors: {state.team.clubColors}
      <Emblem src={state.team.crestUrl} alt={state.team.name} />
    </div>
  );
}
