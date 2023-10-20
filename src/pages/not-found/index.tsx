import s from "./not-found.module.scss"
import cn from "clsx"

const NotFound = () => {
  return (
    <div className={cn(s.notFound, "flex-center")}>
      <h1>Page Not Found</h1>
    </div>
  )
}

export default NotFound
