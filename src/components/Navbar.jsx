import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";

import Button from "./Button";

const navItems = ["Home", "Sponsors", "About", "Contact"];

const NavBar = () => {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed top-4 inset-x-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between p-4 bg-black shadow-md rounded-lg size-full">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/img/techlogo.jpg" alt="logo" className="w-10" />

            <Link to={"/events"}><Button
              id="events"
              title="Events"
              // rightIcon={<TiLocationArrow />}
              containerClass="hidden md:flex items-center justify-center gap-1 bg-blue-50"
            /></Link>
          </div>

          {/* Navigation Links and Hamburger Menu */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  className="nav-hover-btn text-black transition-colors duration-300 hover:text-blue-500"
                >
                  {item}
                </Link>
              ))}
            </div>
            <Link to={"/events"}><Button
              id="events"
              title="Events"
              containerClass="flex md:hidden items-center justify-center gap-1 bg-blue-50"
            /></Link>
            <button
              onClick={toggleMobileMenu}
              className="flex text-white items-center ml-10 md:hidden"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg md:hidden">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="block px-4 py-2 text-black font-bold transition-colors duration-300 hover:bg-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
         
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
