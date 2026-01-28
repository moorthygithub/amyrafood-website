import { Award, Package, Settings, ShieldCheck } from "lucide-react";
import { ProductFeaturesData } from "../../../data/siteData";

const iconMap = {
  award: Award,
  shield: ShieldCheck,
  package: Package,
  settings: Settings,
};

const ProductFeatures = () => {
  return (
    <section
      className="relative min-h-screen pt-24 overflow-hidden bg-white"
      id="why-us"
    >
      <style>{`
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }


        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <img
        src="/images/common/product-shape1.png"
        alt=""
        className="
    absolute
    left-0
    top-0
    w-48 sm:w-64 md:w-72
    pointer-events-none
    z-0
  "
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-white to-amber-50/15 pointer-events-none"></div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {" "}
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
              Why Choose Us?
            </p>
            <h2 className="text-3xl font-semibold">
              With over a decade of experience, we've perfected the art of
              delivering the freshest, highest quality fruits straight to your
              doorstep
            </h2>
          </div>
        </div>

        {/* Experience Stats */}
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                10+
              </p>
              <p className="text-gray-600 font-medium mt-2 text-sm md:text-base">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                50K+
              </p>
              <p className="text-gray-600 font-medium mt-2 text-sm md:text-base">
                Happy Customers
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                99%
              </p>
              <p className="text-gray-600 font-medium mt-2 text-sm md:text-base">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ProductFeaturesData.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={i}
                style={{
                  animation: `fadeInUp 0.7s ease-out ${i * 0.12}s both`,
                }}
              >
                <div className="group h-full p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600 transition-all duration-500 group-hover:from-orange-200 group-hover:to-amber-200 group-hover:scale-110">
                      <Icon size={32} strokeWidth={1.5} className="block" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        {/* <div className="mt-20 p-10 md:p-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl text-center shadow-md hover:shadow-lg transition-shadow duration-500">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h3>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have trusted us with their
            fresh fruit needs for over a decade
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-3xl">
                ⭐
              </span>
            ))}
          </div>
          <p className="text-gray-600 font-semibold">
            4.9/5 - Over 10,000 verified reviews
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ProductFeatures;
