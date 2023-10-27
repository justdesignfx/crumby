import { Link } from "react-router-dom"
import cn from "clsx"

import s from "./breadcrumb.module.scss"

type Props = {
  productName?: string
}

const Breadcrumb = (props: Props) => {
  return (
    <section className={s.breadcrumb}>
      <Link to="/all-products" className={cn(s.item, { [s.hollow]: props.productName })}>
        ALL PRODUCTS
        {props.productName && <span className={s.separator}>/</span>}
      </Link>
      {props.productName && <small className={s.item}>{props.productName}</small>}
    </section>
  )
}

export default Breadcrumb
