import AnimationWrapper from "@/hocs/animation-wrapper"
import LenisWrapper from "@/hocs/lenis-wrapper"
import PageTransitionWrapper from "@/hocs/page-transition-wrapper"
import { RealViewport } from "@/components/real-viewport"
import { QueryClient, QueryClientProvider } from "react-query"
import Preloader from "./components/preloader"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LenisWrapper>
          <AnimationWrapper>
            <PageTransitionWrapper />
          </AnimationWrapper>
        </LenisWrapper>
        <RealViewport />
      </QueryClientProvider>
      <Preloader />
    </>
  )
}

export default App
