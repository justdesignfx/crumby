import { useLayoutEffect, useRef } from "react"
import s from "./home.module.scss"

import cn from "clsx"
import gsap, { Back } from "gsap"
import { Link } from "react-router-dom"

import Button from "@/components/button"
import CallToContact from "@/components/call-to-contact"
import CardSpec from "@/components/card-spec"
import Img from "@/components/custom-img"
import IconPopcorn from "@/components/icons/icon-popcorn"
import Marquee from "@/components/marquee"
import Parallax from "@/hocs/parallax"

import cardSpecIcon1 from "@/assets/img/icon-card-spec-1.png"
import cardSpecIcon2 from "@/assets/img/icon-card-spec-2.png"
import cardSpecIcon3 from "@/assets/img/icon-card-spec-3.png"
import cardSpecIcon4 from "@/assets/img/icon-card-spec-4.png"
import cardSpecIcon5 from "@/assets/img/icon-card-spec-5.png"

import cardSpecBg1 from "@/assets/img/bg-card-spec-1.png"
import cardSpecBg3 from "@/assets/img/bg-card-spec-3.png"
import cardSpecBg5 from "@/assets/img/bg-card-spec-5.png"

import charBests from "@/assets/gif/char-walk.gif"

import cakesBottomPeanut from "@/assets/img/cakes-bottom-peanut.png"
import cakesTopPeanut from "@/assets/img/cakes-top-peanut.png"

import chocolate from "@/assets/img/crumby-chocolate.png"
import peanut from "@/assets/img/crumby-peanut.png"
import strawberry from "@/assets/img/crumby-strawberry.png"

import specCard2 from "@/assets/video/blue.mp4"
import specCard4 from "@/assets/video/purple.mp4"

import cake from "@/assets/img/hero-cake.png"
import iconCarb from "@/assets/img/icon-carb.svg"
import iconDrop from "@/assets/img/icon-drop.svg"
import iconFiber from "@/assets/img/icon-fiber.svg"
import iconLowSugar from "@/assets/img/icon-low-sugar.svg"
import iconProtein from "@/assets/img/icon-protein.svg"
import CardProduct from "@/components/card-product"
import SliderProduct from "@/components/slider-product"
import SliderSpecs from "@/components/slider-specs"
import { breakpoints } from "@/utils"
import { useMedia } from "react-use"

const slides = [
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

const specSlides = [
  <CardSpec
    bgColor="var(--vanilla-cream)"
    fontColor="var(--pale-marigold)"
    fontSize="lg"
    icon={cardSpecIcon1}
    img={cardSpecBg1}
    title={
      <>
        FULL OF <br /> FIBER
      </>
    }
  />,
  <CardSpec
    bgColor="var(--lan-se-blue)"
    fontColor="var(--porcellana)"
    fontSize="sm"
    icon={cardSpecIcon2}
    title={
      <>
        NO ADDED <br /> PRESERVATIVES
      </>
    }
    video={specCard2}
  />,
  <CardSpec
    bgColor="var(--algerian-coral)"
    fontColor="var(--celery-victor)"
    fontSize="lg"
    icon={cardSpecIcon3}
    img={cardSpecBg3}
    title={
      <>
        LOW <br /> SUGAR
      </>
    }
  />,
  <CardSpec
    bgColor="var(--lan-se-blue)"
    fontColor="var(--porcellana)"
    fontSize="lg"
    icon={cardSpecIcon4}
    title={
      <>
        LOW <br /> CARB
      </>
    }
    video={specCard4}
  />,
  <CardSpec
    bgColor="var(--basil-smash)"
    fontColor="var(--nyanza)"
    fontSize="lg"
    icon={cardSpecIcon5}
    img={cardSpecBg5}
    title={
      <>
        HIGH <br /> PROTEIN
      </>
    }
  />,
]

const Home = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const isMobile = useMedia(`(max-width:${breakpoints.mobile}px`)

  useLayoutEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.from(q(".slide-in"), {
        duration: 0.9,
        ease: Back.easeOut,
        opacity: 0,
        yPercent: 50,
        transformOrigin: "center",
      })
    }, ref.current)

    return () => {
      ctx.revert()
    }
  }, [q])

  return (
    <main className={s.home} ref={ref}>
      <section className={cn(s.hero, "flex-center-y")}>
        <h1>
          <span>CRUMB</span>
          <span className={cn(s.imgC, "slide-in")}>
            <Parallax speedX={0} directionY={-1} speedY={0.5}>
              <Img src={cake} objectFit="contain" />
            </Parallax>
          </span>

          <span>YOUR WAY.</span>
        </h1>

        <Link className="cursor-pointer" to="/all-products">
          <Button text="SEE ALL PRODUCTS" />
        </Link>

        <div className={s.marqueeC}>
          <Marquee repeat={3} duration={40}>
            <>
              <div className={s.specC}>
                <h2>NO ADDED PRESERVATIVES</h2>
                <span className={s.iconC}>
                  <Img src={iconDrop} objectFit="contain" />
                </span>
              </div>

              <div className={s.specC}>
                <h2>LOW SUGAR</h2>
                <span className={s.iconC}>
                  <Img src={iconLowSugar} objectFit="contain" />
                </span>
              </div>

              <div className={s.specC}>
                <h2>LOW CARB</h2>
                <span className={s.iconC}>
                  <Img src={iconCarb} objectFit="contain" />
                </span>
              </div>

              <div className={s.specC}>
                <h2>HIGH PROTEIN</h2>
                <span className={s.iconC}>
                  <Img src={iconProtein} objectFit="contain" />
                </span>
              </div>

              <div className={s.specC}>
                <h2>FULL OF FIBER</h2>
                <span className={s.iconC}>
                  <Img src={iconFiber} objectFit="contain" />
                </span>
              </div>
            </>
          </Marquee>
        </div>

        <div className={cn(s.popcornC, s.a)}>
          <Parallax speedX={0} directionY={-1}>
            <IconPopcorn fill="var(--qing-yellow)" />
          </Parallax>
        </div>
        <div className={cn(s.popcornC, s.b)}>
          <Parallax speedX={0} directionY={-1}>
            <IconPopcorn fill="var(--qing-yellow)" />
          </Parallax>
        </div>
        <div className={cn(s.popcornC, s.c)}>
          <Parallax speedX={0} directionY={-1}>
            <IconPopcorn fill="var(--qing-yellow)" />
          </Parallax>
        </div>
      </section>

      <section className={s.why}>
        <h2>WHY CRUMBY ?</h2>
        <div className={s.reasons}>
          <div>
            <h5>
              NUTRIENT <br /> RICH
            </h5>
            <p>
              In addition to fiber, our rice cakes provide essential nutrients like vitamins, minerals, and
              antioxidants, supporting your overall well-being.
            </p>
          </div>
          <div>
            <h5>
              GREAT <br /> TASTE
            </h5>
            <p>Crumby's commitment to quality means you get the perfect blend of taste and nutrition in every bite.</p>
          </div>
          <div>
            <h5>
              VARIETY OF <br /> FLAVORS
            </h5>
            <p>
              Crumby offers a range of savory and sweet flavors to suit all preferences, ensuring you never get bored of
              your high-protein snack.
            </p>
          </div>
        </div>
        <Link className="cursor-pointer" to="/about">
          <Button text="ABOUT US" theme="dark" />
        </Link>
        <div className={s.charC}>
          <Img src={charBests} objectFit="contain" />
          {/* <video style={{ width: "100%", height: "100%" }} src={charBests} playsInline loop muted autoPlay></video> */}
        </div>
      </section>

      <section className={s.ingredients}>
        <h2>WHAT'S INSIDE ?</h2>
        <div className={s.specs}>
          {isMobile ? (
            <>
              <SliderSpecs slides={specSlides} />
            </>
          ) : (
            <>
              {specSlides.map((item) => {
                return item
              })}
            </>
          )}
        </div>

        <div className={s.realChocolate}>
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
          <div className={s.marqueeC}>
            <Marquee repeat={5} duration={25}>
              <>
                <h3>REAL CHOCOLATE.</h3>
                <span className={s.imgC}>
                  <IconPopcorn fill="var(--basil-smash)" />
                </span>
                <h3>REAL CRUNCH.</h3>
                <span className={s.imgC}>
                  <IconPopcorn fill="var(--basil-smash)" />
                </span>
              </>
            </Marquee>
          </div>
        </div>
      </section>

      <div className={s.flavors}>
        <h2>OUR TASTY FLAVORS</h2>
        <div className={s.boxes}>
          <SliderProduct slides={slides} />
        </div>
        <Button text="SEE ALL PRODUCTS" size="lg" theme="light" />
      </div>

      <CallToContact />
    </main>
  )
}

export default Home
