import React from 'react';
import styled from 'styled-components';


export const Spinner = styled.img`
  width:  60%;
  height: 60%;
  margin: 20px;
`;

export function Loader() {
  return (
    <Spinner src="https://i.gifer.com/7plQ.gif" alt="Spinner loader" />
  );
}
