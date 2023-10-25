import { useRef, useState } from "react"
import s from "./sort.module.scss"

import cn from "clsx"
import { useClickAway } from "react-use"

import IconArrowTriangle from "@/components/icons/icon-arrow-triangle"
import { Option } from "@/global"

type Props = {
  label: string
  options: Option[]
  sort: string
  setSort: (sort: string) => void
}

const Sort = (props: Props) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useClickAway(ref, () => {
    if (isOpen) setIsOpen(false)
  })

  return (
    <div className={cn(s.sort, { [s.open]: isOpen })} ref={ref}>
      <div className={cn(s.label, "cursor-pointer")} onClick={() => setIsOpen((prev) => !prev)}>
        {props.sort ?? props.label}
        <div className={cn(s.iconC, "flex-center")}>
          <IconArrowTriangle rotate={isOpen ? 180 : 0} fill="var(--duqqa-brown)" />
        </div>
      </div>

      <div className={cn(s.items, { [s.open]: isOpen })}>
        {props.options.map((option, i) => {
          return (
            <div className={cn(s.option, "cursor-pointer")} onClick={() => props.setSort(option.value)} key={i}>
              {option.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sort
