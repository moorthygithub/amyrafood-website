import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "./Logo/logo";
import { FooterLinkData } from "../../data/siteData";

const Footer = () => {
  return (
    <footer
      className="relative pt-16 text-white"
      style={{
        backgroundImage: "url('/images/Logo/fotter.webp')",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:gap-10 md:gap-24 sm:gap-12 gap-12 pb-10">
          <div className="col-span-2">
            <Logo />

            <p className="text-sm font-medium text-white/80 my-5 max-w-[70%]">
              Amyra Food Products promoted by the management of Amyra Fruit
              Company, leading fruit supplier in India.
            </p>

            <div className="flex gap-6 items-center">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group bg-white/10 hover:bg-primary rounded-full shadow-xl p-3 transition-all"
                >
                  <Icon
                    size={16}
                    className="text-white group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-2">
            <div className="flex gap-20">
              {FooterLinkData.map((section, i) => (
                <div key={i}>
                  <p className="text-white text-xl font-semibold mb-9">
                    {section.section}
                  </p>
                  <ul>
                    {section.links.map((item, idx) => (
                      <li key={idx} className="mb-3">
                        <a
                          href={item.href}
                          className="text-white/70 hover:text-white text-base transition"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-6 md:col-span-2">
            <div className="flex flex-col gap-5">
              <div className="flex items-start">
                <MapPin className="text-primary me-2" size={22} />
                <p className="text-white/80 text-base leading-relaxed">
                  M02-355, M Floor, Plot No. 128-248,
                  <br />
                  Al Kabeesi Area, Deira,
                  <br />
                  Dubai, United Arab Emirates
                </p>
              </div>

              <a href="tel:+971588228177" className="flex items-center">
                <Phone className="text-primary me-2" size={22} />
                <p className="text-white/70 hover:text-white text-base transition">
                  +97158822 8177
                </p>
              </a>

              <a
                href="mailto:amyraglobal786@gmail.com"
                className="flex items-center"
              >
                <Mail className="text-primary me-2" size={22} />
                <p className="text-white/70 hover:text-white text-base transition">
                  amyraglobal786@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 py-5 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-sm text-white/70">
            ©2026 - AG Solutions. All Rights Reserved.
          </p>

          <div>
            <a
              href="#"
              className="text-sm text-white/70 px-5 border-r border-white/15 hover:text-primary transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/70 px-5 hover:text-primary transition"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
