import s from "./button.module.scss"

import cn from "clsx"

type Props = {
  text: string
  size?: "sm" | "md" | "lg"
  theme?: "light" | "dark"
}

const Button = ({ text = "text", size = "md", theme = "light" }: Props) => {
  return (
    <div className={cn(s.button, [s[size]], [s[theme]])}>
      <span>{text}</span>
    </div>
  )
}

export default Button
