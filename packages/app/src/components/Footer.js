import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styled from 'styled-components';

const StyledFooter = styled.footer`

`;

const Footer = () => {
  return (
    <StyledFooter className="bg-dark">
      <Row>
        <Col className="d-flex justify-content-center" xs={12} sm={4}>
          <h6 className="text-white">Social Media</h6>
        </Col>
        <Col className="d-flex justify-content-center"xs={12} sm={4}>
          <Button variant="link">Terms</Button>
          <Button variant="link">Privacy Policy</Button>
        </Col>
        <Col className="d-flex justify-content-center" xs={12} sm={4}>
          <h6 className="text-light">Contact Us</h6>
          <Button variant="link" href="mailto:support@neotag.io">Email Support</Button>
        </Col>
      </ Row>
      <Row>
        <Col className="d-flex justify-content-center text-light">
          Neotag {new Date().getFullYear()}
        </Col>
      </Row>
    </StyledFooter>
  );
};

export default Footer;