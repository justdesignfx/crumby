import s from "./page-transition.module.scss"

import logo from "@/assets/img/logo-crumby-c.svg"

import Img from "@/components/custom-img"

import { motion } from "framer-motion"
import cn from "clsx"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const PageTransition = ({ children }: Props) => {
  return (
    <>
      {children}
      <motion.div
        className={cn(s.overlay, "flex-center")}
        initial={{ y: "0" }}
        animate={{ y: "100%" }}
        exit={{ y: "0" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className={s.imgC}
          initial={{ y: "0" }}
          animate={{ y: "300%" }}
          exit={{ y: "0" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Img src={logo} objectFit="contain" />
        </motion.div>
      </motion.div>
    </>
  )
}

export default PageTransition
