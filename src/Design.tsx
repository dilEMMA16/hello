import React from "react";
import {
  DesignDiv,
  DesignGallery,
  ImageInfo,
  ImageDiv,
  ImageTitle,
  ImageOverlay,
} from "./DesignStyles";
import * as Sixfeet from './imgs/sixFeet.JPG';
import * as Eden from './imgs/eden.PNG';
import * as CleanUp from './imgs/cleanup.jpg';
import * as Coffee from './imgs/coffee.png';
import * as Farm2Table from './imgs/farm2table.JPG';
import * as LilThings from './imgs/lilthings.jpg';
import * as Mag from './imgs/mag.jpg';
import * as Pine from './imgs/pine.JPG';
import * as Pie from './imgs/pie.JPG';
import * as QuaranTime from './imgs/quartime.jpg';
import * as DeathWizard from './imgs/ticktick.jpg';
import * as Whine from './imgs/wine.JPG';
import * as BG1 from './imgs/bg1.jpg';
import * as BG2 from './imgs/bg2.jpg';
import * as FilmFest from './imgs/filmfest.PNG';
import * as GradCap from './imgs/gradcap.png';
import * as LEDs from './imgs/leds.jpg';
import * as LinkedInBanner from './imgs/linkedinbanner.png';
import * as Mieles from './imgs/mieles.png';
import * as TeachCode from './imgs/teachcode.png';
import * as Sponsorship from './imgs/sponsorshipucg.png';
import * as Beach1 from './imgs/drift1.jpg';
import * as Beach2 from './imgs/beach.jpg';
import * as Circuits from './imgs/getstarted.png';


function Design() {
  return (
    <DesignDiv id="design">
      <DesignGallery>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Sixfeet} alt="6 feet" />
          <ImageOverlay>
            <ImageTitle>6 Feet</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Eden} alt="Perilous Eden" />
          <ImageOverlay>
            <ImageTitle>Perilous Eden</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={CleanUp} alt="No Mess" />
          <ImageOverlay>
            <ImageTitle>No Mess</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Coffee} alt="Legal Drug" />
          <ImageOverlay>
            <ImageTitle>Legal Drug</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Farm2Table} alt="Farm 2 Table" />
          <ImageOverlay>
            <ImageTitle>Farm 2 Table</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={LilThings} alt="Remember the Little Things" />
          <ImageOverlay>
            <ImageTitle>Remember the Little Things</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Mag} alt="Art full" />
          <ImageOverlay>
            <ImageTitle>Art Full</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Pine} alt="Pine" />
          <ImageOverlay>
            <ImageTitle>Pine</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Pie} alt="Pie" />
          <ImageOverlay>
            <ImageTitle>Pie</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={QuaranTime} alt="Quaran-time" />
          <ImageOverlay>
            <ImageTitle>Quaran-time</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={DeathWizard} alt="Death Wizard" />
          <ImageOverlay>
            <ImageTitle>Death Wizard</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Whine} alt="Whine" />
          <ImageOverlay>
            <ImageTitle>Whine</ImageTitle>
            <ImageInfo>collage</ImageInfo>
          </ImageOverlay>
        </ImageDiv>

        <ImageDiv style={{ position: "relative" }}>
          <img src={BG1} alt="Buck Gnarly" />
          <ImageOverlay>
            <ImageTitle>Buck Gnarly</ImageTitle>
            <ImageInfo>photography</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={BG2} alt="Buck Gnarly" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "25%" }}>Buck Gnarly</ImageTitle>
            <ImageInfo>photography</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={FilmFest} alt="Film Festival" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "15%" }}>Film Festival</ImageTitle>
            <ImageInfo>digital</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Circuits} alt="Circuits" />
          <ImageOverlay>
            <ImageTitle>Circuits</ImageTitle>
            <ImageInfo>digital</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={GradCap} alt="Graduation Cap" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "40%" }}>Graduation Cap</ImageTitle>
            <ImageInfo>digital</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={LEDs} alt="LEDs" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "25%" }}>LEDs</ImageTitle>
            <ImageInfo>photography</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={LinkedInBanner} alt="LinkedIn Banner" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "7%" }}>LinkedIn Banner</ImageTitle>
            <ImageInfo>digital</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Mieles} alt="Mieles Book Cover" />
          <ImageOverlay>
            <ImageTitle>Mieles Book Cover</ImageTitle>
            <ImageInfo>digital</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={TeachCode} alt="Teach Code" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "40%" }}>Teach Code</ImageTitle>
            <ImageInfo>digital</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Sponsorship} alt="Sponsorship Packet" />
          <ImageOverlay>
            <ImageTitle>Sponsorship Packet</ImageTitle>
            <ImageInfo>digital</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Beach1} alt="Washington Beach" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "25%" }}>
              Washington Beach
            </ImageTitle>
            <ImageInfo>photography</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
        <ImageDiv style={{ position: "relative" }}>
          <img src={Beach2} alt="Washington Beach" />
          <ImageOverlay>
            <ImageTitle style={{ marginTop: "25%" }}>
              Washington Beach
            </ImageTitle>
            <ImageInfo>photography</ImageInfo>
          </ImageOverlay>
        </ImageDiv>
      </DesignGallery>
    </DesignDiv>
  );
}

export default Design;
