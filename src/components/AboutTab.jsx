import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Music, 
  Coffee, 
  Compass, 
  Camera,
  Heart,
  Languages,
  CheckCircle2,
  ChevronRight,
  Zap,
  ArrowUpRight
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
    <div className="space-y-10 animate-fadeIn">
      
      {/* Hero Section Card */}
      <section className="clean-card rounded-2xl p-6 sm:p-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Available for AI Systems Research & Engineering Roles</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Hi, I'm <span className="text-indigo-600">{personalInfo.name}</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-700">
                {personalInfo.title}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Computer Science Engineer at VCET Madurai (CGPA 8.56/10.0). Specialized in Retrieval-Augmented Generation (RAG), Quantum Machine Learning, and ESG Intelligence. International research intern at <strong className="text-slate-900">Carleton University (Canada)</strong> and AI developer at <strong className="text-slate-900">DitchCarbon (Berlin)</strong>.
              </p>
            </div>

            {/* Persona Traits Badges */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Persona & Traits</span>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.traits.map((trait, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    ✨ {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 pt-3 border-t border-slate-100">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-1.5 hover:text-indigo-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-300">•</span>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-1.5 hover:text-emerald-600 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{personalInfo.phone}</span>
              </a>
              <span className="text-slate-300">•</span>
              <div className="flex items-center space-x-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setActiveTab('research')}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all"
              >
                <span>View Publications (5)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-all"
              >
                <span>Explore Projects</span>
              </button>
            </div>

          </div>

          {/* Right Column: User Photos Switcher Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-xs clean-card rounded-2xl p-2.5 bg-white">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                <img
                  src={photoList[activePhoto].src}
                  alt={photoList[activePhoto].label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                    {photoList[activePhoto].tag}
                  </span>
                  <h3 className="text-xs font-semibold">
                    {photoList[activePhoto].label}
                  </h3>
                </div>
              </div>

              {/* Photo Selector Controls */}
              <div className="flex justify-between items-center mt-2.5 px-1">
                <span className="text-[11px] font-medium text-slate-500">
                  Photo {activePhoto + 1} of {photoList.length}
                </span>
                <div className="flex space-x-1">
                  {photoList.map((photo, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhoto(i)}
                      className={`w-6 h-6 rounded-full text-xs font-bold transition-all ${
                        activePhoto === i 
                          ? 'bg-indigo-600 text-white shadow-sm' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
      </section>

      {/* Quick Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="clean-card rounded-xl p-4 text-center bg-white">
          <div className="text-2xl font-extrabold text-indigo-600">5+</div>
          <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">Research Papers</div>
          <div className="text-[10px] text-slate-500 mt-0.5">IEEE, Springer, Elsevier</div>
        </div>

        <div className="clean-card rounded-xl p-4 text-center bg-white">
          <div className="text-2xl font-extrabold text-emerald-600">Top 7.6%</div>
          <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">Amazon ML Challenge</div>
          <div className="text-[10px] text-slate-500 mt-0.5">AIR 1747 / 23,000 teams</div>
        </div>

        <div className="clean-card rounded-xl p-4 text-center bg-white">
          <div className="text-2xl font-extrabold text-amber-600">2 Global</div>
          <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">Internships</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Berlin & Carleton (Canada)</div>
        </div>

        <div className="clean-card rounded-xl p-4 text-center bg-white">
          <div className="text-2xl font-extrabold text-purple-600">8.56</div>
          <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">CGPA</div>
          <div className="text-[10px] text-slate-500 mt-0.5">B.E. Computer Science</div>
        </div>
      </div>

      {/* Passions Grid */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Passions & Cultural Interests</span>
          </h2>
          <button 
            onClick={() => setActiveTab('passions')}
            className="text-xs font-semibold text-indigo-600 hover:underline flex items-center space-x-1"
          >
            <span>Explore Full Gallery</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Carnatic Music */}
          <div className="clean-card rounded-xl p-4 bg-white space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Music className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Carnatic Music</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connoisseur of classical Indian ragas, Veena strings, swara structures, and rhythmic patterns.
            </p>
          </div>

          {/* Tea Connoisseur */}
          <div className="clean-card rounded-xl p-4 bg-white space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <Coffee className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Tea Connoisseur</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Passionate about artisanal tea brews, loose-leaf origins, steaming filter coffee, and deep work focus.
            </p>
          </div>

          {/* Travel & Wanderlust */}
          <div className="clean-card rounded-xl p-4 bg-white space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Travel & Wanderlust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exploring misty hill stations, heritage architecture, and global cultures from Ottawa to Berlin.
            </p>
          </div>

          {/* Photography */}
          <div className="clean-card rounded-xl p-4 bg-white space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
              <Camera className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Photography</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capturing vivid stories through lens, golden light, perspective framing, and creative writing.
            </p>
          </div>

        </div>
      </section>

      {/* Languages & Leadership Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Languages Spoken */}
        <div className="lg:col-span-5 clean-card rounded-xl p-5 bg-white space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
            <Languages className="w-4 h-4 text-indigo-600" />
            <span>Languages Spoken</span>
          </h3>

          <div className="grid grid-cols-2 gap-2">
            {personalInfo.languages.map((lang, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800">{lang.name}</span>
                <span className="text-[10px] font-semibold text-slate-500 px-1.5 py-0.5 rounded bg-white border border-slate-200">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Storytelling & Technical Vision */}
        <div className="lg:col-span-7 clean-card rounded-xl p-5 bg-white space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Storytelling & Technical Vision</span>
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            "I believe AI engineering is fundamentally an act of structured storytelling. Whether designing a Graph RAG pipeline for ESG compliance, variational quantum circuits for classification, or presenting research at IEEE conferences — clarity, collaboration, and human intuition drive true technological impact."
          </p>
          <div className="pt-1 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center space-x-1 text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Placement Batch Head</span>
            </div>
            <div className="flex items-center space-x-1 text-amber-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>President, ECO Club</span>
            </div>
            <div className="flex items-center space-x-1 text-indigo-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Webmaster, ACM Chapter</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
