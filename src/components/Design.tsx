import React from 'react';
import { DesignDiv, DesignGallery, ImageInfo, ImageDiv, ImageTitle, ImageOverlay } from './DesignStyles';


function Design() {
    
    return (
      <DesignDiv id="design">
          <DesignGallery>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/6feet.JPG" alt="6 feet" />
                <ImageOverlay><ImageTitle>6 Feet</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/eden.png" alt="Perilous Eden"/>
                <ImageOverlay><ImageTitle>Perilous Eden</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/cleanup.jpg" alt="No Mess"/>
                <ImageOverlay><ImageTitle>No Mess</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/coffee.png" alt="Legal Drug"/>
                <ImageOverlay><ImageTitle>Legal Drug</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/farm2table.jpg" alt="Farm 2 Table"/>
                <ImageOverlay><ImageTitle>Farm 2 Table</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/lilthings.jpg" alt="Remember the Little Things"/>
                <ImageOverlay><ImageTitle>Remember the Little Things</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/mag.jpg" alt="Art full"/>
                <ImageOverlay><ImageTitle>Art Full</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/pine.jpg" alt="Pine"/>
                <ImageOverlay><ImageTitle>Pine</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/pie.jpg" alt="Pie"/>
                <ImageOverlay><ImageTitle>Pie</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/quartime.jpg" alt="Quaran-time"/>
                <ImageOverlay><ImageTitle>Quaran-time</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/ticktick.jpg" alt="Death Wizard"/>
                <ImageOverlay><ImageTitle>Death Wizard</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/wine.jpg" alt="Whine"/>
                <ImageOverlay><ImageTitle>Whine</ImageTitle><ImageInfo>collage</ImageInfo></ImageOverlay>
              </ImageDiv>
                

              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/bg1.JPG" alt="Buck Gnarly"/>
                <ImageOverlay><ImageTitle>Buck Gnarly</ImageTitle><ImageInfo>photography</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/bg2.jpg" alt="Buck Gnarly"/>
                <ImageOverlay><ImageTitle style={{marginTop:'25%'}}>Buck Gnarly</ImageTitle><ImageInfo>photography</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/filmfest.png" alt="Film Festival"/>
                <ImageOverlay><ImageTitle style={{marginTop:'15%'}}>Film Festival</ImageTitle><ImageInfo>digital</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/getstarted.png" alt="Circuits"/>
                <ImageOverlay><ImageTitle>Circuits</ImageTitle><ImageInfo>digital</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/gradcap.png" alt="Graduation Cap"/>
                <ImageOverlay><ImageTitle style={{marginTop:'40%'}}>Graduation Cap</ImageTitle><ImageInfo>digital</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/leds.jpg" alt="LEDs"/>
                <ImageOverlay><ImageTitle style={{marginTop:'25%'}}>LEDs</ImageTitle><ImageInfo>photography</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/linkedinbanner.png" alt="LinkedIn Banner"/>
                <ImageOverlay><ImageTitle style={{marginTop:'7%'}}>LinkedIn Banner</ImageTitle><ImageInfo>digital</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/mieles.png" alt="Mieles Book Cover"/>
                <ImageOverlay><ImageTitle>Mieles Book Cover</ImageTitle><ImageInfo>digital</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/teachcode.png" alt="Teach Code"/>
                <ImageOverlay><ImageTitle style={{marginTop:'40%'}}>Teach Code</ImageTitle><ImageInfo>digital</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/sponsorshipucg.png" alt="Sponsorship Packet"/>
                <ImageOverlay><ImageTitle>Sponsorship Packet</ImageTitle><ImageInfo>digital</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/drift2.jpg" alt="Washington Beach"/>
                <ImageOverlay><ImageTitle style={{marginTop:'25%'}}>Washington Beach</ImageTitle><ImageInfo>photography</ImageInfo></ImageOverlay>
              </ImageDiv>
              <ImageDiv style={{position:'relative'}}>
                <img src="/imgs/beach.jpg" alt="Washington Beach"/>
                <ImageOverlay><ImageTitle style={{marginTop:'25%'}}>Washington Beach</ImageTitle><ImageInfo>photography</ImageInfo></ImageOverlay>
              </ImageDiv>
  </DesignGallery>
      </DesignDiv>
    )

}

export default Design;
