import { Scope, TranslateOptions } from 'i18n-js';
import { i18n } from './use-init-resources/use-init-i18n';

export const useTranslation = (globalScope?: Scope, featureTraslations?: any, globalOptions?: TranslateOptions) => {
  const t = (scope: Scope, options?: TranslateOptions) => {
    if(featureTraslations) {
      i18n.translations[i18n.locale].features = featureTraslations;
    }
    return i18n.t(scope, { ...globalOptions, ...options, scope: globalScope });
  }
  return { t };
};
