import styled from '../node_modules/styled-components';
import {RED, ROYAL_BLUE} from './components/ColorConstants';
import { SM_SCREENS } from './components/BreakpointConstants';


export const AppDiv = styled.div`
    text-align:center;
    margin: 0;
    font-family: 'Muli', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 100vw;
    overflow-x: hidden !important;
`;

export const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
`;

export const AppHeader = styled.h1`
    background-color: white ;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const Code = styled.p`
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
`;

export const AppHeading = styled.h1`
    color: ${ROYAL_BLUE};
    font-family: 'Molle', cursive;
    font-family: 'Vibur', cursive;
    font-family: 'Grenze', serif;
    margin-bottom: 35px;
    margin-top: 0;
    font-size: 4em;
    line-height:1;
    @media (min-width: ${SM_SCREENS}){
        font-size: 3.5em;
    }
`;

export const AppSubHeading = styled.h2`
    font-family: 'Grenze', serif;
    font-size: 3em;
    color: ${RED};

    color: ${ROYAL_BLUE};
    margin-bottom: 0;
`;

export const ParagraphRed = styled.p`
    color: ${RED};
    font-family: 'Muli', sans-serif;
    font-size: 1em;
    font-weight: 600;
    margin: 0 !important;
`;