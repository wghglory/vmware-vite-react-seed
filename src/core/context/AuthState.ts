import {ACCESS_TOKEN} from '../const';
import {User, VcdSession} from '../models/user';

export interface AuthState {
  status: 'default' | 'loading' | 'success' | 'error';
  user: VcdSession | null;
  error: Error | null;
  token: string;
}

export const initialState: AuthState = {
  status: 'default',
  user: null,
  error: null,
  token: localStorage.getItem(ACCESS_TOKEN) || '',
};
