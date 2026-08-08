import React from 'react';
import { Code, Trophy, Award, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { projects, honorsAndHackathons } from '../data/portfolioData';

export default function ProjectsTab() {

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
            <Code className="w-5 h-5" />
          </div>
          <span>Projects & Hackathon Wins</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Full-stack AI applications, healthcare models, national hackathon rankings, and awards.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Featured AI & Engineering Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="clean-card rounded-xl p-5 bg-white space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {proj.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{proj.period}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {proj.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  {proj.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
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
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Honours, Awards & Hackathon Rankings</span>
          </h3>
          <span className="text-[11px] text-slate-400">Click any card to celebrate 🎉</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {honorsAndHackathons.map((item, idx) => (
            <div
              key={idx}
              onClick={triggerConfetti}
              className="clean-card rounded-xl p-4 bg-white cursor-pointer space-y-2 group hover:border-amber-400 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-400">{item.year}</span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">
                  {item.award}
                </span>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] font-semibold text-indigo-600">
                  {item.org}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-1.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
