import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/Products/ProductList";
import { FlourProducts } from "../../data/siteData";

const FlourPage = () => {
  return (
    <div className="pt-[105px]">
      <Breadcrumbs title="Flour" items={[{ label: "Flour" }]} />

      <ProductList products={FlourProducts} title="Flour" />
    </div>
  );
};

export default FlourPage;
