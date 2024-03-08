import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/isBetween';
import isBetween from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';

export const useInitDayjs = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      dayjs.locale('pt-BR');
      dayjs.extend(relativeTime);
      dayjs.extend(customParseFormat);
      dayjs.extend(isBetween);

      setLoaded(true);
    } catch (error) {
      throw error;
    }
  }, []);

  return [loaded];
};
