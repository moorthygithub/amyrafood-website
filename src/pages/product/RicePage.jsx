import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/Products/ProductList";
import { riceProducts } from "../../data/siteData";

const RicePage = () => {
  return (
    <div className="pt-[105px]">
      <Breadcrumbs title="Rice" items={[{ label: "Rice" }]} />

      <ProductList products={riceProducts} title="Rice" />
    </div>
  );
};

export default RicePage;
