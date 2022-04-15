//import { FORM_ERROR } from 'final-form';
import React from 'react'
import { Form } from 'react-bootstrap';

const InputAdapter = ({
  formId,
  id,
  infoText,
  input,
  label,
  meta,
  invalid = meta => meta.touched && meta.invalid,
  valid = () => false, // @todo discuss with design having off by default?
  ...rest
}) => (
<Form.Group className="mb-3" controlId={`${formId}-${id}-control`}>
  {label && (
    <Form.Label className="text-light">{label}</Form.Label>
  )}
  <Form.Control {...input} {...rest} isInvalid={invalid(meta)} isValid={valid(meta)} />
  {infoText && (
    <Form.Text className="text-muted" id={`${formId}-${id}-help`}>
      {infoText}
    </Form.Text>
  )}
  {invalid(meta) && (meta?.error || meta?.submitError) && (
    <Form.Control.Feedback type="invalid">
      {meta.error || meta.submitError}
    </Form.Control.Feedback>
  )}
</Form.Group>
);

export default InputAdapter;
