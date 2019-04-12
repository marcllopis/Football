import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../../context-provider/context-provider';
import { Emblem } from '../../utils/emblem/emblem';


const Separator = styled.div`
  margin-top: 20px;
  display:flex;
  justify-content: space-evenly;
`;
const Line = styled.hr`
  border : 0;
  height: 5px; 
  background-image: linear-gradient(to right, ${p => [p.firstColor]}, ${p => [p.secondColor]}); 
`;
const TeamTitle = styled.h1`
  font-family: 'Racing Sans One',cursive;
  font-size: 50px;
  letter-spacing: 13px;
  text-shadow: -5px 0px 5px #d8d8d8;
  margin-bottom: 0;
`;

export function TeamDetails() {
  const { state } = useContext(MainContext);
  const teamColors = state.team.clubColors.split(' ');
  return (
    <div>
      <Separator>
        <div>
          <TeamTitle>{state.team.name}</TeamTitle>
          <br />
          Stadium: {state.team.venue}
          <br />
          Founded: {state.team.founded}
        </div>
        <div>
          <Emblem src={state.team.crestUrl} alt={state.team.name} option="team" />
        </div>
      </Separator>
      <Line firstColor={teamColors[0]} secondColor={teamColors[2]} />
    </div>
  );
}
