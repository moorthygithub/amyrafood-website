import React from "react";
import Aboutus from "../components/Home/Cook/Aboutus";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const AboutPage = () => {
  return (
    <div className=" pt-[105px]">
      {" "}
      <Breadcrumbs title="About Us" items={[{ label: "About Us" }]} />
      <Aboutus />
    </div>
  );
};

export default AboutPage;
