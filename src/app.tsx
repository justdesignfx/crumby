import { Route, Routes } from "react-router-dom"

import Footer from "@/components/footer"
import Header from "@/components/header"
import AnimationWrapper from "@/hocs/animation-wrapper"
import LenisWrapper from "@/hocs/lenis-wrapper"
import About from "@/pages/about"
import AllProducts from "@/pages/all-products"
import Home from "@/pages/home"
import DetailProduct from "./pages/detail-product"

function App() {
  return (
    <LenisWrapper>
      <AnimationWrapper>
        <div className="hidden-overflow">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/detail" element={<DetailProduct />} />
          </Routes>
          <Footer />
        </div>
      </AnimationWrapper>
    </LenisWrapper>
  )
}

export default App
