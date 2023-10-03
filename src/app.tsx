import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"

import Footer from "./components/footer"
import Header from "./components/header"
import AnimationWrapper from "./hocs/animation-wrapper"
import LenisWrapper from "./hocs/lenis-wrapper"
import About from "./pages/about"
import AllProducts from "./pages/all-products"
import Home from "./pages/home"

function App() {
  const location = useLocation()

  return (
    <LenisWrapper>
      <AnimationWrapper>
        <div className="hidden-overflow">
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/all-products" element={<AllProducts />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </AnimationWrapper>
    </LenisWrapper>
  )
}

export default App
