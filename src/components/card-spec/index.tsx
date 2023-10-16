import s from "./cardSpec.module.scss"
import { ReactNode } from "react"

import cn from "clsx"

import Img from "@/components/custom-img"

type Props = {
  title: string | ReactNode
  img?: string
  icon: string
  bgColor: string
  fontColor: string
  fontSize: "sm" | "lg"
  video?: string
}

const CardSpec = (props: Props) => {
  return (
    <div
      className={cn(s.cardSpec, "flex-center-y")}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <h5
        style={
          {
            color: props.fontColor,
          } as React.CSSProperties
        }
        className={cn(s[props.fontSize])}
      >
        {props.title}
      </h5>
      <div className={s.imgC}>
        {props.img && <Img src={props.img} objectFit="cover" />}
        {props.video && (
          <video
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={props.video}
            playsInline
            loop
            muted
            autoPlay
          ></video>
        )}
      </div>
      <div className={s.iconC}>
        <Img src={props.icon} objectFit="contain" />
      </div>
    </div>
  )
}

export default CardSpec
