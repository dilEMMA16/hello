import React, { useState } from 'react';
import { SmallTopColorBar, TopColorBar, SideColorBar, MenuToggleButton, MenuCloseTitle, MenuTitle, OrnamentalTriangle, AboutButtonIn, WorkButtonIn, DesignButtonIn, CodeButtonIn, ContactButtonIn, AboutButtonOut, WorkButtonOut, DesignButtonOut, CodeButtonOut, ContactButtonOut } from './MenuStyles';

function Menu() {

  const [showMenu, setShowMenu] = useState(false);
  const [showTriangle, setShowTriangle] = useState('');

  window.addEventListener('scroll', () => {setShowMenu(false); setShowTriangle('none')});

  const goTo = ((section) => {
    window.location.href = section;
    setShowMenu(false);
  });

  const toggleMenu = () => {
    if (showMenu){
      setShowMenu(false);
    }
    else{
      setShowMenu(true);
    }
  }
  console.log(showMenu)

    return (
      <div>
      <SmallTopColorBar/>
      <TopColorBar/>
      <SideColorBar/>
      <>
      <MenuToggleButton style={{position:'fixed', zIndex:4}} onClick={() => toggleMenu()}>{showMenu? (<MenuCloseTitle>x</MenuCloseTitle>):(<MenuTitle>menu</MenuTitle>)}
        <OrnamentalTriangle style={{display:{showTriangle}}} />
      </MenuToggleButton>
      </>
      {showMenu ? (
        <div style={{position:'fixed', zIndex:4}}>
        <AboutButtonIn onClick={() => goTo("#about")} >about</AboutButtonIn>
        <WorkButtonIn onClick={() => goTo("#work")}>work</WorkButtonIn>
        <DesignButtonIn onClick={() => goTo("#design")}>design</DesignButtonIn>
        <CodeButtonIn onClick={() => goTo("#code")}>code</CodeButtonIn>
        <ContactButtonIn onClick={() => goTo("#contact")}>contact</ContactButtonIn>
        </div>  
      ):(
        <div >
        <AboutButtonOut>about</AboutButtonOut>
        <WorkButtonOut>work</WorkButtonOut>
        <DesignButtonOut >design</DesignButtonOut>
        <CodeButtonOut>code</CodeButtonOut>
        <ContactButtonOut >contact</ContactButtonOut>
        </div>
      )}
      
      </div>
    )

}

export default Menu;
