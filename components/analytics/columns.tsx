"use client"

import { ColumnDef } from "@tanstack/react-table"
import { SalesData } from "@/data/analytics"
import { formatNumber } from "@/lib/utils"

export const columns: ColumnDef<SalesData>[] = [
  {
    accessorKey: "date",
    header: "날짜",
  },
  {
    accessorKey: "revenue",
    header: "매출",
    cell: ({ row }) => {
      return `₩${formatNumber(row.getValue("revenue"))}`
    },
  },
  {
    accessorKey: "orders",
    header: "주문 수",
    cell: ({ row }) => {
      return `${formatNumber(row.getValue("orders"))}건`
    },
  },
  {
    accessorKey: "customers",
    header: "고객 수",
    cell: ({ row }) => {
      return formatNumber(row.getValue("customers"))
    },
  },
  {
    accessorKey: "conversion",
    header: "전환율",
    cell: ({ row }) => {
      return `${row.getValue("conversion")}%`
    },
  },
] 