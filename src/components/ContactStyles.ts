import styled from "../../node_modules/styled-components";
import { YELLOW, RED, ROYAL_BLUE, GREEN } from "./ColorConstants";
import {
  SM_SCREENS,
  MD_SCREENS,
  LG_SCREENS,
  XL_SCREENS,
} from "./BreakpointConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactDiv = styled.div`
  max-width: 100%;
  padding: 65px 35px;
  background-color: ${ROYAL_BLUE};
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
  border-bottom: 32px solid ${GREEN};
  @media (min-width: ${SM_SCREENS}) {
    padding: 65px 4em;
  }
  @media (min-width: ${MD_SCREENS}) {
    padding: 65px 8em;
  }
  @media (min-width: ${LG_SCREENS}) {
    padding: 65px 17em;
  }
  @media (min-width: ${XL_SCREENS}) {
    padding: 65px 17em;
  }
`;

export const ContactIcon = styled(FontAwesomeIcon)`
  margin: 0 20px;
  color: ${YELLOW};
  font-size: 4em;
  transition: 0.3s;
  &:hover {
    color: ${RED};
  }
`;
