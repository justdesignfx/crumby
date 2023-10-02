import { ReactNode, useRef } from "react"

import { useAnimationFrame } from "framer-motion"

type Props = {
  children: ReactNode
  amount: number
}

const Float = ({ children, amount = 3 }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useAnimationFrame((time) => {
    if (!ref.current) return

    const y = (1 + Math.sin(time / 1500)) * -amount
    const rotate = (1 + Math.sin(time / 1500)) * -amount

    ref.current.style.transform = `translateY(${y}px) rotate(${rotate}deg)`
  })

  return (
    <div ref={ref} style={{ width: "inherit", height: "inherit", willChange: "transform" }}>
      {children}
    </div>
  )
}

export default Float
