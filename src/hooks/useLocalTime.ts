import { useEffect, useState } from 'react';

const format = (timeZone: string) =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone,
  }).format(new Date());

export const useLocalTime = (timeZone: string) => {
  const [time, setTime] = useState(() => {
    try {
      return format(timeZone);
    } catch {
      return '';
    }
  });

  useEffect(() => {
    const tick = () => {
      try {
        setTime(format(timeZone));
      } catch {
        setTime('');
      }
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
};
