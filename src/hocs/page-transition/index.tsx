import { useLayoutEffect, useRef } from "react"

import { useLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import { useLocation, useOutlet } from "react-router-dom"
import { CSSTransition, SwitchTransition } from "react-transition-group"

import Footer from "@/components/footer"
import Header from "@/components/header"
import PageTransition from "@/components/page-transition"
import { routes } from "@/global/routes"

const PageTransitionWrapper = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  const ptRef = useRef(null)
  const lenis = useLenis()

  useLayoutEffect(() => {
    gsap.set(ptRef.current, {
      yPercent: -100,
    })
  }, [])

  const onEnter = () => {
    lenis.scrollTo("top", {
      immediate: true,
      lock: true,
    })

    gsap.to(ptRef.current, {
      delay: 0.6,
      duration: 1,
      ease: "expo.out",
      yPercent: -100,
    })
  }

  const onExit = () => {
    gsap.to(ptRef.current, {
      ease: "expo.out",
      duration: 1,
      yPercent: 0,
    })
  }

  return (
    <>
      <Header />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef as React.RefObject<HTMLElement>}
          timeout={1000}
          unmountOnExit
          onEnter={onEnter}
          onExit={onExit}
        >
          <div ref={nodeRef as React.RefObject<HTMLDivElement>}>{currentOutlet}</div>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
      <PageTransition ref={ptRef} />
    </>
  )
}

export default PageTransitionWrapper
