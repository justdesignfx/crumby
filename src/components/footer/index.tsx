import Img from "../custom-img"
import s from "./footer.module.scss"

import cn from "clsx"
import { Link } from "react-router-dom"

import logo from "../../assets/img/logo-crumby-c.svg"

const Footer = () => {
  return (
    <footer>
      <div className={s.top}>
        <div className={s.scrollToTop}>TO TOP</div>
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
          <div className={s.navItemC}>
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
