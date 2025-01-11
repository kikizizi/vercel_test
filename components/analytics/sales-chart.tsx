"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export function SalesChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₩${value.toLocaleString()}`}
        />
        <Tooltip 
          formatter={(value: number) => [`₩${value.toLocaleString()}`, "매출"]}
          contentStyle={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
          }}
        />
        <Bar 
          dataKey="revenue" 
          fill="hsl(var(--chart-1))"
          radius={[4, 4, 0, 0]}
          barSize={30}
          style={{
            opacity: 0.9,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
} 