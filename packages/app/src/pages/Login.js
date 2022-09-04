// https://codesandbox.io/s/4xq2qpzw79?file=/src/FormStateToRedux.js:0-355
// https://codesandbox.io/s/l3p44o94kl
// https://styled-components.com/docs/basics#styling-any-components

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { Form as FinalForm, Field } from 'react-final-form';

import InputAdapter from '@monorepo/common/lib/components/fields/adapters/InputAdapter';

const PageContainer = styled.div`
  align-items: center;
  display: absolute;
  min-height: 100vh;
  justify-content: center;
`;

const LoginContainer = styled(Card)`
  margin: auto;
  width: 100%;
`;

<<<<<<< Updated upstream
const NeoTagLogo = styled.img`
  height: 30px;
  margin: 8px 12px;
`;

const Login = (props) => {
=======
const formId = 'login';

const Login = ({
  login,
}) => {
  const handleSubmit = (values) => {
    login({ username: values.phone, password: values.password });
  };
>>>>>>> Stashed changes
  return (
    <PageContainer className="bg-secondary">
      <Container>
        <Row className="justify-content-center">
          <div>Hello</div> 
        </ Row>
        <Row className="justify-content-center">
          <Col className="justify-content-center" md={6} lg={4}>
            <LoginContainer className="bg-dark">
              <Card.Body>
                <FinalForm
                  /**
                   * @see https://github.com/final-form/react-final-form#-performance-optimization-through-subscriptions-
                   */
                  subscription={{
                    hasSubmitErrors: true,
                    hasValidationErrors: true,
                    pristine: true,
                    submitError: true,
                    submitFailed: true,
                    submitting: true
                  }}
                  onSubmit={handleSubmit}
                  component={FormComponent}
                  formID='login'
                  { ...props }
                />
                <span className="text-light">Don't have an account?</ span><Button className="text-light" variant="link">Sign up</Button>
              </ Card.Body>
            </ LoginContainer>
          </ Col>
        </ Row>
      </ Container>
    </ PageContainer>
  );
};

export default Login;
