import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

import ContactForm from "./components/Contact/Form/ContactForm";
import AboutPage from "./pages/About";
import Home from "./pages/Home";
import RicePage from "./pages/product/RicePage";
import HoneyPage from "./pages/product/HoneyPage";
import FlourPage from "./pages/product/FlourPage";
import PulpPage from "./pages/product/PulpPage";
import ScrollToPageTop from "./components/ScrollToPageTop";

function App() {
  useEffect(() => {
    AOS.init({
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
      <ScrollToPageTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products/rice" element={<RicePage />} />
          <Route path="/products/pulp" element={<PulpPage />} />
          <Route path="/products/honey" element={<HoneyPage />} />
          <Route path="/products/flour" element={<FlourPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
