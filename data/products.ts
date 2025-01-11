export type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "In Stock" | "Low Stock" | "Out of Stock"
  lastUpdated: string
}

export const products: Product[] = [
  {
    id: "PROD-001",
    name: "스마트폰 A-1",
    category: "전자기기",
    price: 899000,
    stock: 45,
    status: "In Stock",
    lastUpdated: "2024-03-15",
  },
  {
    id: "PROD-002",
    name: "노트북 X-Pro",
    category: "전자기기",
    price: 1599000,
    stock: 12,
    status: "Low Stock",
    lastUpdated: "2024-03-14",
  },
  {
    id: "PROD-003",
    name: "무선이어폰 W1",
    category: "액세서리",
    price: 199000,
    stock: 0,
    status: "Out of Stock",
    lastUpdated: "2024-03-13",
  },
  // ... 더 많은 제품 데이터 추가
] 