import React from "react";
import Aboutus from "../components/Home/Cook/Aboutus";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductFeatures from "../components/Home/ProductFeatures/ProductFeatures";
import ExportServices from "../components/Home/ExportServices/ExportServices";

const AboutPage = () => {
  return (
    <div className="pt-[105px]">
      {" "}
      <Breadcrumbs title="About Us" items={[{ label: "About Us" }]} />
      <div className="pt-18">
        <Aboutus />
      </div>
      <ProductFeatures />
      <ExportServices />
    </div>
  );
};

export default AboutPage;
