import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const AnimationWrapper = ({ children }: Props) => {
  return <div className="hidden-overflow">{children}</div>
}

export default AnimationWrapper
