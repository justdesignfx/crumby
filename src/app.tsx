import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import AnimationWrapper from "./hocs/animation-wrapper"
import DefaultLayout from "./layouts/default"
import About from "./pages/about"
import AllProducts from "./pages/all-products"
import Contact from "./pages/contact"
import Home from "./pages/home"
import LenisWrapper from "./hocs/lenis-wrapper"

function App() {
  return (
    <LenisWrapper>
      <AnimationWrapper>
        <DefaultLayout>
          <>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/all-products" element={<AllProducts />} />
            </Routes>
            <Footer />
          </>
        </DefaultLayout>
      </AnimationWrapper>
    </LenisWrapper>
  )
}

export default App
