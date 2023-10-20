type Props = {
  fill?: string
  rotate?: number
}

const IconArrowTriangle = ({ fill = "#000", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.126875 1.0297L0.205625 1.11725L6.15562 7.64148C6.35687 7.86243 6.65875 8 6.99562 8C7.3325 8 7.63438 7.85826 7.83563 7.64148L13.7812 1.12976L13.8819 1.02137C13.9562 0.917144 14 0.792079 14 0.658677C14 0.295988 13.6762 0 13.2737 0H0.72625C0.32375 0 0 0.295988 0 0.658677C0 0.796248 0.0481251 0.925482 0.126875 1.0297Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconArrowTriangle
