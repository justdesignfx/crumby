import { ReactNode, useEffect, useRef } from "react"

import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"

type Props = {
  children: ReactNode
}

const LenisWrapper = ({ children }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>()

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  )
}

export default LenisWrapper
