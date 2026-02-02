import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

import { HeaderData } from "../../data/siteData";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import Logo from "./Logo/logo";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef(null);
  const signUpRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  const handleClickOutside = (event) => {
    if (signInRef.current && !signInRef.current.contains(event.target)) {
      setIsSignInOpen(false);
    }
    if (signUpRef.current && !signUpRef.current.contains(event.target)) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isSignInOpen || isSignUpOpen || navbarOpen ? "hidden" : "";
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full py-4 transition-all duration-300 ${
        sticky ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex grow items-center justify-center gap-6">
          {HeaderData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+971588228177"
            className="hidden xl:flex items-center gap-2 text-lg font-medium hover:text-primary"
          >
            <Phone className="text-primary" />
            +97158822 8177
          </a>
          {/* 
          <button
            className="hidden lg:block bg-primary/15 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full font-medium"
            onClick={() => setIsSignInOpen(true)}
          >
            Sign In
          </button>

          <button
            className="hidden lg:block bg-primary text-white hover:bg-primary/15 hover:text-primary px-6 py-2 rounded-full font-medium"
            onClick={() => setIsSignUpOpen(true)}
          >
            Sign Up
          </button> */}

          <button
            onClick={() => setNavbarOpen(true)}
            className="lg:hidden p-2"
            aria-label="Open Menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen && <div className="fixed inset-0 bg-black/50 z-40"></div>}

      {/* Mobile Drawer */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white z-50 transform transition-transform duration-300 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button onClick={() => setNavbarOpen(false)}>
            <X />
          </button>
        </div>

        <a
          href="tel:+971588228177"
          className="flex items-center gap-2 px-4 mt-4 text-lg font-medium"
        >
          <Phone className="text-primary" />
          +97158822 8177
        </a>

        <nav className="flex flex-col p-4">
          {HeaderData.map((item, index) => (
            <MobileHeaderLink
              key={index}
              item={item}
              onClose={() => setNavbarOpen(false)}
            />
          ))}
          {/* 
          <div className="mt-6 space-y-4">
            <button
              className="w-full bg-primary text-white py-2 rounded-lg"
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign In
            </button>

            <button
              className="w-full bg-primary text-white py-2 rounded-lg"
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign Up
            </button>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
