import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Dedication from './components/Dedication';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = "Happy Mother's Day | A Celebration of Love";
    
    // Add font links to the head
    const fontLink1 = document.createElement('link');
    fontLink1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontLink1.rel = 'stylesheet';
    
    const fontLink2 = document.createElement('link');
    fontLink2.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap';
    fontLink2.rel = 'stylesheet';
    
    document.head.appendChild(fontLink1);
    document.head.appendChild(fontLink2);
    
    return () => {
      document.head.removeChild(fontLink1);
      document.head.removeChild(fontLink2);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Dedication />
      <Footer />
    </div>
  );
}

export default App;