"use client";

import { getTimeToNow, TimeToNow } from "@/_utils/date";
import { useEffect, useState } from "react";

interface TimeCountDownProps {
  endTime: Date;
}

export default function TimeCountDown({ endTime }: TimeCountDownProps) {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!endTime) return;

    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  if (!endTime) return null;

  const timeToNow: TimeToNow = getTimeToNow(endTime);

  return timeToNow ? (
    <div className="flex items-center gap-4">
      <div>
        <div className="text-xs font-medium">Days</div>
        <div className="text-3xl">{timeToNow.days} </div>
      </div>

      <div className="text-button-2 font-bold text-3xl">:</div>
      <div>
        <div className="text-xs font-medium">Hours</div>
        <div className="text-3xl">{timeToNow.hours} </div>
      </div>
      <div className="text-button-2 font-bold text-3xl">:</div>
      <div>
        <div className="text-xs font-medium">Minutes</div>
        <div className="text-3xl">{timeToNow.minutes} </div>
      </div>
      <div className="text-button-2 font-bold text-3xl">:</div>
      <div>
        <div className="text-xs font-medium">Seconds</div>
        <div className="text-3xl">{timeToNow.seconds} </div>
      </div>
    </div>
  ) : null;
}
