import React from 'react';
import { BookOpen, Globe, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ setActiveTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white text-slate-600 text-xs py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left info */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-sm font-bold text-slate-900">Girisha Malni N</h3>
            <p className="text-xs text-slate-500 max-w-md">
              Computer Science Engineer | AI Systems, RAG Architectures & Quantum Machine Learning.
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center space-x-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 transition-colors border border-slate-200"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-amber-600 transition-colors border border-slate-200"
              title="Medium"
            >
              <BookOpen className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-emerald-600 transition-colors border border-slate-200"
              title="Google Scholar"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-3 text-xs font-medium pt-3 border-t border-slate-100">
          <button onClick={() => setActiveTab('about')} className="hover:text-slate-900 transition-colors">About</button>
          <span>•</span>
          <button onClick={() => setActiveTab('experience')} className="hover:text-slate-900 transition-colors">Experience</button>
          <span>•</span>
          <button onClick={() => setActiveTab('research')} className="hover:text-slate-900 transition-colors">Research</button>
          <span>•</span>
          <button onClick={() => setActiveTab('projects')} className="hover:text-slate-900 transition-colors">Projects</button>
          <span>•</span>
          <button onClick={() => setActiveTab('blogs')} className="hover:text-slate-900 transition-colors">Medium Blogs</button>
          <span>•</span>
          <button onClick={() => setActiveTab('certs')} className="hover:text-slate-900 transition-colors">Honors</button>
          <span>•</span>
          <button onClick={() => setActiveTab('passions')} className="hover:text-slate-900 transition-colors">Passions</button>
        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-400 pt-3 border-t border-slate-100">
          <p>© {new Date().getFullYear()} Girisha Malni N. All rights reserved. Ready for Vercel deployment.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-slate-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
