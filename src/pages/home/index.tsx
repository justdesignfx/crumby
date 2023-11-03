import { Fragment, useLayoutEffect, useRef } from "react"
import s from "./home.module.scss"

import { useMediaQuery } from "@uidotdev/usehooks"
import cn from "clsx"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

import { useHomeSlider } from "@/api-client/queries"
import Button from "@/components/button"
import CallToContact from "@/components/call-to-contact"
import CardProduct from "@/components/card-product"
import CardSpec from "@/components/card-spec"
import Img from "@/components/custom-img"
import IconPopcorn from "@/components/icons/icon-popcorn"
import Marquee from "@/components/marquee"
import SliderProduct from "@/components/slider-product"
import SliderSpecs from "@/components/slider-specs"
import { seo } from "@/global/seo"
import Parallax from "@/hocs/animations/parallax"
import { usePreloaderStore } from "@/lib/store/preloader"
import { breakpoints } from "@/utils"

import charBests from "@/assets/gif/char-walk.gif"
import cardSpecBg1 from "@/assets/img/bg-card-spec-1.png"
import cardSpecBg3 from "@/assets/img/bg-card-spec-3.png"
import cardSpecBg5 from "@/assets/img/bg-card-spec-5.png"
import cake from "@/assets/img/hero-cake.png"
import iconCarb from "@/assets/img/icon-carb.svg"
import cardSpecIcon1 from "@/assets/img/icon-card-spec-1.png"
import cardSpecIcon2 from "@/assets/img/icon-card-spec-2.png"
import cardSpecIcon3 from "@/assets/img/icon-card-spec-3.png"
import cardSpecIcon4 from "@/assets/img/icon-card-spec-4.png"
import cardSpecIcon5 from "@/assets/img/icon-card-spec-5.png"
import iconDrop from "@/assets/img/icon-drop.svg"
import iconFiber from "@/assets/img/icon-fiber.svg"
import iconLowSugar from "@/assets/img/icon-low-sugar.svg"
import iconProtein from "@/assets/img/icon-protein.svg"
import specCard2 from "@/assets/video/blue.mp4"
import specCard4 from "@/assets/video/purple.mp4"

const specSlides = [
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
]

const Home = () => {
  const heroRef = useRef(null)
  const isMobile = useMediaQuery(`only screen and (max-width:${breakpoints.mobile}px)`)
  const { data: slides } = useHomeSlider()
  const { isLoading } = usePreloaderStore()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true })

      tl.from(".slide-in", {
        duration: 0.7,
        ease: "back.out",
        opacity: 0,
        yPercent: 100,
        transformOrigin: "center center",
      })

      !isLoading ? tl.play() : tl.revert()
    }, heroRef)

    return () => {
      ctx.revert()
    }
  }, [isLoading])

  useLayoutEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh()
    }
  }, [isLoading])

  return (
    <>
      <Helmet>
        <title>{`${seo.title} | ${seo.home.title}`}</title>
        <meta name="description" content={`${seo.home.desc}`}></meta>
        <link rel="canonical" href={`${seo.home.canonical}`} />
      </Helmet>

      <section className={cn(s.hero, "flex-center-y")} ref={heroRef}>
        <h1>
          <span>CRUMB</span>
          <span className={s.imgC}>
            <Parallax speedX={0} directionY={-1} speedY={0.5}>
              <div className="slide-in">
                <Img src={cake} objectFit="contain" />
              </div>
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
        </div>
      </section>

      <section className={s.ingredients}>
        <h2>WHAT'S INSIDE ?</h2>
        <div className={s.specs}>
          {isMobile ? (
            <SliderSpecs slides={specSlides} />
          ) : (
            <>
              {specSlides.map((item, i) => {
                return <Fragment key={i}>{item}</Fragment>
              })}
            </>
          )}
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
      </section>

      {slides && (
        <section className={cn(s.flavors, "flex-center-y")}>
          <h2>OUR TASTY FLAVORS</h2>
          <div className={s.boxes}>
            <SliderProduct
              slides={slides?.map((product) => {
                return (
                  <Link to={`/all-products/${product.url}` ?? ""} key={product.id}>
                    <CardProduct
                      img={product.img}
                      hoverImg={{ top: product.hoverImg.top, bottom: product.hoverImg.bottom }}
                      name={product.name}
                    />
                  </Link>
                )
              })}
            />
          </div>

          <Link to="/all-products">
            <Button text="SEE ALL PRODUCTS" size="lg" theme="light" />
          </Link>
        </section>
      )}

      <CallToContact />
    </>
  )
}

export default Home
