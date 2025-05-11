import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-rose-800 to-purple-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-rose-300 mr-2" />
              <h3 className="text-xl font-serif font-bold">Mother's Day</h3>
            </div>
            <p className="text-rose-200 mt-2">
              Celebrating the love that knows no bounds.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#hero" className="text-rose-200 hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#gallery" className="text-rose-200 hover:text-white transition-colors duration-300">
              Gallery
            </a>
            <a href="#dedicate" className="text-rose-200 hover:text-white transition-colors duration-300">
              Dedicate
            </a>
          </div>
        </div>
        
        <div className="border-t border-rose-700/50 mt-8 pt-8 text-center text-rose-200 text-sm">
          <p>&copy; {currentYear} Mother's Day Celebration. All rights reserved.</p>
          <p className="mt-2">Designed with <span className="text-rose-300">♥</span> for mothers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;