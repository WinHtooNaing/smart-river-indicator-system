type RiverLevelIndicatorProps = {
  value: number; // cm
};

export default function RiverLevelIndicator({ value }: RiverLevelIndicatorProps) {
  // Auto color by value
  let color = "bg-red-500"; // Default: Danger
  if (value > 10) {
    color = "bg-green-500"; // Safe
  } else if (value >= 3) {
    color = "bg-yellow-500"; // Warning
  }
  let latestValue;
  if(value >14){
    latestValue = 1;
  }else{
     latestValue = 15 - value;
  }
  // value ကို % ပြောင်းဖို့ (max 18cm ဆိုပါစို့)
  const percent = Math.min((latestValue / 16) * 100, 100);

  
  return (
    <div className="relative w-full h-full bg-gray-200 rounded overflow-hidden">
      {/* Water level */}
      <div
        className={`absolute bottom-0 w-full transition-all duration-500 ease-out ${color}`}
        style={{ height: `${percent}%` }}
      />
    </div>
  );
}
