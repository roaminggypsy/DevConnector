import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // send token as part of header of every request
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
