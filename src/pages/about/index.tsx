import s from "./about.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import CallToContact from "@/components/call-to-contact"
import Img from "@/components/custom-img"
import IconPopcorn from "@/components/icons/icon-popcorn"
import Float from "@/hocs/float"
import Parallax from "@/hocs/parallax"

import charYay from "@/assets/img/char-yay.png"
import crumb1 from "@/assets/img/crumb-1.png"
import crumb2 from "@/assets/img/crumb-2.png"
import crumb3 from "@/assets/img/crumb-3.png"
import crumb4 from "@/assets/img/crumb-4.png"
import crumb5 from "@/assets/img/crumb-5.png"
import crumb6 from "@/assets/img/crumb-6.png"
import crumb7 from "@/assets/img/crumb-7.png"
import crumbyChocolate from "@/assets/img/crumby-chocolate.png"
import crumbyDarkChocolate from "@/assets/img/crumby-dark-chocolate.png"
import crumbyPeanut from "@/assets/img/crumby-peanut.png"
import crumbyStrawberry from "@/assets/img/crumby-strawberry.png"
import riceCake from "@/assets/img/rice-cake.png"

const About = () => {
  return (
    <main className={s.about}>
      <section className={cn(s.hero, "flex-center-y")}>
        <h1>
          <span>WE ARE</span>
          <span>CRUMBY</span>
        </h1>
        <p>
          Creating the perfect rice cake isn't just science; it's an art form. We mix, bake, and taste (a million
          times).
        </p>
        <h3>AND THEN...</h3>

        <div className={s.charC}>
          <Parallax directionY={-1} speedX={0} speedY={0.1}>
            <Img src={charYay} objectFit="contain" />
          </Parallax>
        </div>

        <div className={cn(s.crumbC, s.a)}>
          <Parallax speedX={0} directionY={-1}>
            <Float amountY={10} amountRotate={3}>
              <Img src={crumb1} objectFit="contain" />
            </Float>
          </Parallax>
        </div>
        <div className={cn(s.crumbC, s.b)}>
          <Parallax speedX={0} directionY={-1}>
            <Float amountY={10} amountRotate={3}>
              <Img src={crumb2} objectFit="contain" />
            </Float>
          </Parallax>
        </div>
        <div className={cn(s.crumbC, s.c)}>
          <Parallax speedX={0} directionY={-1}>
            <Float amountY={10} amountRotate={3}>
              <Img src={crumb3} objectFit="contain" />
            </Float>
          </Parallax>
        </div>
        <div className={cn(s.crumbC, s.d)}>
          <Parallax speedX={0} directionY={-1}>
            <Float amountY={10} amountRotate={3}>
              <Img src={crumb4} objectFit="contain" />
            </Float>
          </Parallax>
        </div>
        <div className={cn(s.crumbC, s.e)}>
          <Parallax speedX={0} directionY={-1}>
            <Float amountY={10} amountRotate={3}>
              <Img src={crumb5} objectFit="contain" />
            </Float>
          </Parallax>
        </div>
        <div className={cn(s.crumbC, s.f)}>
          <Parallax speedX={0} directionY={-1}>
            <Float amountY={10} amountRotate={3}>
              <Img src={crumb6} objectFit="contain" />
            </Float>
          </Parallax>
        </div>
        <div className={cn(s.crumbC, s.g)}>
          <Parallax speedX={0} directionY={-1}>
            <Float amountY={10} amountRotate={-6}>
              <Img src={crumb7} objectFit="contain" />
            </Float>
          </Parallax>
        </div>
      </section>

      <section className={s.boom}>
        <div className={s.waveC}>
          <Img src={crumbyPeanut} objectFit="contain" />
        </div>
      </section>

      <section className={cn(s.extravaganza, "flex-center-y")}>
        <h2>
          <span className={s.text}>
            THE{" "}
            <span className={s.imgC}>
              <Img src={riceCake} objectFit="contain" />
            </span>{" "}
          </span>
          <span className={s.text}>EXTRAVAGANZA</span>
        </h2>
        <p>
          Our rice cakes aren't just ordinary; they're flavor-packed bites of joy. We've curated a collection of flavors
          that'll make your taste buds tango. It's snacking with a side of entertainment!
        </p>
        <h3>OUR GOAL ?</h3>
        <p>To make you smile with every bite.</p>

        <div className={cn(s.boxes, "flex-center")}>
          <div className={s.imgC}>
            <Img src={crumbyPeanut} objectFit="contain" />
          </div>
          <div className={s.imgC}>
            <Img src={crumbyChocolate} objectFit="contain" />
          </div>
          <div className={s.imgC}>
            <Img src={crumbyDarkChocolate} objectFit="contain" />
          </div>
          <div className={s.imgC}>
            <Img src={crumbyStrawberry} objectFit="contain" />
          </div>
        </div>
        <Button text="SEE ALL PRODUCTS" size="lg" theme="light" />
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
        <div className={cn(s.popcornC, s.d)}>
          <Parallax speedX={0} directionY={-1}>
            <IconPopcorn fill="var(--qing-yellow)" />
          </Parallax>
        </div>
      </section>

      <CallToContact />
    </main>
  )
}

export default About
