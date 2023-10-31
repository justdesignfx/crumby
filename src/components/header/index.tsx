import s from "./header.module.scss"

import cn from "clsx"
import { Link } from "react-router-dom"

import Button from "@/components/button"
import Img from "@/components/custom-img"
import NavigationTouchScreen from "@/components/navigation-touchscreen"
import { breakpoints } from "@/utils"

import logo from "@/assets/img/logo-crumby.svg"
import { useMediaQuery } from "@uidotdev/usehooks"

const Header = () => {
  const isMobile = useMediaQuery(`only screen and (max-width:${breakpoints.mobile}px)`)

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
            <a href="mailto:info@eatcrumby.com" target="_blank" rel="noreferrer noopener">
              <Button text="CONTACT US" theme="dark" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
