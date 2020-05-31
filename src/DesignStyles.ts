import styled from "styled-components";
import { LIGHT_GRAY, GREEN, ROYAL_BLUE } from "./ColorConstants";
import {
  SM_SCREENS,
  MD_SCREENS,
  LG_SCREENS,
  XL_SCREENS,
} from "./BreakpointConstants";

export const DesignDiv = styled.div`
  max-width: 100%;
  border-top: 1px solid ${LIGHT_GRAY};
  border-bottom: 1px solid ${LIGHT_GRAY};
  padding: 65px 35px;
  background-color: white;
  text-align: left;
  overflow-x: hidden;
  overflow-y: hidden;
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

export const ImageDiv = styled.div`
  position: relative;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 8px;
  left: 1px;
  height: calc(100% - 20px);
  border-radius: 5px;
  background: ${GREEN};
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  text-align: center;
  &:hover {
    opacity: 1;
  }
`;

export const ImageTitle = styled.h3`
  margin-top: 50%;
  color: ${ROYAL_BLUE};
  font-weight: 800;
  @media (max-width: ${SM_SCREENS}) {
    font-size: 2em;
  }
`;

export const ImageInfo = styled.p`
  font-size: 0.75em;
  font-weight: 600;
  color: white;
  font-style: italic;
`;

export const DesignGallery = styled.div`
  -webkit-column-count: 1; /* Chrome, Safari, Opera */
  -moz-column-count: 1; /* Firefox */
  column-count: 1;
  margin: 0 auto;
  img {
    width: 100%;
    margin: 7px 0;
    border: 1px solid ${LIGHT_GRAY};
    border-radius: 5px;
  }
  @media (min-width: ${SM_SCREENS}) {
    -webkit-column-count: 2; /* Chrome, Safari, Opera */
    -moz-column-count: 2; /* Firefox */
    column-count: 2;
  }
  @media (min-width: ${MD_SCREENS}) {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
  }
  @media (min-width: ${LG_SCREENS}) {
    -webkit-column-count: 4; /* Chrome, Safari, Opera */
    -moz-column-count: 4; /* Firefox */
    column-count: 4;
  }
`;
