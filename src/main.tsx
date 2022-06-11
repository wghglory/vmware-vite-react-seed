import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {AppProviders} from './core/context';
import {i18nClient} from './i18n/i18nClient';

async function prepare() {
  await i18nClient.coreService.loadI18nData();
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppProviders>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppProviders>,
  );
});
