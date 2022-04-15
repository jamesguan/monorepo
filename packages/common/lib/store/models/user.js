import { createSliceSelector } from '../common/selectors';
import { login } from '../../apis/user';

export const newsletterDetails = createSliceSelector('newsletter');

const user = {
  state: {
    alertType: 'error',
    name: 'Fake',
  },
  reducers: {
    setAlertType(state, alertType) {
      return {
        ...state,
        alertType,
      };
    },
  },
  effects: dispatch => ({
    async handleLogin(payload, rootState) {
      const { username, password } = payload;
      console.log('logging in');
      try {
        await login({ username, password });
      } catch (error) {
        let message;
        // We want redux-form to catch the error to know the request failed.
        switch(error.response.status) {
        case 409:
          message = 'Looks like you already signed up for the newsletter.';
          dispatch.user.setAlertType('info', rootState);
          break;
        default:
          message = 'Unable to sign up for newsletter. Please try again later.';
          dispatch.user.setAlertType('error', rootState);
        }
        //throw new SubmissionError({_error: message}); 
      }
      console.log('Request finished');
    },
  }),
};

export default user;