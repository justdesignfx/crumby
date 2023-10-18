import { useLocation, useOutlet } from "react-router-dom"
import { CSSTransition, SwitchTransition } from "react-transition-group"

import Footer from "@/components/footer"
import Header from "@/components/header"
import AnimationWrapper from "@/hocs/animation-wrapper"
import LenisWrapper from "@/hocs/lenis-wrapper"
import { routes } from "./global/routes"
import gsap from "gsap"
import PageTransition from "./components/page-transition"
import { useLayoutEffect, useRef } from "react"

function App() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  const ptRef = useRef(null)

  useLayoutEffect(() => {
    gsap.set(ptRef.current, {
      y: "100%",
    })
  }, [])

  const onEnter = () => {
    gsap.to(ptRef.current, {
      delay: 0.6,
      duration: 0.5,
      ease: "power1.InOut",
      y: "100%",
    })
  }

  const onExit = () => {
    gsap.to(ptRef.current, {
      ease: "power1.InOut",
      duration: 0.5,
      y: 0,
    })
  }

  return (
    <LenisWrapper>
      <AnimationWrapper>
        <PageTransition ref={ptRef} />
        <div className="hidden-overflow">
          <Header />
          {/* <Routes>
            {routes.map(({ path, Element }) => (
              <Route key={path} exact path={path}>
                {({ name }) => (
                  <CSSTransition
                    in={name != null}
                    timeout={1200}
                    classNames="page"
                    onExit={onExit}
                    onEntering={onEnter}
                    unmountOnExit
                  >
                    <div className="page">
                      <Element />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Routes> */}

          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef as React.RefObject<HTMLElement>}
              timeout={600}
              classNames="page"
              unmountOnExit
              onEnter={onEnter}
              onExit={onExit}
            >
              <div ref={nodeRef as React.RefObject<HTMLDivElement>} className="page">
                {currentOutlet}
              </div>
            </CSSTransition>
          </SwitchTransition>
          <Footer />
        </div>
      </AnimationWrapper>
    </LenisWrapper>
  )
}

export default App
