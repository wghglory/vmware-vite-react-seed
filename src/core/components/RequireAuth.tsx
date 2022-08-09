import {useEffect} from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

import AppLoading from '@/components/common/AppLoading';
import {useAuth} from '@/core/context/AuthContext';

import {ACCESS_TOKEN} from '../const';
import {RoutePath} from '../const/routePath';
import {Role} from '../models/user';

export default function RequireAuth({roles, children}: {roles: Role[]; children: JSX.Element}) {
  const {user, status} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // if there's no token, kick to sign in
  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      navigate(RoutePath.signIn, {state: {from: location.pathname}});
      return;
    }
  }, [location, navigate]);

  // if landing / refreshing a protected page, display loading first
  if (status === 'default' || status === 'loading') {
    return <AppLoading />;
  }

  // if user cannot be retrieved, kick to sign in. token expires, cannot retrieve user info
  if (user === null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={RoutePath.signIn} state={{from: location.pathname}} />;
  }

  // if user role is not enough, kick to access
  if (!roles.includes(user.roles as Role)) {
    // user role doesn't match route path,
    // e.g. normal user accessed admin-only page. 403
    return <Navigate to={RoutePath.noAccess} />;
  }

  // everything good
  return children;
}
