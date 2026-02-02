import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/Products/ProductList";
import { honeyProducts, riceProducts } from "../../data/siteData";

const HoneyPage = () => {
  return (
    <div className="pt-[105px]">
      <Breadcrumbs title="Honey" items={[{ label: "Honey" }]} />

      <ProductList products={honeyProducts} title="Honey" />
    </div>
  );
};

export default HoneyPage;
