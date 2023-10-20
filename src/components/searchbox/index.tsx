import { useState } from "react"
import s from "./searchbox.module.scss"

import cn from "clsx"
import IconMagnifyingGlass from "../icons/icon-magnifying-glass"

const Searchbox = () => {
  const [keyword, setKeyword] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value)
  }

  return (
    <div className={s.searchbox}>
      <div className={s.field}>
        <div className={cn(s.inputC)}>
          <input
            placeholder="SEARCH"
            className={s.input}
            type="text"
            id="search"
            name="search"
            onChange={handleChange}
            value={keyword}
          />
        </div>
        <div className={cn(s.iconC, "flex-center")}>
          <IconMagnifyingGlass fill="var(--duqqa-brown)" />
        </div>
      </div>
    </div>
  )
}

export default Searchbox
