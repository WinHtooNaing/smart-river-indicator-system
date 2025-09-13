import MobileMenu from "@/components/MobileMenu";
import Sidebar from "@/components/Siderbar";
import React from "react";
import { DataTable, MonthlyData } from "@/components/data-table";
import { columns } from "@/components/columns";

const data: MonthlyData[] = [
  { date: "2025-09-01", low: 2.3, high: 4.8 },
  { date: "2025-09-02", low: 2.1, high: 4.5 },
  { date: "2025-09-03", low: 2.0, high: 4.7 },
  { date: "2025-09-04", low: 2.5, high: 4.9 },
  { date: "2025-09-05", low: 2.2, high: 4.6 },
  { date: "2025-09-06", low: 2.3, high: 4.8 },
  { date: "2025-09-07", low: 2.1, high: 4.5 },
];

const MonthlyPage = () => {
  return (
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
        <h2 className="text-xl font-bold mb-4">တစ်လတာ မြစ်ရေအခြေအနေ</h2>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default MonthlyPage;
