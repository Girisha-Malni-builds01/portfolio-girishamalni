import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutTab from './components/AboutTab';
import ExperienceTab from './components/ExperienceTab';
import ResearchTab from './components/ResearchTab';
import ProjectsTab from './components/ProjectsTab';
import MediumBlogsTab from './components/MediumBlogsTab';
import CertificationsTab from './components/CertificationsTab';
import PassionsTab from './components/PassionsTab';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(true);

  // Scroll to top when switching tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      
      {/* Background Seamless Layered Watermarks */}
      <div className="fixed inset-0 bg-pattern-carnatic opacity-[0.07] pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-pattern-travel opacity-[0.04] pointer-events-none z-0"></div>

      {/* Ambient Gradient Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Floating Navigation Header */}
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        {/* Tab Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {activeTab === 'about' && <AboutTab setActiveTab={setActiveTab} />}
          {activeTab === 'experience' && <ExperienceTab />}
          {activeTab === 'research' && <ResearchTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'blogs' && <MediumBlogsTab />}
          {activeTab === 'certs' && <CertificationsTab />}
          {activeTab === 'passions' && <PassionsTab />}
        </main>

        {/* Footer */}
        <Footer setActiveTab={setActiveTab} />

      </div>

    </div>
  );
}
