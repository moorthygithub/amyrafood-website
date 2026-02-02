import { useNavigate, useParams } from "react-router-dom";

import {
  FlourProducts,
  honeyProducts,
  riceProducts,
} from "../../../data/siteData";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import ProductDescription from "./ProductDescription";

const productMap = {
  flour: FlourProducts,
  rice: riceProducts,
  honey: honeyProducts,
};

const ProductDetails = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const products = productMap[category] || [];
  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center border border-primary/30">
          <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-primary/15">
            <span className="text-primary text-3xl font-bold">!</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>

          <p className="text-gray-600 mb-6">
            The product you’re looking for doesn’t exist or has been removed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition cursor-pointer"
            >
              Go Back
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition cursor-pointer"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[105px]">
      <Breadcrumbs
        title={product.name}
        items={[
          { label: "Products", path: "/products" },
          { label: category.toUpperCase(), path: `/products/${category}` },
          { label: product.name },
        ]}
      />

      <section className="container py-16 text-center">
        {/* BIG TITLE */}
        {/* <h1 className="text-4xl font-bold mb-8">{product.name}</h1> */}
  
        {/* IMAGE CENTER */}
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto w-full max-w-xl h-[360px] object-contain rounded-2xl mb-10"
        />

        {/* GRAY TITLE */}
        <h2 className="text-2xl font-semibold text-gray-500 mb-8">
          {product.name}
        </h2>

        {/* DESCRIPTION */}
        <div className="max-w-3xl mx-auto text-left">
          <ProductDescription description={product.description} />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
