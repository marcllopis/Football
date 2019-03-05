import styled from 'styled-components';


export const EmblemButton = styled.div`
  width: 90px;
	max-width: 90px;
	height: 42px;
	max-height: 42px;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-size:12px;
	font-weight:bold;
	padding:6px;
	text-decoration:none;
	text-align: center;
	vertical-align: middle;
  border-radius: 10px;
	z-index:2;
  :hover {
    background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	  background-color:#f6f6f6;
  }
  :active {
    position:relative;
	  top:1px;
  }
`;

export const PrevButton = styled(EmblemButton)`
  width: 10px;
  padding: 0;
`;

export const NextButton = styled(EmblemButton)`
  width: 10px;
  padding: 0;
`;