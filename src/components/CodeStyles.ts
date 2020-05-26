import styled from '../../node_modules/styled-components';
import {YELLOW, RED, LIGHT_GRAY} from './ColorConstants';
import { SM_SCREENS, MD_SCREENS, LG_SCREENS, XL_SCREENS } from './BreakpointConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';

export const CodeDiv = styled.div`
  max-width: 100%;
  border-top: 1px solid ${LIGHT_GRAY};
  border-bottom: 1px solid ${LIGHT_GRAY};
  padding: 65px 35px;
  background-color: white;
  text-align: left;
  overflow-x: hidden;
  overflow-y: hidden;
  @media (min-width: ${SM_SCREENS}){
    padding: 65px 4em;
   }
  @media (min-width: ${MD_SCREENS}){
   padding: 65px 8em;
  }
  @media (min-width: ${LG_SCREENS}){
    padding: 65px 17em;
   }
   @media (min-width: ${XL_SCREENS}){
    padding: 65px 17em;
   }
`;


export const CodeTextDiv = styled.div`
  display: inline-block;
  margin-bottom : 60px;
  margin-top: 40px;
  text-align: right;
  margin-right: 20px;
`;

export const CardIcon = styled(FontAwesomeIcon)`
color:${YELLOW};
font-size:6em;
margin-right: 20px;
float: right;
@media (min-width: ${MD_SCREENS}){
    float: none;
    font-size: 3em;
}
`;

export const CodeButton = styled(Button)`
 width: 100%;
 height: 100%;
 padding: 20px 50px !important;
 position: relative;
 background-color: ${RED} !important;
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
 &:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
 }
`;

export const CodeHeading = styled.h2`
 color: white;
 font-size: 1.25em;
 text-transform: none;
 font-family: 'Muli';
 line-height: 1;
 margin-bottom: 15px;
`;

export const CodeParagraph = styled.p`
 color: white;
 font-size: 0.75em;
 text-transform: none;
 height: 100%;
`;

export const CodeLink = styled.a`
 text-decoration: none;
`;
