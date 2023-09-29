import s from "./header.module.scss"

import cn from "clsx"

import logo from "../../assets/img/logo-crumby.svg"
import Img from "../custom-img"
import { Link } from "react-router-dom"
import Button from "../button"

const Header = () => {
  return (
    <header>
      <nav>
        <div className={cn(s.navItem, "cursor-pointer")}>
          <Link to="about">ABOUT</Link>
        </div>
        <div className={cn(s.navItem, "cursor-pointer")}>
          <Link to="all-products">ALL PRODUCTS</Link>
        </div>
        <div className={cn(s.navItem, "cursor-pointer")}>
          <Link to="all-products">
            <Button text="CONTACT US" theme="dark" />
          </Link>
        </div>
      </nav>

      <Link to="/" className={cn(s.imgC, "cursor-pointer")}>
        <Img src={logo} objectFit="contain" />
      </Link>
    </header>
  )
}

export default Header
