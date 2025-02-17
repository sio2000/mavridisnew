import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Building2, Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import 'leaflet/dist/leaflet.css';

// Διορθώνουμε το πρόβλημα με τα εικονίδια του Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipients = ['ymavridis@gmail.com', 'niki_mavridou@yahoo.gr'];
    const mailtoLink = `mailto:${recipients.join(',')}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Όνομα: ${formData.name}
Email: ${formData.email}

${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    document.title = language === 'el' 
      ? 'Επικοινωνία | MAVRIDIS - Κατασκευές & Αρχιτεκτονικές Υπηρεσίες'
      : 'Contact | MAVRIDIS - Constructions & Architectural Services';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Επικοινωνήστε με το γραφείο MAVRIDIS στην Κομοτηνή. Κατασκευές, αρχιτεκτονικές μελέτες, ανακαινίσεις και τεχνικές υπηρεσίες. Τηλέφωνο: 2531034781'
        : 'Contact MAVRIDIS office in Komotini, Greece. Construction, architectural studies, renovations and technical services. Phone: +30 2531034781'
      );
    }
  }, [language]);

  const contactInfo = {
    phones: ['+30 2531034781', '+30 6977 717410', '+30 6976 999811'],
    email: ['ymavridis@gmail.com', 'niki_mavridou@yahoo.gr'],
    address: {
      el: 'Θάσου 1, Κομοτηνή, 69100',
      en: '1 Thasou, Komotini, 69100'
    },
    hours: {
      el: {
        weekdays: 'Δευτέρα - Παρασκευή: 9:00 - 18:00',
        saturday: 'Σάββατο: 10:00 - 14:00',
        sunday: 'Κυριακή: Κλειστά'
      },
      en: {
        weekdays: 'Monday - Friday: 9:00 - 18:00',
        saturday: 'Saturday: 10:00 - 14:00',
        sunday: 'Sunday: Closed'
      }
    }
  };

  const officeLocation = {
    lat: 41.1171,
    lng: 25.4048,
    address: contactInfo.address
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[300px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Contact Us'}
            </h1>
            <p className="text-xl text-gray-200">
              {language === 'el' ? 'Είμαστε εδώ για να σας βοηθήσουμε' : 'We are here to help you'}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-100"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {language === 'el' ? 'Στοιχεία Επικοινωνίας' : 'Contact Information'}
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">
                    {language === 'el' ? 'Διεύθυνση' : 'Address'}
                  </h3>
                  <p className="text-gray-600">{contactInfo.address[language]}</p>
                </div>
              </motion.div>

              {/* Phones */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">
                    {language === 'el' ? 'Τηλέφωνα' : 'Phone Numbers'}
                  </h3>
                  {contactInfo.phones.map((phone, index) => (
                    <motion.a 
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {phone}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">Email</h3>
                  {contactInfo.email.map((email, index) => (
                    <motion.a 
                      key={index}
                      href={`mailto:${email}`}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {email}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">
                    {language === 'el' ? 'Ωράριο Λειτουργίας' : 'Business Hours'}
                  </h3>
                  <p className="text-gray-600">{contactInfo.hours[language].weekdays}</p>
                  <p className="text-gray-600">{contactInfo.hours[language].saturday}</p>
                  <p className="text-gray-600">{contactInfo.hours[language].sunday}</p>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <div className="mt-8 flex justify-center space-x-6">
                {socialMedia.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 text-white rounded-full transition-colors ${platform.color}`}
                  >
                    {typeof platform.icon === 'function' ? (
                      <platform.icon className="h-6 w-6" />
                    ) : (
                      <platform.icon className="h-6 w-6" />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              {language === 'el' ? 'Φόρμα Επικοινωνίας' : 'Contact Form'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'el' ? 'Ονοματεπώνυμο' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={language === 'el' ? 'Εισάγετε το ονοματεπώνυμό σας' : 'Enter your full name'}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={language === 'el' ? 'Εισάγετε το email σας' : 'Enter your email'}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'el' ? 'Θέμα' : 'Subject'}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={language === 'el' ? 'Εισάγετε το θέμα του μηνύματος' : 'Enter message subject'}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {language === 'el' ? 'Μήνυμα' : 'Message'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder={language === 'el' ? 'Γράψτε το μήνυμά σας...' : 'Write your message...'}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'el' ? 'Αποστολή' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4 h-[400px] border border-gray-100"
        >
          <MapContainer
            center={[officeLocation.lat, officeLocation.lng]}
            zoom={15}
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[officeLocation.lat, officeLocation.lng]}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-semibold">IN-MAVRIDIS</h3>
                  <p className="text-sm">{contactInfo.address[language]}</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;