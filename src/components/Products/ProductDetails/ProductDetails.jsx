import { useNavigate, useParams } from "react-router-dom";
import {
  FlourProducts,
  honeyProducts,
  PulpProducts,
  riceProducts,
} from "../../../data/siteData";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import ProductDescription from "./ProductDescription";
import { useState } from "react";

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
            The product you're looking for doesn't exist or has been removed.
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
      {/* Breadcrumbs */}
      <Breadcrumbs
        title={product.name}
        items={[
          { label: "Products", path: "/products" },
          {
            label: category.charAt(0).toUpperCase() + category.slice(1),
            path: `/products/${category}`,
          },
          { label: product.name },
        ]}
      />

      <section className="py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px]  object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h2>
              <div className="mt-2 inline-block px-3 py-1 text-xs uppercase tracking-wide text-white bg-primary rounded-full">
                {category}
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            {product.shortdescription && (
              <div>
                <p className="text-gray-700 leading-7">
                  {product.shortdescription}
                </p>
              </div>
            )}
            {product?.description?.summary && (
              <div className="text-gray-700 leading-relaxed">
                <p>{product?.description.summary ?? ""}</p>
              </div>
            )}

            <div>
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition shadow-md hover:shadow-lg"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        {product.description && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <ProductDescription description={product.description} />
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetails;
