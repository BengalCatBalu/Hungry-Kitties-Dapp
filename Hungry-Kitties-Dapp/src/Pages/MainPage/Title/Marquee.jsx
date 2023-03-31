import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLOR_ORANGE } from '../../../Constants';
import Text from '../../../Styled-Components/Text';

const marqueeAnimation = keyframes`
  0%{
    transform: translate(0, 0);
  }
  
  100%{
    transform: translate(-160%, 0);
  }
`;



const MarqueeWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  background-color: white;
  width: 100%;
  height: 5vh;
  margin-top: 30vh;
  align-items: center;
  justify-content: center;
`;

const MarqueeContent = styled.div`
  //display: flex;
  //gap: 10vw;
  margin-top: 0.5vh;
  padding-left: 100%;
  word-spacing: 5vw;
  color: black;
  animation: ${marqueeAnimation} 10s linear infinite;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  align-items: center;
  &:hover {
    animation-play-state: paused;
  }
`;

const Marquee = ({ children }) => {
  return (
    <MarqueeWrapper>
      <MarqueeContent>
        <Text fsize = "2vw" white_space = "nowrap" font_weight = "1200">
            HungryKitties HungryKitties HungryKitties HungryKitties HungryKitties HungryKitties HungryKitties
        </Text>
    </MarqueeContent>
    </MarqueeWrapper>
  );
};

export default Marquee;