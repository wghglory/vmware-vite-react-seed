import {ReactComponent as NoAccessSvg} from '@/assets/access-denied.svg';
import {l10n} from '@/i18n/i18nUtils';

export default function NoAccessPage() {
  return (
    <div className="container mx-auto flex flex-col p-12 text-center" aria-label="You don't have access">
      <NoAccessSvg className="h-56 w-auto text-gray-50 dark:text-gray-900 sm:h-96" />
      <h1 className="py-8 text-lg">{l10n('common.noAccess')}</h1>
    </div>
  );
}
