// import { parallaxItems } from "@/utils/animations/parallax"

import { ReactNode, useLayoutEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

type Props = {
  children: ReactNode
}

const AnimationWrapper = ({ children }: Props) => {
  const ref = useRef(null)
  const location = useLocation()

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // parallaxItems()
    }, ref.current)

    return () => {
      ctx.revert()
    }
  }, [location])

  return (
    <div className="hidden-overflow" ref={ref}>
      {children}
    </div>
  )
}

export default AnimationWrapper
