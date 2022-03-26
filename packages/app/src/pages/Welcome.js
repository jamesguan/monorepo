import Col from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';

import Loader from '../components/Loader';
import Nav from '../components/Nav';
import Layout from '../components/Layout';

const Welcome = () => {
  return (
    <Layout>
      <Container>
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