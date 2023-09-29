import s from "./cardSpec.module.scss"

import Img from "../custom-img"

import cn from "clsx"

type Props = {
  title: string
  img: string
  icon: string
  bgColor: string
  fontColor: string
  fontSize: {
    m: string
    d: string
  }
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
            "--font-size-d": `desktop-vw(${props.fontSize.d}px)`,
            "--font-size-m": `mobile-vw(${props.fontSize.m}px)`,
            color: props.fontColor,
          } as React.CSSProperties
        }
      >
        {props.title}
      </h5>
      <div className={s.imgC}>
        <Img src={props.img} objectFit="cover" />
      </div>
      <div className={s.iconC}>
        <Img src={props.icon} objectFit="contain" />
      </div>
    </div>
  )
}

export default CardSpec
