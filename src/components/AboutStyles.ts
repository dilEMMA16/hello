import styled from "../../node_modules/styled-components";
import { YELLOW, RED, GREEN, LIGHT_GRAY, ROYAL_BLUE } from "./ColorConstants";
import {
  SM_SCREENS,
  MD_SCREENS,
  LG_SCREENS,
  XL_SCREENS,
} from "./BreakpointConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutDiv = styled.div`
  height: calc(100vh + 100px);
  max-width: 100%;
  border-top: 1px solid ${LIGHT_GRAY};
  border-bottom: 1px solid ${LIGHT_GRAY};
  padding: 0 35px;
  background-color: ${YELLOW};
  text-align: left;
  overflow-x: hidden;
  overflow-y: hidden;
  @media (min-width: ${SM_SCREENS}) {
    padding: 0 4em;
  }
  @media (min-width: ${MD_SCREENS}) {
    padding: 0 8em;
  }
  @media (min-width: ${LG_SCREENS}) {
    padding: 0 17em;
  }
  @media (min-width: ${XL_SCREENS}) {
    padding: 0 17em;
  }
`;

export const ProfileIcon = styled(FontAwesomeIcon)`
  color: ${ROYAL_BLUE};
  position: relative;
  left: -65px;
  top: -70px;
  font-size: 3em;
  display: none;
  @media (min-width: ${MD_SCREENS}) {
    display: inline-block;
  }
`;

export const AboutParagraph = styled.div`
  color: ${ROYAL_BLUE} !important;
`;

export const NounParagraph = styled(AboutParagraph)`
  font-style: italic;
  font-weight: 900;
  padding-bottom: 15px;
`;

export const DefinitionParagraph = styled(AboutParagraph)`
  font-size: 1em;
  font-weight: 600;
  padding-bottom: 35px;
  @media (min-width: ${SM_SCREENS}) {
  }
`;

export const OrnamentalDivBlue = styled.div`
  background-color: ${ROYAL_BLUE};
  height: 300px;
  width: 100%;
  clip-path: polygon(
    14% 18%,
    33% 6%,
    55% 25%,
    81% 13%,
    100% 25%,
    100% 100%,
    0 100%,
    0 6%
  );
`;

export const OrnamentalDivRed = styled.div`
  background-color: ${RED};
  height: 200px;
  width: 100%;
  position: relative;
  top: -150px;
  clip-path: polygon(
    14% 18%,
    33% 6%,
    55% 25%,
    81% 13%,
    100% 25%,
    100% 100%,
    0 100%,
    0 6%
  );
`;

export const OrnamentalDivGreen = styled.div`
  background-color: ${GREEN};
  height: 120px;
  width: 100%;
  position: relative;
  top: -250px;
  clip-path: polygon(
    14% 18%,
    33% 6%,
    55% 25%,
    81% 13%,
    100% 25%,
    100% 100%,
    0 100%,
    0 6%
  );
`;
