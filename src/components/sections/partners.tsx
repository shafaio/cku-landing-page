"use client";

import { PartnerSection } from "@/type";
import Image from "next/image";
import { useState } from "react";

const Partners = (props: PartnerSection) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants for staggered entrance
  // const containerVariants = {
  //   initial: { opacity: 0 },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   initial: { opacity: 0, y: 20 },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  // };

  return (
    <section
      id="partners"
      className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with enhanced styling */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {props.Title}
            <span className="block text-blue-600 mt-2">
              {props.HighlightedTitle}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {props.Description}
          </p>
        </div>

        {/* Partner logos grid with enhanced animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 mb-16">
          {props.Partners.map((partner, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative bg-white rounded-xl h-28 sm:h-32 flex items-center justify-center p-6 shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-200">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Logo */}
                {/* <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-16 sm:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 relative z-10"
                /> */}

                <Image
                  src={`/brand/${partner.Name.split(" ")[0]}.png`}
                  alt={partner.Description}
                  width={100}
                  height={100}
                  className="h-16 sm:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 relative z-10"
                />

                {/* Tooltip on hover */}
                {hoveredIndex === index && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap z-20">
                    <div className="font-medium">{partner.Name}</div>
                    <div className="text-xs text-gray-300">
                      {/* {partner.category} */}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section with enhanced styling */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 lg:p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Become a Partner
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Join our expanding ecosystem of technology partners. Together,
                we can create innovative solutions that transform the Indonesian
                digital landscape.
              </p>

              {/* Enhanced CTA button */}
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                <span>Learn About Partnership Opportunities</span>
                <svg
                  className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Verified Partners</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Integrated Solutions</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }

        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default Partners;
