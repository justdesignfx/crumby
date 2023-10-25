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

const cakes = [c0, c1, c2, c3, c4, c5]

const Boom = () => {
  const ref = useRef(null)
  const [currentImg, setCurrentImg] = useState(0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cakes.forEach((_, i) => {
        ScrollTrigger.create({
          onEnter: () => {
            setCurrentImg(i)
          },
          onEnterBack: () => {
            setCurrentImg(i)
          },
          id: `part-${i}`,
          trigger: ref.current,
          markers: true,
          start: `top+=${(i * window.innerHeight) / cakes.length}px center`,
          end: `top+=${((i + 1) * window.innerHeight) / cakes.length}px center`,
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section className={cn(s.boom, "boom")} ref={ref}>
      <div className={cn(s.cakeC, "flex-center", "cakeC")}>
        {cakes.map((cake, i) => {
          return (
            <div className={cn(s.cake, "cake", { [s.active]: currentImg === i })} key={i}>
              <Img src={cake} objectFit="contain" />
              <span className={s.index}>{i}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Boom
