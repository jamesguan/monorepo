import axios from 'axios';

console.log('Process Env', process.env);

const client = axios.create({
  baseURL: process.env.REACT_API_URL,
  headers: {
    //rejectUnauthorized: false,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

client.interceptors.request.use(async (config) => {
  try {
    const token = await localStorage.getItem('token');
    if (token) {
      // console.log('Attaching token', token);
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    console.log('Failed to save and attach token');
    console.log(e);
  }
  return config;
}, (error) => {
  console.log('client.interceptors.request error', error);
  return error;
});

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log('client.interceptors.response error')
    if (error.response.status === 401 || error.response.status === 403) {
      //store.dispatch('logout')
      /*router.push('/login').catch(err => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
          err.name !== 'NavigationDuplicated' &&
          !err.message.includes('Avoided redundant navigation to current location')
        ) {
          // But print any other errors to the console
          console.error(err);
        }
      });
      */
    }
    // throw error;
    return Promise.reject(error)
  }
);

export default client;