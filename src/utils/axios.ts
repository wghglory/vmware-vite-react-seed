import axios, {AxiosError, AxiosRequestConfig} from 'axios';

import {ACCESS_TOKEN} from '@/core/const';

const http = axios.create({
  // https://github.com/vitejs/vite/issues/1149 Jest testing issues.
  baseURL: `${import.meta.env.VITE_APP_HOST}/${import.meta.env.VITE_APP_PREFIX}`,
  // withCredentials: true,
  // timeout: 10000,
});

function vCDRequestInterceptor(config: AxiosRequestConfig) {
  const requestConfig: AxiosRequestConfig = {...config};

  // except signIn API, all other API request header needs token
  if (!isSignInRequest(requestConfig)) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      requestConfig.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return requestConfig;
}

function isSignInRequest(req: AxiosRequestConfig) {
  return req.method?.localeCompare('post', undefined, {sensitivity: 'base'}) === 0 && req.url === '/session';
}

http.interceptors.request.use(vCDRequestInterceptor, error => {
  return Promise.reject(error);
});

http.interceptors.response.use(
  res => res,
  (error: Error | AxiosError) => {
    // todo: need jump ? Probably no
    // 401 and not in login page, redirect to login
    // if (error.response.status === 401 && window.location.pathname !== '/login') {
    //   window.location.href = `${process.env.REACT_APP_BASE_HREF}login`;
    // }

    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      // timeout also here
      const {response} = error as AxiosError;
      switch (response?.status) {
        case 401:
          // TODO: For CDS only, window.location.href = '/'. may need a timer to delay redirection; CPN will refresh token
          break;
        default:
          break;
      }
      return Promise.reject(error.response);
    } else {
      // native error
      console.error(error, 'native error');
    }
  },
);

export default http;
