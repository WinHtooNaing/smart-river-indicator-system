import MobileMenu from "@/components/MobileMenu"
import StatusCard from "@/components/StatusCard"
import ChartComponent from "@/components/ChartComponent"
import Sidebar from "@/components/Siderbar"

export default function HomePage() {
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
      <div className="flex-1 p-4 mt-16 md:mt-20 grid md:grid-cols-[2fr_1fr] gap-4">

        <div>
          <h2 className="text-lg font-bold mb-2">ယနေ့ အခြေအနေ</h2>
          <ChartComponent />
        </div>
        <div className="flex flex-col gap-4">
          <StatusCard status="danger" />
          <StatusCard status="warning" />
          <StatusCard status="safe" />
        </div>
      </div>
    </div>
  )
}
