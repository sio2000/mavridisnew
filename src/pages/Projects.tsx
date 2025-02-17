import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

type Category = 'all' | 'construction' | 'interior' | 'residential' | 'suburban' | 'uncategorized';

interface Project {
  id: number;
  title: {
    el: string;
    en: string;
  };
  category: Category;
  images: string[];
  description: {
    el: string;
    en: string;
  };
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: {
      el: 'Νέο Εξοικονομώ',
      en: 'New Energy Saving'
    },
    category: 'construction',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1503388142320-6d7a0a2a2ae7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1503389152951-9f343605f61e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ],
    description: {
      el: 'Ενεργειακή αναβάθμιση κατοικιών',
      en: 'Home energy efficiency upgrade'
    },
    date: '2023'
  },
  {
    id: 2,
    title: {
      el: 'Mikel Coffee Κομοτηνή',
      en: 'Mikel Coffee Komotini'
    },
    category: 'interior',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ],
    description: {
      el: 'Σχεδιασμός και διαμόρφωση καταστήματος καφέ',
      en: 'Coffee shop design and layout'
    },
    date: '2023'
  },
  {
    id: 3,
    title: {
      el: 'Συγκρότημα Οκτώ Ισόγειων Κατοικιών',
      en: 'Complex of Eight Ground Floor Houses'
    },
    category: 'residential',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ],
    description: {
      el: 'Σχεδιασμός και επίβλεψη κατασκευής',
      en: 'Design and construction supervision'
    },
    date: '2022'
  },
  {
    id: 4,
    title: {
      el: 'Ιδιωτική Κατοικία στα Προάστια',
      en: 'Private Suburban House'
    },
    category: 'suburban',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    ],
    description: {
      el: 'Μελέτη και κατασκευή ιδιωτικής κατοικίας',
      en: 'Study and construction of private residence'
    },
    date: '2022'
  },
  // Add more projects...
];

const categories = [
  { id: 'all' as const, translationKey: 'projects.categories.all' as const },
  { id: 'construction' as const, translationKey: 'projects.categories.construction' as const },
  { id: 'interior' as const, translationKey: 'projects.categories.interior' as const },
  { id: 'residential' as const, translationKey: 'projects.categories.residential' as const },
  { id: 'suburban' as const, translationKey: 'projects.categories.suburban' as const },
  { id: 'uncategorized' as const, translationKey: 'projects.categories.uncategorized' as const }
] as const;

const Projects = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const ProjectCard = ({ project }: { project: Project }) => (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title[language]}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {project.description[language]}
        </p>
        <p className="text-gray-500 text-sm mt-2">{project.date}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[300px] bg-cover bg-center mb-12"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {language === 'el' ? 'Τα Έργα μας' : 'Our Projects'}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {language === 'el' 
              ? 'Ανακαλύψτε το χαρτοφυλάκιο των έργων μας και την ποιότητα των κατασκευών μας'
              : 'Discover our project portfolio and the quality of our constructions'
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder={language === 'el' ? 'Αναζήτηση έργων...' : 'Search projects...'}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t(category.translationKey)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Modal with Slider */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              language={language}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose, language }: { project: Project; onClose: () => void; language: 'el' | 'en' }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <ChevronRight className="text-white absolute right-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 cursor-pointer hover:text-blue-400 transition-colors" />,
    prevArrow: <ChevronLeft className="text-white absolute left-4 top-1/2 -translate-y-1/2 z-10 h-8 w-8 cursor-pointer hover:text-blue-400 transition-colors" />
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <div className="w-full max-w-6xl">
        <Slider {...sliderSettings}>
          {project.images.map((image, index) => (
            <div key={index} className="outline-none">
              <div
                className="h-[80vh] bg-center bg-cover mx-auto"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Slider>
        <div className="text-white text-center mt-4">
          <h2 className="text-2xl font-bold">{project.title[language]}</h2>
          <p className="text-gray-300 mt-2">{project.description[language]}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 