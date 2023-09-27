import Img from "../../components/custom-img"
import s from "./home.module.scss"

import cn from "clsx"

import cake from "../../assets/img/hero-cake.png"
import { Marquee } from "../../components/marquee"

const Home = () => {
  return (
    <>
      <section className={cn(s.hero, "flex-center")}>
        <h1>
          <span>CRUMB</span>
          <span className={s.imgC}>
            <Img src={cake} objectFit="contain" />
          </span>
          <span>YOUR WAY.</span>
        </h1>
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
      </section>
      <section className={s.ingredients}>
        <h2>WHAT'S INSIDE?</h2>

        <div className={s.realChocolate}>
          <div className={s.marqueeC}>
            <Marquee repeat={5} duration={20}>
              <>
                <h3>REAL CHOCOLATE.</h3>
                <h3>REAL CRUNCH.</h3>
              </>
            </Marquee>
          </div>
          <div className={s.marqueeC}>
            <Marquee repeat={5} duration={20}>
              <>
                <h3>REAL CHOCOLATE.</h3>
                <h3>REAL CRUNCH.</h3>
              </>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
