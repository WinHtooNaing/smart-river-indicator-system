"use client"
import MobileMenu from "@/components/MobileMenu";
import Sidebar from "@/components/Siderbar";
import React from "react";
import { DataTable, MonthlyData } from "@/components/data-table";
import { columns } from "@/components/columns";



const MonthlyPage = () => {
  const [data, setData] = React.useState<MonthlyData[]>([]);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/distance/monthly`) // your API endpoint
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, []);
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
        {
          loading ? (
<div className="flex flex-col items-center justify-center py-20">
    <svg
      className="animate-spin h-12 w-12 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
    <p className="mt-4 text-gray-700 text-lg font-medium">Loading data...</p>
  </div>
          ) : <>
            <DataTable columns={columns} data={data} />
          </>
          
        }
      </div>
    </div>
  );
};

export default MonthlyPage;
