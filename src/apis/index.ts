import axios, { CancelTokenSource } from 'axios';

export const client = axios.create({
  // baseURL: `${import.meta.env.VITE_API_HOST}/api`,
  baseURL: 'http://133.186.216.34:8080/api',
  timeout: 100000,
  headers: {
    'x-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
  },
  responseType: 'json',
});

// formData 헤더
export const formHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const executingRequests: { [key: string]: CancelTokenSource } = {};

client.interceptors.request.use(
  function (config) {
    const loginInfo = localStorage.getItem('ALBB_LOGIN');

    if (loginInfo && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${JSON.parse(loginInfo).token}`;
    }
    return config;
  },
  function (request) {
    const currentRequest = request;

    if (executingRequests[currentRequest.url]) {
      const source = executingRequests[currentRequest.url];
      delete executingRequests[currentRequest.url];
      source.cancel();
    }

    const source = axios.CancelToken.source();
    currentRequest.CancelToken = source.token;
    executingRequests[currentRequest.url] = source;

    return currentRequest;
  },
);

client.interceptors.response.use(
  function (response) {
    if (executingRequests[response.request.reponseURL]) {
      delete executingRequests[response.request.reponseURL];
    }

    return response;
  },
  function (error) {
    const { config } = error;
    const originalRequest = config;

    console.log('error :', error);

    if (axios.isCancel(error)) {
      console.error('cancel err: ', error);
    }

    if (executingRequests[originalRequest.url]) {
      delete executingRequests[originalRequest.url];
    }

    if (error.response) {
      console.error('err response: ', error.response);
      if (error.response.data.code === 'A01') {
        localStorage.removeItem('ALBB_LOGIN');

        window.location.href = '/user/login?token=expired';
      }
    } else {
      console.error('err message: ', error.message);
    }

    return Promise.reject(error);
  },
);

// client.defaults.withCredentials = true;
