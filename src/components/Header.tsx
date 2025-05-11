import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-rose-500 mr-2" />
          <h1 className={`font-serif text-xl md:text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-rose-600' : 'text-white'
          }`}>
            Mother's Day
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#hero" 
                className={`font-medium transition-colors duration-300 hover:text-rose-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={`font-medium transition-colors duration-300 hover:text-rose-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#dedicate" 
                className={`font-medium transition-colors duration-300 hover:text-rose-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Dedicate
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;