import AnimationWrapper from "@/hocs/animation-wrapper"
import LenisWrapper from "@/hocs/lenis-wrapper"
import PageTransitionWrapper from "@/hocs/page-transition-wrapper"
import { RealViewport } from "@/components/real-viewport"

function App() {
  return (
    <>
      <LenisWrapper>
        <AnimationWrapper>
          <PageTransitionWrapper />
        </AnimationWrapper>
      </LenisWrapper>
      <RealViewport />
    </>
  )
}

export default App
