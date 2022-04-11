import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import styled from 'styled-components';

import Unit from '@monorepo/common/lib/images/svg/unit_w_shadow.svg';


import Loader from '../components/Loader';
import Nav from '../components/Nav';
import Layout from '../components/Layout';


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

const UnitImage = styled.img`
  max-width: 1200px;
`;

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