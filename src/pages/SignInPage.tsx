import {CdsAlert, CdsAlertGroup} from '@cds/react/alert';
import {CdsButton} from '@cds/react/button';
import {CdsFormGroup} from '@cds/react/forms';
import {CdsInput} from '@cds/react/input';
import {CdsPassword} from '@cds/react/password';
import {FormEvent, useState} from 'react';

import {useAuth} from '@/core/context/AuthContext';
import {l10n} from '@/i18n/i18nUtils';

export default function SignInPage() {
  // const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, signOut, error, status} = useAuth();

  const formInvalid = username === '' || password === '';

  function submit(e: FormEvent) {
    e.preventDefault();

    const payload = {username, password};
    signIn(payload);
  }

  return (
    <div
      className="relative flex bg-[url('/assets/login.svg')] bg-cover bg-no-repeat"
      style={{
        backgroundPosition: '25.2rem 0',
      }}
    >
      <div className="relative flex min-h-screen w-96 flex-col justify-center bg-[#fafafa] py-5 px-12 dark:bg-[#1b2b32]">
        <h1 className="mb-8 text-center text-4xl leading-7">{l10n('common.product')}</h1>
        {/* <h2 className="text-xl">{l10n('login.subtitle')}</h2> */}
        <form className="flex flex-col pt-10" onSubmit={submit}>
          <CdsFormGroup layout="vertical">
            <CdsInput layout="vertical">
              <label className="sr-only">{l10n('auth.username')}</label>
              <input
                placeholder={l10n('auth.username')}
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </CdsInput>
            <CdsPassword layout="vertical">
              <label className="sr-only">{l10n('auth.password')}</label>
              <input
                type="password"
                placeholder={l10n('auth.password')}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </CdsPassword>
          </CdsFormGroup>

          {error && (
            <CdsAlertGroup status="danger" className="mt-6" aria-label="This is an example info alert group">
              <CdsAlert closable={true} onCloseChange={() => signOut()}>
                {error.message}
              </CdsAlert>
            </CdsAlertGroup>
          )}

          <CdsButton
            className="mt-6"
            disabled={status === 'loading' || formInvalid}
            loadingState={status === 'loading' ? 'loading' : 'default'}
            type="submit"
          >
            {l10n('auth.login')}
          </CdsButton>
        </form>
      </div>
    </div>
  );
}
