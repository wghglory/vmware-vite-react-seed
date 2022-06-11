import {CdsButton} from '@cds/react/button';
import {useState} from 'react';

import logo from '@/assets/logo.svg';
import AppLoading from '@/components/common/AppLoading';
import {formatDate, l10n} from '@/i18n/i18nUtils';

export default function PlaygroundPage() {
  const [count, setCount] = useState(0);

  return (
    <header className="flex flex-col justify-center p-20">
      <img src={logo} className="w-20" alt="logo" />
      <p>Hello Vite + React!</p>
      <AppLoading size="lg" />
      <p>
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is: {count}
        </button>
      </p>
      <CdsButton>solid clarity button</CdsButton>
      <p className="text-red-500">Tailwind color</p>
      <p>{l10n('common.back')}</p>
      <p>{formatDate(new Date(), 'MMMM d, y, h:mm:ss a')}</p>
      <p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
      </p>
    </header>
  );
}
