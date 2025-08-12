type RiverLevelIndicatorProps = {
  value: number; // 0 - 100
};

export default function RiverLevelIndicator({ value }: RiverLevelIndicatorProps) {
  // Auto color by value
  let color = "bg-green-500"; // Safe
  if (value > 70) {
    color = "bg-red-500"; // Danger
  } else if (value > 40) {
    color = "bg-yellow-500"; // Warning
  }

  return (
    <div className="relative w-full h-full bg-gray-200 rounded overflow-hidden">
      {/* Water level */}
      <div
        className={`absolute bottom-0 w-full transition-all duration-500 ease-out ${color}`}
        style={{ height: `${value}%` }}
      />
    </div>
  );
}
