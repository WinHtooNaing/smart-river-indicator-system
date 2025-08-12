import { Card, CardContent } from "@/components/ui/card"

interface StatusCardProps {
  status: "danger" | "warning" | "safe"
}

export default function StatusCard({ status }: StatusCardProps) {
  const colorMap = {
    danger: "border-red-500 bg-red-100 text-red-800",
    warning: "border-yellow-500 bg-yellow-100 text-yellow-800",
    safe: "border-green-500 bg-green-100 text-green-800"
  }

  const labelMap = {
    danger: "အရေးပေါ် အဆင့်အနေ",
    warning: "သတိပြု အဆင့်အနေ",
    safe: "ပုံမှန် အဆင့်အနေ"
  }

  return (
    <Card className={`border-2 ${colorMap[status]}`}>
      <CardContent className="p-4 font-semibold">
        {labelMap[status]}
      </CardContent>
    </Card>
  )
}
