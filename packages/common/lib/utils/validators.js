import * as yup from 'yup';

export const validate = (schema) => (value) => {
  try {
    schema.validateSync(value);
  } catch(error) {
    console.log('The error message', error);
    return error.message;
  }
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneStringRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const phoneSchema = yup.string().required('Please enter a phone number').matches(phoneStringRegExp, 'Phone number is not valid');

export const passwordSchema = yup
  .string()
  .required('Please Enter your password')
  .matches(
    passwordRegExp,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
  );

const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

