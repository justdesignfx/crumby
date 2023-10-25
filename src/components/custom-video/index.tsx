import s from "./video.module.scss"

type Props = {
  src: string
  muted?: boolean
  loop?: boolean
  autoPlay?: boolean
  bgColor?: string
}

const Video = ({
  src = "#",
  muted = true,
  loop = true,
  autoPlay = true,
  bgColor = "var(--white-transparent)",
}: Props) => {
  return (
    <figure className={s.figure} style={{ background: bgColor }}>
      <video className={s.vid} muted={muted} autoPlay={autoPlay} loop={loop} playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </figure>
  )
}

export default Video
