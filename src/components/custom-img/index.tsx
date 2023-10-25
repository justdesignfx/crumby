import s from "./custom-img.module.scss"

import cn from "clsx"

type Props = {
  src: string
  objectFit?: "cover" | "contain"
  objectPosition?: string
  alt?: string
  lazy?: boolean
  width?: number
  height?: number
  bgColor?: string
}

const Img = ({
  src = "/",
  objectFit = "cover",
  objectPosition = "center",
  alt = "Commercial Media",
  lazy = false,
  width = 500,
  height = 500,
  bgColor = "transparent",
}: Props) => {
  // const [width, setWidth] = useState(1)
  // const [height, setHeight] = useState(1)

  // Preload Images
  // useEffect(() => {
  //   if (!src) return

  //   const img = new Image()
  //   img.src = src
  //   img.onload = () => {
  //     console.log("image width", img.naturalWidth)
  //     console.log("image height", img.naturalHeight)

  //     setWidth(img.naturalWidth)
  //     setHeight(img.naturalHeight)
  //   }
  // }, [src])

  return (
    <figure className={cn({ [s.lazy]: lazy })} style={{ background: bgColor }}>
      {lazy ? (
        <>
          <div
            className={s.aspectRatio}
            style={{ "--aspectRatio": `${(height / width) * 100}%` } as React.CSSProperties}
          ></div>
          <img
            data-src={src}
            className="lazy"
            style={{
              objectFit,
              objectPosition,
            }}
            alt={alt}
          />
        </>
      ) : (
        <img
          src={src}
          style={{
            objectFit,
            objectPosition,
          }}
          alt={alt}
        />
      )}
    </figure>
  )
}

export default Img
