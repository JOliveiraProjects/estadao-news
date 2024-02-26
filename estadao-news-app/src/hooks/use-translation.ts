import { Scope, TranslateOptions } from 'i18n-js';
import { i18n } from './use-init-resources/use-init-i18n';

export const useTranslation = (globalScope?: Scope, globalOptions?: TranslateOptions) => {
  const t = (scope: Scope, options?: TranslateOptions) =>
    i18n.t(scope, { ...globalOptions, ...options, scope: globalScope });
  return { t };
};
