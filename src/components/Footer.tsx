import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { language } = useLanguage();

  const contactInfo = {
    phones: [
      '+30 2531034781',
      '+30 6977 717410',
      '+30 6976 999811'
    ],
    email: [
      'ymavridis@gmail.com',
      'niki_mavridou@yahoo.gr'
    ],
    address: {
      el: 'Θάσου 1, Κομοτηνή, 69100',
      en: '1 Thasou, Komotini, 69100'
    }
  };

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/mavridiskomotini',
      color: 'bg-[#1877F2] hover:bg-[#0d6efd]'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/mavridis_architecture_engineer/',
      color: 'bg-[#E4405F] hover:bg-[#d62e4c]'
    },
    {
      name: 'TikTok',
      icon: ({ className }: { className?: string }) => (
        <svg 
          className={className} 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@mavridis.architec',
      color: 'bg-black hover:bg-gray-900'
    }
  ];

  const quickLinks = [
    { path: '/architectural-office', label: language === 'el' ? 'Αρχιτεκτονικό Γραφείο' : 'Architectural Office' },
    { path: '/engineering-services', label: language === 'el' ? 'Υπηρεσίες Μηχανικού' : 'Engineering Services' },
    { path: '/projects', label: language === 'el' ? 'Έργα' : 'Projects' },
    { path: '/contact', label: language === 'el' ? 'Επικοινωνία' : 'Contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">IN-MAVRIDIS</span>
            </div>
            <p className="text-gray-400 mb-6">
              {language === 'el' 
                ? 'Επαγγελματικές υπηρεσίες ακινήτων και αρχιτεκτονικές λύσεις στην Ελλάδα.'
                : 'Professional real estate services and architectural solutions in Greece.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === 'el' ? 'Γρήγορη Πλοήγηση' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === 'el' ? 'Στοιχεία Επικοινωνίας' : 'Contact Info'}
            </h3>
            <div className="space-y-4">
              {contactInfo.phones.map((phone, index) => (
                <a 
                  key={index}
                  href={`tel:${phone}`}
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span>{phone}</span>
                </a>
              ))}
              {contactInfo.email.map((email, index) => (
                <a 
                  key={index}
                  href={`mailto:${email}`}
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>{email}</span>
                </a>
              ))}
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{contactInfo.address[language]}</span>
              </div>
            </div>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === 'el' ? 'Ωράριο Λειτουργίας' : 'Business Hours'}
            </h3>
            <div className="space-y-3 text-gray-400 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3" />
                <div>
                  <p>{language === 'el' ? 'Δευτέρα - Παρασκευή: 9:00 - 18:00' : 'Monday - Friday: 9:00 - 18:00'}</p>
                  <p>{language === 'el' ? 'Σάββατο: 10:00 - 14:00' : 'Saturday: 10:00 - 14:00'}</p>
                  <p>{language === 'el' ? 'Κυριακή: Κλειστά' : 'Sunday: Closed'}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {language === 'el' ? 'Ακολουθήστε μας' : 'Follow Us'}
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full text-white ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} IN-MAVRIDIS. {language === 'el' ? 'Με επιφύλαξη παντός δικαιώματος.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;