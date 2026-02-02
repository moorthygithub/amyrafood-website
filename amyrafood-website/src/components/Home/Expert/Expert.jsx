import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ExpertChiefData } from "../../../data/siteData";

const Expert = () => {
  return (
    <section className="bg-primary/10 py-16">
      <div className="container">
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000" 
        >
          {" "}
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Our Chefs
          </p>
          <h2 className="text-3xl font-semibold">Meet Our Culinary Experts</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={1000}
          breakpoints={{
            1200: { slidesPerView: 3, spaceBetween: 30 },
            800: { slidesPerView: 2, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {ExpertChiefData.map((items, i) => (
            <SwiperSlide key={i}>
              <div className="m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl relative transition-transform duration-700 ease-in-out hover:scale-105">
                <div className="relative">
                  <img
                    src={items.imgSrc}
                    alt={items.name}
                    className="inline-block m-auto w-auto"
                  />
                  <div className="absolute top-[75%] -right-[18%]">
                    <img
                      src="/images/Expert/Linkedin.svg"
                      alt="linkedin"
                      className="w-[270px] h-[180px]"
                    />
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-semibold text-black">
                    {items.name}
                  </h3>
                  <h4 className="text-lg font-normal text-black/50 opacity-50">
                    {items.profession}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Expert;
