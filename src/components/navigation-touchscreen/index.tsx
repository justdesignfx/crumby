import { useLayoutEffect, useState } from "react"
import s from "./navigation-touchscreen.module.scss"

import { useLenis } from "@studio-freight/react-lenis"
import { Link } from "react-router-dom"
import cn from "clsx"

const NavigationTouchScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const lenis = useLenis()

  function handleMenu() {
    setIsOpen((prev) => !prev)
  }

  useLayoutEffect(() => {
    if (!lenis) return

    isOpen ? lenis.stop() : lenis.start()
  }, [isOpen, lenis])

  return (
    <div className={s.navTouchscreen}>
      <div className={cn(s.hamburger, "flex-center")} onClick={handleMenu}>
        <span>menu</span>
      </div>

      <nav className={cn({ [s.open]: isOpen })}>
        <div className={cn(s.navItem, "cursor-pointer")} onClick={handleMenu}>
          <Link to="all-products">ALL PRODUCTS</Link>
        </div>

        <div className={cn(s.navItem, "cursor-pointer")} onClick={handleMenu}>
          <Link to="about">ABOUT</Link>
        </div>

        <div className={cn(s.navItem, "cursor-pointer")} onClick={handleMenu}>
          <Link to="contact">CONTACT US</Link>
        </div>

        <div className={s.social}>
          <div className={s.navItem} onClick={handleMenu}>
            <a href="/">FACEBOOK</a>
          </div>
          <div className={s.navItem} onClick={handleMenu}>
            <a href="/">INSTAGRAM</a>
          </div>
          <div className={s.navItem} onClick={handleMenu}>
            <a href="/">X</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationTouchScreen
