import axios, {AxiosError, AxiosRequestConfig} from 'axios';

import {ACCESS_TOKEN, API_ACCEPT} from '@/core/const';
import {RoutePath} from '@/core/const/routePath';

const http = axios.create({
  // https://github.com/vitejs/vite/issues/1149 Jest testing issues.
  baseURL: `${import.meta.env.VITE_APP_HOST}/${import.meta.env.VITE_APP_PREFIX}`,
  // withCredentials: true,
  // timeout: 10000,
});

function vCDRequestInterceptor(config: AxiosRequestConfig) {
  config.headers = {
    ...config.headers,
    Accept: API_ACCEPT,
  };

  // except signIn API, all other API request header needs token
  if (!isSignInRequest(config)) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers = {
        ...config.headers,
        'x-vcloud-authorization': localStorage.getItem(ACCESS_TOKEN) || '',
      };
    }
  }

  return config;
}

function isSignInRequest(req: AxiosRequestConfig) {
  return (
    req.method?.localeCompare('post', undefined, {sensitivity: 'base'}) === 0 && req.url?.includes('/api/sessions')
  );
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
          window.location.href = window.location.origin + RoutePath.signIn;
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
