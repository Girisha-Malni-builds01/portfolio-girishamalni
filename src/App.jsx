import React from 'react';
import { 
  BookOpen, 
  Globe, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Music, 
  Coffee, 
  Compass, 
  Camera, 
  Briefcase, 
  FileText, 
  Code, 
  ArrowUpRight,
  Heart
} from 'lucide-react';
import { personalInfo, experiences, researchPapers, projects, mediumBlogs, honorsAndHackathons } from './data/portfolioData';
import { GithubIcon, LinkedinIcon } from './components/SocialIcons';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Top Subtle Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#about" className="font-bold text-sm text-slate-900 hover:text-indigo-600 transition-colors">
            Girisha Malni N
          </a>
          <nav className="flex items-center space-x-4 text-xs font-semibold text-slate-600">
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#research" className="hover:text-slate-900 transition-colors">Research</a>
            <a href="#writings" className="hover:text-slate-900 transition-colors">Medium</a>
            <a href="#passions" className="hover:text-slate-900 transition-colors">Passions</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          </nav>
        </div>
      </header>

      {/* Main Single Page Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        
        {/* HERO / ABOUT SECTION (Inspired by Hitesh Kandala) */}
        <section id="about" className="space-y-6 pt-2">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img 
              src={personalInfo.images.headshot} 
              alt="Girisha Malni" 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-slate-200 shadow-sm"
            />
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Girisha Malni N
              </h1>
              <p className="text-sm font-semibold text-indigo-600">
                Computer Science Engineer • AI Systems & ML Researcher
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-500 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Madurai, India</span>
                <span>•</span>
                <span className="text-emerald-700 font-medium">CGPA: 8.56 / 10.0</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            I am a Computer Science Engineering student at Velammal College of Engineering and Technology. My work focuses on <strong>Retrieval-Augmented Generation (RAG)</strong>, <strong>Quantum Machine Learning</strong>, and <strong>ESG Intelligence</strong>. I have conducted international AI research at <strong className="text-slate-900">Carleton University (Canada)</strong> and built RAG pipelines at <strong className="text-slate-900">DitchCarbon (Berlin)</strong>.
          </p>

          {/* Persona Traits */}
          <div className="flex flex-wrap gap-1.5">
            {personalInfo.traits.map((trait, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
              >
                ✨ {trait}
              </span>
            ))}
          </div>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-600 border-t border-slate-100">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={personalInfo.medium} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/60 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Medium Writings</span>
            </a>
            <a 
              href={personalInfo.scholar} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200/60 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>Google Scholar</span>
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs font-semibold text-indigo-600 flex items-center space-x-2">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span>Experience & Research Internships</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-semibold text-slate-500">@ {exp.company}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">{exp.period} • {exp.location}</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-600 pl-4 list-disc">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH PAPERS SECTION */}
        <section id="research" className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs font-semibold text-indigo-600 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              <span>Research Papers & Publications ({researchPapers.length})</span>
            </h2>
            <a 
              href={personalInfo.scholar} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs font-semibold text-indigo-600 hover:underline flex items-center space-x-1"
            >
              <span>Scholar Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            {researchPapers.map((paper) => (
              <div key={paper.id} className="p-3.5 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    [{paper.status}] {paper.venue}
                  </span>
                  <a href={paper.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="text-xs font-bold text-slate-900 leading-snug">
                  {paper.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {paper.abstract}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MEDIUM WRITINGS SECTION */}
        <section id="writings" className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs font-semibold text-amber-600 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Medium Articles & Stories</span>
            </h2>
            <a 
              href={personalInfo.medium} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs font-semibold text-amber-600 hover:underline flex items-center space-x-1"
            >
              <span>Visit @23csec07.ngirishamalni</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mediumBlogs.map((blog) => (
              <a 
                key={blog.id} 
                href={blog.url} 
                target="_blank" 
                rel="noreferrer"
                className="group border border-slate-200/80 rounded-xl overflow-hidden hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden relative">
                  <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3 space-y-1">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {blog.snippet}
                  </p>
                  <div className="text-[10px] text-amber-700 font-medium pt-1">
                    {blog.date} • {blog.readTime}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PASSIONS & CONNOISSEUR INTERESTS */}
        <section id="passions" className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs font-semibold text-rose-600 flex items-center space-x-2">
            <Heart className="w-4 h-4 text-rose-600" />
            <span>Passions & Connoisseur Interests</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl border border-slate-200/80 space-y-1">
              <div className="flex items-center space-x-2 text-indigo-600 font-bold text-xs">
                <Music className="w-4 h-4" />
                <span>Carnatic Music Connoisseur</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Appreciating classical Indian ragas (*Kalyani, Hindolam, Charukesi, Bhairavi*), Veena strings, microtonal gamakas, and swara rhythm mathematics.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200/80 space-y-1">
              <div className="flex items-center space-x-2 text-amber-600 font-bold text-xs">
                <Coffee className="w-4 h-4" />
                <span>Tea Connoisseur</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Loose-leaf tea brewing rituals, Nilgiri Orthodox black tea, Darjeeling first flush, and deep focus flow state.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200/80 space-y-1">
              <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs">
                <Compass className="w-4 h-4" />
                <span>Travel & Wanderlust</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exploring heritage landscapes, hill stations, and global research ecosystems from Ottawa to Berlin and Himachal.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200/80 space-y-1">
              <div className="flex items-center space-x-2 text-purple-600 font-bold text-xs">
                <Camera className="w-4 h-4" />
                <span>Photography & Creative Writing</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capturing lighting, perspective framing, nature, and writing poetry at the intersection of science and art.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS & HONOURS */}
        <section id="projects" className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs font-semibold text-indigo-600 flex items-center space-x-2">
            <Code className="w-4 h-4 text-indigo-600" />
            <span>Projects & Key Honours</span>
          </h2>

          <div className="space-y-3">
            {projects.map((proj, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-200/80 space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xs font-bold text-slate-900">{proj.title}</h3>
                  <span className="text-[10px] text-slate-400">{proj.period}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Honours & Hackathons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {honorsAndHackathons.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-xs">
                    <span className="font-bold text-amber-700 text-[10px] uppercase block">{item.award}</span>
                    <span className="font-semibold text-slate-900 block">{item.title}</span>
                    <span className="text-[11px] text-slate-500">{item.org} ({item.year})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* MINIMAL FOOTER */}
      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        <div className="max-w-3xl mx-auto px-4 space-y-1">
          <p>© {new Date().getFullYear()} Girisha Malni N • Personal Website</p>
          <p className="text-[11px] text-slate-400">Designed minimally for Vercel deployment.</p>
        </div>
      </footer>

    </div>
  );
}
