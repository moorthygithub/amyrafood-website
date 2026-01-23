import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Home/Cook/Aboutus";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
function App() {
  useEffect(() => {
    AOS.init({
      // once: true,
      duration: 1000,
      easing: "ease-out-cubic",
      offset: 120,
    });

    window.addEventListener("load", () => {
      AOS.refresh();
    });
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
