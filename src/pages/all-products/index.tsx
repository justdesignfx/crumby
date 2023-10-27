import { useState } from "react"
import s from "./all-products.module.scss"

import cn from "clsx"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import { useAll, useSortOptions } from "@/api-client/queries"
import Breadcrumb from "@/components/breadcrumb"
import CallToContact from "@/components/call-to-contact"
import CardProduct from "@/components/card-product"
import LoadingScreen from "@/components/loading-screen"
import Searchbox from "@/components/searchbox"
import Filter from "@/components/sort"
import useDebounce from "@/components/use-debounce"
import { IOption } from "@/global"
import { seo } from "@/global/seo"

const AllProducts = () => {
  const [keyword, setKeyword] = useState<string | null>(null)
  const [sort, setSort] = useState<IOption | null>(null)
  const debouncedKeyword = useDebounce(keyword, 500)
  const { data: sortOptions } = useSortOptions()
  const { isLoading, data } = useAll(debouncedKeyword, sort)

  return (
    <>
      <Helmet>
        <title>{`${seo.title} | ${seo.allProducts.title}`}</title>
        <meta name="description" content={`${seo.allProducts.desc}`}></meta>
        <link rel="canonical" href={`${seo.allProducts.canonical}`} />
      </Helmet>

      <Breadcrumb />

      <section className={s.filterC}>
        <Searchbox keyword={keyword} setKeyword={setKeyword} />
        {sortOptions && <Filter label="SORT" options={sortOptions} sort={sort} setSort={setSort} />}
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
    </>
  )
}

export default AllProducts
