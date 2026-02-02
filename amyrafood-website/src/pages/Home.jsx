import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Aboutus from "../components/Home/Cook/Aboutus";
import ExportServices from "../components/Home/ExportServices/ExportServices";
import Newsletter from "../components/Home/Newsletter/Newsletter";
import ProductFeatures from "../components/Home/ProductFeatures/ProductFeatures";
import PulpSection from "../components/Home/PulpSection/PulpSection";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);
  return (
    <main>
      <Hero />
      <Aboutus />
      <PulpSection />
      <ProductFeatures />
      <ExportServices />
      {/* <Features /> */}
      {/* <Expert /> */}
      {/* <Gallery /> */}
      <Newsletter />
    </main>
  );
}
