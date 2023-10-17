import { useEffect, useRef } from "react"
import s from "./accordion-specs.module.scss"

import cn from "clsx"
import gsap from "gsap"

import IconMinus from "@/components/icons/icon-minus"
import IconPlus from "@/components/icons/icon-plus"

const AccordionItem = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const animation = useRef<gsap.core.Timeline>()

  useEffect(() => {
    const ctx = gsap.context(() => {
      console.log(q(".accordion-body"))

      animation.current = gsap
        .timeline({ paused: true })
        .to(q(".accordion-body"), {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        })
        .reverse()
    })

    return () => ctx.revert()
  }, [q])

  function open() {
    console.log(animation.current)

    animation.current?.reversed(!animation.current.reversed())
  }

  return (
    <div className={cn(s.item, "cursor-pointer")} ref={ref} onClick={open}>
      <div className={cn(s.accordionHeader, "accordion-header")}>
        <h5>INGREDIENTS</h5>
        <span className={cn(s.iconC, "flex-center")}>
          <span className={cn(s.icon, s.minus)}>
            <IconMinus fill={"var(--black)"} />
          </span>
          <span className={cn(s.icon, s.plus)}>
            <IconPlus fill={"var(--black)"} />
          </span>
        </span>
      </div>
      <div className={cn(s.accordionBody, "accordion-body")}>
        <p>
          Milk Chocolate (56%) [Sugar, Cocoa Mass, Cocoa Butter, Soya Lecithin, Polyglycerol Polyricinoleate, Natural
          Vanilla Flavouring], Brown Rice (27%), White Rice (11%), Peanut pieces (6%).
        </p>
      </div>
    </div>
  )
}

type Props = {
  isOpen: boolean
}

const AccordionSpecs = (props: Props) => {
  return (
    <div className={s.accordionSpecs}>
      <AccordionItem />
      <AccordionItem />
    </div>
  )
}

export default AccordionSpecs
