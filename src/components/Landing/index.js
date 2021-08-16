import React, { useState } from 'react';
// import Video from "../../videos/pexels-crazy-motions-8733062.mp4";
import Video from "../../videos/lake.mp4";
import { LandingContainer, LandingVideoContainer, LandingVideo, LandingTextContainer, LandingTextH1, LandingTextH2, Button, ArrowForward, ArrowDownward } from "./LandingElements";

const Landing = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <LandingContainer>
      <LandingVideoContainer>
        <LandingVideo autoPlay loop muted src={Video} type="video/mp4" />
      </LandingVideoContainer>
      <LandingTextContainer>
        <LandingTextH1>Hey, I'm Rob</LandingTextH1>
        <LandingTextH2>A Full-Stack Web Developer from Chicago, IL</LandingTextH2>
        <Button 
          to="about" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >Continue {hover ? <ArrowDownward /> : <ArrowForward />} </Button>
      </LandingTextContainer>
    </LandingContainer>
  )
}

export default Landing;