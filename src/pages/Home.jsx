import ContactForm from "../components/Contact/Form/ContactForm";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Aboutus from "../components/Home/Cook/Aboutus";
import Expert from "../components/Home/Expert/Expert";
import ExportServices from "../components/Home/ExportServices/ExportServices";
import Gallery from "../components/Home/Gallery/Gallery";
import Newsletter from "../components/Home/Newsletter/Newsletter";
import ProductFeatures from "../components/Home/ProductFeatures/ProductFeatures";
import PulpSection from "../components/Home/PulpSection/PulpSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Aboutus />
      <PulpSection />
      <ProductFeatures />
      <ExportServices />
      {/* <Expert /> */}
      {/* <Gallery /> */}
      <ContactForm />
      <Newsletter />
    </main>
  );
}
