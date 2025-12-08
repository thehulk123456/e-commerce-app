export interface TimeToNow {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function getTimeToNow(date: Date): TimeToNow {
  const t: number = Math.max(0, date.getTime() - Date.now());

  return {
    days: Math.floor(t / 864e5),
    hours: Math.floor((t / 36e5) % 24),
    minutes: Math.floor((t / 6e4) % 60),
    seconds: Math.floor((t / 1e3) % 60),
  };
}
