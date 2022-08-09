import {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import Layout from '@/core/components/Layout';
import RequireAuth from '@/core/components/RequireAuth';
import {RoutePath} from '@/core/const/routePath';

import DashboardPage from './pages/DashboardPage';
import DatagridPage from './pages/DatagridPage';
import HomePage from './pages/HomePage';
import NoAccessPage from './pages/NoAccessPage';
import NotFoundPage from './pages/NotFoundPage';
import PublicPage from './pages/PublicPage';
import SignInPage from './pages/SignInPage';

const TenantPage = lazy(() => import('./pages/TenantHomePage'));
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage'));

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RoutePath.root} element={<HomePage />} />
          <Route path={RoutePath.public} element={<PublicPage />} />

          <Route
            path={RoutePath.dashboard}
            element={
              <RequireAuth roles={['System Administrator']}>
                <DashboardPage />
              </RequireAuth>
            }
          />

          <Route
            path={RoutePath.tenantHome}
            element={
              <RequireAuth roles={['Organization Administrator', 'Organization User']}>
                <TenantPage />
              </RequireAuth>
            }
          />

          <Route path={RoutePath.noAccess} element={<NoAccessPage />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/play" element={<PlaygroundPage />} />
          <Route path={'/datagrid'} element={<DatagridPage />} />
        </Route>

        <Route path={RoutePath.signIn} element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
