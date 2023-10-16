import { useState } from "react"
import s from "./filter.module.scss"

import cn from "clsx"

type Props = {
  label: string
  options: {
    label: string
    value: string
  }[]
}

const Filter = (props: Props) => {
  const [selected, setSelected] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.filter}>
      <div className={cn(s.label, "cursor-pointer")} onClick={() => setIsOpen((prev) => !prev)}>
        {selected ?? props.label}
      </div>

      <div className={cn(s.items, { [s.open]: isOpen })}>
        {props.options.map((option, i) => {
          return (
            <div className={cn(s.option, "cursor-pointer")} onClick={() => setSelected(option.value)} key={i}>
              {option.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter
