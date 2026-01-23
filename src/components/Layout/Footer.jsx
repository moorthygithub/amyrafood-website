import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FooterLinkData } from "../../data/siteData";
import Logo from "./Logo/logo";

const Footer = () => {
  return (
    <footer className="pt-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10">
          {/* Logo & Social */}
          <div className="col-span-2">
            <Logo />
            <p className="text-sm font-medium text-grey my-5 max-w-[70%]">
              Open an account in minutes, get full financial control for much
              longer.
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Facebook
                  size={16}
                  className="group-hover:text-white text-black"
                />
              </a>

              <a
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Instagram
                  size={16}
                  className="group-hover:text-white text-black"
                />
              </a>

              <a
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Twitter
                  size={16}
                  className="group-hover:text-white text-black"
                />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-2">
            <div className="flex gap-20">
              {FooterLinkData.map((section, i) => (
                <div key={i}>
                  <p className="text-black text-xl font-semibold mb-9">
                    {section.section}
                  </p>
                  <ul>
                    {section.links.map((item, idx) => (
                      <li key={idx} className="mb-3">
                        <a
                          href={item.href}
                          className="text-black/60 hover:text-black text-base"
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
                <p className="text-black text-base">
                  925 Filbert Street Pennsylvania 18072
                </p>
              </div>

              <a href="tel:+19092359814" className="flex items-center">
                <Phone className="text-primary me-2" size={22} />
                <p className="text-black/60 hover:text-black text-base">
                  +1 (909) 235-9814
                </p>
              </a>

              <a href="mailto:info@gmail.com" className="flex items-center">
                <Mail className="text-primary me-2" size={22} />
                <p className="text-black/60 hover:text-black text-base">
                  info@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-grey/15 py-5 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-sm text-black/70">
            ©2026 - AG Solutions. All Rights Reserved.
          </p>

          <div>
            <a
              href="#"
              className="text-sm text-black/70 px-5 border-r border-grey/15 hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-black/70 px-5 hover:text-primary"
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
