import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  height: 4px;
  background-color: transparent;
  z-index: 96;
  
  @media only screen and (min-width: 650px){ //it'll only show on mobile devices
    visibility: hidden;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #3F5DE4;
  opacity: 0.7;
  transition: 0.2s ease-in-out;
  will-change: width;
`;

const Scroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const indicatorStyle = {
    width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%`
  };

  return (
    <ScrollContainer>
      <ScrollIndicator style={indicatorStyle} />
    </ScrollContainer>
  );
};

export default Scroll;
