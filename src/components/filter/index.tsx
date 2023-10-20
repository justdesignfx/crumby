import { useRef, useState } from "react"
import s from "./filter.module.scss"

import cn from "clsx"
import { useClickAway } from "react-use"
import IconArrowTriangle from "../icons/icon-arrow-triangle"

interface Option {
  label: string
  value: string
}

type Props = {
  label: string
  options: Option[]
}

const Filter = (props: Props) => {
  const ref = useRef(null)
  const [selected, setSelected] = useState<Option | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useClickAway(ref, () => {
    if (isOpen) setIsOpen(false)
  })

  return (
    <div className={cn(s.filter, { [s.open]: isOpen })} ref={ref}>
      <div className={cn(s.label, "cursor-pointer")} onClick={() => setIsOpen((prev) => !prev)}>
        {selected?.label ?? props.label}
        <div className={cn(s.iconC, "flex-center")}>
          <IconArrowTriangle rotate={isOpen ? 180 : 0} fill="var(--duqqa-brown)" />
        </div>
      </div>

      <div className={cn(s.items, { [s.open]: isOpen })}>
        {props.options.map((option, i) => {
          return (
            <div className={cn(s.option, "cursor-pointer")} onClick={() => setSelected(option)} key={i}>
              {option.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter
