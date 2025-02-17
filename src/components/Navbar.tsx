import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { path: '/', label: language === 'el' ? 'Αρχική' : 'Home' },
    { path: '/architectural-office', label: language === 'el' ? 'Αρχιτεκτονικό Γραφείο' : 'Architectural Office' },
    { path: '/engineering-services', label: language === 'el' ? 'Υπηρεσίες Μηχανικού' : 'Engineering Services' },
    { path: '/blog', label: language === 'el' ? 'Blog' : 'Blog' },
    { path: '/contact', label: language === 'el' ? 'Επικοινωνία' : 'Contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="IN-MAVRIDIS Logo" className="h-10 md:h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Desktop Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'el' ? 'EN' : 'ΕΛ'}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center"
              aria-label={language === 'el' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά'}
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-sm font-medium">
                {language === 'el' ? 'EN' : 'ΕΛ'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute w-full bg-white shadow-lg border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;