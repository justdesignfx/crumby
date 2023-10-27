import { useLayoutEffect, useRef, useState } from "react"
import s from "./preloader.module.scss"

import cn from "clsx"
import gsap from "gsap"

import Img from "@/components/custom-img"

// import logo from "@/assets/img/logo-crumby-c.svg"
import logo from "@/assets/gif/logo-loading-c.gif"

const Preloader = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(true)

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      opacity: 0,
      delay: 1.5,
      onComplete: () => {
        setVisible(false)
      },
    })
  }, [])

  return (
    <>
      {visible && (
        <div className={cn(s.preloader, "flex-center", "hidden-overflow")} ref={ref}>
          <div className="flex-center">
            <div className={s.imgC}>
              <Img src={logo} objectFit="contain" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Preloader
