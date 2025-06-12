"use client";

import Button from "@/components/ui/button";
import { HeroSection } from "@/type";
import { ArrowRight } from "lucide-react";

const Hero = (props: HeroSection) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-teal-400 rounded-full opacity-15 animate-float-medium"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-indigo-500 rounded-full opacity-10 animate-float-fast"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {props.HeroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              {props.HeroDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="sm:text-lg animate-pulse-subtle"
              >
                {props.PrimaryButton.Text}
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                size="lg"
                className="sm:text-lg group"
              >
                {props.Secondary.Text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolldown indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
