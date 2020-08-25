import styled from 'styled-components'

export const FullBody = styled.main`
  background-color: #2b071e;
  background-image: linear-gradient(
    to bottom,
    #250e1e 0%,
    #2b071e 25%,
    #29061e 50%,
    #26071c 100%
  );
  color: #ffffff;
  width: 100%;
  height: 100%;
  min-height: 3200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const TopContainer = styled.div`
  height: 100%;
`
export const TopWrapperRow = styled.div`
  height: 100%;
  max-height: 800px;
`
export const TopBackground = styled.div`
  background-image: url('./img/000-bg-01-top.jpg');
  width: 100%;
  max-height: 1363px;
  min-height: 1363px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const TopBall = styled.div`
  background-image: url('./img/001-topball.png');
  width: 1113px;
  height: 1123px;
  position: absolute;
  z-index: 9;
  top: -850px;
  animation-name: topBall;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes topBall {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(18deg) scale(1);
    }
    6% {
      transform: rotate(22deg) scale(1.03);
    }
    7% {
      transform: rotate(24deg) scale(1);
      filter: hue-rotate(0deg);
    }
    10% {
      transform: rotate(36deg);
    }
    20% {
      transform: rotate(72deg);
    }
    30% {
      transform: rotate(108deg);
      filter: hue-rotate(-40deg);
    }
    40% {
      transform: rotate(144deg);
    }
    44% {
      transform: rotate(159deg) scale(1);
    }
    45% {
      transform: rotate(162deg) scale(1.03);
      filter: hue-rotate(0deg);
    }
    46% {
      transform: rotate(164deg) scale(1);
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(216deg);
    }
    70% {
      transform: rotate(252deg) scale(1);
      filter: blur(0px);
    }
    80% {
      transform: rotate(288deg) scale(1.1);
      filter: blur(2px);
    }
    90% {
      transform: rotate(324deg) scale(1);
      filter: blur(0px);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const TopBallWhite = styled.div`
  background-image: url('./img/001-topball-white.png');
  width: 1113px;
  height: 1123px;
  position: absolute;
  z-index: 8;
  top: -850px;
  opacity: 0;
  animation-name: topBall-White;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes topBall-White {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(48deg) scale(1);
      opacity: 0;
    }
    6% {
      transform: rotate(54deg) scale(1.015);
      opacity: 0.5;
    }
    7% {
      transform: rotate(60deg) scale(1);
      opacity: 0;
    }
    10% {
      transform: rotate(36deg);
    }
    20% {
      transform: rotate(72deg);
    }
    30% {
      transform: rotate(108deg);
    }
    40% {
      transform: rotate(144deg);
    }
    44% {
      transform: rotate(159deg) scale(1);
      opacity: 0;
    }
    45% {
      transform: rotate(152deg) scale(1.015);
      opacity: 0.8;
    }
    46% {
      transform: rotate(154deg) scale(1);
      opacity: 0;
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(216deg);
    }
    70% {
      transform: rotate(252deg);
    }
    78% {
      transform: rotate(282deg) scale(1);
      opacity: 0;
    }
    80% {
      transform: rotate(288deg) scale(1.015);
      opacity: 0.8;
    }
    82% {
      transform: rotate(286deg) scale(1);
      opacity: 0;
    }
    90% {
      transform: rotate(324deg);
      opacity: 0;
    }
    91% {
      transform: rotate(325deg);
      opacity: 0.5;
    }
    92% {
      transform: rotate(324deg);
    }
    93% {
      transform: rotate(325deg);
    }
    94% {
      transform: rotate(324deg);
    }
    95% {
      transform: rotate(325deg);
    }
    96% {
      transform: rotate(324deg);
    }
    97% {
      transform: rotate(325deg);
      opacity: 0.5;
    }
    100% {
      transform: rotate(330deg);
      opacity: 0;
    }
  }
`
export const TopBallRed = styled.div`
  background-image: url('./img/001-topball-red.png');
  width: 1113px;
  height: 1123px;
  position: absolute;
  z-index: 7;
  top: -850px;
  opacity: 0;
  animation-name: topBall-Red;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes topBall-Red {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(54deg) scale(1);
      opacity: 0;
    }
    6% {
      transform: rotate(48deg) scale(1.015);
      opacity: 1;
    }
    7% {
      transform: rotate(41deg) scale(1);
      opacity: 0;
    }
    10% {
      transform: rotate(36deg);
    }
    20% {
      transform: rotate(72deg);
    }
    30% {
      transform: rotate(108deg);
    }
    40% {
      transform: rotate(144deg);
    }
    44% {
      transform: rotate(161deg) scale(1);
      opacity: 0;
    }
    45% {
      transform: rotate(156deg) scale(1.015);
      opacity: 1;
    }
    46% {
      transform: rotate(142deg) scale(1);
      opacity: 0;
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(216deg);
    }
    70% {
      transform: rotate(252deg);
    }
    78% {
      transform: rotate(281deg) scale(1);
      opacity: 0;
    }
    80% {
      transform: rotate(296deg) scale(1.015);
      opacity: 0.8;
    }
    82% {
      transform: rotate(301deg) scale(1);
      opacity: 0;
    }
    90% {
      transform: rotate(324deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const TopBallBlue = styled.div`
  background-image: url('./img/001-topball-blue.png');
  width: 1113px;
  height: 1123px;
  position: absolute;
  z-index: 6;
  top: -850px;
  opacity: 0;
  animation-name: topBall-Blue;
  animation-duration: 16s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes topBall-Blue {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(48deg) scale(1);
      opacity: 0;
    }
    6% {
      transform: rotate(54deg) scale(1.015);
      opacity: 0.8;
      z-index: 6;
    }
    7% {
      transform: rotate(61deg) scale(1);
      opacity: 0;
    }
    10% {
      transform: rotate(36deg);
    }
    20% {
      transform: rotate(72deg);
    }
    30% {
      transform: rotate(108deg);
    }
    40% {
      transform: rotate(144deg);
    }
    44% {
      transform: rotate(159deg) scale(1);
      opacity: 0;
    }
    45% {
      transform: rotate(152deg) scale(1.015);
      opacity: 0.8;
    }
    46% {
      transform: rotate(154deg) scale(1);
      opacity: 0;
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(216deg);
    }
    70% {
      transform: rotate(252deg);
    }
    78% {
      transform: rotate(282deg) scale(1);
      opacity: 0;
    }
    80% {
      transform: rotate(288deg) scale(1.015);
      opacity: 0.8;
    }
    82% {
      transform: rotate(286deg) scale(1);
      opacity: 0;
    }
    90% {
      transform: rotate(324deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  height: 50%;
  max-height: 800px;
  align-items: center;
  z-index: 99;
  margin: 0 0 0 -100px;
  .parallax-logoTop-White {
    position: absolute;
    width: 90%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }
  .parallax-logoTop-Red {
    position: absolute;
    width: 90%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    opacity: 1;
  }
  .parallax-logoTop-Blue {
    position: absolute;
    width: 90%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 1;
  }
`
export const LogoWhite = styled.img`
  animation-name: logoTopGlitch-White;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes logoTopGlitch-White {
    0% {
      transform: translate(0px);
    }
    45% {
      transform: translate(0px) scale(1);
    }
    46% {
      transform: translate(0px) scale(1.1);
    }
    47% {
      transform: translate(0px) scale(1);
    }
    60% {
      transform: translate(0px);
    }
    61% {
      transform: translate(30px, 20px);
    }
    62% {
      transform: translate(0);
    }
    75% {
      transform: translate(0);
    }
    76% {
      transform: translate(-20px, 20px);
    }
    77% {
      transform: translate(0);
    }
    97% {
      transform: translate(0);
    }
    98% {
      transform: translate(-20px, -10px);
    }
    99% {
      transform: translate(0);
    }
    100% {
      transform: translate(0px);
    }
  }
`
export const LogoRed = styled.img`
  animation-name: logoTopGlitch-Red;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes logoTopGlitch-Red {
    0% {
      transform: translate(0px);
      opacity: 1;
    }
    85% {
      transform: translate(0px) scale(1);
    }
    86% {
      transform: translate(0px) scale(1.1);
    }
    87% {
      transform: translate(0px) scale(1);
    }
    95% {
      transform: translate(0);
      opacity: 1;
    }
    96% {
      transform: translate(-50px, 70px);
      opacity: 0.6;
    }
    97% {
      transform: translate(0);
      opacity: 1;
    }
    98% {
      transform: translate(-50px, -40px);
      opacity: 0.2;
    }
    99% {
      transform: translate(0);
      opacity: 0.7;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }
`
export const LogoBlue = styled.img`
  animation-name: logoTopGlitch-Blue;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes logoTopGlitch-Blue {
    0% {
      transform: translate(0px);
    }
    40% {
      transform: translate(0px);
      opacity: 0.6;
    }
    41% {
      transform: translate(30px, 50px);
      opacity: 0.8;
    }
    42% {
      transform: translate(0);
      opacity: 0.7;
    }
    45% {
      transform: translate(0);
      opacity: 0.5;
    }
    46% {
      transform: translate(0);
      opacity: 0.6;
    }
    55% {
      transform: translate(0px) scale(1);
    }
    56% {
      transform: translate(0px) scale(1.1);
    }
    57% {
      transform: translate(0px) scale(1);
    }
    97% {
      transform: translate(0);
      opacity: 0.2;
    }
    98% {
      transform: translate(-30px, -50px);
      opacity: 0.7;
    }
    99% {
      transform: translate(0);
      opacity: 1;
    }
    100% {
      transform: translate(0px);
    }
  }
`

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  .parallax-socialMedia {
    position: relative;
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .socialLink {
    width: 40px;
    height: 40px;
    display: block;
    margin: 0 10px;
  }
  .socialIcon {
    width: 40px !important;
    height: 40px;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      filter: drop-shadow(3px 3px 0.5px #00fff0)
        drop-shadow(-3px -3px 0.5px #d3021a);
    }
  }
`
