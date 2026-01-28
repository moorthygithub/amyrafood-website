import { useLocation } from "react-router-dom";

const Aboutus = () => {
  const location = useLocation();
  return (
    <section className="relative pt-0" id="aboutus">
      <div className="container px-4">
        {location.pathname != "/about" && (
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="absolute right-0 bottom-[-28%] xl:block hidden"
          >
            <img
              src="/images/common/orange-right.png"
              alt="burger-image"
              style={{ width: "auto", height: "400px" }}
            />
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 gap-x-5">
          <div className="lg:col-span-6 flex justify-center ">
            <div
              className="
    relative
    z-[1]
    flex
    items-start
    max-w-xl
    pr-[10%]
    sm:pr-0
  "
            >
              {/* FIRST IMAGE */}
              <img
                src="/images/common/feedback-right.jpg"
                alt="Feedback"
                className="
      w-[65%]
      sm:w-[50%]
      mt-[20%]
      sm:mt-[26%]
      relative
      z-10
    "
              />

              {/* LAST IMAGE */}
              <img
                src="/images/common/feedback-right.png"
                alt="Feedback"
                className="
      w-[70%]
      sm:w-[65%]
      -ml-[35%]
      sm:-ml-[30%]
      relative
      z-1
    "
              />

              {/* BACKGROUND IMAGE */}
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
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center"
            >
              About Us
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="lg:text-start text-center font-semibold text-3xl sm:text-4xl lg:text-5xl mb-6"
            >
              Amyra Prime Trading LLC
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-black/50 text-lg font-normal mb-4 text-justify"
            >
              Amyra Prime Trading LLC is a UAE-headquartered international food
              ingredients supplier, engaged in the sourcing, trading, and
              distribution of high-quality agricultural and food products across
              global markets. Strategically located in the United Arab Emirates,
              the company benefits from one of the world's most advanced trading
              and logistics hubs, enabling efficient movement of goods from
              origin to destination.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-black/50 text-lg font-normal mb-4 text-justify"
            >
              The company operates with a strong commitment to quality,
              consistency, and supply chain reliability, serving food
              manufacturers, distributors, wholesalers, and food service
              industries worldwide.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-black/50 text-lg font-normal mb-10 text-justify"
            >
              Amyra Prime Trading LLC connects trusted producers from various
              regions with customers across international markets, ensuring
              food-grade products that meet commercial and regulatory standards.
            </p>

            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
