import { Link } from "react-router-dom"
import s from "./breadcrumb.module.scss"

const Breadcrumb = () => {
  return (
    <div className={s.breadcrumb}>
      <Link to="/all-products" className={s.item}>
        ALL PRODUCTS
      </Link>
      <small className={s.item}> / PRODUCTNAME</small>
    </div>
  )
}

export default Breadcrumb
