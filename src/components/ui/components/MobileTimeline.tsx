"use client";
import Image from "next/image";
import React from "react";

interface TimelineEvent {
  date?: string;
  image?: string;
  event: string;
  description?: string;
}

interface MobileTimelineProps {
  data: TimelineEvent[];
}

const MobileTimeline: React.FC<MobileTimelineProps> = ({ data }) => {
  return (
    <div className="relative w-full -z-10">
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-grey transform -translate-x-1/2"></div>
      <div className="flex flex-col items-center space-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md w-4/5 max-w-md"
          >
            {item.date && <div className="text-center text-red text-lg mb-2">{item.date}</div>}
            {item.image && <Image src={item.image} alt={item.event} width={100} height={80} className="py-2" />}
            <div className="font-bold text-base mb-2">{item.event}</div>
            {item.description && <div className="text-sm text-center text-gray-600">{item.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileTimeline;
