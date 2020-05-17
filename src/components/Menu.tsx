import React, {useRef} from 'react';
import useToggle from 'react-use-toggle';
import { SmallTopColorBar, TopColorBar, SideColorBar, MenuToggleButton, MenuCloseTitle, MenuTitle, OrnamentalTriangle, AboutButtonIn, WorkButtonIn, DesignButtonIn, CodeButtonIn, ContactButtonIn, AboutButtonOut, WorkButtonOut, DesignButtonOut, CodeButtonOut, ContactButtonOut } from './MenuStyles';

function Menu() {

  const [showMenu, toggleMenu] = useToggle(false);
  const aboutButtonRef = useRef(null);
  const designButtonRef = useRef(null);
  const codeButtonRef = useRef(null);
  const workButtonRef = useRef(null);
  const contactButtonRef = useRef(null);

  const goTo = ((section) => {
    window.location.href = section;
  });

  // const goTo = ((ref) => {
  //    window.scrollTo(0, ref.current.offsetTop) 
  // });

  console.log(showMenu)

    return (
      <>
      <SmallTopColorBar/>
      <TopColorBar/>
      <SideColorBar/>
      <>
      <MenuToggleButton onClick={() => toggleMenu()}>{showMenu? (<MenuCloseTitle>x</MenuCloseTitle>):(<MenuTitle>menu</MenuTitle>)}
        <OrnamentalTriangle/>
      </MenuToggleButton>
      </>
      {showMenu ? (
        <>
        <AboutButtonIn onClick={() => goTo("#about")} >about</AboutButtonIn>
        <WorkButtonIn onClick={() => goTo("#work")}>work</WorkButtonIn>
        <DesignButtonIn onClick={() => goTo("#design")}>design</DesignButtonIn>
        <CodeButtonIn onClick={() => goTo("#code")}>code</CodeButtonIn>
        <ContactButtonIn onClick={() => goTo("#contact")}>contact</ContactButtonIn>
        </>  
      ):(
        <>
        <AboutButtonOut>about2</AboutButtonOut>
        <WorkButtonOut>work</WorkButtonOut>
        <DesignButtonOut >design</DesignButtonOut>
        <CodeButtonOut>code</CodeButtonOut>
        <ContactButtonOut >contact</ContactButtonOut>
        </>
      )}
      
      </>
    )

}

export default Menu;
