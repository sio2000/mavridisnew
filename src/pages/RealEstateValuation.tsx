import React from 'react';
import { Calculator, ClipboardCheck, FileText, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';

interface Service {
  title: string;
  description: string;
}

const RealEstateValuation = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: Calculator,
      title: 'Εκτίμηση Κατοικιών',
      description: 'Ακριβής εκτίμηση της αξίας κατοικιών με βάση τα σύγχρονα δεδομένα της αγοράς'
    },
    {
      icon: ClipboardCheck,
      title: 'Εμπορικά Ακίνητα',
      description: 'Εξειδικευμένη εκτίμηση εμπορικών χώρων και επαγγελματικών ακινήτων'
    },
    {
      icon: FileText,
      title: 'Οικόπεδα & Γη',
      description: 'Αξιολόγηση και εκτίμηση οικοπέδων και αγροτεμαχίων'
    }
  ];

  const certifications = [
    {
      title: 'Expert Valuer In Real Estate Property (REV) TEGoVA',
      details: [
        'Πιστοποιημένη εκτιμήτρια ακινήτων, εγγεγραμμένη στο Μητρώο Πιστοποιημένων Εκτιμητών του Υπουργείου Οικονομικών (Αρ. Μητρώου 552)',
        'Διεξαγωγή εκτιμήσεων σύμφωνα με τα Ευρωπαϊκά Εκτιμητικά Πρότυπα (EVS)',
        'Πιστοποίηση σύμφωνη με το διεθνές πρότυπο ISO/IEC 17024'
      ]
    },
    {
      title: 'Μέλος Επαγγελματικών Οργανισμών',
      details: [
        'Μέλος του Συλλόγου Εκτιμητών Ελλάδος (Σ.ΕΚ.Ε.)',
        'Συμμετοχή στην TEGoVA (The European Group of Valuers\' Associations)',
        'Εντεταλμένος χορηγός της ευρωπαϊκής επαγγελματικής αναγνώρισης REV της TEGoVA'
      ]
    }
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('realEstateValuation.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              {t('realEstateValuation.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('realEstateValuation.services.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('realEstateValuation.services.items') as Service[]).map((service: Service, index: number) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover-card"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple Image Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={p1} 
                alt="Real Estate 1"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={p2} 
                alt="Real Estate 2"
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={p3} 
                alt="Real Estate 3"
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('realEstateValuation.certifications.title')}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Expert Valuer Section */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover-card"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4">
                {t('realEstateValuation.certifications.expertValuer.title')}
              </h3>
              <ul className="space-y-3">
                {(t('realEstateValuation.certifications.expertValuer.items') as string[]).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Professional Memberships Section */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover-card"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4">
                {t('realEstateValuation.certifications.professionalMemberships.title')}
              </h3>
              <ul className="space-y-3">
                {(t('realEstateValuation.certifications.professionalMemberships.items') as string[]).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateValuation;