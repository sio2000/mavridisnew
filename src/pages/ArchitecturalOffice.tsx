import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Ruler, PencilRuler, Building2, Compass, CheckCircle2, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import f3 from '../assets/images/f3.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/t9.jpg';
import t10 from '../assets/images/t10.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import z from '../assets/images/z.jpg';
import x from '../assets/images/x.jpg';
import c from '../assets/images/c.jpg';
import v from '../assets/images/v.jpg';
import b from '../assets/images/b.jpg';
import n from '../assets/images/n.jpg';
import m from '../assets/images/m.jpg';
import as from '../assets/images/as.jpg';
import ad from '../assets/images/ad.jpg';
import af from '../assets/images/af.jpg';
import ag from '../assets/images/ag.jpg';
import ah from '../assets/images/ah.jpg';
import aj from '../assets/images/aj.jpg';
import ak from '../assets/images/ak.jpg';
import al from '../assets/images/al.jpg';
import lop from '../assets/images/lop.png';
import lop2 from '../assets/images/lop2.jpg';

interface ServiceItem {
  title: string;
  description: string;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

// Custom arrow components
const NextArrow = ({ onClick, currentSlide, slideCount, ...props }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent border-none"
    aria-label="Next slide"
    {...props}
  >
    <ChevronRight className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
  </button>
);

const PrevArrow = ({ onClick, currentSlide, slideCount, ...props }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent border-none"
    aria-label="Previous slide"
    {...props}
  >
    <ChevronLeft className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
  </button>
);

// Ενημέρωση του interface Settings
interface Settings extends React.ComponentProps<typeof Slider> {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  customPaging?: (i: number) => JSX.Element;
  className?: string;
  initialSlide?: number;
  arrows?: boolean;
}

const ArchitecturalOffice = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  const architecturalServices = {
    title: 'Αρχιτεκτονικές Υπηρεσίες',
    description: 'Παρέχουμε ολοκληρωμένες αρχιτεκτονικές λύσεις για κάθε έργο',
    services: [
      {
        title: 'Αρχιτεκτονικός Σχεδιασμός',
        description: 'Δημιουργικές και λειτουργικές λύσεις για κάθε χώρο'
      },
      {
        title: 'Μελέτες Κατασκευής',
        description: 'Λεπτομερείς μελέτες για την άρτια υλοποίηση του έργου'
      },
      {
        title: 'Ανακαινίσεις',
        description: 'Ανανέωση και αναβάθμιση υφιστάμενων χώρων'
      },
      {
        title: 'Εσωτερική Διακόσμηση',
        description: 'Σχεδιασμός εσωτερικών χώρων με αισθητική και λειτουργικότητα'
      }
    ]
  };

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Σύγχρονη Κατοικία',
      location: 'Κομοτηνή',
      type: 'Κατοικία'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Εμπορικό Συγκρότημα',
      location: 'Αλεξανδρούπολη',
      type: 'Εμπορικό'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Πολυτελές Διαμέρισμα',
      location: 'Καβάλα',
      type: 'Κατοικία'
    }
  ];

  const selectedProjects = [
    {
      id: 1,
      title: {
        el: 'Νέο Έργο - Μονοκατοικία στις Σάπες',
        en: 'New Project - House in Sapes'
      },
      description: {
        el: `Νέο έργο υπό κατασκευή. Ανέγερση μονοκατοικίας στις Σάπες Ροδόπης.

@yiannismavridis, @ΝικηΜαυριδου

#αρχιτεκτονικοσσχεδιασμος #στατικημελετη #επιβλεψηεργου #κατασκευηεργου #maronia #fanari #komotini`,
        en: `New project under construction. House construction in Sapes, Rodopi.

@yiannismavridis, @NikiMavridou

#architecturaldesign #structuraldesign #constructionsupervision #construction #maronia #fanari #komotini`
      },
      images: [lop, lop2]
    },
    {
      id: 2,
      title: {
        el: 'Μελέτη Ανέγερσης Ισόγειας Μονοκατοικίας',
        en: 'Single-Story House Construction Study'
      },
      description: {
        el: `Μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου. Φωτορεαλιστική απεικόνιση: μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου.`,
        en: `Construction study of a single-story house with provision for an additional floor. Photorealistic visualization: construction study of a single-story house with future floor provision.`
      },
      images: [as, ad, af, ag, ah, aj, ak, al]
    },
    {
      id: 3,
      title: {
        el: 'Προκατασκευασμένες Κατοικίες στον Προφήτη Ηλία',
        en: 'Prefabricated Houses in Profitis Ilias'
      },
      description: {
        el: `Νέο έργο σε εξέλιξη: «Ανέγερση δύο όμοιων προκατασκευασμένων κατοικιών στον παραθεριστικό οικισμό Προφήτη Ηλία Δήμου Μαρώνειας Σαπών, ΠΕ Ροδόπης». Ολοκλήρωση βάσεων σκυροδέματος και εν αναμονή του μεταλλικού σκελετού κατοικιών.

Maroneia, Rodopi, Μαρώνεια, Προφήτης Ηλίας Ροδόπης

#αρχιτεκτονικοσσχεδιασμος #στατικημελετη #επιβλεψηεργου #κατασκευηεργου`,
        en: `New project in progress: "Construction of two identical prefabricated houses in the holiday settlement of Profitis Ilias, Municipality of Maroneia Sapon, Rodopi". Completion of concrete foundations and awaiting the metal frame of the houses.`
      },
      images: [z, x, c, v, b, n, m]
    },
    {
      id: 4,
      title: {
        el: 'Μονοκατοικία στην Παραλία Αρωγής',
        en: 'House in Arogi Beach'
      },
      description: {
        el: `Aρχιτεκτονική μελέτη, Στατική μελέτη, ισόγειας μονοκατοικίας 50 τμ. με σοφίτα 25 τμ. σε οικόπεδο στην Παραλία Αρωγής Ροδόπης.`,
        en: `Architectural and structural study of a 50 sq.m. single-story house with a 25 sq.m. loft in Arogi Beach, Rodopi.`
      },
      images: [f1, f2, f3]
    },
    {
      id: 5,
      title: {
        el: 'Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ',
        en: 'Two-story House with Attic in Ektenepol'
      },
      description: {
        el: 'Ανέγερση διώροφου μονοκατοικίας με Σοφιτα- αρχιτεκτονική μελέτη- Εκτενεπολ ΖΕΠ Κομοτηνης',
        en: 'Construction of a two-story house with attic - architectural study - Ektenepol ZEP Komotini'
      },
      images: [to, to1]
    },
    {
      id: 6,
      title: {
        el: 'Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή',
        en: 'Past Multi Storey Residential Projects in Komotini'
      },
      description: {
        el: 'Past multi storey residential projects. Komotini.',
        en: 'Past multi storey residential projects. Komotini.'
      },
      images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function(i: number) {
      return (
        <button
          type="button"
          className="w-2 h-2 mx-1 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity"
          aria-label={`Go to slide ${i + 1}`}
        />
      );
    }
  };

  const modalSliderSettings = {
    ...sliderSettings,
    initialSlide: currentImageIndex
  };

  const openImageModal = (images: string[], startIndex: number) => {
    setSelectedImages(images);
    setCurrentImageIndex(startIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    // SEO Optimization
    document.title = language === 'el' 
      ? 'Αρχιτεκτονικό Γραφείο Κομοτηνής | MAVRIDIS - Κατασκευές & Αρχιτεκτονικές Υπηρεσίες'
      : 'Architectural Office in Komotini | MAVRIDIS - Constructions & Architectural Services';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Το αρχιτεκτονικό γραφείο MAVRIDIS στην Κομοτηνή προσφέρει ολοκληρωμένες υπηρεσίες σχεδιασμού και κατασκευής. Εξειδίκευση σε κατοικίες, επαγγελματικούς χώρους και ανακαινίσεις. ☎ 2531034781'
        : 'MAVRIDIS architectural office in Komotini offers comprehensive design and construction services. Specializing in residential, commercial spaces and renovations. ☎ +30 2531034781'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Το αρχιτεκτονικό γραφείο MAVRIDIS στην Κομοτηνή προσφέρει ολοκληρωμένες υπηρεσίες σχεδιασμού και κατασκευής. Εξειδίκευση σε κατοικίες, επαγγελματικούς χώρους και ανακαινίσεις. ☎ 2531034781'
        : 'MAVRIDIS architectural office in Komotini offers comprehensive design and construction services. Specializing in residential, commercial spaces and renovations. ☎ +30 2531034781';
      document.head.appendChild(meta);
    }
  }, [language]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
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
              {t('architecturalOffice.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              {t('architecturalOffice.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.title')}
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.description')}
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {(t('architecturalOffice.services.items') as ServiceItem[]).map((service: ServiceItem, index: number) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover-card"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.projects.title')}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {selectedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-card"
                variants={itemVariants}
              >
                <div className="relative h-64">
                  <Slider
                    {...sliderSettings}
                    className="relative"
                    aria-label="Project images slider"
                  >
                    {project.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="h-64 cursor-pointer"
                        onClick={() => openImageModal(project.images, imgIndex)}
                      >
                        <img
                          src={image}
                          alt={`${project.title[language]} ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
                  <p className="text-gray-600 mb-2">{project.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.whyChooseUs.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(t('architecturalOffice.whyChooseUs.reasons') as string[]).map((item: string, index: number) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover-card"
                variants={itemVariants}
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white z-50 p-2 hover:text-blue-400 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-7xl">
              <Slider {...modalSliderSettings}>
                {selectedImages.map((image, index) => (
                  <div key={index} className="outline-none">
                    <div className="flex items-center justify-center h-[80vh]">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ArchitecturalOffice;