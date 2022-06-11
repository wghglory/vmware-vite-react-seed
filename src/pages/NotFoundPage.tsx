import {Link} from 'react-router-dom';

import NotFoundSvg from '@/assets/not-found.svg';
import {RoutePath} from '@/core/const/routePath';
import {l10n} from '@/i18n/i18nUtils';

export default function NotFoundPage() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="p-4">
        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
          <div className="space-y-2 text-center">
            <img src={NotFoundSvg} alt="not found" className="block" />
            <p className="text-9xl font-semibold">404</p>
            <h1 className="text-xl font-medium sm:text-2xl">{l10n('common.notFound')}</h1>
            <p className="text-base font-normal">
              <Link to={RoutePath.root} className="" cds-text="link">
                {l10n('common.returnHome')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
