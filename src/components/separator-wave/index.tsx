import s from "./separator-wave.module.scss"

import cn from "clsx"

type Props = {
  alignment: "ltd" | "dtl"
}

const SeparatorWave = (props: Props) => {
  return <div className={cn(s.separatorWave, props.alignment)}></div>
}

export default SeparatorWave
