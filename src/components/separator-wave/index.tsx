import s from "./separator-wave.module.scss"

type Props = {
  theme: "light" | "dark"
}

const SeparatorWave = (props: Props) => {
  return <div className={s.separatorWave}>SeparatorWave</div>
}

export default SeparatorWave
