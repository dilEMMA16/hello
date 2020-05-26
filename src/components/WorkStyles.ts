import styled from '../../node_modules/styled-components';
import {GREEN, LIGHT_GRAY} from './ColorConstants';
import { SM_SCREENS, MD_SCREENS, LG_SCREENS, XL_SCREENS } from './BreakpointConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const WorkDiv = styled.div`
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

export const BriefCaseIcon = styled(FontAwesomeIcon)`
color:${GREEN};
font-size:2.5em;
margin-right: 20px;
float: left;
position: relative;
top: 10px;
@media (min-width: ${MD_SCREENS}){
    float: none;
    font-size: 3em;
    display: block;
    margin: auto;
    margin-bottom: 30px;
}
`;

export const WorkHeading3 = styled.h3`
  color: ${GREEN};
  font-weight: 800;
  font-size: 1.25em;
  left: 10px;
  margin-bottom: 5px;
`;

export const RoleDiv = styled.div`
  width: 90%;
  margin: auto;
`;

export const TextDiv = styled.div`
  display: inline-block;
  margin-bottom : 40px;
  @media (min-width: ${MD_SCREENS}){
      display: block;
      text-align: center;
  }
`;

export const DateParagraph = styled.p`
  color: ${LIGHT_GRAY};
  line-height: 2.5;
`;

export const EmployerParagraph = styled.p`
  padding-bottom: 10px;
`;
