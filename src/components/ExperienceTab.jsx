import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Users } from 'lucide-react';
import { experiences, education, leadershipAndService } from '../data/portfolioData';

export default function ExperienceTab() {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Tab Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
            <Briefcase className="w-5 h-5" />
          </div>
          <span>Experience & Background</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          International AI development roles, undergraduate research internships, and education.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Work & Research Internships
        </h3>

        <div className="relative border-l border-slate-200 ml-3 space-y-6 pl-5">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-white border-2 border-indigo-600 group-hover:bg-indigo-600 transition-all"></div>

              {/* Experience Card */}
              <div className="clean-card rounded-xl p-5 bg-white space-y-3">
                
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-base font-bold text-slate-900">{exp.role}</h4>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-indigo-600 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-end text-xs text-slate-500 space-y-0.5">
                    <span className="flex items-center space-x-1 font-medium">
                      <Calendar className="w-3 h-3 text-indigo-600" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-indigo-600 mt-0.5">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
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

      {/* Education & Academic History */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Education & Academic History
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, idx) => (
            <div key={idx} className="clean-card rounded-xl p-5 bg-white space-y-2">
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {edu.score}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900">{edu.degree}</h4>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">{edu.institution}</p>
                <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-0.5">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 border-t border-slate-100 pt-2 leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Institutional Service */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Leadership & Institutional Service
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leadershipAndService.map((lead, idx) => (
            <div key={idx} className="clean-card rounded-xl p-4 bg-white space-y-1.5">
              <div className="flex items-center space-x-1.5 text-slate-400 text-[11px] font-semibold">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>{lead.period}</span>
              </div>
              <h4 className="text-xs font-bold text-slate-900">{lead.role}</h4>
              <p className="text-xs font-semibold text-indigo-600">{lead.organization}</p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                {lead.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
