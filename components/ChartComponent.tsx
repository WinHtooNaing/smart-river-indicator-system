"use client";

import { useState, useEffect } from "react";
import RiverLevelIndicator from "@/components/RiverLevelIndicator";

export default function ChartComponent() {
  const [level, setLevel] = useState(50);

  // Simulate water level changes every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setLevel(Math.floor(Math.random() * 101)); // 0-100 random
    }, 3000);
    
    return () => clearInterval(interval);
    
  }, []);
console.log(level)
  // cm labels from 800 to 100
  const labels = [1000,900,800, 700, 600, 500, 400, 300, 200, 100];

  return (
    <div className="w-full h-100 border rounded flex items-center justify-center bg-white p-4">
      <div className="flex w-full h-full max-h-[600px] gap-4">
        {/* River Level Indicator */}
        <div className="flex-1">
          <RiverLevelIndicator value={level} />
        </div>

        {/* CM Labels */}
        <div className="flex flex-col justify-between text-sm text-gray-700">
          {labels.map((label) => (
            <span key={label}>{label} cm</span>
          ))}
        </div>
      </div>
    </div>
  );
}
