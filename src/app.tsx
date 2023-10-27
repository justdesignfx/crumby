import LenisWrapper from "@/hocs/lenis-wrapper"
import PageTransitionWrapper from "@/hocs/page-transition-wrapper"
import { HelmetProvider } from "react-helmet-async"
import { QueryClient, QueryClientProvider } from "react-query"
import Preloader from "./components/preloader"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <LenisWrapper>
            <PageTransitionWrapper />
          </LenisWrapper>
          {/* <RealViewport /> */}
        </QueryClientProvider>
      </HelmetProvider>

      <Preloader />
    </>
  )
}

export default App
