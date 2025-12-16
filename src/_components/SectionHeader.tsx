"use client";

import TimeCountDown from "./TimeCountdown";

interface SectionHeaderProps {
  sectionTitle: string;
  title: string;
  saleEndDate?: Date;
  className?: string;
}

export default function SectionHeader({
  sectionTitle,
  title,
  saleEndDate,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`${className ?? ""} px-10 xl:px-0`}>
      <div className="flex gap-4 items-center mb-6">
        <div className="w-5 h-10 bg-button-2 rounded-sm"></div>
        <div className="text-button-2 font-semibold">{sectionTitle}</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start gap-4 items-center lg:gap-20 lg:flex-row">
          <div className="capitalize text-4xl font-semibold">{title}</div>
          {saleEndDate ? <TimeCountDown endTime={saleEndDate} /> : null}
        </div>
      </div>
    </div>
  );
}
