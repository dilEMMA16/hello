import React, { useEffect, useRef} from 'react';
import '../App.css';
import useToggle from 'react-use-toggle';

function Menu() {

  //const [showMenu, setShowMenu] = useState(false);
  const [showMenu, toggleMenu] = useToggle(false);
  const aboutButtonRef = useRef(null);
  const designButtonRef = useRef(null);
  const codeButtonRef = useRef(null);
  const workButtonRef = useRef(null);
  const contactButtonRef = useRef(null);

  useEffect(() => {
    console.log(contactButtonRef);
    if(showMenu){
      console.log("fade in")
      contactButtonRef.current.style.animationName = "contactTransitionIn";
      aboutButtonRef.current.style.animationName = "aboutTransitionIn";
      designButtonRef.current.style.animationName = "designTransitionIn";
      codeButtonRef.current.style.animationName = "codeTransitionIn";
      workButtonRef.current.style.animationName = "workTransitionIn";
    }
    else{
      contactButtonRef.current.style.animationName = "contactTransitionOut";
      aboutButtonRef.current.style.animationName = "aboutTransitionOut";
      designButtonRef.current.style.animationName = "designTransitionOut";
      codeButtonRef.current.style.animationName = "codeTransitionOut";
      workButtonRef.current.style.animationName = "workTransitionOut";
  }},[showMenu])

    return (
      <>
      <div id="topColorBar"></div>
      <div id="sideColorBar"></div>
      <>
      <button id="menuButton" onClick={() => toggleMenu()}>{showMenu? (<span id="menuCloseTitle">x</span>):(<span id="menuTitle">menu</span>)}<div id="triangle-bottomright"></div></button>
      </>
      <button className="navButton navLink" ref={aboutButtonRef} id="aboutButton">about</button>
      <button class="navButton navLink" ref={workButtonRef} id="workButton">work</button>
      <button class="navButton navLink" ref={designButtonRef} id="designButton">design</button>
      <button class="navButton navLink" ref={codeButtonRef} id="codeButton">code</button>
      <button class="navButton navLink" ref={contactButtonRef} id="contactButton">contact</button>
      </>
    )

}

export default Menu;
