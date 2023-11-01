import { useEffect } from "react"
import s from "./detail-product.module.scss"

import { useMediaQuery } from "@uidotdev/usehooks"
import cn from "clsx"
import { Helmet } from "react-helmet-async"
import { Link, useNavigate, useParams } from "react-router-dom"

import { useSingle } from "@/api-client/queries"
import AccordionSpecs from "@/components/accordion-specs"
import Breadcrumb from "@/components/breadcrumb"
import CallToContact from "@/components/call-to-contact"
import CardProduct from "@/components/card-product"
import Img from "@/components/custom-img"
import Video from "@/components/custom-video"
import IconPopcorn from "@/components/icons/icon-popcorn"
import LoadingScreen from "@/components/loading-screen"
import Marquee from "@/components/marquee"
import SliderProduct from "@/components/slider-product"
import SliderSpecs from "@/components/slider-specs"
import { seo } from "@/global/seo"
import { breakpoints, lineBreak } from "@/utils"

import crumbYourWay from "@/assets/img/crumb-your-way.png"
import o1 from "@/assets/img/options-1.png"
import o2 from "@/assets/img/options-2.png"
import o3 from "@/assets/img/options-3.png"
import Parallax from "@/hocs/animations/parallax"

import test from "@/assets/video/test.mp4"

const DetailProduct = () => {
  const params = useParams()
  const navigate = useNavigate()
  const isMobile = useMediaQuery(`only screen and (max-width:${breakpoints.mobile}px)`)
  const { isLoading, data } = useSingle(params.detail ?? "")

  useEffect(() => {
    if (!isLoading && !data) {
      navigate("/not-found")
    }
  }, [data, isLoading, navigate])

  return (
    <>
      <Helmet>
        <title>{`${seo.title} | ${data?.name.full ?? seo.productDetail.title}`}</title>
        <meta name="description" content={`${seo.productDetail.desc}`}></meta>
        <link rel="canonical" href={`${seo.productDetail.canonical}${data?.url ?? ""}`} />
      </Helmet>

      <Breadcrumb productName={data?.name.full} />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section className={s.info}>
            {data?.imgs && (
              <div className={s.pics}>
                {isMobile ? (
                  <div className={s.sliderC}>
                    <SliderSpecs
                      slides={data.imgs.map((item, i) => {
                        return (
                          <div className={s.slide}>
                            <div className={cn(s.imgC, "hidden-overflow")} key={i}>
                              <Img src={item.src} objectFit="cover" />
                              <Video cover={item.cover} src={test} />
                            </div>
                          </div>
                        )
                      })}
                    />
                  </div>
                ) : (
                  <>
                    {data.imgs.map((item, i) => {
                      return (
                        <div className={cn(s.imgC, "hidden-overflow")} key={i}>
                          {item.mediaType === "video" ? (
                            <Video cover={item.cover} src={item.src} />
                          ) : (
                            <Img src={item.src} objectFit="cover" />
                          )}
                        </div>
                      )
                    })}
                  </>
                )}
              </div>
            )}

            <div className={s.desc}>
              <h1>
                <span>{data?.name.ui.part1}</span>
                {data?.name.ui.part2 && <span style={{ color: data.name.ui.color }}>{data.name.ui.part2}</span>}
              </h1>
              <p>{data?.desc}</p>
              <div className={s.specs}>
                {data?.specs &&
                  data.specs.map((spec, i) => {
                    return (
                      <div key={i}>
                        <div className={s.imgC}>
                          <Img src={spec.icon} objectFit="contain" />
                        </div>
                        <small>{lineBreak(spec.name)}</small>
                      </div>
                    )
                  })}
              </div>
            </div>

            <div className={s.stickerC}>
              <Parallax speedX={0} directionY={-1} speedY={0.2}>
                <Img src={crumbYourWay} objectFit="contain" />
              </Parallax>
            </div>
          </section>

          <section className={cn(s.crumbYourWay, "flex-center")}>
            <div>
              <div className={s.imgC}>
                <Img src={o1} objectFit="contain" />
              </div>
              <p>
                Add me to your favorite <span>ice cream</span> base.
              </p>
            </div>
            <div>
              <div className={s.imgC}>
                <Img src={o2} objectFit="contain" />
              </div>
              <p>
                Add me on top of your <span>yoghurt</span> base.
              </p>
            </div>
            <div>
              <div className={s.imgC}>
                <Img src={o3} objectFit="contain" />
              </div>
              <p>
                Add me into your <span>cereal milk</span>.
              </p>
            </div>
          </section>

          <section className={s.realChocolate}>
            <div className={s.marqueeC}>
              <Marquee repeat={5} duration={30}>
                <>
                  <h3>REAL CHOCOLATE.</h3>
                  <span className={s.imgC}>
                    <IconPopcorn fill="var(--smashing-pumpkins)" />
                  </span>
                  <h3>REAL CRUNCH.</h3>
                  <span className={s.imgC}>
                    <IconPopcorn fill="var(--smashing-pumpkins)" />
                  </span>
                </>
              </Marquee>
            </div>
          </section>

          {data?.accordion && (
            <section className={s.detailedInfo}>
              <AccordionSpecs items={data.accordion} />
            </section>
          )}

          <section className={s.share}>
            {data?.media && (
              <div className={s.mediaC}>
                {data.media.mediaType === "video" ? (
                  <Video cover={data.media.cover} src={data.media.src} />
                ) : (
                  <Img src={data.media.src} />
                )}
              </div>
            )}

            <div className={s.text}>
              <h3>SHARE THE LOVE (OR NOT!)</h3>
              <p>
                Crumby is so good that you might want to keep it all to yourself. But we won't judge if you decide to
                share the Crumby love with your friends and family. Just be prepared for them to come back for more –
                Crumby tends to have that effect on people.
              </p>
            </div>
          </section>

          {data?.similarProducts && (
            <section className={cn(s.mightLoveThese, "flex-center-y")}>
              <h4>YOU MIGHT ALSO LOVE THESE...</h4>
              <div className={s.sliderC}>
                <SliderProduct
                  slides={data.similarProducts.map((product) => {
                    return (
                      <Link to={`/all-products/${product.url ?? ""}`}>
                        <CardProduct
                          img={product.img}
                          hoverImg={{ top: product.hoverImg.top, bottom: product.hoverImg.bottom }}
                          name={product.name}
                        />
                      </Link>
                    )
                  })}
                />
              </div>
            </section>
          )}
        </>
      )}

      <CallToContact />
    </>
  )
}

export default DetailProduct
