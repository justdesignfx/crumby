import apiClient from "@/api-client"

export async function fetchProducts(keyword?: string, sort?: string) {
  const res = await apiClient.get("/all-products", {
    params: {
      keyword,
      sort,
    },
  })
  return res.data
}
