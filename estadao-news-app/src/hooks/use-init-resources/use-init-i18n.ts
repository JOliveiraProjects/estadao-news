import { useEffect, useState } from 'react';
import { I18n } from 'i18n-js';
import ptBR from 'translations/pt-BR.json';

const translations = {
  'pt-BR': ptBR,
};

export let i18n: I18n;

export const useInitI18n = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      i18n = new I18n(translations);
      i18n.locale = 'pt-BR';
      i18n.defaultLocale = 'pt-BR';
      i18n.enableFallback = true;
      setLoaded(true);
    } catch (error) {
      throw error;
    }
  }, []);

  return [loaded];
};
