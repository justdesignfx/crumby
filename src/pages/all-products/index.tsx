import { Fragment } from "react"
import s from "./all-products.module.scss"

import { Link } from "react-router-dom"

import cakesBottomPeanut from "@/assets/img/cakes-bottom-peanut.png"
import cakesTopPeanut from "@/assets/img/cakes-top-peanut.png"

import chocolate from "@/assets/img/crumby-chocolate.png"
import darkChocolate from "@/assets/img/crumby-dark-chocolate.png"
import peanut from "@/assets/img/crumby-peanut.png"
import strawberry from "@/assets/img/crumby-strawberry.png"

import Breadcrumb from "@/components/breadcrumb"
import CallToContact from "@/components/call-to-contact"
import CardProduct from "@/components/card-product"
import Filter from "@/components/filter"
import Searchbox from "@/components/searchbox"

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
    <Link to="/all-products">
      <CardProduct
        img={darkChocolate}
        hoverImg={{ top: cakesTopPeanut, bottom: cakesBottomPeanut }}
        name={<>DARK CHOCOLATE</>}
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
        <Filter
          label="SORT"
          options={[
            { label: "asc", value: "asc" },
            { label: "desc", value: "desc" },
            { label: "th", value: "th" },
          ]}
        />
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
  )
}

export default AllProducts
