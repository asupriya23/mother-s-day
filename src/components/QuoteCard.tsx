import React from 'react';
import { QuoteCard as QuoteCardType } from '../data/quotes';

interface Props {
  card: QuoteCardType;
  index: number;
}

const QuoteCard: React.FC<Props> = ({ card, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`mb-16 md:mb-24 opacity-0 transform ${isEven ? 'translate-x-8' : '-translate-x-8'} 
        animate-[fadeIn_0.8s_ease-out_forwards] animate-delay-${index}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="md:w-1/2 relative">
          <div className="relative overflow-hidden rounded-lg shadow-xl group mb-6 md:mb-0">
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={card.image} 
                alt="Mother and child" 
                className="w-full h-full object-cover object-center transform 
                  group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
        
        <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
          <div className={`bg-white rounded-lg shadow-lg p-8 relative ${
            isEven ? 'md:-ml-16' : 'md:-mr-16'
          } z-10`}>
            <svg 
              className="absolute text-rose-200 w-16 h-16 -top-6 -left-6 opacity-50" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4 relative z-10">
              {card.quote}
            </blockquote>
            
            <footer className="text-right">
              <cite className="block text-gray-500 not-italic font-medium">
                — {card.author}
              </cite>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;