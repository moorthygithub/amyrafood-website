import { CheckCircle, Loader, Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { contactInfo } from "../../../data/siteData";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phnumber: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      fullname: "",
      email: "",
      phnumber: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      // const response = await fetch(
      //   "https://formsubmit.co/ajax/amyraglobal786@gmail.com",
      //   {
      //     method: "POST",
      //     headers: { "Content-type": "application/json" },
      //     body: JSON.stringify({
      //       FullName: formData.fullname,
      //       Email: formData.email,
      //       PhoneNo: formData.phnumber,
      //       Subject: formData.subject,
      //       Message: formData.message,
      //     }),
      //   }
      // );

      const data = true;
      if (data.success) {
        setShowThanks(true);
        resetForm();
        setTimeout(() => {
          setShowThanks(false);
        }, 5000);
      }
    } catch (error) {
      console.log("Error:", error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="relative w-full pb-20 bg-white overflow-hidden pt-[105px]">
      <Breadcrumbs title="Contact Us" items={[{ label: "Contact Us" }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {" "}
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Let's Get In Touch
          </p>
          <h2 className="text-3xl font-semibold">
            {" "}
            We're here to help. Reach out to us anytime.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={info.delay}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.content}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="lg:col-span-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phnumber"
                      value={formData.phnumber}
                      onChange={handleChange}
                      placeholder="+971 58 8226 177"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Export Inquiry"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || loader}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    !isFormValid || loader
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-primary/80 text-white hover:bg-primary hover:shadow-lg hover:scale-105"
                  }`}
                >
                  {loader ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {showThanks && (
                <div className="mt-6 p-4 bg-primary/40 border-2 border-primary rounded-xl flex items-center gap-3 animate-bounce">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Success!</p>
                    <p className="text-green-800 text-sm">
                      Thanks for reaching out. We'll get back to you soon!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="zoom-in"
          className="text-center bg-gradient-to-r from-primary/50 rounded-3xl p-8 border-2 border-primary"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Need immediate assistance?
          </h3>
          <p className="text-gray-600 mb-6">
            Call us directly at{" "}
            <span className="font-semibold text-primary">+97158822 8177</span>
          </p>
          <p className="text-sm text-gray-500">
            Available Monday - Friday, 9:00 AM - 6:00 PM (GST)
          </p>
        </div>
      </div>
    </section>
  );
}
