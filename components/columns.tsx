// components/monthly/columns.tsx
import { ColumnDef } from "@tanstack/react-table";
import { MonthlyData } from "./data-table";

export const columns: ColumnDef<MonthlyData>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "low",
    header: "အနိမ့်ဆုံး အခြေအနေ (cm)",
  },
  {
    accessorKey: "high",
    header: "အမြင့်ဆုံး အခြေအနေ (cm)",
  },
];
