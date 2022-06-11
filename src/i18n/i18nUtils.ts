import {i18nClient} from './i18nClient';

export const l10n = (key: string, args?: any) => {
  return i18nClient.l10nService.getMessage(key, args);
};

export function formatDate(date: Date, pattern: string) {
  try {
    return i18nClient.i18nService.formatDate(date, pattern);
  } catch (paramError) {
    return 'Invalid date';
  }
}
