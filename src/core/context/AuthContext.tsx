import axios from 'axios';
import {createContext, useCallback, useContext, useEffect, useMemo, useReducer} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {ACCESS_TOKEN, API_ACCEPT, X_VCLOUD_AUTHORIZATION} from '../const';
import {RoutePath} from '../const/routePath';
import {SignInPayload, SignInResponse, User, VcdSession} from '../models/user';
import {AuthActionTypes, authReducer} from './AuthReducer';
import {AuthState, initialState} from './AuthState';

// TODO: I think value here is for debugging/testing only.
export function AuthProvider({children, value}: {children: React.ReactNode; value?: AuthState}) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const location = useLocation();
  const navigate = useNavigate();

  const signOut = useCallback(async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_HOST}/api/session`, {
        headers: {
          Accept: API_ACCEPT,
          'x-vcloud-authorization': localStorage.getItem(ACCESS_TOKEN) || '',
        },
      });

      localStorage.removeItem(ACCESS_TOKEN);

      dispatch({type: AuthActionTypes.SignOut});
    } catch (err) {
    } finally {
      window.location.href = '/';
    }
  }, []);

  const signIn = useCallback(
    async (payload: SignInPayload) => {
      try {
        dispatch({type: AuthActionTypes.SignInInit});

        const {data, headers} = await axios.post<VcdSession>(
          `${import.meta.env.VITE_APP_HOST}/api/sessions`,
          {},
          {
            headers: {
              Accept: API_ACCEPT,
            },
            auth: {
              ...payload,
            },
          },
        );

        const token = headers[X_VCLOUD_AUTHORIZATION]; // headers[ACCESS_TOKEN];
        localStorage.setItem(ACCESS_TOKEN, token);

        dispatch({
          type: AuthActionTypes.SignInSuccess,
          payload: data,
          meta: {token},
        });

        const defaultPath = ['System Administrator'].includes(data.roles)
          ? RoutePath.dashboard
          : ['Organization Administrator', 'Organization User'].includes(data.roles)
          ? RoutePath.tenantHome
          : '/';

        // (location.state as any)?.from means user accessed protected pages, but probably token expires
        const from = (location.state as any)?.from || defaultPath; // usually we jump to /

        navigate(from, {replace: true});
      } catch (error: any) {
        dispatch({type: AuthActionTypes.SignInFailure, error: error.data});
      }
    },
    [location, navigate],
  );

  const getUser = useCallback(async (token: string) => {
    try {
      dispatch({type: AuthActionTypes.GetCurrentUserInit, meta: {token}});

      const {data} = await axios.get<VcdSession>(`${import.meta.env.VITE_APP_HOST}/api/session`, {
        headers: {
          Accept: API_ACCEPT,
          'x-vcloud-authorization': token,
        },
      });

      dispatch({
        type: AuthActionTypes.GetCurrentUserSuccess,
        payload: data,
        meta: {token},
      });
    } catch (error: any) {
      navigate(RoutePath.signIn);

      localStorage.removeItem(ACCESS_TOKEN);

      dispatch({
        type: AuthActionTypes.GetCurrentUserFailure,
        error: error.data,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // exclude navigate, otherwise getUser will be different and call many times when switching components.

  // const signIn = useCallback(
  //   async (payload: SignInPayload) => {
  //     try {
  //       dispatch({type: AuthActionTypes.SignInInit});

  //       const {data: user, headers} = await http.post<SignInResponse>('/session', payload);

  //       const token = user.token; // headers[ACCESS_TOKEN];
  //       localStorage.setItem(ACCESS_TOKEN, token);

  //       dispatch({
  //         type: AuthActionTypes.SignInSuccess,
  //         payload: {...user, id: user.username},
  //         meta: {token},
  //       });

  //       const defaultPath = ['PROVIDER_ADMIN'].includes(user.role)
  //         ? RoutePath.dashboard
  //         : ['TENANT_USER', 'TENANT_ADMIN'].includes(user.role)
  //         ? RoutePath.tenantHome
  //         : '/';

  //       // (location.state as any)?.from means user accessed protected pages, but probably token expires
  //       const from = (location.state as any)?.from || defaultPath; // usually we jump to /

  //       navigate(from, {replace: true});
  //     } catch (error: any) {
  //       dispatch({type: AuthActionTypes.SignInFailure, error: error.data});
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [location, navigate],
  // ); // TODO: navigate will make function not unique... ADD navigate back to deps. VERIFY ANY BUG?

  // const getUser = useCallback(async (token: string) => {
  //   try {
  //     dispatch({type: AuthActionTypes.GetCurrentUserInit, meta: {token}});

  //     const {data: user} = await http.get<User>('/current-user');

  //     dispatch({
  //       type: AuthActionTypes.GetCurrentUserSuccess,
  //       payload: user,
  //       meta: {token},
  //     });
  //   } catch (error: any) {
  //     navigate(RoutePath.signIn);

  //     localStorage.removeItem(ACCESS_TOKEN);

  //     dispatch({
  //       type: AuthActionTypes.GetCurrentUserFailure,
  //       error: error.data,
  //     });
  //   }
  // }, []); // same issue, cannot include navigate...

  useEffect(() => {
    // if there's a token, get current user
    const token = localStorage.getItem(ACCESS_TOKEN);
    token && getUser(token);
  }, [getUser]);

  const {user, status, error, token} = state;

  const v = useMemo(
    () => ({user, status, error, token, ...value, signOut, signIn, getUser}),
    [user, status, error, token, value, signOut, signIn, getUser],
  );

  return <AuthContext.Provider value={v}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

// -------------------- below: types, reducers, actions, context initializer ------------------

type AuthContextState = AuthState & {
  signIn: (payload: SignInPayload) => Promise<void>;
  getUser: (token: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextState>(initialState as AuthContextState);
AuthContext.displayName = 'AuthContext';
