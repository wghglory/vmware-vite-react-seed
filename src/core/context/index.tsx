import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';

import {AuthProvider} from './AuthContext';
import {AuthState} from './AuthState';
import {ThemeProvider} from './ThemeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: false,
      // retry(failureCount, error: any) {
      //   // retry once
      //   if (failureCount < 1) return true;
      //   else return false;
      // },
    },
  },
});

function AppProviders({children, authValue}: {children: React.ReactNode; authValue?: AuthState}) {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AuthProvider value={authValue}>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export {AppProviders};
