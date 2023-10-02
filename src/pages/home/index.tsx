import s from "./home.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import CallToContact from "@/components/call-to-contact"
import CardSpec from "@/components/card-spec"
import Img from "@/components/custom-img"
import IconPopcorn from "@/components/icons/icon-popcorn"
import { Marquee } from "@/components/marquee"
import Parallax from "@/hocs/parallax"

import cardSpec1 from "@/assets/img/card-spec-1.png"
import cardSpecIcon1 from "@/assets/img/card-spec-icon-1.png"
import cardSpecIcon2 from "@/assets/img/card-spec-icon-2.png"
import chocolate from "@/assets/img/crumby-chocolate.png"
import peanut from "@/assets/img/crumby-peanut.png"
import strawberry from "@/assets/img/crumby-strawberry.png"
import cake from "@/assets/img/hero-cake.png"

const Home = () => {
  return (
    <>
      <section className={cn(s.hero, "flex-center-y")}>
        <h1>
          <span>CRUMB</span>
          <span className={s.imgC}>
            <Img src={cake} objectFit="contain" />
          </span>
          <span>YOUR WAY.</span>
        </h1>

        <Button text="SEE ALL PRODUCTS" />

        <div className={s.marqueeC}>
          <Marquee repeat={3} duration={20}>
            <>
              <h2>NO ADDED PRESERVATIVES</h2>
              <h2>LOW SUGAR</h2>
              <h2>LOW CARB</h2>
              <h2>HIGH PROTEIN</h2>
              <h2>FULL OF FIBER</h2>
            </>
          </Marquee>
        </div>

        <div className={cn(s.popcornC, s.a)}>
          <Parallax directionX={-1} directionY={-1}>
            <IconPopcorn fill="var(--qing-yellow)" />
          </Parallax>
        </div>
        <div className={cn(s.popcornC, s.b)}>
          <Parallax directionX={-1} directionY={-1}>
            <IconPopcorn fill="var(--qing-yellow)" />
          </Parallax>
        </div>
        <div className={cn(s.popcornC, s.c)}>
          <Parallax directionX={-1} directionY={-1}>
            <IconPopcorn fill="var(--qing-yellow)" />
          </Parallax>
        </div>
      </section>

      <section className={s.why}>
        <h2>WHY CRUMBY?</h2>
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
        <Button text="ABOUT US" theme="dark" />
      </section>

      <section className={s.ingredients}>
        <h2>WHAT'S INSIDE?</h2>
        <div className={s.specs}>
          <CardSpec
            bgColor="var(--vanilla-cream)"
            fontColor="var(--pale-marigold)"
            fontSize={{ m: "14", d: "86" }}
            icon={cardSpecIcon1}
            img={cardSpec1}
            title="FULL OF FIBER"
          />
          <CardSpec
            bgColor="var(--lan-se-blue)"
            fontColor="var(--porcellana)"
            fontSize={{ m: "14", d: "56" }}
            icon={cardSpecIcon2}
            img={cardSpec1}
            title="NO ADDED PRESERVATIVES"
          />
          <CardSpec
            bgColor="var(--smashing-pumpkins)"
            fontColor="var(--basil-smash)"
            fontSize={{ m: "14", d: "86" }}
            icon={cardSpecIcon1}
            img={cardSpec1}
            title="LOW SUGAR"
          />
          <CardSpec
            bgColor="var(--lan-se-blue)"
            fontColor="var(--porcellana)"
            fontSize={{ m: "14", d: "56" }}
            icon={cardSpecIcon2}
            img={cardSpec1}
            title="NO ADDED PRESERVATIVES"
          />
          <CardSpec
            bgColor="var(--smashing-pumpkins)"
            fontColor="var(--basil-smash)"
            fontSize={{ m: "14", d: "86" }}
            icon={cardSpecIcon1}
            img={cardSpec1}
            title="LOW SUGAR"
          />
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
          <div>
            <div className={s.imgC}>
              <Img src={peanut} objectFit="contain" />
            </div>
            <p>MILK CHOCOLATE</p>
          </div>
          <div>
            <div className={s.imgC}>
              <Img src={chocolate} objectFit="contain" />
            </div>
            <p>
              MILK CHOCOLATE <br /> + DRIED STRAWBERRY
            </p>
          </div>
          <div>
            <div className={s.imgC}>
              <Img src={strawberry} objectFit="contain" />
            </div>
            <p>
              MILK CHOCOLATE <br /> + PEANUT
            </p>
          </div>
        </div>
        <Button text="SEE ALL PRODUCTS" size="lg" theme="light" />
      </div>

      <CallToContact />
    </>
  )
}

export default Home
