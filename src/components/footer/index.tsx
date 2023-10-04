import s from "./footer.module.scss"

import cn from "clsx"
import { Link } from "react-router-dom"
import { useLenis } from "@studio-freight/react-lenis"

import Img from "@/components/custom-img"

import logo from "@/assets/img/logo-crumby-c.svg"
import iconUpArrow from "@/assets/img/icon-up-arrow.svg"

const Footer = () => {
  const lenis = useLenis()

  function scrollToTop() {
    lenis.scrollTo("top", {
      duration: 1.5,
      lock: true,
    })
  }

  return (
    <footer>
      <div className={s.top}>
        <div className={cn(s.scrollToTop, "cursor-pointer", "flex-center")} onClick={scrollToTop}>
          <div className={cn(s.iconC, "flex-center")}>
            <Img src={iconUpArrow} objectFit="contain" />
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        <nav>
          <div className={s.navItem}>
            <a href="/">INSTAGRAM</a>
          </div>
          <span className={s.separator}>|</span>
          <div className={s.navItem}>
            <a href="/">FACEBOOK</a>
          </div>
          <span className={s.separator}>|</span>
          <div className={s.navItem}>
            <a href="/">X</a>
          </div>
          <span className={s.separator}>|</span>
          <div className={s.navItem}>
            <a href="/">PRIVACY POLICY</a>
          </div>
        </nav>

        <Link to="/" className={cn(s.imgC, "cursor-pointer")}>
          <Img src={logo} objectFit="contain" />
        </Link>

        <small className={s.copyright}>
          Crumby Co. 2023 | Made by{" "}
          <a href="https:justdesignfx.com" target="_blank" rel="noreferrer noopener">
            <u>JUST DESIGN FX</u>
          </a>
        </small>
      </div>
    </footer>
  )
}

export default Footer
