import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Award, 
  Ruler, 
  FileText, 
  Zap, 
  Home, 
  Paintbrush,
  Video, 
  Building, 
  Lightbulb, 
  BadgeCheck,
  Users, 
  ClipboardCheck 
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import backofficeImage from '../assets/images/backoffice.png';
import photo1 from '../assets/images/photo1.png';
import photo2 from '../assets/images/photo2.png';

const EngineeringServices = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'el' 
      ? 'Κατασκευαστικές Υπηρεσίες | MAVRIDIS - Κατασκευές & Αρχιτεκτονικές Υπηρεσίες'
      : 'Construction Services | MAVRIDIS - Constructions & Architectural Services';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Ολοκληρωμένες κατασκευαστικές υπηρεσίες από το γραφείο MAVRIDIS. Κατασκευές κτιρίων, επιβλέψεις έργων, στατικές μελέτες και τεχνικές συμβουλές στην Κομοτηνή.'
        : 'Comprehensive construction services by MAVRIDIS office. Building construction, project supervision, structural studies and technical consulting in Komotini, Greece.'
      );
    }
  }, [language]);

  const services = [
    'Αρχιτεκτονικός σχεδιασμός και αρχιτεκτονική μελέτη – επίβλεψη',
    'Έκδοση πλήρους φακέλου οικοδομικής άδειας και επίβλεψη του έργου',
    'Έκδοση αδειών λειτουργίας υγειονομικού ενδιαφέροντος παντός τύπου',
    'Ενεργειακή επιθεώρηση – ένταξη στο πρόγραμμα "εξοικονομώ κατ\'οίκον"',
    'Ελεγκτής δόμησης',
    'Ανακαινίσεις διαμερισμάτων και καταστημάτων',
    'Διακόσμηση εσωτερικών χώρων',
    'Φωτορεαλισμός και virtual video'
  ];

  const experience = [
    '17 ετής συνεχής εμπειρία στον Τομέα Στατικών Μελετών',
    '5 ετής εμπειρία στον τομέα του Ενεργειακού Σχεδιασμού',
    'Πιστοποιημένος Ελεγκτής Δόμησης',
    '17 ετής εμπειρία στην Κατασκευή Ιδιωτικών Έργων',
    '8 ετής εμπειρία στον Τομέα Εκτιμήσεων Ακινήτων',
    'Εμπειρία σε Τεχνικές Πραγματογνωμοσύνες',
    'Μέλος της Μόνιμης Επιτροπής Χωροταξίας και Περιβάλλοντος του ΤΕΕ Θράκης'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${backofficeImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {language === 'el' ? 'Υπηρεσίες Μηχανικού' : 'Engineering Services'}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-4">
              {language === 'el' 
                ? 'Ολοκληρωμένες τεχνικές υπηρεσίες και μελέτες'
                : 'Comprehensive technical services and studies'
              }
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Text Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="prose prose-lg mx-auto text-gray-600 max-w-4xl">
              <p className="text-lg leading-relaxed mb-6">
                <span className="font-semibold text-gray-800">
                  {t('engineeringServices.introduction')[language].split('\n\n')[0]}
                </span>
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                {t('engineeringServices.introduction')[language].split('\n\n')[1]}
              </p>
              
              <p className="text-lg leading-relaxed italic text-gray-700">
                {t('engineeringServices.introduction')[language].split('\n\n')[2]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Grid - Smaller Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          <img 
            src={photo1} 
            alt="Office View"
            className="w-full h-[250px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          <img 
            src={photo2} 
            alt="Γιάννης Μαυρίδης"
            className="w-full h-[250px] object-cover"
          />
        </motion.div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
              {language === 'el' 
                ? 'Με πολυετή εμπειρία στον τομέα των τεχνικών υπηρεσιών, προσφέρουμε ολοκληρωμένες λύσεις για κάθε έργο.'
                : 'With years of experience in technical services, we offer comprehensive solutions for every project.'
              }
            </p>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center gradient-text">
              {t('engineeringServices.services.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('engineeringServices.services.items').map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: '#EEF2FF' }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {index === 0 && <Ruler className="h-6 w-6 text-blue-600" />}
                    {index === 1 && <FileText className="h-6 w-6 text-blue-600" />}
                    {index === 2 && <ClipboardCheck className="h-6 w-6 text-blue-600" />}
                    {index === 3 && <Zap className="h-6 w-6 text-blue-600" />}
                    {index === 4 && <Building className="h-6 w-6 text-blue-600" />}
                    {index === 5 && <Home className="h-6 w-6 text-blue-600" />}
                    {index === 6 && <Paintbrush className="h-6 w-6 text-blue-600" />}
                    {index === 7 && <Video className="h-6 w-6 text-blue-600" />}
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center gradient-text">
              {t('engineeringServices.experience.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('engineeringServices.experience.items').map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: '#F0FDF4' }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="p-3 bg-green-100 rounded-lg">
                    {index === 0 && <Award className="h-6 w-6 text-green-600" />}
                    {index === 1 && <Lightbulb className="h-6 w-6 text-green-600" />}
                    {index === 2 && <BadgeCheck className="h-6 w-6 text-green-600" />}
                    {index === 3 && <Building className="h-6 w-6 text-green-600" />}
                    {index === 4 && <FileText className="h-6 w-6 text-green-600" />}
                    {index === 5 && <ClipboardCheck className="h-6 w-6 text-green-600" />}
                    {index === 6 && <Users className="h-6 w-6 text-green-600" />}
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringServices; 