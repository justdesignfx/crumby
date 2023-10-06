import s from "./slider-product.module.scss"

import { ReactNode } from "react"
import cn from "clsx"

import EmblaCarousel from "@/components/embla-carousel"

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
        nextButton={<button className={cn(s.nextBtn, "flex-center")}>n</button>}
        prevButton={<button className={cn(s.prevBtn, "flex-center")}>p</button>}
      />
    </div>
  )
}

export default SliderProduct
