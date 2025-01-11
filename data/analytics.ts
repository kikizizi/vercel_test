export type SalesData = {
  id: string
  date: string
  revenue: number
  orders: number
  customers: number
  conversion: number
}

export const salesData: SalesData[] = [
  {
    id: "1",
    date: "2024-03-01",
    revenue: 2450000,
    orders: 125,
    customers: 95,
    conversion: 3.2,
  },
  {
    id: "2",
    date: "2024-03-02",
    revenue: 3200000,
    orders: 145,
    customers: 110,
    conversion: 3.8,
  },
  // ... 더 많은 데이터 추가
]

export const categoryData = [
  { name: "전자기기", sales: 35 },
  { name: "의류", sales: 25 },
  { name: "식품", sales: 20 },
  { name: "가구", sales: 15 },
  { name: "기타", sales: 5 },
]

export const monthlyRevenue = [
  { month: "1월", revenue: 15000000 },
  { month: "2월", revenue: 18000000 },
  { month: "3월", revenue: 21000000 },
  { month: "4월", revenue: 19000000 },
  { month: "5월", revenue: 22000000 },
  { month: "6월", revenue: 25000000 },
] 