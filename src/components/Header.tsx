import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiMail } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  // Hide header on scroll, show only at top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Bar */}
      <div className="bg-navy text-white text-xs py-1 border-b border-teal/20">
        <div className="max-w-7xl mx-auto flex justify-center items-center space-x-6">
          <a href="tel:+1-571-249-2658" className="flex items-center space-x-1 hover:text-gold transition-colors">
            <HiPhone className="h-4 w-4 text-gold" />
            <span>+1-571-249-2658</span>
          </a>
          <span className="h-3 border-l border-gray-400/30"></span>
          <a href="mailto:info@codevistaglobal.com" className="flex items-center space-x-1 hover:text-gold transition-colors">
            <HiMail className="h-4 w-4 text-gold" />
            <span>info@codevistaglobal.com</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center">
                <img 
                  src="/Studio-Project-removebg-preview.png" 
                  alt="Code Vista Global Logo" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-navy">Code Vista Global</h1>
                <p className="text-sm text-gray-600">Study Abroad Consultancy</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-opensans font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-teal border-b-2 border-teal'
                    : 'text-gray-700 hover:text-teal'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gold text-navy px-6 py-2 rounded-lg font-montserrat font-semibold hover:bg-yellow-400 transition-colors duration-200">
              Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal"
            >
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-teal bg-teal bg-opacity-10'
                    : 'text-gray-700 hover:text-teal hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-gold text-navy px-6 py-2 rounded-lg font-montserrat font-semibold hover:bg-yellow-400 transition-colors duration-200">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;