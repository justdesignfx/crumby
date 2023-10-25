import { useEffect, useRef } from "react"
import s from "./preloader.module.scss"

import cn from "clsx"

import logo from "@/assets/img/logo-crumby-c.svg"

import Img from "@/components/custom-img"
import gsap from "gsap"

const Preloader = () => {
  const ref = useRef(null)
  //   const [loading, setLoading] = useState(true)

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 0,
      delay: 2,
    })
  }, [])

  return (
    <div className={cn(s.preloader, "flex-center", "hidden-overflow")} ref={ref}>
      <div className="flex-center">
        <div className={s.imgC}>
          <Img src={logo} objectFit="contain" />
        </div>
      </div>
    </div>
  )
}

export default Preloader
