import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  FileText, 
  BookOpen, 
  Code, 
  Sparkles, 
  Globe, 
  Mail, 
  ExternalLink, 
  Music, 
  Coffee, 
  Compass, 
  Camera, 
  ChevronRight,
  ChevronLeft,
  ChevronRightIcon
} from 'lucide-react';
import { personalInfo, experiences, researchPapers, projects, mediumBlogs, honorsAndHackathons } from './data/portfolioData';
import { GithubIcon, LinkedinIcon } from './components/SocialIcons';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  // Automatic Sliding Profile Photos (Slideshow every 3.5 seconds)
  const photoSlides = [
    { src: personalInfo.images.headshot, label: "Outdoor Travel (Coloured)" },
    { src: personalInfo.images.bluePortrait, label: "Blue Halftone Portrait" },
    { src: personalInfo.images.artistic, label: "Orange Halftone Portrait" }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % photoSlides.length);
    }, 3500);
    return () => clearInterval(slideTimer);
  }, [photoSlides.length]);

  // Clean Technical Stack (Airflow, Kafka, JavaScript, C/C++ removed as requested)
  const techSkills = [
    { name: 'PyTorch', cat: 'AI / ML / DL', icon: '🔥' },
    { name: 'Transformers', cat: 'AI / ML / DL', icon: '🤗' },
    { name: 'RAG Architecture', cat: 'AI / ML / DL', icon: '🔍' },
    { name: 'LlamaIndex', cat: 'AI / ML / DL', icon: '🦙' },
    { name: 'Qdrant Vector DB', cat: 'AI / ML / DL', icon: '⚡' },
    { name: 'FAISS', cat: 'AI / ML / DL', icon: '🎯' },
    { name: 'HuggingFace', cat: 'AI / ML / DL', icon: '🤗' },
    { name: 'CrewAI', cat: 'AI / ML / DL', icon: '🤖' },
    { name: 'Scikit-learn', cat: 'AI / ML / DL', icon: '📊' },
    { name: 'OpenCV & Computer Vision', cat: 'AI / ML / DL', icon: '👁️' },

    { name: 'Qiskit (Quantum)', cat: 'Quantum & Systems', icon: '⚛️' },
    { name: 'QML (Quantum ML)', cat: 'Quantum & Systems', icon: '🌀' },
    { name: 'Quantum Error Correction', cat: 'Quantum & Systems', icon: '🛡️' },
    { name: 'Discourse Graphs', cat: 'Quantum & Systems', icon: '🕸️' },
    { name: 'HyperRAG', cat: 'Quantum & Systems', icon: '🚀' },

    { name: 'Python', cat: 'Languages', icon: '🐍' },
    { name: 'Java', cat: 'Languages', icon: '☕' },
    { name: 'SQL', cat: 'Languages', icon: '🗄️' },

    { name: 'MongoDB', cat: 'Databases & Tools', icon: '🍃' },
    { name: 'MySQL', cat: 'Databases & Tools', icon: '🐬' },
    { name: 'Git & GitHub', cat: 'Databases & Tools', icon: '🐙' },
    { name: 'MATLAB', cat: 'Databases & Tools', icon: '📐' },
    { name: 'Streamlit', cat: 'Databases & Tools', icon: '🎈' }
  ];

  // Non-Tech Passions (No descriptions as requested, just simple chips)
  const nonTechPassions = [
    { title: "Carnatic Music", icon: "🎵" },
    { title: "Tea Connoisseur", icon: "☕" },
    { title: "Travel & Wanderlust", icon: "✈️" },
    { title: "Photography", icon: "📷" },
    { title: "Storytelling & Writing", icon: "✍️" }
  ];

  const topNavTabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'internships', label: 'Internships & Work', icon: Briefcase },
    { id: 'research', label: 'Research Papers', icon: FileText },
    { id: 'medium', label: 'Medium Stories', icon: BookOpen },
    { id: 'projects', label: 'Projects & Code', icon: Code },
    { id: 'skills', label: 'Skills & Passions', icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans antialiased selection:bg-slate-900 selection:text-white pb-16">
      
      {/* TOP TAB NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('about')}>
            <img 
              src={photoSlides[currentSlideIndex].src} 
              alt="Girisha Malni Nagendran" 
              className="w-9 h-9 rounded-full object-cover border border-slate-300 transition-all duration-500"
            />
            <span className="font-extrabold text-sm text-slate-900 tracking-tight">
              Girisha Malni Nagendran
            </span>
          </div>

          {/* Clean Top Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto py-1">
            {topNavTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

        </div>
      </header>

      {/* Main Grid: Left Sidebar + Right Tab Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* LEFT SIDEBAR */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Name & AUTOMATIC SLIDING PROFILE PHOTOS */}
            <div className="space-y-3">
              <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Girisha Malni Nagendran
              </h1>
              
              {/* Automatic Sliding Carousel Frame */}
              <div className="relative w-full aspect-[4/5] max-w-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 group">
                {photoSlides.map((slide, idx) => (
                  <img
                    key={idx}
                    src={slide.src}
                    alt={slide.label}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}

                {/* Carousel Controls & Indicators */}
                <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center space-x-1.5">
                  {photoSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlideIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentSlideIndex ? 'w-5 bg-white shadow' : 'w-1.5 bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[10px] font-medium text-slate-400 block">
                🔄 Sliding Photo Showcase ({currentSlideIndex + 1}/3)
              </span>
            </div>

            {/* Sentence Case Text Links WITH ICONS */}
            <div className="space-y-2 text-xs font-semibold text-slate-700 pt-2 border-t border-slate-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Connect & Media</span>
              
              <div>
                <a 
                  href={personalInfo.medium} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-2 text-slate-700 hover:text-red-700 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Medium Blog</span>
                </a>
              </div>

              <div>
                <a 
                  href={personalInfo.scholar} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-2 text-slate-700 hover:text-red-700 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Google Scholar</span>
                </a>
              </div>

              <div>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="inline-flex items-center space-x-2 text-slate-700 hover:text-red-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Email Address</span>
                </a>
              </div>

              <div>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-2 text-slate-700 hover:text-red-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              <div>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-2 text-slate-700 hover:text-red-700 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Sidebar Tab Shortcuts in Sentence Case */}
            <div className="pt-3 space-y-1.5 text-xs text-slate-600 font-semibold border-t border-slate-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Navigation Sections</span>
              <div>
                <button onClick={() => setActiveTab('about')} className={`hover:text-slate-900 transition-colors ${activeTab === 'about' ? 'text-indigo-600 font-bold' : ''}`}>About Me</button>
              </div>
              <div>
                <button onClick={() => setActiveTab('internships')} className={`hover:text-slate-900 transition-colors ${activeTab === 'internships' ? 'text-indigo-600 font-bold' : ''}`}>Work & Internships</button>
              </div>
              <div>
                <button onClick={() => setActiveTab('research')} className={`hover:text-slate-900 transition-colors ${activeTab === 'research' ? 'text-indigo-600 font-bold' : ''}`}>Research & Papers</button>
              </div>
              <div>
                <button onClick={() => setActiveTab('medium')} className={`hover:text-slate-900 transition-colors ${activeTab === 'medium' ? 'text-indigo-600 font-bold' : ''}`}>Medium Stories</button>
              </div>
              <div>
                <button onClick={() => setActiveTab('projects')} className={`hover:text-slate-900 transition-colors ${activeTab === 'projects' ? 'text-indigo-600 font-bold' : ''}`}>Projects & Code</button>
              </div>
              <div>
                <button onClick={() => setActiveTab('skills')} className={`hover:text-slate-900 transition-colors ${activeTab === 'skills' ? 'text-indigo-600 font-bold' : ''}`}>Skills & Passions</button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: TAB-BASED CONTENT AREA */}
          <div className="md:col-span-8 space-y-8">
            
            {/* TAB 1: ABOUT (Hero Bio with Trait Badges, Outgoing removed, Star emoji removed, Researcher added) */}
            {activeTab === 'about' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs">
                  
                  <div className="space-y-1 pb-2 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-900">
                      Builder at the intersection of Code and Curiosity
                    </h2>
                    <p className="text-xs font-medium text-slate-500">
                      Computer Science Engineer • Storyteller • Connoisseur
                    </p>
                  </div>

                  <p className="leading-relaxed">
                    Engineer, storyteller and connoisseur of the small good things: a good carnatic raga, a good cup of tea, a good conversation, a good book. I build things, I write about what I learn and I'm always halfway packed for the next new experience. Big believer in learning out loud — you'll find me writing about what I pick up along the way on Medium.
                  </p>

                  <div className="pt-2 text-xs font-semibold text-slate-800 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                    <span className="text-red-700 uppercase font-bold tracking-wider text-[11px] block mb-1">Currently exploring:</span>
                    <span className="text-slate-800 font-medium">
                      AI Systems · Multimodal AI · Computer Vision · RAG · Physical AI
                    </span>
                  </div>

                  {/* Clean Trait Chips: Outgoing removed, star emoji removed, Researcher added! */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {personalInfo.traits.map((trait, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Quick Highlights Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setActiveTab('internships')} 
                    className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-1 hover:border-slate-400 transition-colors cursor-pointer group shadow-2xs"
                  >
                    <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                      <span className="flex items-center space-x-1.5 text-indigo-600">
                        <Briefcase className="w-4 h-4" />
                        <span>Work & Internships</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-500">DitchCarbon (Berlin), Carleton Univ (Canada), ACM India, Chakril Apps.</p>
                  </div>

                  <div 
                    onClick={() => setActiveTab('research')} 
                    className="bg-white rounded-xl border border-slate-200/90 p-4 space-y-1 hover:border-slate-400 transition-colors cursor-pointer group shadow-2xs"
                  >
                    <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                      <span className="flex items-center space-x-1.5 text-indigo-600">
                        <FileText className="w-4 h-4" />
                        <span>Research & Papers</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-500">IEEE FLLM 2025, IEEE AIDE 2025, Springer QUANCOM, Elsevier EAAI.</p>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: INTERNSHIPS & WORK */}
            {activeTab === 'internships' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-indigo-600" />
                    <span>Work & Research Internships</span>
                  </h2>
                  <p className="text-xs text-slate-500">
                    International AI developer roles, undergraduate research, and agentic AI systems.
                  </p>
                </div>

                <div className="space-y-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-slate-200/90 p-5 space-y-3 shadow-2xs">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-sm sm:text-base font-bold text-slate-900">{exp.role}</h3>
                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                              {exp.badge}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-indigo-600 mt-0.5">
                            {exp.company} • {exp.location}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-slate-400">{exp.period}</span>
                      </div>

                      <ul className="space-y-1.5 text-xs text-slate-600 pl-4 list-disc">
                        {exp.highlights.map((point, i) => (
                          <li key={i} className="leading-relaxed">{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                        {exp.skills.map((s, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/80">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: RESEARCH PAPERS (Paper links ONLY for available ones) */}
            {activeTab === 'research' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-indigo-600" />
                      <span>Research Papers & Publications</span>
                    </h2>
                    <p className="text-xs text-slate-500">IEEE, Springer, and Elsevier journal preprints.</p>
                  </div>
                  <a 
                    href={personalInfo.scholar} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Google Scholar</span>
                  </a>
                </div>

                <div className="space-y-4">
                  {researchPapers.map((paper) => (
                    <div key={paper.id} className="bg-white rounded-xl border border-slate-200/90 p-5 space-y-2.5 shadow-2xs">
                      <div className="flex justify-between items-start gap-2">
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            [{paper.status}] {paper.venue}
                          </span>
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {paper.title}
                          </h3>
                        </div>

                        {/* ADD LINKS ONLY TO THOSE AVAILABLE (IEEE FLLM & IEEE AIDE) */}
                        {paper.link && (
                          <a 
                            href={paper.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold shrink-0 transition-colors"
                            title="Open IEEE Publication"
                          >
                            <span>IEEE Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {paper.abstract}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
                        {paper.tags.map((t, idx) => (
                          <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: MEDIUM STORIES (With exact titles and thumbnails matching screenshots) */}
            {activeTab === 'medium' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-amber-600" />
                      <span>Medium Articles & Essays</span>
                    </h2>
                    <p className="text-xs text-slate-500">Learning out loud at @23csec07.ngirishamalni.</p>
                  </div>
                  <a 
                    href={personalInfo.medium} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200"
                  >
                    <span>Medium Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mediumBlogs.map((blog) => (
                    <a
                      key={blog.id}
                      href={blog.url}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-xl border border-slate-200/90 overflow-hidden hover:border-amber-400 transition-all group flex flex-col justify-between shadow-2xs"
                    >
                      <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                        <img 
                          src={blog.thumbnail} 
                          alt={blog.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 space-y-1.5">
                        <div className="text-[10px] font-bold text-amber-700">
                          {blog.date} • {blog.readTime}
                        </div>
                        <h3 className="text-xs font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2 leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {blog.snippet}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: PROJECTS & CODE */}
            {activeTab === 'projects' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                    <Code className="w-5 h-5 text-indigo-600" />
                    <span>Projects & Hackathon Achievements</span>
                  </h2>
                  <p className="text-xs text-slate-500">Key AI applications and national hackathon wins.</p>
                </div>

                <div className="space-y-4">
                  {projects.map((proj, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-slate-200/90 p-5 space-y-2 shadow-2xs">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">{proj.title}</h3>
                        <span className="text-[10px] font-semibold text-slate-400">{proj.period}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
                        {proj.tech.map((t, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2 space-y-3">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Honours & Competitions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {honorsAndHackathons.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1 text-xs">
                          <span className="font-bold text-amber-700 text-[10px] uppercase block">{item.award}</span>
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <p className="text-[11px] text-slate-500">{item.org} ({item.year})</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: SKILLS & PASSIONS (Airflow, Kafka, JS removed, non-tech descriptions removed) */}
            {activeTab === 'skills' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-1">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-indigo-600" />
                    <span>Technical Stack & Passions</span>
                  </h2>
                  <p className="text-xs text-slate-500">Core engineering stack & non-tech interests.</p>
                </div>

                {/* Pure Technical Stack */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-3 shadow-2xs">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Technical Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techSkills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-800 text-xs font-medium border border-slate-200 hover:bg-slate-100 transition-colors"
                      >
                        <span className="text-xs">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Non-Tech Passions (Simple chips with NO descriptions as requested) */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-3 shadow-2xs">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Passions & Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {nonTechPassions.map((item, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                      >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </main>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-slate-200/80 py-8 text-center text-xs text-slate-500 mt-12">
        <div className="max-w-5xl mx-auto px-4 space-y-1">
          <p>© {new Date().getFullYear()} Girisha Malni Nagendran • Personal Website</p>
          <p className="text-[11px] text-slate-400">Deployed on Vercel.</p>
        </div>
      </footer>

    </div>
  );
}
