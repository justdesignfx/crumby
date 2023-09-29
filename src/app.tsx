import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import AnimationWrapper from "./hocs/animation-wrapper"
import About from "./pages/about"
import Home from "./pages/home"
import Contact from "./pages/contact"
import AllProducts from "./pages/all-products"

function App() {
  return (
    <AnimationWrapper>
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
    </AnimationWrapper>
  )
}

export default App
