import AnimationWrapper from "@/hocs/animation-wrapper"
import LenisWrapper from "@/hocs/lenis-wrapper"
import PageTransitionWrapper from "./hocs/page-transition"

function App() {
  return (
    <LenisWrapper>
      <AnimationWrapper>
        <PageTransitionWrapper />
      </AnimationWrapper>
    </LenisWrapper>
  )
}

export default App
