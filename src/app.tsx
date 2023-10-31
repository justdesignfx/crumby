import Preloader from "@/components/preloader"
import ErrorWrapper from "@/hocs/error-wrapper"
import LenisWrapper from "@/hocs/lenis-wrapper"
import PageTransitionWrapper from "@/hocs/page-transition-wrapper"
import { HelmetProvider } from "react-helmet-async"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ErrorWrapper>
            <LenisWrapper>
              <PageTransitionWrapper />
            </LenisWrapper>
          </ErrorWrapper>
          {/* <RealViewport /> */}
        </QueryClientProvider>
      </HelmetProvider>

      <Preloader />
    </>
  )
}

export default App
