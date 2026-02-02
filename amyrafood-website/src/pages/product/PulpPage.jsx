import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductList from "../../components/Products/ProductList";
import { PulpProducts } from "../../data/siteData";

const PulpPage = () => {
  return (
    <div className="pt-[105px] min-h-[80vh] bg-gray-50">
      <Breadcrumbs title="Pulp" items={[{ label: "Pulp" }]} />

      <ProductList products={PulpProducts} title="Pulp" />
    </div>
  );
};

export default PulpPage;
