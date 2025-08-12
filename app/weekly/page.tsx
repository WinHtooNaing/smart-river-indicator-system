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

export default function WeeklyPage() {
  // Sample weekly data in cm
  const data = [
    { day: "Mon", cm: 320 },
    { day: "Tue", cm: 450 },
    { day: "Wed", cm: 280 },
    { day: "Thu", cm: 500 },
    { day: "Fri", cm: 400 },
    { day: "Sat", cm: 850 },
    { day: "Sun", cm: 720 },
  ];

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
              domain={[0, 1000]}
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
