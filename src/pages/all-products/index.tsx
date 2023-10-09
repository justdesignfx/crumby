import s from "./all-products.module.scss"

import { Link } from "react-router-dom"

import cakesBottomPeanut from "@/assets/img/cakes-bottom-peanut.png"
import cakesTopPeanut from "@/assets/img/cakes-top-peanut.png"

import chocolate from "@/assets/img/crumby-chocolate.png"
import peanut from "@/assets/img/crumby-peanut.png"
import strawberry from "@/assets/img/crumby-strawberry.png"
import Breadcrumb from "@/components/breadcrumb"
import Filter from "@/components/filter"
import Searchbox from "@/components/searchbox"
import CardProduct from "@/components/card-product"

const AllProducts = () => {
  const products = [
    <Link to="/all-products">
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
    <Link to="/all-products">
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
    <Link to="/all-products">
      <CardProduct
        img={strawberry}
        hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
        name={<>MILK CHOCOLATE</>}
      />
    </Link>,
  ]

  return (
    <main className={s.allProducts}>
      <section>
        <Breadcrumb />
      </section>
      <section className={s.filterC}>
        <Searchbox />
        <Filter />
      </section>
      <section className={s.productsList}>
        {products.map((product) => {
          return product
        })}
      </section>
    </main>
  )
}

export default AllProducts
