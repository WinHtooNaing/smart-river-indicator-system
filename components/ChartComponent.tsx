"use client";

import { useState, useEffect } from "react";
import RiverLevelIndicator from "@/components/RiverLevelIndicator";


export default function ChartComponent() {
  const [level, setLevel] = useState(null);

  useEffect(()=>{
    async function fetchWaterLevel() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/distance/latest`);
      const data = await response.json();
      setLevel(data.distance);
    }

    fetchWaterLevel();

        const interval = setInterval(fetchWaterLevel, 180000); // 3 minutes

    return () => clearInterval(interval);
  },[])
console.log(level);
  // cm labels from 0 to 16
  let labels = ["မြေပြင်",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  return (
    <div className="w-full h-100 border rounded flex items-center justify-center bg-white p-4">
      <div className="flex w-full h-full max-h-[600px] gap-4">
        {/* River Level Indicator */}
        <div className="flex-1">
          <RiverLevelIndicator value={level!} />
        </div>

        {/* CM Labels */}
        <div className="flex flex-col justify-between text-sm text-gray-700">
          {labels.map((label) => (
            <span key={label}>{label} {label === "other"  || label === "မြေပြင်" ? "" : "cm"}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
