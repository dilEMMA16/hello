import styled, {keyframes} from '../../node_modules/styled-components';
import {YELLOW, RED, GREEN, ROYAL_BLUE, PURPLE} from './ColorConstants';

const aboutTransitionIn = keyframes`
    from {
        top:-5em;
    }
    to {
        top:0;
    }
`;

const aboutTransitionOut = keyframes`
    from {
        top:0;
    }
    to {
        top:-5em;
    }
`;

const workTransitionIn = keyframes`
    0% {
        top:-5em;
    }
    100% {
        top:0;
    }
`;

const workTransitionOut = keyframes`
    0% {
        top:0em;
    }
    100% {
        top:-5em;
    }
`;

const designTransitionIn = keyframes`
    from {
        left:-5em;
    }
    to {
        left:0;
    }
`;

const designTransitionOut = keyframes`
    from {
        left:0;
    }
    to {
        left:-5em;
    }
`;

const codeTransitionIn = keyframes`
    from {
        left:-5em;
    }
    to {
        left:6.5em;
    }
`;

const codeTransitionOut = keyframes`
    from {
        left:6.5em;
    }
    to {
        left:-5em;
    }
`;

const contactTransitionIn = keyframes`
    from {
        left:-5em;
    }
    to {
        left:0;
    }
`;

const contactTransitionOut = keyframes`
    from {
        left:0;
    }
    to {
        left:-5em;
    }
`;


export const NavButton = styled.button`
    height: 6.5em;
    width: 6.5em;
    position: absolute;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 400;
    font-family: 'Muli', sans-serif;
`;


export const MenuTitle = styled.span`
    position: absolute;
    top: -4.2em;
    left: 7px;
    transform: rotate(315deg);
    font-size: 14px;
    color: white;
`;

export const MenuCloseTitle = styled(MenuTitle)`
    top: -2.69em;
    left: 16px;
    font-size: 24px;
`;

export const OrnamentalTriangle = styled.div`
    width: 0;
    height: 0;
    border-bottom: 35px solid ${YELLOW};
    border-left: 35px solid transparent;
    position:relative;
    top: -56px;
    left: 21px;
    z-index: 1
`;

export const TopColorBar = styled.div`
    height: 20px;
    width: 400px;
    background-color: ${PURPLE};
    position:absolute;
    left: 13em;
    top:0;
    overflow-x: hidden;
`;

export const SmallTopColorBar = styled(TopColorBar)`
    width: 400px;
    background-color: ${YELLOW};
    left: 10em;
`;

export const SideColorBar = styled(SmallTopColorBar)`
    width: 20px;
    height: 200px;
    top: 7.7em;
    left:0px;
`;

export const MenuToggleButton = styled.button`
    width: 0;
    height: 0;
    border-style:none;
    padding:0;
    cursor: pointer;
    background-color:inherit;
    border-top: 75px solid ${ROYAL_BLUE};
    border-right: 75px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
`;

export const AboutButtonIn = styled(NavButton)`
    left: 13em;
    top: 0;
    background: ${ROYAL_BLUE};
    height:4.5em;
    width: 4.5em;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation: ${aboutTransitionIn} .2s;
`;

export const AboutButtonOut = styled(AboutButtonIn)`
    cursor: default;
    animation: ${aboutTransitionOut} .2s;
    animation-fill-mode: forwards;
`;


export const WorkButtonIn = styled(NavButton)`
    left: 6.5em;
    top: 0em;
    background: ${GREEN};
    animation: ${workTransitionIn} .3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;

export const WorkButtonOut = styled(WorkButtonIn)`
    cursor: default;
    animation: ${workTransitionOut} .3s;
    animation-fill-mode: forwards;
`;
    

export const DesignButtonIn = styled(NavButton)`
    left: 0;
    top: 6.5em;
    background: ${YELLOW};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation: ${designTransitionIn} .3s;
`;

export const DesignButtonOut = styled(DesignButtonIn)`
    animation: ${designTransitionOut} .3s;
    cursor: default;
    animation-fill-mode: forwards;
`;


export const CodeButtonIn = styled(NavButton)`
    left: 6.5em;
    top: 6.5em;
    background:${RED};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation: ${codeTransitionIn} .4s;
`;

export const CodeButtonOut = styled(CodeButtonIn)`
    animation: ${codeTransitionOut} .4s;
    cursor: default;
    animation-fill-mode: forwards;
`;

export const ContactButtonIn = styled(NavButton)`
    left: 0;
    top: 13em;
    background: ${PURPLE};
    height:4.5em;
    width: 4.5em;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation: ${contactTransitionIn} .2s;
`;

export const ContactButtonOut = styled(ContactButtonIn)`
    animation: ${contactTransitionOut}.2s;
    cursor: default;
    animation-fill-mode: forwards;
`;
