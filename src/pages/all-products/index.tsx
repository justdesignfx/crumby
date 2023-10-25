import { useState } from "react"
import s from "./all-products.module.scss"

import cn from "clsx"
import { Link } from "react-router-dom"

import { useAll } from "@/api-client/queries"
import CallToContact from "@/components/call-to-contact"
import CardProduct from "@/components/card-product"
import LoadingScreen from "@/components/loading-screen"
import Searchbox from "@/components/searchbox"
import Filter from "@/components/sort"
import Products from "@/layouts/products"
import { Option } from "@/global"

const AllProducts = () => {
  // const products = [
  //   <Link to={`/all-products/detail`}>
  //     <CardProduct
  //       img={chocolate}
  //       hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
  //       name={
  //         <>
  //           MILK CHOCOLATE <br />+ PEANUT
  //         </>
  //       }
  //     />
  //   </Link>,
  //   <Link to={`/all-products/detail`}>
  //     <CardProduct
  //       img={peanut}
  //       hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
  //       name={
  //         <>
  //           MILK CHOCOLATE <br />+ DRIED STRAWBERRY
  //         </>
  //       }
  //     />
  //   </Link>,
  //   <Link to={`/all-products/detail`}>
  //     <CardProduct
  //       img={strawberry}
  //       hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
  //       name={<>MILK CHOCOLATE</>}
  //     />
  //   </Link>,
  //   <Link to={`/all-products/detail`}>
  //     <CardProduct
  //       img={darkChocolate}
  //       hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
  //       name={<>DARK CHOCOLATE</>}
  //     />
  //   </Link>,
  // ]

  const [keyword, setKeyword] = useState<string | null>(null)
  const [sort, setSort] = useState<Option | null>(null)

  const { isLoading, data } = useAll(keyword, sort)

  return (
    <Products>
      <section className={s.filterC}>
        <Searchbox keyword={keyword} setKeyword={setKeyword} />
        <Filter
          label="SORT"
          options={[
            { label: "NEWEST FIRST", value: "NEWEST_FIRST" },
            { label: "FILTER 2", value: "desc" },
            { label: "FILTER 3", value: "th" },
          ]}
          sort={sort}
          setSort={setSort}
        />
      </section>

      <>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            {data ? (
              <section className="flex-center-y">
                <div className={s.productsList}>
                  {data &&
                    data.map((product) => {
                      return (
                        <Link to={`/all-products/${product.url}`} key={product.id}>
                          <CardProduct
                            img={product.img}
                            hoverImg={{ top: product.hoverImg.top, bottom: product.hoverImg.bottom }}
                            name={product.name}
                          />
                        </Link>
                      )
                    })}
                </div>
              </section>
            ) : (
              <div className={cn(s.notFound, "flex-center")}>
                <h1>Oops!</h1>
                <p>The products you are looking for were not found.</p>
              </div>
            )}
          </>
        )}
      </>

      <CallToContact />
    </Products>
  )
}

export default AllProducts
