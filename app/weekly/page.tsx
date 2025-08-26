"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Siderbar";
import MobileMenu from "@/components/MobileMenu";
import { useEffect, useState } from "react";

type Level = {
  _id: number;
  maxDistance: number;
};
export default function WeeklyPage() {
  const [levels,setLevels] = useState<Level[]>([]);
    useEffect(()=>{
      async function fetchWaterLevels() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/distance/weekly`);
        const data = await response.json();
        setLevels(data);
      }
  
      fetchWaterLevels();

          const interval = setInterval(fetchWaterLevels, 300000); // 5 minutes

      return () => clearInterval(interval);
    },[])
    console.log(levels);
   const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayIdx = new Date().getDay();
  // Build days array starting from today
  const days = Array.from({ length: 7 }, (_, i) => weekDays[(todayIdx + i) % 7]);

  // Map API data to days
  const data = levels.length === 7
    ? levels.map((item, idx) => ({
        day: days[idx],
        cm: item.maxDistance
      }))
    : [];

  return (
    <>
   
     <div className="flex h-screen">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64">
            <Sidebar />
          </div>
    
          {/* Mobile Navbar */}
          <div className="md:hidden fixed top-0 left-0 w-full border-b bg-white flex items-center gap-2 p-2">
            <MobileMenu />
            <span className="font-bold">မြစ်ရေအနေအထား စောင့်ကြည့်မှု</span>
          </div>
    
          {/* Main Content */}
    
          <div className="flex-1 md:p-20 py-20 px-10">
            <Card className="w-full h-[500px]">
                
      <CardHeader>
        <CardTitle>တစ်ပတ်တာ  အခြေအနေ</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis
              domain={[0, 20]}
              label={{ value: "cm", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cm"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
          </div>
        </div>
        </>
  );
}
