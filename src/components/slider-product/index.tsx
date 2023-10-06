import s from "./slider-product.module.scss"
import { ReactNode } from "react"

import cn from "clsx"

import EmblaCarousel from "@/components/embla-carousel"
import IconArrow from "@/components/icons/icon-arrow"

type Props = {
  slides: ReactNode[]
}

const SliderProduct = (props: Props) => {
  return (
    <div className={s.sliderProduct}>
      <EmblaCarousel
        slides={props.slides}
        options={{
          breakpoints: {
            "(max-width: 800px)": { slidesToScroll: 1 },
          },
        }}
        nextButton={
          <button className={cn(s.nextBtn, "flex-center")}>
            <div className={cn(s.iconC, "flex-center")}>
              <IconArrow fill="var(--duqqa-brown)" rotate={90} />
            </div>
          </button>
        }
        prevButton={
          <button className={cn(s.prevBtn, "flex-center")}>
            <div className={cn(s.iconC, "flex-center")}>
              <IconArrow fill="var(--duqqa-brown)" rotate={-90} />
            </div>
          </button>
        }
      />
    </div>
  )
}

export default SliderProduct
