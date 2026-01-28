import { FeaturesData } from "../../data/siteData";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-lg font-normal tracking-widest uppercase">
            Why Choose Us 
          </p>
          <h2 className="font-semibold lg:max-w-[60%] mx-auto mt-3">
            Experience More Than Just a Meal
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-6 mt-24">
          {FeaturesData.map((item, i) => (
            <div className="hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer">
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`} 
                className="p-8 relative rounded-3xl bg-gradient-to-b from-primary/10 to-white shadow-md"
              >
                <div className="rounded-full flex justify-center absolute -top-[50%] sm:top-[-40%] md:top-[-55%] lg:top-[-35%] left-[0%]">
                  <img
                    src={item.imgSrc}
                    alt={item.heading}
                    className="w-[510px] h-auto"
                  />
                </div>

                <p className="text-2xl text-black font-semibold text-center mt-16">
                  {item.heading}
                </p>

                <p className="text-base font-normal text-black/50 text-center mt-2 leading-6">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
