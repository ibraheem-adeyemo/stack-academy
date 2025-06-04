// components/SpiralCalendarIcon.tsx
import React from 'react';

type Props = {
  date: Date;
};

export const SpiralCalendarIcon = ({ date }: Props) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const year = date.getFullYear();

  return (
    <div className="inline-block text-center">
      <div className="flex justify-around gap-4 mb-[-9px]">
        <div className="w-2 h-4 rounded-full bg-gray-500"></div>
        <div className="w-2 h-4 rounded-full bg-gray-500"></div>
      </div>

      <div className="w-24 h-28 rounded-xl border border-gray-300 shadow-md overflow-hidden bg-white">
        <div className="bg-blue-600 text-white text-sm font-bold py-1">
          {month} {year}
        </div>
        <div className="flex items-center justify-center text-6xl font-bold text-gray-800">
          {day}
        </div>
      </div>
    </div>
  );
};


export const PaperCalendar: React.FC<Props> = ({ date = new Date() }) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const year = date.getFullYear();

  return (
    <div className="relative w-28 h-32 bg-white shadow-[4px_6px_15px_rgba(0,0,0,0.2)] rounded-b-xl border border-gray-300 overflow-hidden">
      {/* Curved top / paper fold look */}
      <div className="absolute top-0 left-0 w-full h-6 bg-red-500 rounded-t-xl z-10">
        <div className="text-white text-xs font-bold text-center pt-1">
          {month} {year}
        </div>
      </div>

      {/* Date number */}
      <div className="h-full flex items-center justify-center text-4xl font-bold text-gray-800 pt-6">
        {day}
      </div>

      {/* Paper fold effect */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-100"></div>
    </div>
  );
};


