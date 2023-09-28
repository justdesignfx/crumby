import { ReactNode, useLayoutEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { parallaxItems } from "../../utils/parallax"

type Props = {
  children: ReactNode
}

const AnimationWrapper = ({ children }: Props) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      parallaxItems()
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return <>{children}</>
}

export default AnimationWrapper
