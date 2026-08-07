import React from 'react';
import { BookOpen, Globe, Mail, Phone, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ setActiveTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/80 text-slate-400 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left info */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-base font-bold text-slate-200">Girisha Malni N</h3>
            <p className="text-xs text-slate-400 max-w-md">
              Computer Science Engineer | AI Systems, RAG Architectures & Quantum Machine Learning.
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-indigo-500 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 transition-colors"
              title="Medium"
            >
              <BookOpen className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 transition-colors"
              title="Google Scholar"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold pt-4 border-t border-slate-900">
          <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">About</button>
          <span>•</span>
          <button onClick={() => setActiveTab('experience')} className="hover:text-white transition-colors">Experience</button>
          <span>•</span>
          <button onClick={() => setActiveTab('research')} className="hover:text-white transition-colors">Research</button>
          <span>•</span>
          <button onClick={() => setActiveTab('projects')} className="hover:text-white transition-colors">Projects & Hacks</button>
          <span>•</span>
          <button onClick={() => setActiveTab('blogs')} className="hover:text-white transition-colors">Medium Blogs</button>
          <span>•</span>
          <button onClick={() => setActiveTab('certs')} className="hover:text-white transition-colors">Certificates</button>
          <span>•</span>
          <button onClick={() => setActiveTab('passions')} className="hover:text-white transition-colors">Culture & Passions</button>
        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 pt-4 border-t border-slate-900">
          <p>© {new Date().getFullYear()} Girisha Malni N. All rights reserved. Deployed on Vercel.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
