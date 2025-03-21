"use client";

import { useState, useEffect } from "react";

// fake Countdown timer for deals
export default function ProductCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4">
      <div className="text-center">
        <div className="bg-gray-100 rounded p-2 min-w-[48px]">
          <span className="text-xl font-semibold">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Days</p>
      </div>
      <div className="text-center">
        <div className="bg-gray-100 rounded p-2 min-w-[48px]">
          <span className="text-xl font-semibold">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Hours</p>
      </div>
      <div className="text-center">
        <div className="bg-gray-100 rounded p-2 min-w-[48px]">
          <span className="text-xl font-semibold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Minutes</p>
      </div>
      <div className="text-center">
        <div className="bg-gray-100 rounded p-2 min-w-[48px]">
          <span className="text-xl font-semibold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Seconds</p>
      </div>
    </div>
  );
}
