import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { salesData, categoryData, monthlyRevenue } from "@/data/analytics"
import { DataTable } from "@/components/data-table"
import { SalesChart } from "@/components/analytics/sales-chart"
import { CategoryPieChart } from "@/components/analytics/category-pie-chart"
import { columns } from "@/components/analytics/columns"
import { formatNumber } from "@/lib/utils"

export default function AnalyticsPage() {
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0)
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0)
  const averageConversion = salesData.reduce((sum, item) => sum + item.conversion, 0) / salesData.length

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">매출 분석</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 매출</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₩{formatNumber(totalRevenue)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 주문</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(totalOrders)}건</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평균 전환율</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageConversion.toFixed(1)}%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>월별 매출 추이</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart data={monthlyRevenue} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>카테고리별 매출 비중</CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryPieChart data={categoryData} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>상세 매출 데이터</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={salesData} />
        </CardContent>
      </Card>
    </div>
  )
} 