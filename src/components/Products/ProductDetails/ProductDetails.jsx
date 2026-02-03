import { useNavigate, useParams } from "react-router-dom";

import {
  FlourProducts,
  honeyProducts,
  PulpProducts,
  riceProducts,
} from "../../../data/siteData";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import ProductDescription from "./ProductDescription";

const productMap = {
  pulp: PulpProducts,
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
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-16">
        <section className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-primary/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-none w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-3xl font-semibold">!</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Product not found</h2>
              <p className="text-sm text-gray-600 mt-1">We couldn't locate that product in our catalogue.</p>
            </div>
          </div>

          <div className="text-gray-600 mb-6">
            It might have been removed, renamed, or the link could be incorrect. Try one of the options below.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-full px-4 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
              aria-label="Go back"
            >
              Go back
            </button>

            <button
              onClick={() => navigate('/products')}
              className="w-full px-4 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition"
              aria-label="View products"
            >
              View all products
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-400">If you need help, visit our Contact page or try searching from the Products listing.</div>
        </section>
      </main>
    );
  }

  return (
    <div className="pt-[105px] pb-12">
      <Breadcrumbs
        title={product.name}
        items={[
          { label: "Products", path: "/products" },
          { label: category.toUpperCase(), path: `/products/${category}` },
          { label: product.name },
        ]}
      />

      <section className="container py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* IMAGE */}
            <div className="md:col-span-6 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[520px] h-[360px] object-contain rounded-lg"
              />
            </div>

            {/* DETAILS */}
            <div className="md:col-span-6">
              <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{category.toUpperCase()}</p>

              <div className="mt-6 text-gray-600">
                <ProductDescription description={product.description} />
              </div>

              <div className="mt-8">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
