import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import styled from 'styled-components';

import Unit from '@monorepo/common/lib/images/svg/unit_w_shadow.svg';

import Discord from '@monorepo/common/lib/images/svg/discord_circular.svg';

import Loader from '../components/Loader';
import Nav from '../components/Nav';
import Layout from '../components/Layout';


const data = [
  {
    title: 'Example Notification 1',
    time: '6 min(s) ago',
    message: 'Hello There'
  },
  {
    title: 'Example notification 2',
    time: '1 min(s) ago',
    message: 'Hello Back'
  }
];

const pageContent = [
  {
    name: 'Example1 ',
    description: 'This is an example.',
    image: Unit,
  },
  {
    name: 'Example 2',
    description: 'This is another example.',
    image: Station,
  },
  {
    name: 'Example 3',
    description: 'Example 3.',
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

  const clearNotification = (index) => () => {
    console.log('Index', index);
    console.log("notifications", notifications);
    console.log("data", data);
    data.splice(index);
    setNotifications(data);
    console.log(notifications);
    console.log('data', data);
  };

  return (
    <Layout>
      <Container fluid className="bg-secondary">
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
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center" md={6}>
            <h4 className="text-light">NeoTag brings you the most advanced lasertag system ever created. Scroll down to learn more.</ h4>
          </Col>
          <Col className="d-flex justify-content-center" md={6}>
            <UnitImage src={Unit} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Loader />
          </Col>
        </Row>
      </Container>
    </ Layout>

  )
};
export default Welcome;