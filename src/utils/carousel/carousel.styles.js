import styled from 'styled-components';


export const Scene = styled.div`
  position: relative;
  width: 210px;
  height: 140px;
  margin: 80px auto;
  perspective: 1500px;
`;
export const OptionsSelector = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(-288px);
  transform-style: preserve-3d;
  transition: transform 1s;
`;

export const EmblemContainer = styled.div`
  opacity: 1;
  position: absolute;
  max-width: 200px;
  width: 200px;
  max-height: 200px;
  height: 200px;
  left: 10px;
  top: 10px;
  text-align: center;
  transition: transform 1s, opacity 1s;
  transform:rotateY(${p => p.index * 360/p.length}deg) translateZ(${p => 28 * p.length}px);
`;

export const EmblemContainerSecondLast = styled(EmblemContainer)`
  opacity: 0.1;
  max-width: 150px;
  width: 150px;
  max-height: 150px;
  height: 150px;
`;

export const EmblemContainerLast = styled(EmblemContainer)`
  opacity: 0.3;
  max-width: 180px;
  width: 180px;
  max-height: 180px;
  height: 180px;
`;

export const EmblemContainerFirst = styled(EmblemContainer)`
  opacity: 0.3;
  max-width: 180px;
  width: 180px;
  max-height: 180px;
  height: 180px;
`;

export const EmblemContainerSecond = styled(EmblemContainer)`
  opacity: 0.1;
  max-width: 150px;
  width: 150px;
  max-height: 150px;
  height: 150px;
`;
