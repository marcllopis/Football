import styled from 'styled-components';


export const EmblemButton = styled.div`
  width: 55%;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
  border-radius: 10px;
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
  width: 10%;
  padding: 0;
`;

export const NextButton = styled(EmblemButton)`
  width: 10%;
  padding: 0;
`;