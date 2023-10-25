import cn from "clsx"
import s from "./loading-screen.module.scss"

import LoadingSpinner from "@/components/loading-spinner"

const LoadingScreen = () => {
  return (
    <div className={cn(s.loadingScreen, "flex-center")}>
      <LoadingSpinner />
    </div>
  )
}

export default LoadingScreen
