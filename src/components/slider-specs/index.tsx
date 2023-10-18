import s from "./slider-specs.module.scss"
import { ReactNode } from "react"

import cn from "clsx"

import EmblaCarousel from "@/components/embla-carousel"
import IconArrow from "@/components/icons/icon-arrow"

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
        nextButton={
          <div className={cn(s.nextBtn, "flex-center")}>
            <div className={cn(s.iconC, "flex-center")}>
              <IconArrow fill="var(--duqqa-brown)" rotate={90} />
            </div>
          </div>
        }
        prevButton={
          <div className={cn(s.prevBtn, "flex-center")}>
            <div className={cn(s.iconC, "flex-center")}>
              <IconArrow fill="var(--duqqa-brown)" rotate={-90} />
            </div>
          </div>
        }
      />
    </div>
  )
}

export default SliderSpecs
