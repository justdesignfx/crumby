import Breadcrumb from "@/components/breadcrumb"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Products = ({ children }: Props) => {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  )
}

export default Products
