import {CdsAlert, CdsAlertGroup} from '@cds/react/alert';
import React from 'react';

import {l10n} from '@/i18n/i18nUtils';

export default function AppAlert({
  children,
  closable = false,
  status = 'danger',
  onCloseChange,
  ...rest // like className="mt-6"
}: {
  children: React.ReactNode;
  closable?: boolean;
  status?: 'info' | 'danger' | 'success' | 'warning';
  onCloseChange?: (e: Event) => unknown;
  [key: string]: any;
}) {
  return (
    <CdsAlertGroup {...rest} status={status} aria-label={l10n('common.errorContainer')}>
      {typeof children === 'string' ? (
        <CdsAlert
          closable={closable}
          onCloseChange={onCloseChange}
          className="break-all"
          cds-i18n='{ "closeButtonAriaLabel": "close danger alert"}'
          dangerouslySetInnerHTML={{__html: children}}
        ></CdsAlert>
      ) : (
        <CdsAlert
          closable={closable}
          onCloseChange={onCloseChange}
          className="break-all"
          cds-i18n='{ "closeButtonAriaLabel": "close danger alert"}'
        >
          {children}
        </CdsAlert>
      )}
    </CdsAlertGroup>
  );
}
