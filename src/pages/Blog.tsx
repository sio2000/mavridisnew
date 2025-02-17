import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Εισαγωγές εικόνων
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import q1 from '../assets/images/q1.jpg';
import q2 from '../assets/images/q2.jpg';
import q3 from '../assets/images/q3.jpg';
import q4 from '../assets/images/q4.jpg';
import q5 from '../assets/images/q5.jpg';
import q6 from '../assets/images/q6.jpg';
import q7 from '../assets/images/q7.jpg';
import q8 from '../assets/images/q8.jpg';
import q9 from '../assets/images/q9.jpg';
import r1 from '../assets/images/r1.jpg';
import r2 from '../assets/images/r2.jpg';
import r3 from '../assets/images/r3.jpg';
import r4 from '../assets/images/r4.jpg';
import r5 from '../assets/images/r5.jpg';
import r6 from '../assets/images/r6.jpg';
import r7 from '../assets/images/r7.jpg';
import r8 from '../assets/images/r8.jpg';
import r9 from '../assets/images/r9.jpg';
import r10 from '../assets/images/r10.jpg';
import r11 from '../assets/images/r11.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import e1 from '../assets/images/e1.jpg';
import e2 from '../assets/images/e2.jpg';
import e3 from '../assets/images/e3.jpg';
import e4 from '../assets/images/e4.jpg';
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
import ik1 from '../assets/images/ik1.jpg';
import ik2 from '../assets/images/ik2.jpg';
import ik3 from '../assets/images/ik3.jpg';
import ik4 from '../assets/images/ik4.jpg';
import b1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/b2.jpg';
import b3 from '../assets/images/b3.jpg';
import b4 from '../assets/images/b4.jpg';
import i11 from '../assets/images/11.jpg';
import i22 from '../assets/images/22.jpg';
import i33 from '../assets/images/33.jpg';
import i44 from '../assets/images/44.jpg';
import i55 from '../assets/images/55.jpg';
import i66 from '../assets/images/66.jpg';
import i77 from '../assets/images/77.jpg';
import i88 from '../assets/images/88.jpg';
import s1 from '../assets/images/s1.jpg';
import s2 from '../assets/images/s2.jpg';
import s3 from '../assets/images/s3.jpg';
import s4 from '../assets/images/s4.jpg';
import z from '../assets/images/z.jpg';
import x from '../assets/images/x.jpg';
import c from '../assets/images/c.jpg';
import v from '../assets/images/v.jpg';
import b from '../assets/images/b.jpg';
import n from '../assets/images/n.jpg';
import m from '../assets/images/m.jpg';

interface BlogPost {
  id: number;
  title: {
    el: string;
    en: string;
  };
  excerpt: {
    el: string;
    en: string;
  };
  date: string;
  author: string;
  readTime: string;
  images: any[];
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

const Blog = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // SEO Optimization
    document.title = language === 'el' 
      ? 'Blog Κατασκευών & Αρχιτεκτονικής | MAVRIDIS - Νέα & Άρθρα από την Κομοτηνή'
      : 'Construction & Architecture Blog | MAVRIDIS - News & Articles from Komotini';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Διαβάστε τα τελευταία νέα και άρθρα για κατασκευές, αρχιτεκτονική και ανακαινίσεις. Συμβουλές, τάσεις και έργα από το γραφείο MAVRIDIS στην Κομοτηνή. Ενημερωθείτε για τις εξελίξεις στον κατασκευαστικό κλάδο.'
        : 'Read the latest news and articles about construction, architecture and renovations. Tips, trends and projects from MAVRIDIS office in Komotini. Stay updated with developments in the construction industry.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Διαβάστε τα τελευταία νέα και άρθρα για κατασκευές, αρχιτεκτονική και ανακαινίσεις. Συμβουλές, τάσεις και έργα από το γραφείο MAVRIDIS στην Κομοτηνή. Ενημερωθείτε για τις εξελίξεις στον κατασκευαστικό κλάδο.'
        : 'Read the latest news and articles about construction, architecture and renovations. Tips, trends and projects from MAVRIDIS office in Komotini. Stay updated with developments in the construction industry.';
      document.head.appendChild(meta);
    }
  }, [language]);

  // Δημιουργούμε τα URLs για τις εικόνες
  const imageUrls = {
    ik: Array.from({ length: 4 }, (_, i) => 
      new URL(`../assets/images/ik${i + 1}.jpg`, import.meta.url).href
    ),
    ma: Array.from({ length: 4 }, (_, i) => 
      new URL(`../assets/images/ma${i + 1}.jpg`, import.meta.url).href
    ),
    w: Array.from({ length: 7 }, (_, i) => 
      new URL(`../assets/images/w${i + 1}.jpg`, import.meta.url).href
    )
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: {
        el: 'Νέο έργο: Προκατασκευασμένες Κατοικίες στον Προφήτη Ηλία',
        en: 'New Project: Prefabricated Houses in Profitis Ilias'
      },
      excerpt: {
        el: `Νέο έργο σε εξέλιξη: «Ανέγερση δύο όμοιων προκατασκευασμένων κατοικιών στον παραθεριστικό οικισμό Προφήτη Ηλία Δήμου Μαρώνειας Σαπών, ΠΕ Ροδόπης». Ολοκλήρωση βάσεων σκυροδέματος και εν αναμονή του μεταλλικού σκελετού κατοικιών.

Maroneia, Rodopi, Μαρώνεια, Προφήτης Ηλίας Ροδόπης

#αρχιτεκτονικοσσχεδιασμος #στατικημελετη #επιβλεψηεργου #κατασκευηεργου`,
        en: `New project in progress: "Construction of two identical prefabricated houses in the holiday settlement of Profitis Ilias, Municipality of Maroneia Sapon, Rodopi". Completion of concrete foundations and awaiting the metal frame of the houses.

Maroneia, Rodopi, Profitis Ilias Rodopi

#architecturaldesign #structuraldesign #constructionsupervision #construction`
      },
      date: '2024-02-16',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [z, x, c, v, b, n, m]
    },
    {
      id: 2,
      title: {
        el: 'Σύμβουλοι Μηχανικοί - Ολοκληρωμένες Υπηρεσίες',
        en: 'Engineering Consultants - Comprehensive Services'
      },
      excerpt: {
        el: `Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση. 

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

Σύμβουλοι μηχανικοί:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`,
        en: `Architectural Office, Civil Engineering Office MSc Civil Engineer. Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.`
      },
      date: '2024-02-15',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '5 min',
      images: [ik1, ik2, ik3, ik4]
    },
    {
      id: 3,
      title: {
        el: 'Ανέγερση Μονοκατοικίας στην Κομοτηνή - Αποπεράτωση Πλακών',
        en: 'House Construction in Komotini - Concrete Slab Completion'
      },
      excerpt: {
        el: `Ανέγερση μονοκατοικίας στην Κομοτηνή. Εξέλιξη κατασκευής- αποπεράτωση πλακών σκυροδέματος.

Σύμβουλοι μηχανικοί:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`,
        en: `House construction in Komotini. Construction progress - completion of concrete slabs.`
      },
      date: '2024-02-08',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [b1, b2, b3, b4]
    },
    {
      id: 4,
      title: {
        el: 'Ανέγερση Μονοκατοικίας - Εργασίες Αποπεράτωσης',
        en: 'House Construction - Completion Works'
      },
      excerpt: {
        el: `Ανέγερση μονοκατοικίας- εξέλιξη κατασκευής- επιχρίσματα, εργασίες αποπεράτωσης.

Σύμβουλοι μηχανικοί:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`,
        en: `House construction - construction progress - plastering, completion works.`
      },
      date: '2024-02-03',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [i11, i22, i33, i44, i55, i66, i77, i88]
    },
    {
      id: 5,
      title: {
        el: 'Τεχνικές Μελέτες & Υπηρεσίες',
        en: 'Technical Studies & Services'
      },
      excerpt: {
        el: `Σύμβουλοι μηχανικοι:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. 

Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση.

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`,
        en: `Engineering consultants:
@Yiannis Mavridis civil engineer
@Niki Mavridou architect engineer

Architectural Office, Civil Engineer Office MSc Civil Engineer.

Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.

Energy studies, REV property valuations, Legalization of Unauthorized Constructions, Business and shop Operating Licenses, Small-scale work permits, Category 3 permits, & all categories, Building Inspectors, Accessibility Inspectors, Building Identity, Certification - legality check for property transfers - contracts, Energy inspections & Energy Certificates, Accommodation Inspector, Submission of ESPA - LEADER investment plans, Private Project Construction, Renovations, Waterproofing of terraces - balconies - basements

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`
      },
      date: '2024-02-01',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '6 min',
      images: [e1, e2, e3, e4]
    },
    {
      id: 6,
      title: {
        el: 'Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ',
        en: 'Two-story House with Attic in Ektenepol'
      },
      excerpt: {
        el: `Ανέγερση διώροφου μονοκατοικίας με Σοφιτα- αρχιτεκτονική μελέτη- Εκτενεπολ ΖΕΠ Κομοτηνης

Σύμβουλοι μηχανικοι:
@Yiannis Mavridis πολιτικός μηχανικός
@Νίκη Μαυρίδου αρχιτέκτων μηχανικός

Αρχιτεκτονικό Γραφείο, Γραφείο Πολιτικού Μηχανικού MSc Civil Engineer. 

Αρχιτεκτονικές μελέτες, Στατικές μελέτες, Ενεργειακές μελέτες (ΚΕΝΑΚ), Μελέτες Ενίσχυσης & ΚΑΝΕΠΕ, Εφαρμογές Penetron, Μελέτες αποτίμησης φέρουσας ικανότητας υπάρχοντος κτιρίου, Μελέτες αποτίμησης για Προσθήκη ορόφου/ων, Πλήρεις Επιβλέψεις ανεγέρσεων με λεπτομέρειες κατασκευής και κοστολογήσεις σταδίων, Πλήρης διαχείριση εργοταξίου ως την αποπεράτωση.

Ενεργειακές μελέτες, Εκτιμήσεις REV ακινήτων, Νομιμοποιήσεις Αυθαιρέτων Κατασκευών, Άδειες Λειτουργίας επιχειρήσεων και καταστημάτων, Άδειες εργασιών Μικρής κλίμακας, Άδειες κατηγορίας 3, & όλων των κατηγοριών, Ελεγκτές Δόμησης, Ελεγκτές Προσβασιμότητας, Ταυτότητα κτιρίου, Βεβαίωση - έλεγχος νομιμότητας για μεταβιβάσεις ακινήτων - συμβόλαια, Ενεργειακές επιθεωρήσεις & Ενεργειακά Πιστοποιητικά, Επιθεωρητής Καταλυμάτων, Υποβολή επενδυτικών σχεδίων ΕΣΠΑ - LEADER, Κατασκευή Ιδιωτικών Έργων, Ανακαινίσεις, Μονώσεις ταρατσών - εξωστών - υπογείων

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`,
        en: `Construction of a two-story house with attic - architectural study - Ektenepol ZEP Komotini

Engineering consultants:
@Yiannis Mavridis civil engineer
@Niki Mavridou architect engineer

Architectural Office, Civil Engineer Office MSc Civil Engineer.

Architectural studies, Structural studies, Energy studies (KENAK), Reinforcement & KANEPE studies, Penetron applications, Existing building load-bearing capacity assessment studies, Floor addition assessment studies, Complete construction supervision with construction details and stage costing, Complete construction site management until completion.

Energy studies, REV property valuations, Legalization of Unauthorized Constructions, Business and shop Operating Licenses, Small-scale work permits, Category 3 permits, & all categories, Building Inspectors, Accessibility Inspectors, Building Identity, Certification - legality check for property transfers - contracts, Energy inspections & Energy Certificates, Accommodation Inspector, Submission of ESPA - LEADER investment plans, Private Project Construction, Renovations, Waterproofing of terraces - balconies - basements

http://www.in-mavridis.gr
https://www.instagram.com/komotini_architecture_engineer/

#eadeia #ektimiseis #taftotitaktiriou #ktimatologio #afthereta #propertyresearchgreece #buildingpermitsgreece #maronia #fanari #komotini`
      },
      date: '2024-01-30',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '5 min',
      images: [to, to1]
    },
    {
      id: 7,
      title: {
        el: 'Ολοκληρωμένες Υπηρεσίες Συμβούλων Μηχανικών',
        en: 'Comprehensive Engineering Consulting Services'
      },
      excerpt: {
        el: `Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης, αδειών λειτουργίας καταστημάτων, αυθαιρέτων, Ταυτότητα Κτιρίου, Πιστοποιημένες εκτιμήσεις REV, Στατικές Μελέτες, Εφαρμογή, Κοστολόγηση κατά στάδιο, Επίβλεψη με χρονικό προγραμματισμό, Διαχείριση εργοταξίου ανέγερσης - ανακαίνισης επιχειρήσεων/κατοικιών, Ειδίκευση σε διάβρωση σκυροδέματος, επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων.

Νίκη Μαυρίδου Αρχιτέκτονάς Μηχανικός Α.Π.Θ.
Ιωάννης Μαυρίδης, MSc Civil Engineer (αντιστ. Ε.Μ.Π.)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`,
        en: `Comprehensive engineering consulting services, Architectural design, Building legislation, business operation permits, unauthorized buildings, Building Identity, Certified REV valuations, Structural Studies, Implementation, Stage-by-stage costing, Supervision with time scheduling, Construction site management for business/residential construction - renovation, Specialization in concrete corrosion, interventions in older buildings, Building repairs.

Niki Mavridou Architect Engineer AUTH
Ioannis Mavridis, MSc Civil Engineer (equiv. NTUA)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`
      },
      date: '2024-01-20',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [q1, q2, q3, q4, q5, q6, q7, q8, q9]
    },
    {
      id: 8,
      title: {
        el: 'Εξειδικευμένες Κατασκευαστικές Λύσεις',
        en: 'Specialized Construction Solutions'
      },
      excerpt: {
        el: `Ολοκληρωμένες υπηρεσίες συμβούλων μηχανικών, Αρχιτεκτονική μελέτη, Νομοθεσία δόμησης, αδειών λειτουργίας καταστημάτων, αυθαιρέτων, Ταυτότητα Κτιρίου, Πιστοποιημένες εκτιμήσεις REV, Στατικές Μελέτες, Εφαρμογή, Κοστολόγηση κατά στάδιο, Επίβλεψη με χρονικό προγραμματισμό, Διαχείριση εργοταξίου ανέγερσης - ανακαίνισης επιχειρήσεων/κατοικιών, Ειδίκευση σε διάβρωση σκυροδέματος, επεμβάσεις σε παλαιότερα κτίσματα, Επισκευές κτιρίων.

Νίκη Μαυρίδου Αρχιτέκτονάς Μηχανικός Α.Π.Θ.
Ιωάννης Μαυρίδης, MSc Civil Engineer (αντιστ. Ε.Μ.Π.)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`,
        en: `Comprehensive engineering consulting services, Architectural design, Building legislation, business operation permits, unauthorized buildings, Building Identity, Certified REV valuations, Structural Studies, Implementation, Stage-by-stage costing, Supervision with time scheduling, Construction site management for business/residential construction - renovation, Specialization in concrete corrosion, interventions in older buildings, Building repairs.

Niki Mavridou Architect Engineer AUTH
Ioannis Mavridis, MSc Civil Engineer (equiv. NTUA)

#mavridis_architecture_engineer #mavridiskomotini #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`
      },
      date: '2024-01-10',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '4 min',
      images: [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11]
    },
    {
      id: 9,
      title: {
        el: 'Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή',
        en: 'Past Multi Storey Residential Projects in Komotini'
      },
      excerpt: {
        el: `Past multi storey residential projects. Komotini.

#mavridiskomotini #mavridis_architecture_engineer #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`,
        en: `Past multi storey residential projects. Komotini.

#mavridiskomotini #mavridis_architecture_engineer #archinima #nikimavridou #ioannismavridis #civilengineering #architecture #komotini`
      },
      date: '2024-01-05',
      author: 'Νίκη Μαυρίδου & Ιωάννης Μαυρίδης',
      readTime: '3 min',
      images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10]
    }
  ];

  // Ενημέρωση των slider settings
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <button
        className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300"
        aria-label={`Go to slide ${i + 1}`}
      />
    )
  };

  const modalSliderSettings: Settings = {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`
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
              {language === 'el' ? 'Το Ιστολόγιο μας' : 'Our Blog'}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {language === 'el' 
                ? 'Ανακαλύψτε τα τελευταία νέα, άρθρα και συμβουλές σχετικά με την αρχιτεκτονική και τις κατασκευές'
                : 'Discover our latest news, articles and tips about architecture and construction'
              }
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Blog Content */}
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {post.images.length > 0 && (
                  <div className="relative w-full h-96">
                    <Slider
                      {...sliderSettings}
                      className="relative"
                      aria-label="Blog post images slider"
                    >
                      {post.images.map((image, index) => (
                        <div key={index} className="outline-none h-96">
                          <div
                            className="w-full h-full cursor-pointer"
                            onClick={() => openImageModal(post.images, index)}
                          >
                            <img
                              src={image}
                              alt={`${post.title[language]} ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title[language]}
                  </h2>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {post.excerpt[language]}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-US')}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.article>
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
              <Slider
                {...modalSliderSettings}
                className="relative"
                aria-label="Blog post images slider"
              >
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

export default Blog; 