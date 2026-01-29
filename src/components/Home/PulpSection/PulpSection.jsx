import { useNavigate } from "react-router-dom";
import { ProductInfoData } from "../../../data/siteData";

const PulpSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 bg-primary/10" id="products">
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="absolute -right-10 bottom-[-20%] z-20 xl:block hidden"
      >
        <img
          src="/images/common/maize.png"
          alt="maize-image"
          className="w-auto h-[250px]  rotate-10 transform -scale-x-100"
        />
      </div>

      <div className="container">
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {" "}
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Our Products
          </p>
          <h2 className="text-3xl font-semibold">Meet Our Culinary Experts</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <img
            src="/images/common/feedback-bg.png"
            alt="Feedback BG"
            className="
      absolute
      top-[10%]
      sm:top-[7%]
      right-0
      max-w-[65%]
      sm:max-w-[50%]
      -z-10
    "
          />
          <div data-aos="fade-up">
            <img
              src="/images/Fruits/mango.png"
              alt="Mango Pulp"
              className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl object-contain"
            />
          </div>

          <div>
            <p
              className="text-primary font-semibold uppercase tracking-widest mb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Mango Pulp
            </p>

            <p
              className="text-black/70 leading-relaxed mb-5 text-justify"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Organic mango pulp has a delicate taste and is commonly used in
              food processing industries because of its numerous health benefits
              and applications.
            </p>

            <p
              className="text-black/70 leading-relaxed mb-5 text-justify"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              We are the most preferred mango pulp and concentrate manufacturer
              and suppliers in Tamilnadu, Krishnagiri, and around the globe
              because of our superior quality and the absence of preservatives.
              Our mango pulp manufacturing facility is located in Krishnagiri
              with advanced manufacturing facilities and experienced
              professionals.
            </p>

            <p
              className="text-black/70 leading-relaxed text-justify"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              We manufacture frozen mango dices maintained at -18 to -21°C using
              sound mature, GMO-free mangoes.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              onClick={() => navigate("/products/pulp")}
              className="text-xl mt-3 font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer"
            >
              Read More →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProductInfoData.map((item, i) => (
            <div
              className="transition-all duration-700 hover:scale-105"
              key={item.id}
            >
              <div
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="p-10 text-center backdrop-blur-md bg-primary/5 rounded-3xl relative  hover:bg-primary/10"
              >
                <div
                  className="
          absolute
          inset-y-0
          right-0
          w-full sm:w-[97%]
          bg-primary/10
          rounded-l-[60%]
          h-[320px]
          z-0
        "
                />
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-32 h-32 md:w-auto md:h-auto object-contain mx-auto mb-6 "
                />

                <h3 className="text-2xl font-semibold text-black mb-3">
                  {item.title}
                </h3>

                <p className="text-black/60 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {ProductInfoData.map((item, i) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="
        group
        relative
        overflow-hidden
        rounded-3xl
        p-4 sm:p-5 lg:p-6
        bg-primary/5
        hover:bg-primary/10
        transition-all
        duration-500
        min-h-[240px] sm:min-h-[260px]
      "
            >
              <div
                className="
          absolute
          inset-y-0
          right-0
          w-full sm:w-2/3
          bg-primary/10
          rounded-l-[60%]
          z-0
        "
              />

              <div className="relative z-10 max-w-full sm:max-w-[55%]">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-black/60 mb-4 sm:mb-6">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="
            inline-flex
            items-center
            gap-2
            px-4 sm:px-6
            py-2.5 sm:py-3
            text-xs sm:text-sm
            font-semibold
            text-white
            bg-primary
            rounded-full
            hover:bg-primary
            transition
          "
                >
                  Read More
                  <span>→</span>
                </a>
              </div>

              <img
                src={item.imgSrc}
                alt={item.title}
                className="
          absolute
          right-3 sm:right-6
          bottom-3 sm:top-1/2
          sm:-translate-y-1/2
          w-24 sm:w-32 md:w-36 lg:w-44
          object-contain
          z-10
          transition-transform
          duration-500
          group-hover:scale-110
        "
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PulpSection;
