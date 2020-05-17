import styled from '../../node_modules/styled-components';
import {YELLOW, RED, GREEN, LIGHT_GRAY, ROYAL_BLUE} from './ColorConstants';


export const AboutDiv = styled.div`
  min-height: 100vh;
  border-top: 1px solid ${LIGHT_GRAY};
  border-bottom: 1px solid ${LIGHT_GRAY};
  padding: 5em 13em;
  background-color: ${YELLOW};
  text-align: left;
`;

export const AboutParagraph = styled.div`
  color: ${ROYAL_BLUE} !important;
`;

export const NounParagraph = styled(AboutParagraph)`
font-style: italic;
font-weight:bold;
padding-bottom: 15px;
`;

export const DefinitionParagraph = styled(AboutParagraph)`
font-size: 1.25em;
padding-bottom: 35px;
`;

export const OrnamentalDivBlue = styled.div`
background-color: ${ROYAL_BLUE};
height: 300px;
width: 100%;
clip-path: polygon(14% 18%, 33% 6%, 55% 25%, 81% 13%, 100% 25%, 100% 100%, 0 100%, 0 6%);
`;

export const OrnamentalDivRed = styled.div`
background-color: ${RED};
height: 200px;
width: 100%;
position:relative;
top:-150px;
clip-path: polygon(14% 18%, 33% 6%, 55% 25%, 81% 13%, 100% 25%, 100% 100%, 0 100%, 0 6%);
`;

export const  OrnamentalDivGreen = styled.div`
background-color: ${GREEN};
height: 120px;
width: 100%;
position:relative;
top:-250px;
clip-path: polygon(14% 18%, 33% 6%, 55% 25%, 81% 13%, 100% 25%, 100% 100%, 0 100%, 0 6%);
`;
