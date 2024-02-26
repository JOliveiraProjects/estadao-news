  import { useEffect } from 'react';
   
  import { useInitDayjs } from './use-init-dayjs';
  import { useInitI18n } from './use-init-i18n';

  export const useInitResources = () => {
    const [i18nLoaded] = useInitI18n();
    const [dayjsLoaded] = useInitDayjs();
    const loaded = i18nLoaded && dayjsLoaded;

    useEffect(() => {
      console.debug('init');
    }, [loaded]);
  
    return [loaded];
  };
  