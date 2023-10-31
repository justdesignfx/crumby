import s from "./call-to-contact.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import Img from "@/components/custom-img"
import Float from "@/hocs/animations/float"
import Parallax from "@/hocs/animations/parallax"

import c1 from "@/assets/img/c-1.png"
import c2 from "@/assets/img/c-2.png"
import c3 from "@/assets/img/c-3.png"

import crumb1 from "@/assets/img/crumb-4.png"
import crumb2 from "@/assets/img/crumb-1.png"
import crumb3 from "@/assets/img/crumb-7.png"
import { useMediaQuery } from "@uidotdev/usehooks"
import { breakpoints } from "@/utils"

const CallToContact = () => {
  const isMobile = useMediaQuery(`only screen and (max-width:${breakpoints.mobile}px)`)

  return (
    <section className={s.callToContact}>
      <h2>SO, WHAT ARE YOU WAITING FOR ?</h2>
      <p>Make every snacking moment a Crumb-tastic adventure!</p>
      <a href="mailto:info@eatcrumby.com" target="_blank" rel="noreferrer noopener">
        <Button text="CONTACT US" />
      </a>
      <div className={s.imgs}>
        <div className={s.imgC}>
          <Img src={c1} object-fit="contain" />
        </div>
        <div className={s.imgC}>
          <Img src={c2} object-fit="contain" />
        </div>
        <div className={s.imgC}>
          <Img src={c3} object-fit="contain" />
        </div>
      </div>

      {!isMobile && (
        <>
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
        </>
      )}
    </section>
  )
}

export default CallToContact
