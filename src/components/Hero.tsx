import React from "react";
import { Heart } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 to-purple-400"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src="./photos/header.jpg"
          alt="Mother and child"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-rose-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-4 animate-pulse">
          <Heart className="h-16 w-16 text-white mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Happy Mother's Day
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Today, we celebrate the boundless love, silent sacrifices, and
          unwavering strength of mothers — the gentle hands that held us, the
          hearts that never gave up on us. This is more than a day of thanks;
          it's a tribute to the women who shaped our souls, stood by us in every
          storm, and loved us in ways words can never fully express
        </p>
        <a
          href="#gallery"
          className="inline-block px-8 py-3 bg-white text-rose-600 font-medium rounded-full 
            hover:bg-rose-100 transition-all duration-300 shadow-lg hover:shadow-xl transform 
            hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
        >
          Explore Tributes
        </a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#gallery"
          className="animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-white/20 
            hover:bg-white/40 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
