import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ArchitecturalOffice from './pages/ArchitecturalOffice';
import RealEstateValuation from './pages/RealEstateValuation';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import EngineeringServices from './pages/EngineeringServices';
import Blog from './pages/Blog';

function App() {
  return (
    <LanguageProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/architectural-office" element={<ArchitecturalOffice />} />
              <Route path="/engineering-services" element={<EngineeringServices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;