import styled from 'styled-components';


const sizeBasedOnLocation = {
  team: '120px',
  selector: '60%',
};

export const Emblem = styled.img`
  width: ${p => sizeBasedOnLocation[p.option]};
  height: ${p => sizeBasedOnLocation[p.option]};
  margin: 20px;
`;
