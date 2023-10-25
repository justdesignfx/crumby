import apiClient from "@/api-client"
import { useQuery } from "react-query"

// GET all
async function all(keyword?: string, sort?: string) {
  const res = await apiClient.get("/allProducts.php", {
    params: {
      keyword,
      sort,
    },
  })
  return res.data
}

export function useAll(keyword?: string, sort?: string) {
  return useQuery(["all", keyword, sort], () => all(keyword, sort), {
    // enabled: !!keyword && !!sort,
    retry: 2,
  })
}

// GET single
async function single(url: string) {
  const res = await apiClient.get(`/product/${url}`)
  return res.data
}

export function useSingle(url: string) {
  return useQuery(["single", url], () => single(url), {
    enabled: !!url,
    retry: 2,
  })
}
