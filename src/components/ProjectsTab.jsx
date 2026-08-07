import React from 'react';
import { Code, Trophy, Sparkles, ExternalLink, GitBranch, Award, CheckCircle2, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { projects, honorsAndHackathons } from '../data/portfolioData';

export default function ProjectsTab() {

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Code className="w-6 h-6" />
          </div>
          <span>Projects & Hackathon Wins</span>
        </h2>
        <p className="text-sm text-slate-400">
          Key full-stack AI applications, healthcare models, national hackathon rankings, and awards.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-200 uppercase tracking-wider text-xs font-semibold text-indigo-400">
          Featured AI & Engineering Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {proj.category}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{proj.period}</span>
                </div>

                <h4 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {proj.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {proj.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900 text-indigo-300 border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Hackathons & Honours Grid */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-200 uppercase tracking-wider text-xs font-semibold text-amber-400 flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Honours, Awards & Hackathon Rankings</span>
          </h3>
          <span className="text-[11px] text-slate-500">Click any card to celebrate 🎉</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {honorsAndHackathons.map((item, idx) => (
            <div
              key={idx}
              onClick={triggerConfetti}
              className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-amber-500/60 transition-all cursor-pointer space-y-3 group hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-500">{item.year}</span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                  {item.award}
                </span>
                <h4 className="text-sm font-bold text-slate-100 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] font-semibold text-indigo-400">
                  {item.org}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
