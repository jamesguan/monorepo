import React from 'react'
import { Form } from 'react-bootstrap';

const InputAdapter = ({
  input,
  meta,
  invalid = meta => meta.touched && meta.invalid,
  valid = () => false, // @todo discuss with design having off by default?
  ...rest
}) => <Form.Control {...input} {...rest} isInvalid={invalid(meta)} isValid={valid(meta)} />

export default InputAdapter;
