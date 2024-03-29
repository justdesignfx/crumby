import s from "./slider-product.module.scss"
import { ReactNode } from "react"

import cn from "clsx"

import EmblaCarousel from "@/components/embla-carousel"
import IconArrow from "@/components/icons/icon-arrow"
import { useMediaQuery } from "@uidotdev/usehooks"
import { breakpoints } from "@/utils"

type Props = {
  slides: ReactNode[]
}

const SliderProduct = (props: Props) => {
  const isMobile = useMediaQuery(`only screen and (max-width:${breakpoints.mobile}px)`)

  return (
    <div className={s.sliderProduct}>
      <EmblaCarousel
        slideSpacing={22}
        slides={props.slides}
        options={{
          breakpoints: {
            "(max-width: 800px)": { slidesToScroll: 1 },
          },
        }}
        nextButton={
          isMobile && (
            <div className={cn(s.nextBtn, "flex-center")}>
              <div className={cn(s.iconC, "flex-center")}>
                <IconArrow fill="var(--duqqa-brown)" rotate={90} />
              </div>
            </div>
          )
        }
        prevButton={
          isMobile && (
            <div className={cn(s.prevBtn, "flex-center")}>
              <div className={cn(s.iconC, "flex-center")}>
                <IconArrow fill="var(--duqqa-brown)" rotate={-90} />
              </div>
            </div>
          )
        }
      />
    </div>
  )
}

export default SliderProduct
