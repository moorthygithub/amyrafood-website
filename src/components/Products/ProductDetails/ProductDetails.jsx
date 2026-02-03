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
              className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition"
            >
              Go Back
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition"
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

      {/* ===== Middle Section UI Upgraded ===== */}

      <section className="container py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

            {/* IMAGE LEFT */}
            <div className="md:col-span-7 flex justify-center">
              <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-gray-50 shadow-sm border border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[520px] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* TEXT RIGHT */}
            <div className="md:col-span-5">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h2>

              <div className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                {category}
              </div>

              <div className="mt-5 h-px bg-gray-100" />

              {/* Preview text safely */}
              <div className="mt-6">
                <p className="text-gray-700 leading-7">

                  {typeof product.description === "string" ? (
                    product.description.length > 260
                      ? `${product.description.slice(0, 260).trim()}...`
                      : product.description
                  ) : product.description?.summary ? (
                    product.description.summary.length > 260
                      ? `${product.description.summary.slice(0, 260).trim()}...`
                      : product.description.summary
                  ) : (
                    ""
                  )}

                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Scroll down to read full details
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition shadow-md"
                >
                  Enquire Now
                </button>
              </div>

            </div>
          </div>

          {/* READ MORE BELOW */}

          <div className="mt-10">
            <details className="group border border-gray-100 rounded-2xl p-6 shadow-sm bg-white">

              <summary className="cursor-pointer list-none flex justify-between items-center text-primary font-semibold">

                <span>Read more</span>

                <svg
                  className="w-5 h-5 transition-transform duration-200 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </summary>

              <div className="mt-5 text-gray-700 leading-7">
                <ProductDescription description={product.description} />
              </div>

            </details>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
