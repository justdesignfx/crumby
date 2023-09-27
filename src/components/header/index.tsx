import s from "./header.module.scss"

import logo from "../../assets/img/logo-crumby.svg"
import Img from "../custom-img"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.imgC}>
        <Img src={logo} objectFit="contain" />
      </div>
    </header>
  )
}

export default Header
