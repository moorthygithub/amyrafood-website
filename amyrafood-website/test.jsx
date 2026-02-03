import React from "react";

const ProductList = ({ products = [], title }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-3">
            Our Products
          </p>
          <h2 className="text-3xl font-semibold text-gray-900">
            Premium {title} Varieties
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 transition duration-300 ease-in-out"
              data-aos="fade-up"
            >
              {/* CARD */}
              <div className="group h-full border border-primary/20 rounded-2xl p-6 hover:shadow-lg flex flex-col">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-xl mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover transition duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-4">
                  <div className="h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
