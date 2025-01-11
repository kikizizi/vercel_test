"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@/data/products"
import { Badge } from "@/components/ui/badge"
import { formatNumber } from "@/lib/utils"

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "제품 ID",
  },
  {
    accessorKey: "name",
    header: "제품명",
  },
  {
    accessorKey: "category",
    header: "카테고리",
  },
  {
    accessorKey: "price",
    header: "가격",
    cell: ({ row }) => {
      return `₩${formatNumber(row.getValue("price"))}`
    },
  },
  {
    accessorKey: "stock",
    header: "재고",
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge
          variant={
            status === "In Stock"
              ? "success"
              : status === "Low Stock"
              ? "warning"
              : "destructive"
          }
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "lastUpdated",
    header: "최종 수정일",
  },
] 