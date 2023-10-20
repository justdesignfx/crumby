type Props = {
  fill?: string
  rotate?: number
}

const IconMagnifyingGlass = ({ fill = "#000", rotate = 0 }: Props) => {
  return (
    <div
      className="flex-center"
      style={{ transformOrigin: "center", transform: `rotate(${rotate}deg)`, height: "100%", width: "100%" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.46992 8.63464L12 11.1641L11.1641 12L8.63464 9.46992C7.69346 10.2244 6.52279 10.6348 5.31653 10.6331C2.38181 10.6331 0 8.25126 0 5.31653C0 2.38181 2.38181 0 5.31653 0C8.25126 0 10.6331 2.38181 10.6331 5.31653C10.6348 6.52279 10.2244 7.69346 9.46992 8.63464Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconMagnifyingGlass
