import { ProductInfoData } from "../../../data/siteData";

const PulpSection = () => {
  return (
    <section className="relative py-24 bg-primary/10" id="products">
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="absolute right-0 bottom-[-28%] z-20 xl:block hidden"
      >
        <img
          src="/images/common/maize.png"
          alt="maize-image"
          style={{ width: "auto", height: "400px" }}
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
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-32 h-32 md:w-auto h-auto object-contain mx-auto mb-6"
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
      </div>
    </section>
  );
};

export default PulpSection;
