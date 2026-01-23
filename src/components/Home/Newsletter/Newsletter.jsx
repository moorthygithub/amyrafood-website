import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden md:py-20">
      <div className="container">
        <div className="bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="md:col-span-7">
            <div
              className="m-5 sm:m-10 lg:ml-32 lg:mt-20 lg:mb-20"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p
                className="text-lg font-normal text-white mb-3 tracking-widest"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                NEWSLETTER
              </p>

              <h2
                className="text-white mb-8"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                Subscribe our <br /> newsletter.
              </h2>

              <div data-aos="fade-up" data-aos-delay="400">
                <div className="relative flex flex-row-reverse shadow-fi rounded-full">
                  <input
                    type="email"
                    className="pl-4 pr-16 py-4 text-sm w-full bg-white text-black rounded-full focus:outline-hidden"
                    placeholder="john.doe@gmail.com"
                    autoComplete="off"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button
                      type="submit"
                      className="p-1 bg-gray-900 hover:scale-110 transition-transform duration-300 rounded-full"
                    >
                      <ArrowRight size={28} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-5 relative hidden md:block"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="/images/Newsletter/soup.webp"
              alt="soup"
              width="626"
              height="602"
              className="-mt-24"
            />

            <img
              src="/images/Newsletter/onion.webp"
              alt="onion"
              width="300"
              height="122"
              className="absolute top-[78%]"
              data-aos="zoom-in"
              data-aos-delay="300"
            />

            <img
              src="/images/Newsletter/lec.webp"
              alt="lettuce"
              width="300"
              height="122"
              className="absolute top-[30%] right-[-23%]"
              data-aos="zoom-in"
              data-aos-delay="450"
            />

            <img
              src="/images/Newsletter/yellow.svg"
              alt="yellow"
              width="59"
              height="59"
              className="absolute bottom-[10%] left-0"
              data-aos="fade-up"
              data-aos-delay="600"
            />

            <img
              src="/images/Newsletter/blue.svg"
              alt="blue"
              width="25"
              height="25"
              className="absolute bottom-[20%] right-[20%]"
              data-aos="fade-up"
              data-aos-delay="700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
