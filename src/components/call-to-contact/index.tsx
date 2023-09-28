import s from "./call-to-contact.module.scss"

import { useAnimationFrame } from "framer-motion"

import c1 from "../../assets/img/c-1.png"
import c2 from "../../assets/img/c-2.png"
import c3 from "../../assets/img/c-3.png"
import Button from "../button"

const CallToContact = () => {
  useAnimationFrame((time) => {
    const imgs: HTMLImageElement[] = Array.from(document.querySelectorAll("[data-floating-item]"))

    imgs.forEach((img, i: number) => {
      if (!img) return
      const y = (1 + Math.sin(time / 1500)) * -5 * (i + 1) * (i % 2 === 0 ? 1 : -1)
      const rotate = (1 + Math.sin(time / 1500)) * -3

      img.style.transform = `translateY(${y}px) rotate(${rotate}deg)`
    })
  })

  return (
    <section className={s.callToContact}>
      <h2>SO, WHAT ARE YOU WAITING FOR ?</h2>
      <p>Make every snacking moment a Crumb-tastic adventure!</p>
      <Button text="CONTACT US" />
      <div className={s.imgs}>
        <div className={s.imgC} data-floating-item>
          <img src={c1} alt="c1" />
        </div>
        <div className={s.imgC} data-floating-item>
          <img src={c2} alt="c2" />
        </div>
        <div className={s.imgC} data-floating-item>
          <img src={c3} alt="c3" />
        </div>
      </div>
    </section>
  )
}

export default CallToContact
