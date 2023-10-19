import { useState } from "react"
import s from "./accordion-specs.module.scss"

import cn from "clsx"

import IconMinus from "@/components/icons/icon-minus"
import IconPlus from "@/components/icons/icon-plus"

const AccordionItem = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn(s.item, "cursor-pointer")} onClick={() => setIsOpen((prev) => !prev)}>
      <div className={cn(s.accordionHeader, "accordion-header")}>
        <h5>INGREDIENTS</h5>
        <span className={cn(s.iconC, "flex-center", { [s.open]: isOpen })}>
          <span className={cn(s.icon, s.minus)}>
            <IconMinus fill={"var(--vanilla-cream)"} />
          </span>
          <span className={cn(s.icon, s.plus)}>
            <IconPlus fill={"var(--vanilla-cream)"} />
          </span>
        </span>
      </div>
      <div className={cn(s.accordionBody, "accordion-body", { [s.open]: isOpen })}>
        <p>
          Milk Chocolate (56%) [Sugar, Cocoa Mass, Cocoa Butter, Soya Lecithin, Polyglycerol Polyricinoleate, Natural
          Vanilla Flavouring], Brown Rice (27%), White Rice (11%), Peanut pieces (6%).
        </p>
      </div>
    </div>
  )
}

const AccordionSpecs = () => {
  return (
    <div className={s.accordionSpecs}>
      <AccordionItem />
      <AccordionItem />
    </div>
  )
}

export default AccordionSpecs
