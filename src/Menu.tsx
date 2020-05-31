import React, { useState } from "react";
import {
  SmallTopColorBar,
  TopColorBar,
  SideColorBar,
  MenuToggleButton,
  MenuCloseTitle,
  MenuTitle,
  OrnamentalTriangle,
  AboutButtonIn,
  WorkButtonIn,
  DesignButtonIn,
  CodeButtonIn,
  ContactButtonIn,
  AboutButtonOut,
  WorkButtonOut,
  DesignButtonOut,
  CodeButtonOut,
  ContactButtonOut,
  SmallestTopColorBar,
  SmallSideColorBar,
  MenuDiv,
} from "./MenuStyles";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const [showTriangle, setShowTriangle] = useState(true);

  window.addEventListener("scroll", () => {
    setShowMenu(false);
    setShowTriangle(false);
  });

  const goTo = (section) => {
    window.location.href = section;
    setShowMenu(false);
  };

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <div>
      <SmallTopColorBar />
      <SmallestTopColorBar />
      <TopColorBar />
      <SideColorBar />
      <SmallSideColorBar />
      <>
        <MenuToggleButton onClick={() => toggleMenu()}>
          {showMenu ? (
            <MenuCloseTitle>x</MenuCloseTitle>
          ) : (
            <MenuTitle>menu</MenuTitle>
          )}
          {showTriangle && <OrnamentalTriangle />}
        </MenuToggleButton>
      </>
      <MenuDiv>
        {showMenu ? (
          <>
            <AboutButtonIn onClick={() => goTo("#about")}>about</AboutButtonIn>
            <WorkButtonIn onClick={() => goTo("#work")}>work</WorkButtonIn>
            <DesignButtonIn onClick={() => goTo("#design")}>
              design
            </DesignButtonIn>
            <CodeButtonIn onClick={() => goTo("#code")}>code</CodeButtonIn>
            <ContactButtonIn onClick={() => goTo("#contact")}>
              contact
            </ContactButtonIn>
          </>
        ) : (
          <>
            <AboutButtonOut>about</AboutButtonOut>
            <WorkButtonOut>work</WorkButtonOut>
            <DesignButtonOut>design</DesignButtonOut>
            <CodeButtonOut>code</CodeButtonOut>
            <ContactButtonOut>contact</ContactButtonOut>
          </>
        )}
      </MenuDiv>
    </div>
  );
}

export default Menu;
