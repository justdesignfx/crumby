import s from "./card-product.module.scss"

import cn from "clsx"

import Img from "@/components/custom-img"
import { ICardProduct } from "@/global"

const CardProduct = (props: ICardProduct) => {
  return (
    <div className={cn(s.cardProduct, "cursor-pointer")}>
      <div className={cn(s.cakes, "flex-center-y")}>
        <div className={s.imgC}>
          <Img src={props.hoverImg.top} objectFit="contain" />
        </div>
        <div className={s.imgC}>
          <Img src={props.hoverImg.bottom} objectFit="contain" />
        </div>
      </div>

      <div className={cn(s.box, "flex-center-y")}>
        <div className={s.imgC}>
          <Img src={props.img} objectFit="contain" />
        </div>
      </div>

      <p>{`${props.name}`}</p>
    </div>
  )
}

export default CardProduct
