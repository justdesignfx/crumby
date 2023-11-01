import s from "./custom-video.module.scss"

type Props = {
  autoPlay?: boolean
  bgColor?: string
  cover?: string
  loop?: boolean
  muted?: boolean
  src: string
}

const Video = ({
  autoPlay = true,
  bgColor = "var(--white-transparent)",
  cover = "#",
  loop = true,
  muted = true,
  src = "#",
}: Props) => {
  return (
    <figure className={s.customVideo} style={{ background: bgColor }}>
      <video poster={cover} className={s.vid} muted={muted} autoPlay={autoPlay} loop={loop} playsInline>
        <source src={src} type="video/mp4" />
      </video>
      {/* {cover && (
        <div className={s.cover}>
          <Img src={cover} alt="Video Cover" />
          <div className={s.play}>play</div>
        </div>
      )} */}
    </figure>
  )
}

export default Video
