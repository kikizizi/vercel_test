"use client"

import { ResponsiveContainer, XAxis, YAxis, Tooltip, Line, LineChart, CartesianGrid } from "recharts"

const data = [
  {
    name: "1월",
    total: 1200,
  },
  {
    name: "2월",
    total: 2100,
  },
  {
    name: "3월",
    total: 1800,
  },
  {
    name: "4월",
    total: 2400,
  },
  {
    name: "5월",
    total: 2800,
  },
  {
    name: "6월",
    total: 1900,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
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
          tickFormatter={(value) => `₩${value}`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="total"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{
            r: 4,
            fill: "hsl(var(--primary))",
            strokeWidth: 2,
            stroke: "hsl(var(--primary))"
          }}
          activeDot={{
            r: 6,
            fill: "hsl(var(--primary))",
            strokeWidth: 2,
            stroke: "hsl(var(--background))"
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

