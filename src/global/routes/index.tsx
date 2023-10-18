import About from "@/pages/about"
import AllProducts from "@/pages/all-products"
import DetailProduct from "@/pages/detail-product"
import Home from "@/pages/home"
import { createRef } from "react"

export const routes = [
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() },
  { path: "/about", name: "About", element: <About />, nodeRef: createRef() },
  { path: "/all-products", name: "All Products", element: <AllProducts />, nodeRef: createRef() },
  { path: "/detail", name: "Detail", element: <DetailProduct />, nodeRef: createRef() },
]
