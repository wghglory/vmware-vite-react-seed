import {CdsButton} from '@cds/react/button';

import {l10n} from '@/i18n/i18nUtils';

import AppAlert from './AppAlert';
import AppModal from './AppModal';

export default function ConfirmDialog({
  visible,
  title,
  cancel,
  confirm,
  isLoading,
  error,
  disabled,
  confirmStatus = 'danger',
  size = 'default',
  children,
}: {
  visible: boolean;
  title: string;
  cancel: () => void;
  confirm: () => void;
  isLoading: boolean;
  error: Error | null;
  disabled?: boolean;
  size?: 'xl' | 'lg' | 'default' | 'sm';
  confirmStatus?: 'danger' | 'primary' | 'success' | 'warning' | 'neutral' | 'inverse' | undefined;
  children: React.ReactNode;
}) {
  return (
    <AppModal
      visible={visible}
      closeChange={cancel}
      title={title}
      size={size}
      footer={
        <div className="space-x-4">
          <CdsButton type="button" action="outline" onClick={cancel}>
            {l10n('common.cancel')}
          </CdsButton>
          <CdsButton
            status={confirmStatus}
            onClick={confirm}
            loadingState={isLoading ? 'loading' : 'default'}
            disabled={disabled}
          >
            {l10n('common.confirm')}
          </CdsButton>
        </div>
      }
    >
      {children}
      {error && <AppAlert className="mt-6">{error.message}</AppAlert>}
    </AppModal>
  );
}
