import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  BookOpen, 
  Code, 
  GraduationCap, 
  Globe, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Award, 
  Music, 
  Coffee, 
  Compass, 
  Camera, 
  FileText,
  Tag,
  ChevronRight,
  Heart
} from 'lucide-react';
import { personalInfo, experiences, researchPapers, projects, mediumBlogs, honorsAndHackathons, skillsList } from './data/portfolioData';
import { GithubIcon, LinkedinIcon } from './components/SocialIcons';

export default function App() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');

  // Categorized skills with icons matching screenshot
  const skillCategories = [
    { name: 'All Skills', count: 32 },
    { name: 'AI/ML/DL', count: 9 },
    { name: 'Quantum & Systems', count: 6 },
    { name: 'Languages', count: 5 },
    { name: 'Tools & DBs', count: 7 },
    { name: 'Passions', count: 5 }
  ];

  const allSkills = [
    { name: 'PyTorch', cat: 'AI/ML/DL', icon: '🔥' },
    { name: 'Transformers', cat: 'AI/ML/DL', icon: '🤗' },
    { name: 'RAG Architecture', cat: 'AI/ML/DL', icon: '🔍' },
    { name: 'LlamaIndex', cat: 'AI/ML/DL', icon: '🦙' },
    { name: 'Qdrant Vector DB', cat: 'AI/ML/DL', icon: '⚡' },
    { name: 'FAISS', cat: 'AI/ML/DL', icon: '🎯' },
    { name: 'HuggingFace', cat: 'AI/ML/DL', icon: '🤗' },
    { name: 'CrewAI', cat: 'AI/ML/DL', icon: '🤖' },
    { name: 'Scikit-learn', cat: 'AI/ML/DL', icon: '📊' },

    { name: 'Qiskit (Quantum)', cat: 'Quantum & Systems', icon: '⚛️' },
    { name: 'QML', cat: 'Quantum & Systems', icon: '🌀' },
    { name: 'Quantum Error Correction', cat: 'Quantum & Systems', icon: '🛡️' },
    { name: 'Discourse Graphs', cat: 'Quantum & Systems', icon: '🕸️' },
    { name: 'HyperRAG', cat: 'Quantum & Systems', icon: '🚀' },

    { name: 'Python', cat: 'Languages', icon: '🐍' },
    { name: 'Java', cat: 'Languages', icon: '☕' },
    { name: 'SQL', cat: 'Languages', icon: '🗄️' },
    { name: 'JavaScript', cat: 'Languages', icon: '⚡' },
    { name: 'C/C++', cat: 'Languages', icon: '💻' },

    { name: 'MongoDB', cat: 'Tools & DBs', icon: '🍃' },
    { name: 'MySQL', cat: 'Tools & DBs', icon: '🐬' },
    { name: 'Git & GitHub', cat: 'Tools & DBs', icon: '🐙' },
    { name: 'MATLAB', cat: 'Tools & DBs', icon: '📐' },
    { name: 'Apache Airflow', cat: 'Tools & DBs', icon: '🌪️' },
    { name: 'Kafka', cat: 'Tools & DBs', icon: '📡' },
    { name: 'Streamlit', cat: 'Tools & DBs', icon: '🎈' },

    { name: 'Carnatic Ragas 🎵', cat: 'Passions', icon: '🎻' },
    { name: 'Loose-Leaf Tea ☕', cat: 'Passions', icon: '🍵' },
    { name: 'Travel & Exploration ✈️', cat: 'Passions', icon: '🧭' },
    { name: 'Photography 📷', cat: 'Passions', icon: '📷' },
    { name: 'Storytelling & Writing ✍️', cat: 'Passions', icon: '📜' }
  ];

  const filteredSkills = allSkills.filter(s => {
    if (selectedSkillCategory === 'All Skills' || selectedSkillCategory === 'All') return true;
    return s.cat === selectedSkillCategory;
  });

  const newsUpdates = [
    {
      date: 'Aug 2026',
      title: 'Paper Accepted at QUANCOM 2026 (Univ of Trento, Italy)',
      desc: 'QFIM-Guided Variational Quantum Prototype Learning for Explainable Classification accepted in Springer Proceedings.',
      tag: 'Paper',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      date: 'Mar 2026',
      title: 'Won Special Prize at ACM KARE HackOdyssey 3.0',
      desc: 'Engineered an AI agent prototype for autonomous environmental compliance within 36 hackathon hours (4th Place / 90 Teams).',
      tag: 'Milestone',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      date: 'Mar 2026',
      title: 'First Prize Best Paper Award at Paradigm 2026 (TCE)',
      desc: 'Awarded Best Paper for CurvOpt-LLM: Curvature-optimized LLM quantization and prompt retrieval optimization.',
      tag: 'Award',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      date: 'Jan 2026',
      title: 'Completed AI Developer Internship at DitchCarbon (Berlin)',
      desc: 'Built a multi-document RAG pipeline using LlamaIndex and OpenAI text-embedding-3-small for automated ESG metric scoring.',
      tag: 'Experience',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans antialiased selection:bg-slate-900 selection:text-white pb-24">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        
        {/* Main Grid: Left Column (Profile & Links) + Right Column (Content) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          
          {/* LEFT SIDEBAR (Matching Hitesh Kandala Layout) */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Name & Photo */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Girisha Kandala / Malni N
              </h1>
              
              <img 
                src={personalInfo.images.headshot} 
                alt="Girisha Malni N" 
                className="w-40 h-44 rounded-lg object-cover border border-slate-200 shadow-sm"
              />
            </div>

            {/* Lowercase Text Links (Matching Hitesh's Left Nav) */}
            <div className="space-y-1.5 text-xs text-slate-600 font-medium">
              <div>
                <a 
                  href={personalInfo.medium} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-red-700 transition-colors"
                >
                  medium blog
                </a>
              </div>
              <div>
                <a 
                  href={personalInfo.scholar} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-red-700 transition-colors"
                >
                  google scholar
                </a>
              </div>
              <div>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="hover:text-red-700 transition-colors"
                >
                  email address
                </a>
              </div>
              <div>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-red-700 transition-colors"
                >
                  github profile
                </a>
              </div>
              <div>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-red-700 transition-colors"
                >
                  linkedin
                </a>
              </div>
            </div>

            {/* Section Shortcuts */}
            <div className="pt-4 space-y-1.5 text-xs text-slate-500 font-medium border-t border-slate-200/80">
              <div>
                <a href="#news" className="hover:text-slate-900 transition-colors">news & updates</a>
              </div>
              <div>
                <a href="#publications" className="hover:text-slate-900 transition-colors">publications</a>
              </div>
              <div>
                <a href="#skills" className="hover:text-slate-900 transition-colors">skills & passions</a>
              </div>
              <div>
                <a href="#writings" className="hover:text-slate-900 transition-colors">medium stories</a>
              </div>
              <div>
                <a href="#projects" className="hover:text-slate-900 transition-colors">projects & experience</a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="md:col-span-8 space-y-10">
            
            {/* HERO BIO (EXACT TEXT FROM USER REQUEST) */}
            <section id="about" className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Hi! This is Girisha, welcome to my space! I am a <strong>Builder at the intersection of Code and Curiosity</strong>. Engineer, storyteller and connoisseur of the small good things: a good carnatic raga, a good cup of tea, a good conversation, a good book. I build things, I write about what I learn and I'm always halfway packed for the next new experience. Big believer in learning out loud — you'll find me writing about what I pick up along the way on Medium.
              </p>
              
              <div className="pt-2 text-xs font-semibold text-slate-800 bg-slate-100/80 p-3 rounded-lg border border-slate-200/80">
                <span className="text-red-700 uppercase font-bold tracking-wider text-[11px] block mb-1">Currently exploring:</span>
                <span className="text-slate-700 font-medium">
                  AI Systems · Multimodal AI · Computer Vision · RAG · Physical AI
                </span>
              </div>
            </section>

            {/* NEWS & UPDATES SECTION (Matching Hitesh Kandala UI) */}
            <section id="news" className="space-y-3">
              <h2 className="text-sm font-bold text-red-800 tracking-tight">
                News & Updates
              </h2>

              <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm max-h-72 overflow-y-auto space-y-4">
                {newsUpdates.map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-xs border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0"></span>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-red-800">{item.date}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${item.tagColor}`}>
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-xs">{item.title}</h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PUBLICATIONS (Matching Screenshot 1 Layout) */}
            <section id="publications" className="space-y-3">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                Publications & Preprints
              </h2>

              <div className="space-y-3">
                {researchPapers.map((paper) => (
                  <div 
                    key={paper.id} 
                    className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-2 hover:border-slate-300 transition-colors shadow-sm"
                  >
                    <div className="flex justify-between items-center text-[11px] text-slate-400">
                      <span>{paper.venue} • {paper.location}</span>
                      <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        {paper.status}
                      </span>
                    </div>

                    <h3 className="text-xs font-bold text-slate-900 leading-snug">
                      {paper.title}
                    </h3>

                    <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {paper.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS & PASSIONS (Matching Screenshot 1 Skills Category Chips Layout) */}
            <section id="skills" className="space-y-4">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                Skills & Passions
              </h2>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedSkillCategory(cat.name)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      selectedSkillCategory === cat.name
                        ? 'bg-slate-900 text-white shadow-sm font-bold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                    }`}
                  >
                    {cat.name} <span className="text-[10px] opacity-80">{cat.count}</span>
                  </button>
                ))}
              </div>

              {/* Skills Badges Grid (Matching Screenshot 1 Pill Badges) */}
              <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-800 text-xs font-medium border border-slate-200/90 hover:bg-slate-100 transition-colors shadow-2xs"
                    >
                      <span className="text-xs">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* MEDIUM ARTICLES */}
            <section id="writings" className="space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                  Medium Articles & Essays
                </h2>
                <a 
                  href={personalInfo.medium} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-red-700 hover:underline font-semibold flex items-center space-x-1"
                >
                  <span>Medium Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mediumBlogs.map((blog) => (
                  <a
                    key={blog.id}
                    href={blog.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-xl border border-slate-200/90 overflow-hidden hover:border-slate-300 transition-all group flex flex-col justify-between shadow-sm"
                  >
                    <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                      <img 
                        src={blog.thumbnail} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 space-y-1">
                      <div className="text-[10px] text-slate-400 font-medium">
                        {blog.date} • {blog.readTime}
                      </div>
                      <h3 className="text-xs font-bold text-slate-900 group-hover:text-red-700 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {blog.snippet}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* PROJECTS & EXPERIENCE */}
            <section id="projects" className="space-y-4">
              <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                Featured Projects & Roles
              </h2>

              <div className="space-y-3">
                {projects.map((proj, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-1 shadow-sm">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-bold text-slate-900">{proj.title}</h3>
                      <span className="text-[10px] text-slate-400">{proj.period}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

      </div>

      {/* FLOATING BOTTOM PILL NAVIGATION BAR (Matching Screenshot 1 Bottom Bar) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1 text-xs font-semibold text-slate-700">
          <a href="#about" className="flex items-center space-x-1 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-600" />
            <span>Home</span>
          </a>
          <a href="#about" className="flex items-center space-x-1 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors">
            <User className="w-3.5 h-3.5 text-slate-600" />
            <span>About</span>
          </a>
          <a href="#news" className="flex items-center space-x-1 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors">
            <Briefcase className="w-3.5 h-3.5 text-slate-600" />
            <span>Work</span>
          </a>
          <a href="#writings" className="flex items-center space-x-1 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors">
            <BookOpen className="w-3.5 h-3.5 text-slate-600" />
            <span>Blog</span>
          </a>
          <a href="#projects" className="flex items-center space-x-1 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors">
            <Code className="w-3.5 h-3.5 text-slate-600" />
            <span>Projects</span>
          </a>
          <a href="#publications" className="flex items-center space-x-1 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors">
            <GraduationCap className="w-3.5 h-3.5 text-slate-600" />
            <span>Research</span>
          </a>
        </div>
      </div>

    </div>
  );
}
