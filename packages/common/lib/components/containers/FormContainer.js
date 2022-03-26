import { Form } from 'react-final-form';

const FormContainer = ({ id, ...props }) => {
  return (
    <Form
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
        }} // Subscription Performance Optimization
        formID={id}
        { ...props } // dynamic options pass through container lile this
      />
  );
};

export default FormContainer;
