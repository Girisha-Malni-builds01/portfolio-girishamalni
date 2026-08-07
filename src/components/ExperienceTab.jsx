import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle, Users, Award, ShieldCheck } from 'lucide-react';
import { experiences, education, leadershipAndService } from '../data/portfolioData';

export default function ExperienceTab() {
  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Tab Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Briefcase className="w-6 h-6" />
          </div>
          <span>Experience & Academic Background</span>
        </h2>
        <p className="text-sm text-slate-400">
          International AI development roles, undergraduate research internships, and computer science education.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-200 uppercase tracking-wider text-xs font-semibold text-indigo-400">
          Work & Research Internships
        </h3>

        <div className="relative border-l-2 border-slate-800 ml-4 space-y-8 pl-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md"></div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all space-y-4">
                
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-bold text-slate-100">{exp.role}</h4>
                      <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-400 flex items-center space-x-1.5 mt-0.5">
                      <span>{exp.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-col items-end text-xs text-slate-400 space-y-1">
                    <span className="flex items-center space-x-1 font-semibold text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 text-xs text-slate-300">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-indigo-400 mt-0.5">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Education & Academic Honors */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-200 uppercase tracking-wider text-xs font-semibold text-emerald-400">
          Education & Academic History
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3 hover:border-emerald-500/40 transition-colors">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {edu.score}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-100">{edu.degree}</h4>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">{edu.institution}</p>
                <div className="flex items-center space-x-3 text-[11px] text-slate-500 mt-1">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 border-t border-slate-800/80 pt-2 leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Service Roles */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-200 uppercase tracking-wider text-xs font-semibold text-amber-400">
          Leadership & Institutional Service
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leadershipAndService.map((lead, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-slate-800 space-y-2 hover:border-amber-500/40 transition-colors">
              <div className="flex items-center space-x-2 text-amber-400">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{lead.period}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-100">{lead.role}</h4>
              <p className="text-xs font-semibold text-indigo-400">{lead.organization}</p>
              <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                {lead.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
