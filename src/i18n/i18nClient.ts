/**
 * refer: https://vmware.github.io/singleton/docs/tutorials/integrate-singleton-in-javascript-app/
 */
import {getBrowserCultureLang, i18nClient as jsClient, PatternCategories} from '@singleton-i18n/js-core-sdk';

import {ENGLISH} from './sourceL10n';

const initI18nClient = () => {
  const currentLanguage = getBrowserCultureLang();
  jsClient.init({
    productID: 'iReact',
    component: 'UI',
    version: '1.0.0',
    isPseudo: true,
    host: 'https://g11n-vip-dev-1.eng.vmware.com:8090',
    language: currentLanguage,
    i18nScope: [PatternCategories.DATE, PatternCategories.NUMBER],
    sourceBundles: [ENGLISH],
    httpOptions: {
      timeout: 3000,
      withCredentials: true,
    },
  });
  return jsClient;
};
export const i18nClient = initI18nClient();
