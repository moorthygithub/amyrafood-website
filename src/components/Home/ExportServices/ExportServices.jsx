import React, { useEffect } from "react";
import { Truck, Package, Globe, Zap, MapPin, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExportServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Reliable logistics network spanning all major trade routes",
      bg: "bg-blue-50",
      border: "border-blue-300",
      iconBg: "bg-blue-500",
      accent: "bg-blue-500",
      hoverBg: "hover:bg-blue-100",
      delay: 0,
    },
    {
      icon: Package,
      title: "Export Packaging",
      description:
        "Industry-compliant packaging ensuring safe international transit",
      bg: "bg-green-50",
      border: "border-green-300",
      iconBg: "bg-green-500",
      accent: "bg-green-500",
      hoverBg: "hover:bg-green-100",
      delay: 100,
    },
    {
      icon: Globe,
      title: "Market Access",
      description:
        "Strategic UAE hub serving Middle East and global destinations",
      bg: "bg-purple-50",
      border: "border-purple-300",
      iconBg: "bg-purple-500",
      accent: "bg-purple-500",
      hoverBg: "hover:bg-purple-100",
      delay: 200,
    },
    {
      icon: Zap,
      title: "Bulk Supply",
      description: "Large-volume orders for distributors worldwide",
      bg: "bg-orange-50",
      border: "border-orange-300",
      iconBg: "bg-orange-500",
      accent: "bg-orange-500",
      hoverBg: "hover:bg-orange-100",
      delay: 300,
    },
  ];

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
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={service.delay}
                className="group"
              >
                <div
                  className={`group ${service.bg} ${service.hoverBg} border-2 ${service.border} rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Accent Line */}
                  <div
                    className={`mt-6 h-1 w-12 ${service.accent} rounded-full transition-all duration-300 group-hover:w-full`}
                  />
                </div>
              </div>
            );
          })}
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
        <div
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
        </div>
      </div>
    </section>
  );
}
