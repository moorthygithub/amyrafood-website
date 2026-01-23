import { useEffect, useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phnumber: "",
    outlet: "",
    time: "",
    people: "",
    Message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== "",
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
  const reset = () => {
    formData.fullname = "";
    formData.email = "";
    formData.phnumber = "";
    formData.outlet = "";
    formData.time = "";
    formData.people = "";
    formData.Message = "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        FullName: formData.fullname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Outlet: formData.outlet,
        Time: formData.time,
        People: formData.people,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
          setShowThanks(true);
          reset();

          setTimeout(() => {
            setShowThanks(false);
          }, 5000);
        }

        reset();
      })
      .catch((error) => {
        setLoader(false);
        console.log(error.message);
      });
  };
  return (
    <section id="reserve" className="scroll-mt-20">
      <div className="container">
        <p
          className="text-primary text-lg font-normal mb-3 tracking-widest uppercase text-center"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Reservation
        </p>

        <h2
          className="mb-9 font-bold tracking-tight text-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Dine With Us
        </h2>

        <div className="relative border px-6 py-2 rounded-3xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap w-full m-auto justify-between"
          >
            <div className="sm:flex gap-6 w-full">
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="fname" className="pb-3 inline-block text-base">
                  Full Name
                </label>
                <input
                  id="fname"
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                />
              </div>
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="email" className="pb-3 inline-block text-base">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                />
              </div>
              <div className="mx-0 my-2.5 flex-1">
                <label
                  htmlFor="Phnumber"
                  className="pb-3 inline-block text-base"
                >
                  Phone Number
                </label>
                <input
                  id="Phnumber"
                  type="tel"
                  name="phnumber"
                  placeholder="+1234567890"
                  value={formData.phnumber}
                  onChange={handleChange}
                  className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                />
              </div>
            </div>
            <div className="sm:flex gap-6 w-full">
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="email" className="pb-3 inline-block text-base">
                  Outlet
                </label>
                <select
                  name="outlet"
                  id="outlet"
                  value={formData.outlet}
                  onChange={handleChange}
                  className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                >
                  <option value="">Choose the Outlet</option>
                  <option value="Downtown LA">Downtown LA</option>
                  <option value="Hollywood">Hollywood</option>
                  <option value="West Hollywood">West Hollywood</option>
                  <option value="Beverly Hills">Beverly Hills</option>
                  <option value="Santa Monica">Santa Monica</option>
                  <option value="Venice Beach">Venice Beach</option>
                </select>
              </div>
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="fname" className="pb-3 inline-block text-base">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                />
              </div>
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="email" className="pb-3 inline-block text-base">
                  NO. Of People
                </label>
                <input
                  id="people"
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  placeholder="2"
                  className="w-full text-base px-4 rounded-2xl py-2.5 border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                />
              </div>
            </div>
            <div className="sm:flex gap-3 w-full"></div>
            <div className="w-full mx-0 my-2.5 flex-1">
              <label htmlFor="message" className="text-base inline-block">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                className="w-full mt-2 rounded-2xl px-5 py-3 border-solid border transition-all duration-500 focus:border-primary focus:outline-0"
                placeholder="Anything else you wanna communicate"
              ></textarea>
            </div>
            <div className="mx-0 my-2.5 w-full">
              <button
                type="submit"
                disabled={!isFormValid || loader}
                className={`border leading-none px-6 text-lg font-medium py-4 rounded-full
                    ${
                      !isFormValid || loader
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer"
                    }`}
              >
                Submit
              </button>
            </div>
          </form>
          {showThanks && (
            <div className="text-white bg-primary rounded-full px-4 text-lg mb-4.5 mt-3 absolute flex items-center gap-2">
              Thanks! Your table is booked. See you soon.
              <div className="w-3 h-3 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { CheckCircle, Loader, Mail, MapPin, Phone, Send } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phnumber: "",
//     subject: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [showThanks, setShowThanks] = useState(false);
//   const [loader, setLoader] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   useEffect(() => {
//     const isValid = Object.values(formData).every(
//       (value) => value.trim() !== "",
//     );
//     setIsFormValid(isValid);
//   }, [formData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const resetForm = () => {
//     setFormData({
//       fullname: "",
//       email: "",
//       phnumber: "",
//       subject: "",
//       message: "",
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/amyraglobal786@gmail.com",
//         {
//           method: "POST",
//           headers: { "Content-type": "application/json" },
//           body: JSON.stringify({
//             FullName: formData.fullname,
//             Email: formData.email,
//             PhoneNo: formData.phnumber,
//             Subject: formData.subject,
//             Message: formData.message,
//           }),
//         },
//       );

//       const data = await response.json();
//       if (data.success) {
//         setShowThanks(true);
//         resetForm();
//         setTimeout(() => {
//           setShowThanks(false);
//         }, 5000);
//       }
//     } catch (error) {
//       console.log("Error:", error.message);
//     } finally {
//       setLoader(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: "Address",
//       content:
//         "M02-355, M Floor, Plot No. 128-248, Al Kabeesi Area, Deira - Dubai, UAE",
//       color: "bg-blue-100 text-blue-600",
//       delay: 0,
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       content: "amyraglobal786@gmail.com",
//       color: "bg-green-100 text-green-600",
//       delay: 100,
//     },
//     {
//       icon: Phone,
//       title: "Mobile",
//       content: "+97158822 8177",
//       color: "bg-orange-100 text-orange-600",
//       delay: 200,
//     },
//   ];

//   return (
//     <section className="relative w-full py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="text-center mb-10"
//           data-aos="fade-up"
//           data-aos-delay="100"
//           data-aos-duration="1000"
//         >
//           {" "}
//           <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
//             Let's Get In Touch
//           </p>
//           <h2 className="text-3xl font-semibold">
//             {" "}
//             We're here to help. Reach out to us anytime.
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//           <div className="space-y-6">
//             {contactInfo.map((info, index) => {
//               const Icon = info.icon;
//               return (
//                 <div
//                   key={index}
//                   data-aos="fade-right"
//                   data-aos-delay={info.delay}
//                   className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div
//                     className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}
//                   >
//                     <Icon className="w-6 h-6" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     {info.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {info.content}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           <div
//             className="lg:col-span-2"
//             data-aos="fade-left"
//             data-aos-delay="200"
//           >
//             <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Send Us a Message
//               </h3>

//               <div className="space-y-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="fullname"
//                       value={formData.fullname}
//                       onChange={handleChange}
//                       placeholder="John Doe"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="john@example.com"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       name="phnumber"
//                       value={formData.phnumber}
//                       onChange={handleChange}
//                       placeholder="+971 58 8226 177"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-900 mb-2">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Export Inquiry"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400"
//                     />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about your inquiry..."
//                     rows="5"
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-400 resize-none"
//                   ></textarea>
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   disabled={!isFormValid || loader}
//                   className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
//                     !isFormValid || loader
//                       ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       : "bg-primary/80 text-white hover:bg-primary hover:shadow-lg hover:scale-105"
//                   }`}
//                 >
//                   {loader ? (
//                     <>
//                       <Loader className="w-5 h-5 animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </div>

//               {showThanks && (
//                 <div className="mt-6 p-4 bg-primary/40 border-2 border-primary rounded-xl flex items-center gap-3 animate-bounce">
//                   <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-green-900">Success!</p>
//                     <p className="text-green-800 text-sm">
//                       Thanks for reaching out. We'll get back to you soon!
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div
//           data-aos="zoom-in"
//           className="text-center bg-gradient-to-r from-primary/50 rounded-3xl p-8 border-2 border-primary"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">
//             Need immediate assistance?
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Call us directly at{" "}
//             <span className="font-semibold text-primary">+97158822 8177</span>
//           </p>
//           <p className="text-sm text-gray-500">
//             Available Monday - Friday, 9:00 AM - 6:00 PM (GST)
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
