"use client";

import { getTimeToNow, TimeToNow } from "@/_utils/date";
import { useEffect, useState } from "react";

interface SectionHeaderProps {
  sectionTitle: string;
  title: string;
  saleEndDate?: Date;
  children?: React.ReactNode;
}

export default function SectionHeader({
  sectionTitle,
  title,
  saleEndDate,
  children,
}: SectionHeaderProps) {
  const [timeToNow, setTimeToNow] = useState<TimeToNow | null>(null);

  useEffect(() => {
    let interval = undefined;
    if (saleEndDate) {
      interval = setInterval(() => {
        setTimeToNow(getTimeToNow(saleEndDate));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex gap-4 items-center mb-6">
        <div className="w-5 h-10 bg-button-2 rounded-sm"></div>
        <div className="text-button-2 font-semibold">{sectionTitle}</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-20">
          <div className="capitalize text-4xl font-semibold">{title}</div>
          {timeToNow ? (
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
          ) : null}
        </div>

        {children ? <div>{children}</div> : null}
      </div>
    </div>
  );
}
