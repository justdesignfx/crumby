import s from "./page-transition.module.scss"

import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const PageTransition = ({ children }: Props) => {
  return (
    <>
      {children}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className={s.overlay}
      />
    </>
  )
}

export default PageTransition
