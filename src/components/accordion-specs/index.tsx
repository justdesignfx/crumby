import { useState } from "react"
import s from "./accordion-specs.module.scss"

import cn from "clsx"

import IconMinus from "@/components/icons/icon-minus"
import IconPlus from "@/components/icons/icon-plus"

interface IAccordionItem {
  title: string
  desc: string
}

const AccordionItem = (props: IAccordionItem) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn(s.item, "cursor-pointer")} onClick={() => setIsOpen((prev) => !prev)}>
      <div className={cn(s.accordionHeader, "accordion-header")}>
        <h5>{props.title}</h5>
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
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

type Props = {
  items: IAccordionItem[]
}

const AccordionSpecs = (props: Props) => {
  return (
    <div className={s.accordionSpecs}>
      {props.items.map((item, i) => {
        return <AccordionItem {...item} key={i} />
      })}
    </div>
  )
}

export default AccordionSpecs
