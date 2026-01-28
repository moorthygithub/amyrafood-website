import { useLocation, useNavigate } from "react-router-dom";

const ProductList = ({ products = [], title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="py-20 bg-white relative">
      <div className="container">
        {location.pathname == "/products/honey" && (
          <>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="absolute right-0 top-0 rotate-180 xl:block hidden"
            >
              <img
                src="/images/honey/sidehoney.png"
                alt="sidehoney-image"
                style={{ width: "auto", height: "400px" }}
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="absolute left-0 top-0  xl:block hidden"
            >
              <img
                src="/images/honey/sidehoney.png"
                alt="sidehoney-image"
                style={{ width: "auto", height: "400px" }}
              />
            </div>
          </>
        )}
        {location.pathname == "/products/flour" && (
          <div
            data-aos="fade-up"
            data-aos-delay="zoom-in"
            className="absolute left-0 top-0 xl:block hidden"
          >
            <img
              src="/images/common/maize.png"
              alt="flour-image"
              style={{ width: "auto", height: "250px" }}
            />
          </div>
        )}
        {location.pathname == "/products/pulp" && (
          <>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="absolute left-0 top-0 xl:block hidden"
            >
              <img
                src="/images/common/offer-left.png"
                alt="burger-image"
                style={{ width: "auto", height: "200px" }}
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="absolute right-0 top-0  xl:block hidden"
            >
              <img
                src="/images/common/offer-right.png"
                alt="burger-image"
                style={{ width: "auto", height: "200px" }}
              />
            </div>
          </>
        )}
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
              key={item.id}
              // onClick={() => navigate(`/products/${item.category}/${item.id}`)}
              data-aos="fade-up"
            >
              <div className="group h-full border border-primary/20 rounded-2xl p-6 hover:shadow-lg flex flex-col hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.shortdescription}
                  </p>
                </div>

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
