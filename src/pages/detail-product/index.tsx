import s from "./detail-product.module.scss"

import cn from "clsx"
import { Link, useParams } from "react-router-dom"
import { useMedia } from "react-use"

import sample from "@/assets/img/c-1.png"
import cakesBottomPeanut from "@/assets/img/cakes-bottom-peanut.png"
import cakesTopPeanut from "@/assets/img/cakes-top-peanut.png"
import crumbYourWay from "@/assets/img/crumb-your-way.png"
import chocolate from "@/assets/img/crumby-chocolate.png"
import peanut from "@/assets/img/crumby-peanut.png"
import strawberry from "@/assets/img/crumby-strawberry.png"
import icon from "@/assets/img/icon-card-spec-1.png"
import o1 from "@/assets/img/options-1.png"
import o2 from "@/assets/img/options-2.png"
import o3 from "@/assets/img/options-3.png"

import AccordionSpecs from "@/components/accordion-specs"
import CallToContact from "@/components/call-to-contact"
import CardProduct from "@/components/card-product"
import Img from "@/components/custom-img"
import IconPopcorn from "@/components/icons/icon-popcorn"
import Marquee from "@/components/marquee"
import SliderProduct from "@/components/slider-product"
import SliderSpecs from "@/components/slider-specs"
import { breakpoints } from "@/utils"
import Products from "@/layouts/products"

const DetailProduct = () => {
  const params = useParams()
  const isMobile = useMedia(`(max-width:${breakpoints.mobile}px`)

  console.log(params)

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

  const imgs = [
    {
      img: sample,
    },
    {
      img: sample,
    },
    {
      img: sample,
    },
    {
      img: sample,
    },
  ]

  return (
    <Products>
      <main className={s.detailProduct}>
        <section className={s.info}>
          <div className={s.pics}>
            {isMobile ? (
              <div className={s.sliderC}>
                <SliderSpecs
                  slides={imgs.map((item, i) => {
                    return (
                      <div className={s.slide}>
                        <div className={cn(s.imgC, "hidden-overflow")} key={i}>
                          <Img src={item.img} objectFit="cover" />
                        </div>
                      </div>
                    )
                  })}
                />
              </div>
            ) : (
              <>
                {imgs.map((item, i) => {
                  return (
                    <div className={cn(s.imgC, "hidden-overflow")} key={i}>
                      <Img src={item.img} objectFit="cover" />
                    </div>
                  )
                })}
              </>
            )}
          </div>
          <div className={s.desc}>
            <h1>
              MILK CHOCOLATE <br /> + PEANUT
            </h1>
            <p>
              Imagine the delightful sound of a crispy rice cake meeting the smooth embrace of rich milk chocolate and
              the nutty charm of peanuts. That's the magic of Crumby! Crunchy and creamy, all in one bite.
            </p>
            <div className={s.specs}>
              <div>
                <div className={s.imgC}>
                  <Img src={icon} objectFit="contain" />
                </div>
                <small>
                  Low <br /> Sugar
                </small>
              </div>
              <div>
                <div className={s.imgC}>
                  <Img src={icon} objectFit="contain" />
                </div>
                <small>
                  Low <br /> Sugar
                </small>
              </div>
              <div>
                <div className={s.imgC}>
                  <Img src={icon} objectFit="contain" />
                </div>
                <small>
                  Low <br /> Sugar
                </small>
              </div>
            </div>
          </div>
          <div className={s.stickerC}>
            <Img src={crumbYourWay} objectFit="contain" />
          </div>
        </section>

        <section className={cn(s.crumbYourWay, "flex-center")}>
          <div>
            <div className={s.imgC}>
              <Img src={o1} objectFit="contain" />
            </div>
            <p>
              Add me to your favorite <span>ice cream</span> base.
            </p>
          </div>
          <div>
            <div className={s.imgC}>
              <Img src={o2} objectFit="contain" />
            </div>
            <p>
              Add me on top of your <span>yoghurt</span> base.
            </p>
          </div>
          <div>
            <div className={s.imgC}>
              <Img src={o3} objectFit="contain" />
            </div>
            <p>
              Add me into your <span>cereal milk</span>.
            </p>
          </div>
        </section>

        <section className={s.realChocolate}>
          <div className={s.marqueeC}>
            <Marquee repeat={5} duration={30}>
              <>
                <h3>REAL CHOCOLATE.</h3>
                <span className={s.imgC}>
                  <IconPopcorn fill="var(--smashing-pumpkins)" />
                </span>
                <h3>REAL CRUNCH.</h3>
                <span className={s.imgC}>
                  <IconPopcorn fill="var(--smashing-pumpkins)" />
                </span>
              </>
            </Marquee>
          </div>
        </section>

        <section className={s.detailedInfo}>
          <AccordionSpecs />
        </section>

        <section className={s.share}>
          <div className={s.imgC}></div>
          <div className={s.text}>
            <h3>SHARE THE LOVE (OR NOT!)</h3>
            <p>
              Crumby is so good that you might want to keep it all to yourself. But we won't judge if you decide to
              share the Crumby love with your friends and family. Just be prepared for them to come back for more –
              Crumby tends to have that effect on people.
            </p>
          </div>
        </section>

        <section className={cn(s.mightLoveThese, "flex-center-y")}>
          <h4>YOU MIGHT ALSO LOVE THESE...</h4>
          <div className={s.sliderC}>
            <SliderProduct slides={products} />
          </div>
        </section>

        <CallToContact />
      </main>
    </Products>
  )
}

export default DetailProduct
