import { useState } from "react"
import s from "./searchbox.module.scss"

import cn from "clsx"

const Searchbox = () => {
  const [keyword, setKeyword] = useState("")

  function handleChange(e: any) {
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
      </div>
    </div>
  )
}

export default Searchbox
