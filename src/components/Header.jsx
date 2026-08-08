import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  FileText, 
  Code, 
  BookOpen, 
  Award, 
  Heart, 
  Mail, 
  Phone, 
  Globe, 
  Menu,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const navTabs = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'research', label: 'Research', icon: FileText },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'blogs', label: 'Medium', icon: BookOpen },
  { id: 'certs', label: 'Honors', icon: Award },
  { id: 'passions', label: 'Passions', icon: Heart },
];

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 clean-nav transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('about')}>
            <div className="relative">
              <img 
                src={personalInfo.images.headshot} 
                alt="Girisha Malni" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-300 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Girisha Malni N
                </h1>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  AI & CS
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Multi-Tab Navigation */}
          <nav className="hidden lg:flex items-center bg-slate-100/80 p-1 rounded-full border border-slate-200/80">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-indigo-600 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Quick Profiles) */}
          <div className="flex items-center space-x-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              title="Medium Blogs"
              className="p-2 text-slate-600 hover:text-amber-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <BookOpen className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noreferrer"
              title="Google Scholar"
              className="hidden sm:flex items-center space-x-1 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>Scholar</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex justify-around text-slate-500">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-1 text-xs hover:text-slate-900">
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-1 text-xs hover:text-slate-900">
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
