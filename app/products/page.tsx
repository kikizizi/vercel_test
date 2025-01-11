import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/products/columns"
import { products } from "@/data/products"

export default function ProductsPage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">제품 관리</h2>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>전체 제품 목록</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={products} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 