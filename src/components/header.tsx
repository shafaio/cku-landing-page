"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { CompanyInformation } from "@/type";

const Header = (props: CompanyInformation) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo {...props.Logo} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => toggleDropdown("about")}
              >
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 transition-all transform origin-top ${
                  activeDropdown === "about"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                }`}
              >
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("vision-mission")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Vision & Mission
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("industries")}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Industries
            </button>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => toggleDropdown("insights")}
              >
                Insights <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 transition-all transform origin-top ${
                  activeDropdown === "insights"
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                }`}
              >
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Partners
                </button>
                <button
                  onClick={() => scrollToSection("investor-relations")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Investor Relations
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="primary"
            >
              Let&apos;s Build Together
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 pt-4 pb-6 bg-white">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("vision-mission")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("investor-relations")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Investor Relations
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="primary"
              className="mt-4"
            >
              Let&apos;s Build Together
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
