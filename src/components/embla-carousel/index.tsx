import s from "./embla.module.scss"

import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react"
import React, { ReactNode, useCallback, useEffect, useState } from "react"
import cn from "clsx"

import { NextButton, PrevButton } from "./buttons"

type PropType = {
  slideSpacing?: number
  slides: ReactNode[]
  options?: EmblaOptionsType
  nextButton?: React.ReactNode
  prevButton?: React.ReactNode
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div
      className={s.embla}
      style={
        {
          "--slide-spacing": `${props.slideSpacing ?? 0}px`,
        } as React.CSSProperties
      }
    >
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {slides.map((item, i) => (
            <div className={s.emblaSlide} key={i}>
              <div className={s.emblaSlideContent}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      {props.prevButton && props.nextButton && (
        <>
          <PrevButton className={cn(s.prev, "flex-center")} onClick={scrollPrev} disabled={prevBtnDisabled}>
            {props.prevButton}
          </PrevButton>

          <NextButton className={cn(s.next, "flex-center")} onClick={scrollNext} disabled={nextBtnDisabled}>
            {props.nextButton}
          </NextButton>
        </>
      )}
    </div>
  )
}

export default EmblaCarousel
