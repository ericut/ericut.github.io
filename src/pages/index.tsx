import React from 'react'
import { useSpring, animated } from 'react-spring/web.cjs'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

const Main = ({ title = 'Eric Frank Li' }) => {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ]
  // @ts-ignore
  const onMoving = ({ clientX: x, clientY: y }) =>
    setNewSpring({ xy: calc(x, y) })

  const logoWhite = (x: number, y: number) =>
    `translate3d(${x / 51}px,${y / 50}px,0)`
  const logoRed = (x: number, y: number) =>
    `translate3d(${x / 41}px,${y / 35}px,0)`
  const logoBlue = (x: number, y: number) =>
    `translate3d(${x / 46}px,${y / 49}px,0)`
  const socialMedia = (x: number, y: number) =>
    `translate3d(${x / 15}px,${y / 15}px,0)`
  const [newSpring, setNewSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const glitchWhite = (x: number, y: number) =>
    `translate3d(${x / 31}px,${y / 34}px,0)`
  const glitchRed = (x: number, y: number) =>
    `translate3d(${x / 41}px,${y / 36}px,0)`
  const glitchBlue = (x: number, y: number) =>
    `translate3d(${x / 21}px,${y / 49}px,0)`

  return (
    <Parallax pages={3} scrolling={true}>
      <S.FullBody onMouseMove={onMoving}>
        <S.TopContainer className="container">
          <ParallaxLayer offset={0} speed={-0.2}>
            <S.TopBackground />
          </ParallaxLayer>
          <S.TopBall className="anim-topBall" />
          <S.TopBallWhite className="anim-topBall-White" />
          <S.TopBallRed className="anim-topBall-Red" />
          <S.TopBallBlue className="anim-topBall-Blue" />
          <S.TopWrapperRow>
            <S.TopWrapperColumn>
              <ParallaxLayer offset={0} speed={0.3}>
                <S.LogoContainer>
                  <animated.div
                    className="parallax-logoTop-White"
                    // @ts-ignore
                    style={{ transform: newSpring.xy.interpolate(logoWhite) }}
                  >
                    <S.LogoWhite
                      src="./svg/002-logo-svg-white.svg"
                      title={title}
                    />
                  </animated.div>
                  <animated.div
                    className="parallax-logoTop-Red"
                    // @ts-ignore
                    style={{ transform: newSpring.xy.interpolate(logoRed) }}
                  >
                    <S.LogoRed src="./svg/002-logo-svg-red.svg" />
                  </animated.div>
                  <animated.div
                    className="parallax-logoTop-Blue"
                    // @ts-ignore
                    style={{ transform: newSpring.xy.interpolate(logoBlue) }}
                  >
                    <S.LogoBlue src="./svg/002-logo-svg-blue.svg" />
                  </animated.div>
                </S.LogoContainer>
                <S.SocialMediaContainer>
                  <animated.div
                    className="parallax-socialMedia"
                    // @ts-ignore
                    style={{ transform: newSpring.xy.interpolate(socialMedia) }}
                  >
                    <a
                      className="socialLink"
                      href="https://github.com/ericut"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="socialIcon"
                        icon={faGithubSquare}
                      />
                    </a>
                    <a
                      className="socialLink"
                      href="https://www.linkedin.com/in/ericfrankli/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="socialIcon"
                        icon={faLinkedin}
                      />
                    </a>
                    <a
                      className="socialLink"
                      href="https://www.instagram.com/ericfrankli/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="socialIcon"
                        icon={faInstagramSquare}
                      />
                    </a>
                  </animated.div>
                </S.SocialMediaContainer>
              </ParallaxLayer>
            </S.TopWrapperColumn>
          </S.TopWrapperRow>
        </S.TopContainer>
        <S.TopGlitchContainer>
          <S.GlitchLeftContainer>
            <ParallaxLayer offset={0.5} speed={0.3}>
              <animated.div
                // @ts-ignore
                style={{ transform: newSpring.xy.interpolate(glitchWhite) }}
              >
                <S.GlitchLeftWhite />
              </animated.div>
              <animated.div
                // @ts-ignore
                style={{ transform: newSpring.xy.interpolate(glitchRed) }}
              >
                <S.GlitchLeftRed />
              </animated.div>
              <animated.div
                // @ts-ignore
                style={{ transform: newSpring.xy.interpolate(glitchBlue) }}
              >
                <S.GlitchLeftBlue />
              </animated.div>
            </ParallaxLayer>
          </S.GlitchLeftContainer>
          <S.GlitchRightContainer>
            <ParallaxLayer offset={0.6} speed={0.7}>
              <animated.div
                // @ts-ignore
                style={{ transform: newSpring.xy.interpolate(glitchWhite) }}
              >
                <S.GlitchRightWhite />
              </animated.div>
              <animated.div
                // @ts-ignore
                style={{ transform: newSpring.xy.interpolate(glitchRed) }}
              >
                <S.GlitchRightRed />
              </animated.div>
              <animated.div
                // @ts-ignore
                style={{ transform: newSpring.xy.interpolate(glitchBlue) }}
              >
                <S.GlitchRightBlue />
              </animated.div>
            </ParallaxLayer>
          </S.GlitchRightContainer>
          <S.GlitchRightContainer></S.GlitchRightContainer>
        </S.TopGlitchContainer>
        <S.AbilitiesContainer className="container">
          <div className="row">
            <S.Ability className="column">
              <h3>Designer de Interfaces</h3>
              <p>
                Criação de layouts e interfaces priorizando a experiência do
                usuário
              </p>
            </S.Ability>
            <S.Ability className="column">
              <h3>Desenvolvedor Web Moderno</h3>
              <p>
                Desenvolvimento de aplicações web e mobile em tecnologias
                modernas como ReactJS e React Native
              </p>
            </S.Ability>
            <S.Ability className="column">
              <h3>Desenvolvedor WordPress</h3>
              <p>Criação de sites e lojas virtuais em WordPress</p>
            </S.Ability>
          </div>
        </S.AbilitiesContainer>
      </S.FullBody>
    </Parallax>
  )
}

export default Main
