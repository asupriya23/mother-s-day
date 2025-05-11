import React from "react";
import QuoteCard from "./QuoteCard";
import { mothersDayQuotes } from "../data/quotes";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Heartfelt Tributes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of beautiful moments and touching quotes that capture
            the essence of motherhood. Each image tells a story of love,
            compassion, and the special bond between mothers and their children.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {mothersDayQuotes.map((quote, index) => (
            <QuoteCard key={quote.id} card={quote} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
