import {Action} from '@/models';

import {User, VcdSession} from '../models/user';
import {AuthState} from './AuthState';

export const AuthActionTypes = {
  SignInInit: 'auth/SignInInit',
  SignInSuccess: 'auth/SignInSuccess',
  SignInFailure: 'auth/SignInFailure',
  GetCurrentUserInit: 'auth/GetCurrentUserInit',
  GetCurrentUserSuccess: 'auth/GetCurrentUserSuccess',
  GetCurrentUserFailure: 'auth/GetCurrentUserFailure',
  SignOut: 'auth/SignOut',
} as const; // const are valuable

export function authReducer(state: AuthState, action: Action<typeof AuthActionTypes, VcdSession>): AuthState {
  switch (action.type) {
    case AuthActionTypes.SignInInit:
      return {
        status: 'loading',
        user: null,
        error: null,
        token: '',
      };
    case AuthActionTypes.GetCurrentUserInit:
      return {
        status: 'loading',
        user: null,
        error: null,
        token: action.meta.token,
      };
    case AuthActionTypes.SignInSuccess:
    case AuthActionTypes.GetCurrentUserSuccess:
      return {
        status: 'success',
        user: action.payload!,
        token: action.meta.token,
        error: null,
      };
    case AuthActionTypes.SignInFailure:
    case AuthActionTypes.GetCurrentUserFailure:
      return {
        status: 'error',
        user: null,
        error: action.error,
        token: '',
      };
    case AuthActionTypes.SignOut:
      return {
        status: 'default',
        user: null,
        error: null,
        token: '',
      };
    default:
      throw new Error('wrong action type');
  }
}
