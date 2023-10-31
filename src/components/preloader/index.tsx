import { useLayoutEffect, useRef } from "react"
import s from "./preloader.module.scss"

import cn from "clsx"
import gsap from "gsap"

import Img from "@/components/custom-img"
import logo from "@/assets/gif/logo-loading-c.gif"
import { usePreloaderStore } from "@/lib/store/preloader"

const Preloader = () => {
  const ref = useRef(null)
  const { isLoading, setStatus } = usePreloaderStore()

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      opacity: 0,
      delay: 2.5,
      ease: "none",
      onComplete: () => {
        setStatus(false)
      },
    })
  }, [])

  return (
    <>
      {isLoading && (
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
