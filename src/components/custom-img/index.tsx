import cn from "clsx"

import s from "./custom-img.module.scss"

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
    <figure className={s.figure} style={{ background: bgColor }}>
      <div
        className={s.aspectRatio}
        style={{ "--aspectRatio": `${(height / width) * 100}%` } as React.CSSProperties}
      ></div>
      {lazy ? (
        <img
          data-src={src}
          className={cn(s.img, "lazy")}
          style={{
            objectFit,
            objectPosition,
          }}
          alt={alt}
        />
      ) : (
        <img
          src={src}
          className={s.img}
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
