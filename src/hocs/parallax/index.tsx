import { ReactNode, useLayoutEffect, useRef } from "react"

import gsap from "gsap"

type Props = {
  children: ReactNode
  directionX?: 1 | -1
  directionY?: 1 | -1
  speedX?: number
  speedY?: number
}

const Parallax = ({ children, speedX = 1, speedY = 1, directionX = 1, directionY = 1 }: Props) => {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        xPercent: () => 100 * speedX * directionX,
        yPercent: () => 100 * speedY * directionY,
        scrollTrigger: {
          id: "parallax",
          markers: true,
          scrub: true,
          start: "top center-=25%",
          trigger: ref.current,
        },
      })
    }, ref.current)

    return () => {
      ctx.revert()
    }
  }, [])

  return <div ref={ref}>{children}</div>
}

export default Parallax
