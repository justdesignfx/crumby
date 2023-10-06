type Props = {
  fill?: string
  rotate?: number
}

const IconArrow = ({ fill = "#000", rotate = 0 }: Props) => {
  return (
    <div style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}>
      <svg width="100%" height="100%" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7L7 1L1 7" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default IconArrow
