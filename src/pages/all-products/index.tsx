import { Fragment, useState } from "react"
import s from "./all-products.module.scss"

// import { useQuery } from "react-query"
import { Link } from "react-router-dom"

import cakesBottomPeanut from "@/assets/img/cakes-bottom-peanut.png"
import cakesTopPeanut from "@/assets/img/cakes-top-peanut.png"

import chocolate from "@/assets/img/crumby-chocolate.png"
import darkChocolate from "@/assets/img/crumby-dark-chocolate.png"
import peanut from "@/assets/img/crumby-peanut.png"
import strawberry from "@/assets/img/crumby-strawberry.png"

// import { fetchProducts } from "@/api-client/queries"
import CallToContact from "@/components/call-to-contact"
import CardProduct from "@/components/card-product"
// import Filter from "@/components/sort"
import Searchbox from "@/components/searchbox"
import Products from "@/layouts/products"
// import LoadingSpinner from "@/components/loading-spinner"
import LoadingScreen from "@/components/loading-screen"

const AllProducts = () => {
  const products = [
    <Link to={`/all-products/detail`}>
      <CardProduct
        img={chocolate}
        hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
        name={
          <>
            MILK CHOCOLATE <br />+ PEANUT
          </>
        }
      />
    </Link>,
    <Link to={`/all-products/detail`}>
      <CardProduct
        img={peanut}
        hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
        name={
          <>
            MILK CHOCOLATE <br />+ DRIED STRAWBERRY
          </>
        }
      />
    </Link>,
    <Link to={`/all-products/detail`}>
      <CardProduct
        img={strawberry}
        hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
        name={<>MILK CHOCOLATE</>}
      />
    </Link>,
    <Link to={`/all-products/detail`}>
      <CardProduct
        img={darkChocolate}
        hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
        name={<>DARK CHOCOLATE</>}
      />
    </Link>,
  ]

  const [keyword, setKeyword] = useState("")
  // const [sort, setSort] = useState<string | null>(null)

  const isLoading = true

  // const { isLoading, isError, data, error } = useQuery(["all-products", { keyword, sort }], fetchProducts, {
  //   retry: 2,
  // })

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Products>
          <main className={s.allProducts}>
            <section className={s.filterC}>
              <Searchbox keyword={keyword} setKeyword={setKeyword} />
              {/* <Filter
                label="SORT"
                options={[
                  { label: "NEWEST FIRST", value: "NEWEST_FIRST" },
                  { label: "FILTER 2", value: "desc" },
                  { label: "FILTER 3", value: "th" },
                ]}
                sort={sort}
                setSort={setSort}
              /> */}
            </section>
            <section className="flex-center-y">
              <div className={s.productsList}>
                {products.map((product, i) => {
                  return <Fragment key={i}>{product}</Fragment>
                })}
              </div>
            </section>
            <CallToContact />
          </main>
        </Products>
      )}
    </>
  )
}

export default AllProducts
