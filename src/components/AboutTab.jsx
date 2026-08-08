import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  Globe, 
  BookOpen, 
  Music, 
  Coffee, 
  Compass, 
  Camera,
  Heart,
  Languages,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutTab({ setActiveTab }) {
  const [activePhoto, setActivePhoto] = useState(0);

  const photoList = [
    { src: personalInfo.images.headshot, label: "Professional", tag: "AI Systems Engineer" },
    { src: personalInfo.images.artistic, label: "Artistic Halftone", tag: "Storyteller & Creator" },
    { src: personalInfo.images.outdoor, label: "Travel & Explorer", tag: "Wanderlust Connoisseur" }
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Hero Section with Interactive Photo Card & Persona Badges */}
      <section className="relative overflow-hidden rounded-3xl glass-card p-6 sm:p-10 border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/40">
        
        {/* Subtle Carnatic Music & AI background watermark overlay */}
        <div className="absolute inset-0 bg-pattern-carnatic opacity-20 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Available for AI Systems Research & Engineering Roles</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-300 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {personalInfo.title}
              </p>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Computer Science student at VCET Madurai (CGPA 8.56/10.0). Specialized in Retrieval-Augmented Generation (RAG), Quantum Machine Learning, and ESG Intelligence. International research intern at <strong className="text-slate-200">Carleton University (Canada)</strong> and AI developer at <strong className="text-slate-200">DitchCarbon (Berlin)</strong>.
              </p>
            </div>

            {/* Persona Traits Badges */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Persona & Traits</span>
              <div className="flex flex-wrap gap-2">
                {personalInfo.traits.map((trait, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 hover:bg-indigo-600/30 text-slate-200 border border-slate-700/60 shadow-sm transition-all duration-200 cursor-default"
                  >
                    ✨ {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 pt-2 border-t border-slate-800/80">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-1.5 hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-600">•</span>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>
              <span className="text-slate-600">•</span>
              <div className="flex items-center space-x-1.5 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setActiveTab('research')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <span>View Publications (5)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-all hover:scale-105"
              >
                <span>Explore Projects & Hacks</span>
              </button>
            </div>

          </div>

          {/* Right Column: User Photos Switcher Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-amber-500 to-emerald-500 rounded-3xl blur opacity-30 animate-pulse-glow"></div>
              
              {/* Photo Display Card */}
              <div className="relative glass-card rounded-2xl overflow-hidden p-3 border border-slate-700 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                  <img
                    src={photoList[activePhoto].src}
                    alt={photoList[activePhoto].label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                      {photoList[activePhoto].tag}
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      {photoList[activePhoto].label}
                    </h3>
                  </div>
                </div>

                {/* Photo Selector Controls */}
                <div className="flex justify-between items-center mt-3 px-2">
                  <span className="text-xs font-medium text-slate-400">
                    Photo {activePhoto + 1} of {photoList.length}
                  </span>
                  <div className="flex space-x-1.5">
                    {photoList.map((photo, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhoto(i)}
                        className={`w-7 h-7 rounded-full text-xs font-bold transition-all ${
                          activePhoto === i 
                            ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 shadow-md' 
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Quick Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
          <div className="text-3xl font-extrabold text-indigo-400">5+</div>
          <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Research Papers</div>
          <div className="text-[10px] text-slate-500 mt-0.5">IEEE, Springer, Elsevier</div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center hover:border-emerald-500/40 transition-colors">
          <div className="text-3xl font-extrabold text-emerald-400">Top 7.6%</div>
          <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Amazon ML Challenge</div>
          <div className="text-[10px] text-slate-500 mt-0.5">AIR 1747 / 23,000 teams</div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center hover:border-amber-400/40 transition-colors">
          <div className="text-3xl font-extrabold text-amber-400">2 Global</div>
          <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">Internships</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Berlin & Carleton (Canada)</div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center hover:border-purple-500/40 transition-colors">
          <div className="text-3xl font-extrabold text-purple-400">8.56</div>
          <div className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">CGPA</div>
          <div className="text-[10px] text-slate-500 mt-0.5">B.E. Computer Science</div>
        </div>
      </div>

      {/* Passions & Cultural Vibe Watermark Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
            <Heart className="w-5 h-5 text-rose-400" />
            <span>Passions & What Defines Me</span>
          </h2>
          <button 
            onClick={() => setActiveTab('passions')}
            className="text-xs font-semibold text-indigo-400 hover:underline flex items-center space-x-1"
          >
            <span>Explore Full Gallery</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Carnatic Music */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="absolute right-2 bottom-2 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors">
              <Music className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-200">Carnatic Music</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connoisseur of classical Indian ragas, Veena strings, swara structures, and rhythmic patterns.
              </p>
            </div>
          </div>

          {/* Tea Connoisseur */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="absolute right-2 bottom-2 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
              <Coffee className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-200">Tea Connoisseur</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Passionate about artisanal tea brews, loose-leaf origins, steaming filter coffee, and deep work focus.
              </p>
            </div>
          </div>

          {/* Travel & Wanderlust */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="absolute right-2 bottom-2 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
              <Compass className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-200">Travel & Wanderlust</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exploring misty hill stations, heritage architecture, and global cultures from Ottawa to Berlin.
              </p>
            </div>
          </div>

          {/* Photography */}
          <div className="glass-card rounded-2xl p-5 border border-slate-800 relative overflow-hidden group hover:border-purple-500/50 transition-all">
            <div className="absolute right-2 bottom-2 text-purple-500/10 group-hover:text-purple-500/20 transition-colors">
              <Camera className="w-24 h-24" />
            </div>
            <div className="relative z-10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-200">Photography</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capturing vivid stories through lens, golden light, perspective framing, and creative writing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Languages & Leadership Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Languages Spoken */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-slate-100 flex items-center space-x-2">
            <Languages className="w-5 h-5 text-indigo-400" />
            <span>Languages Spoken</span>
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {personalInfo.languages.map((lang, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-200">{lang.name}</span>
                <span className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Storytelling & Collaborative Philosophy */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-slate-800 space-y-4 bg-gradient-to-r from-slate-900/80 to-indigo-950/30">
          <h3 className="text-base font-bold text-slate-100 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span>Storytelling & Technical Vision</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            "I believe AI engineering is fundamentally an act of structured storytelling. Whether designing a Graph RAG pipeline for ESG compliance, variational quantum circuits for classification, or presenting research at IEEE conferences — clarity, collaboration, and human intuition drive true technological impact."
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Placement Batch Head (180+ students)</span>
            </div>
            <div className="flex items-center space-x-1.5 text-amber-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>President, ECO Club</span>
            </div>
            <div className="flex items-center space-x-1.5 text-indigo-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Webmaster, ACM Student Chapter</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
