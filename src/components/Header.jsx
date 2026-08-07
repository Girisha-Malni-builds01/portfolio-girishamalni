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
  Sun, 
  Moon,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const navTabs = [
  { id: 'about', label: 'About & Profile', icon: User },
  { id: 'experience', label: 'Experience & Edu', icon: Briefcase },
  { id: 'research', label: 'Research Papers', icon: FileText },
  { id: 'projects', label: 'Projects & Hacks', icon: Code },
  { id: 'blogs', label: 'Medium Blogs', icon: BookOpen },
  { id: 'certs', label: 'Certificates & Honors', icon: Award },
  { id: 'passions', label: 'Music, Tea & Travel', icon: Heart },
];

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('about')}>
            <div className="relative">
              <img 
                src={personalInfo.images.headshot} 
                alt="Girisha Malni" 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-indigo-500/80 shadow-md shadow-indigo-500/20"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                  Girisha Malni N
                </h1>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  AI & CS
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                AI Systems | Research | Storyteller
              </p>
            </div>
          </div>

          {/* Desktop Multi-Tab Navigation (Inspired by Hitesh Kandala & Waricrew) */}
          <nav className="hidden lg:flex items-center bg-slate-900/60 p-1.5 rounded-full border border-slate-800 shadow-inner">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Quick Profiles) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick Links */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 rounded-full transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              title="Medium Blogs"
              className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800/80 rounded-full transition-colors"
            >
              <BookOpen className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noreferrer"
              title="Google Scholar"
              className="hidden sm:flex items-center space-x-1 px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-full transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>Scholar</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:bg-slate-800 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 space-y-2 animate-fadeIn">
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
                className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex justify-around text-slate-400">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-1 text-xs hover:text-white">
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-1 text-xs hover:text-white">
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
