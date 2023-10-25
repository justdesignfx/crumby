import s from "./cardSpec.module.scss"
import { ReactNode } from "react"

import cn from "clsx"

import Img from "@/components/custom-img"
import Video from "@/components/custom-video"

type Props = {
  bgColor: string
  img?: string
  icon: string
  fontColor: string
  fontSize: "sm" | "lg"
  title: string | ReactNode
  video?: string
}

const CardSpec = (props: Props) => {
  return (
    <div
      className={s.cardSpec}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <h5
        className={cn(s[props.fontSize])}
        style={
          {
            color: props.fontColor,
          } as React.CSSProperties
        }
      >
        {props.title}
      </h5>

      <div className={s.bgMediaC}>
        {props.img && <Img src={props.img} objectFit="cover" />}
        {props.video && <Video src={props.video} />}
      </div>

      <div className={s.iconC}>
        <Img src={props.icon} objectFit="contain" />
      </div>
    </div>
  )
}

export default CardSpec
