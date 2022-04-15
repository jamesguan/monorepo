// http://css3.bradshawenterprises.com/cfimg/
import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import styled from 'styled-components';

import FadeInSection from '@monorepo/common/lib/components/containers/FadeInSection';
import Station from '@monorepo/common/lib/images/svg/station.svg';
import Unit from '@monorepo/common/lib/images/svg/unit_w_shadow.svg';

import Discord from '@monorepo/common/lib/images/svg/discord_circular.svg';
import UnitBlue from '@monorepo/common/lib/images/svg/neotag_unit_blue-01.svg';
import UnitCyan from '@monorepo/common/lib/images/svg/neotag_unit_cyan-01.svg';
import UnitPurple from '@monorepo/common/lib/images/svg/neotag_unit_purple-01.svg';
import UnitRed from '@monorepo/common/lib/images/svg/neotag_unit_red-01.svg';
import UnitYellow from '@monorepo/common/lib/images/svg/neotag_unit_yellow-01.svg';


import Loader from '../components/Loader';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import { Fade } from 'react-bootstrap';

const CustomFadeInSection = styled(FadeInSection)`
  &.white-background {
    background-color: rgba(255, 100, 255, 0.6);
  }
  
  margin-left: calc((-100vw + 100%) / 2);
  margin-right: calc((-100vw + 100%) / 2);
  padding: 3%;
`;

const BackgroundContainer = styled(Container)``;

const FadeImage = styled.img`
  position:absolute;
  left:0;
  max-width: 1200px;
  object-fit: contain;
`;

const ImageRoller = styled.div`
  display: block;
  position: relative;
  transform: translateY(40%);
  min-height: 300px;
  width: 500px;
  @keyframes FadeInAndOutImages {
    0% {
      opacity:1;
    }
    17% {
      opacity:1;
    }
    25% {
      opacity:0;
    }
    92% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  img:nth-of-type(1) {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-direction: alternate;
    animation-name: FadeInAndOutImages;
    animation-delay: 6s;
  }
  img:nth-of-type(2) {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-direction: alternate;
    animation-name: FadeInAndOutImages;
    animation-delay: 4s;
  }
  img:nth-of-type(3) {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-direction: alternate;
    animation-name: FadeInAndOutImages;
    animation-delay: 2s;
  }
  img:nth-of-type(4) {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-direction: alternate;
    animation-name: FadeInAndOutImages;
    animation-delay: 0;
  }
`;

const BackgroundImage = styled.div`
  bottom: 0;
  height: calc(100vh - 120px);
  left: 0;
  position: fixed;
  pointer-events: none;
  right: 0;
  top: 60px;
  width: 100vw;
  &::before {
    background-attachment: fixed;
    background-image: url(${Unit});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.35;
  }
`;

const DiscordLogo = styled.img`
  max-width: 200px;
`;

const UnitImage = styled.img`
  max-width: 1200px;
`;

const data = [
  {
    title: 'NeoTag Game',
    time: '6 min(s) ago',
    message: 'FFA Game started at College Park'
  },
  {
    title: 'NeoTag Game',
    time: '1 min(s) ago',
    message: 'James Guan has won the game with 6K/1D'
  }
];

const pageContent = [
  {
    name: 'Unit',
    description: 'NeoTag brings you the most advanced lasertag system ever created. Scroll down to learn more.',
    image: Unit,
  },
  {
    name: 'Arena in a box',
    description: 'No facility, no problem! Our system allows you to deploy a laser tag arena everywhere and anywhere.',
    image: Station,
  },
  {
    name: 'Pick your color',
    description: 'Play with your friends or teams represented by your favorite colors',
    component: (
      <ImageRoller>
        <FadeImage class="bottom" src={UnitBlue} />
        <FadeImage class="top" src={UnitRed} />
        <FadeImage class="bottom" src={UnitYellow} />
        <FadeImage class="top" src={UnitPurple} />
      </ImageRoller>
    )
  },
  {
    name: 'Join our Discord',
    description: (
      <>
        Curious for more? Check out our <a href="https://discord.gg/CaFZ44m5Bp" target="_blank">Discord</a> for more
      </>
    ),
    component: (
      <a href="https://discord.gg/CaFZ44m5Bp" target="_blank"><DiscordLogo src={Discord} /></a>
    ),
  },
];

const Welcome = () => {
  const [notifications, setNotifications] = useState(data);

  const clearNotification = (removeAtIndex) => () => {
    setNotifications(notifications.filter((_, index) => index !== removeAtIndex ));
  };

  return (
    <>
    <BackgroundImage src={Unit} />
    <Layout>
      <BackgroundContainer fluid className="bg-secondary">
        <Row className="d-flex justify-content-center">
          {notifications.map(({title, time, message}, index) => (
            <Col key={time} xs={12}>
              <Toast onClose={clearNotification(index)}>
                <Toast.Header className="bg-dark text-primary" closeVariant="white">
                  <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                  <strong className="me-auto">{title}</strong>
                  <small>{time}</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
              </Toast>
            </ Col>
          ))}
        </Row>
        {
          pageContent.map(({ component, name, image, description}, index) => (
            <div key={name}>
            <CustomFadeInSection className={`${index % 2 !== 0 && 'white-background'}`}>
              <Row className={`align-items-center ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                <Col className="d-flex justify-content-center" md={6}>
                  <h4 className="text-light">{description}</ h4>
                </Col>
                <Col className="d-flex justify-content-center" md={6}>
                  {image && <UnitImage src={image} />}
                  {component && component}
                </Col>
              </Row>
            </CustomFadeInSection>
            </div>
          ))
        }
        <Row>
          <Col>
            <Loader />
          </Col>
        </Row>
      </BackgroundContainer>
    </ Layout>
    </>
  )
};
export default Welcome;