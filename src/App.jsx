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

  // Scroll to top when switching tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 font-sans antialiased selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
      
      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Floating Navigation Header */}
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Tab Content Area */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
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
