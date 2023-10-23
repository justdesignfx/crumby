import s from "./header.module.scss"

import cn from "clsx"
import { Link } from "react-router-dom"
import { useMedia } from "react-use"

import Img from "@/components/custom-img"
import { breakpoints } from "@/utils"
import NavigationTouchScreen from "@/components/navigation-touchscreen"
import Button from "@/components/button"

import logo from "@/assets/img/logo-crumby.svg"

const Header = () => {
  const isMobile = useMedia(`(max-width:${breakpoints.mobile}px`)

  return (
    <header>
      <Link to="/" className={cn(s.logoC, "cursor-pointer")}>
        <Img src={logo} objectFit="contain" />
      </Link>

      {isMobile ? (
        <NavigationTouchScreen />
      ) : (
        <nav className={s.navDesktop}>
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
      )}
    </header>
  )
}

export default Header
