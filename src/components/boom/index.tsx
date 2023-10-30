import { useLayoutEffect, useRef, useState } from "react"
import s from "./boom.module.scss"

import cn from "clsx"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Img from "@/components/custom-img"

import c0 from "@/assets/img/boom/c1.png"
import c1 from "@/assets/img/boom/c2.png"
import c2 from "@/assets/img/boom/c3.png"
import c3 from "@/assets/img/boom/c4.png"
import c4 from "@/assets/img/boom/c5.png"
import c5 from "@/assets/img/boom/c6.png"
import riceCake from "@/assets/img/rice-cake.png"

const cakes = [c0, c1, c2, c3, c4, c5]

const Boom = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const [phase, setPhase] = useState(0)

  function setImgRecursively(progress: number, cakes: HTMLElement[], currentIndex: number) {
    const part = 1 / cakes.length

    if (currentIndex === cakes.length) {
      // Base case: If we've gone through all segments, stop recursion.
      return
    }

    if (progress < part * (currentIndex + 1)) {
      setPhase(currentIndex)
    } else {
      // If progress is not in the current segment, recurse with the next index.
      setImgRecursively(progress, cakes, currentIndex + 1)
    }
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      q(".cake").forEach((cake, i) => {
        gsap.set(cake, {
          scale: 1 + i * 0.6,
        })
      })

      ScrollTrigger.create({
        // markers: true,
        scrub: true,
        start: "center center",
        pin: true,
        trigger: ref.current,
        onUpdate: ({ progress }) => {
          setImgRecursively(progress, q(".cake"), phase)
        },
        onLeave: () => {
          gsap.to(q(".cake-c"), {
            opacity: 0,
            duration: 0,
          })
        },
        onEnterBack: () => {
          gsap.to(q(".cake-c"), {
            opacity: 1,
            duration: 0,
          })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className={cn(s.boom, "boom")} ref={ref}>
      <div style={{ transform: `scale(${1 + 1 / cakes.length - 1 / (phase + 1)})` }}>
        <h2 className={cn(s.textC, "text-c")}>
          <span className={s.text}>
            THE{" "}
            <span className={s.imgC}>
              <Img src={riceCake} objectFit="contain" />
            </span>{" "}
          </span>
          <span className={s.text}>EXTRAVAGANZA</span>
        </h2>
      </div>

      <div className={cn(s.cakeC, "flex-center", "cake-c")}>
        {cakes.map((cake, i) => {
          return (
            <div className={cn(s.cake, "cake", { [s.active]: phase === i })} key={i}>
              <Img src={cake} objectFit="contain" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Boom
