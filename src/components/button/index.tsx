import { useState } from "react"
import s from "./button.module.scss"

import cn from "clsx"
import useMeasure from "react-use-measure"

type Props = {
  text: string
  size?: "sm" | "md" | "lg"
  theme?: "light" | "dark"
}

const Button = ({ text = "text", size = "md", theme = "light" }: Props) => {
  const [ref, bounds] = useMeasure({ scroll: true })
  const [hovered, setHover] = useState(false)
  const [xy, setXY] = useState([0, 0])

  return (
    <div
      className={cn(s.button, [s[size]], [s[theme]], "cursor-pointer")}
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      onMouseEnter={({ clientX, clientY }) => {
        setXY([clientX, clientY])
        setHover(true)
      }}
      onMouseLeave={({ clientX, clientY }) => {
        setXY([clientX, clientY])
        setHover(false)
      }}
      ref={ref}
    >
      <span className={s.text}>{text}</span>
      <div
        className={s.dotC}
        style={{
          left: `${xy[0] - bounds.left}px`,
          top: `${xy[1] - bounds.top}px`,
        }}
      >
        <div
          className={s.dot}
          style={{
            height: `${hovered ? bounds.width * 2.5 : 0}px`,
            width: `${hovered ? bounds.width * 2.5 : 0}px`,
            // opacity: `${hovered ? 1 : 0}`,
            // transform: `scale(${hovered ? 30 : 0})`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Button
