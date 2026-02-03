import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { heroSlides } from "../../data/siteData";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <section id="home-section" className="bg-gray-50">
      <div className="container xl:pt-7 pt-16">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          onSwiper={() => setSwiperReady(true)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[600px] relative">
                {/* TEXT */}
                <div
                  className={`lg:col-span-6 px-4 lg:px-0 transition-all duration-1000 ease-out`}
                >
                  <h1
                    className={`font-semibold mb-5 text-black text-3xl lg:text-5xl xl:text-7xl leading-snug sm:leading-9 lg:leading-[1.2] text-center lg:text-start transition-all duration-1000 ease-out
                      ${
                        swiperReady && activeIndex === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`text-black/60 text-base sm:text-lg lg:text-xl font-normal mb-10 lg:text-start text-center transition-all duration-1000 ease-out
                      ${
                        swiperReady && activeIndex === index
                          ? "opacity-100 translate-y-0 delay-200"
                          : "opacity-0 translate-y-6"
                      }`}
                  >
                    {slide.description}
                  </p>

                  <div
                    className={`flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start transition-all duration-1000 ease-out
                      ${
                        swiperReady && activeIndex === index
                          ? "opacity-100 translate-y-0 delay-400"
                          : "opacity-0 translate-y-6"
                      }`}
                  >
                    <Link to="/#products">
                      <button className="text-lg sm:text-xl cursor-pointer font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent transition duration-300">
                        View Products
                      </button>
                    </Link>

                    <Link to="/contact">
                      <button className="text-lg sm:text-xl cursor-pointer border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary transition duration-300">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>

                {/* IMAGE */}
                <div
                  className={`lg:col-span-6 flex justify-center relative mt-10 lg:mt-0 transition-all duration-1000 ease-out
                    ${
                      swiperReady && activeIndex === index
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 translate-x-10 translate-y-10"
                    }`}
                >
                  <div
                    className={`flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute shadow-lg transition-all duration-1000 ease-out
                      ${
                        swiperReady && activeIndex === index
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-75 translate-y-4"
                      }`}
                  >
                    <img
                      src="/images/Logo/Logo.png"
                      alt="logo"
                      width={68}
                      height={68}
                    />
                    <p className="text-base font-medium leading-tight">
                      {slide.subcontent[0]}
                      <br />
                      {slide.subcontent[1]}
                    </p>{" "}
                  </div>

                  <img
                    src={slide.image}
                    alt="hero"
                    className="max-w-full h-auto transition-all duration-1000 ease-out"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
