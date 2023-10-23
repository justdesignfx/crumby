import s from "./call-to-contact.module.scss"

import { Link } from "react-router-dom"

import Button from "@/components/button"
import Img from "@/components/custom-img"
import Float from "@/hocs/animations/float"

import c1 from "@/assets/img/c-1.png"
import c2 from "@/assets/img/c-2.png"
import c3 from "@/assets/img/c-3.png"

const CallToContact = () => {
  return (
    <section className={s.callToContact}>
      <h2>SO, WHAT ARE YOU WAITING FOR ?</h2>
      <p>Make every snacking moment a Crumb-tastic adventure!</p>
      <Link className="cursor-pointer" to="/contact-us">
        <Button text="CONTACT US" />
      </Link>
      <div className={s.imgs}>
        <div className={s.imgC}>
          <Float amountRotate={1} amountY={5}>
            <Img src={c1} object-fit="contain" />
          </Float>
        </div>
        <div className={s.imgC}>
          <Float amountRotate={1} amountY={5}>
            <Img src={c2} object-fit="contain" />
          </Float>
        </div>
        <div className={s.imgC}>
          <Float amountRotate={1} amountY={5}>
            <Img src={c3} object-fit="contain" />
          </Float>
        </div>
      </div>
    </section>
  )
}

export default CallToContact
