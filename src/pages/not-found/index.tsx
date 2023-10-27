import s from "./not-found.module.scss"
import cn from "clsx"
import { Helmet } from "react-helmet-async"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={cn(s.notFound, "flex-center")}>
        <h1>Page Not Found</h1>
      </div>
    </>
  )
}

export default NotFound
