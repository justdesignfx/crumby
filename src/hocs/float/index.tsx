import { ReactNode, useRef } from "react"

import { useAnimationFrame } from "framer-motion"
import gsap from "gsap"

type Props = {
  children: ReactNode
  amount: number
}

const Float = ({ children, amount = 3 }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const random = gsap.utils.random(-3, 3)

  useAnimationFrame((time) => {
    if (!ref.current) return

    const y = (1 + Math.sin(time / 1500)) * amount * random
    const rotate = (1 + Math.sin(time / 1500)) * amount * random

    ref.current.style.transform = `translateY(${y}px) rotate(${rotate}deg)`
  })

  return (
    <div ref={ref} style={{ width: "inherit", height: "inherit", willChange: "transform" }}>
      {children}
    </div>
  )
}

export default Float
