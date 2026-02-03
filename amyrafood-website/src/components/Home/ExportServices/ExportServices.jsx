import React from "react";
import { Exportservices } from "../../../data/siteData";

export default function ExportServices() {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {" "}
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            COMPREHENSIVE EXPORT SOLUTIONS
          </p>
          <h2 className="text-3xl font-semibold">
            End-to-end support for international food trade with seamless
            logistics and market expertise
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-6 my-10">
          {Exportservices.map((item, i) => (
            <div
              className="hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer"
              key={i}
            >
              <div
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                className="p-8 relative rounded-3xl bg-gradient-to-b from-primary/10 to-white shadow-md"
              >
                <p className="text-2xl text-black font-semibold text-center">
                  {item.title}
                </p>

                <p className="text-base font-normal text-black/50 text-center mt-2 leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "150+", label: "Countries Served", delay: 0 },
            { number: "24/7", label: "Logistics Support", delay: 100 },
            { number: "99.8%", label: "On-Time Delivery", delay: 200 },
          ].map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={stat.delay}
              className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-gradient-to-r from-primary/50 to-primary/10 rounded-2xl p-12 border border-primary text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Exporting?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us for comprehensive export solutions tailored to your
            business needs
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary/80 text-white font-semibold rounded-xl hover:bg-primary hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Send className="w-5 h-5" />
            Start Exporting With Us
          </button>
        </div> */}
      </div>
    </section>
  );
}
