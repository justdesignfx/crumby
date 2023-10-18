import { forwardRef } from "react"
import s from "./page-transition.module.scss"

import cn from "clsx"

import logo from "@/assets/img/logo-crumby-c.svg"
import Img from "@/components/custom-img"

export type Ref = HTMLDivElement

const PageTransition = forwardRef<Ref>((_, ref) => (
  <div className={cn(s.pageTransition, "flex-center")} ref={ref}>
    <div className={s.imgC}>
      <Img src={logo} objectFit="contain" />
    </div>
  </div>
))

export default PageTransition