import { ReactNode } from "react"
import s from "./slider-specs.module.scss"

import EmblaCarousel from "@/components/embla-carousel"
import cn from "clsx"
import { breakpoints } from "@/utils"

type Props = {
  slides: ReactNode[]
}

const SliderSpecs = (props: Props) => {
  return (
    <div className={s.sliderSpecs}>
      <EmblaCarousel
        slides={props.slides}
        options={{
          breakpoints: {
            "(max-width:800px)": { slidesToScroll: 1 },
          },
        }}
        nextButton={<button className={cn(s.nextBtn, "flex-center")}>n</button>}
        prevButton={<button className={cn(s.prevBtn, "flex-center")}>p</button>}
      />
    </div>
  )
}

export default SliderSpecs
