import { useEffect, useState } from "react"
import s from "./sort.module.scss"

import cn from "clsx"
import { useClickAway } from "@uidotdev/usehooks"

import IconArrowTriangle from "@/components/icons/icon-arrow-triangle"
import { IOption } from "@/global"

type Props = {
  label: string
  options: IOption[]
  sort: IOption | null
  setSort: (sort: IOption) => void
}

const Sort = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickAway<HTMLDivElement>(() => {
    if (isOpen) setIsOpen(false)
  })

  useEffect(() => {
    if (props.sort) setIsOpen(false)
  }, [props.sort])

  return (
    <div className={cn(s.sort, { [s.open]: isOpen })} ref={ref}>
      <div className={cn(s.label, "cursor-pointer")} onClick={() => setIsOpen((prev) => !prev)}>
        {props.sort ? props.sort?.label : props.label}
        <div className={cn(s.iconC, "flex-center")}>
          <IconArrowTriangle rotate={isOpen ? 180 : 0} fill="var(--duqqa-brown)" />
        </div>
      </div>

      <div className={cn(s.items, { [s.open]: isOpen })}>
        {props.options.map((option, i) => {
          return (
            <div className={cn(s.option, "cursor-pointer")} onClick={() => props.setSort(option)} key={i}>
              {option.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sort
