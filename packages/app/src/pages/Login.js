// https://codesandbox.io/s/4xq2qpzw79?file=/src/FormStateToRedux.js:0-355
// https://codesandbox.io/s/l3p44o94kl
// https://styled-components.com/docs/basics#styling-any-components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Form as FinalForm, Field } from 'react-final-form';

import { passwordSchema, phoneSchema, validate } from '@monorepo/common/lib/utils/validators';
import { normalizeOnlyNumbers, normalizePhone } from '@monorepo/common/lib/utils/normalize';

import InputAdapter from '@monorepo/common/lib/components/fields/adapters/InputAdapter';

import NeoTagLogoImage from '@monorepo/common/lib/images/svg/neotag/neotaglogo_mark.svg';
import NeoTagNameImage from '@monorepo/common/lib/images/svg/neotag/neotaglogo_text.svg';

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

const NeoTagLogo = styled.img`
  height: 30px;
  margin: 8px 12px;
`;

const formId = 'login';

const Login = ({
  login,
}) => {
  const handleSubmit = (values) => {
    login({ username: values.phone, password: values.password });
  };
  return (
    <PageContainer className="bg-secondary">
      <Container>
        <Row className="justify-content-center">
          <NeoTagLogo src={NeoTagLogoImage} />
          <NeoTagLogo src={NeoTagNameImage} />
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
        render={({ handleSubmit, values, form, pristine }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              required
              formId={formId}
              id="phone"
              label="Phone"
              infoText="Data rates may apply"
              aria-describedby={`${formId}-phone-help`}
              className="bg-secondary text-light"
              component={InputAdapter}
              name="phone"
              parse={normalizeOnlyNumbers}
              format={normalizePhone}
              placeholder="Enter your phone number" 
              type="phone"
              valid={meta => meta.visited && meta.valid}
              validate={validate(phoneSchema)}
            />
            <Field
                required
                aria-describedby={`${formId}-password-help`}
                formId={formId}
                id="password"
                label="Password"
                className="bg-secondary text-light"
                component={InputAdapter}
                name="password"
                placeholder="Enter your password" 
                type="password"
                validate={validate(passwordSchema)}
            />
            <Button className="text-muted" variant="link">Forgot password</Button>
            <div className="d-grid gap-2">
              <Button  disabled={pristine} size="lg" type="submit">
                Login
              </Button>
            </ div>
          </Form>
        )}
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

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = ({ user: { handleLogin } }) => ({
  login: ({ username, password }) => handleLogin({ username, password}),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
