import React, { useState } from 'react';
import { FileText, Globe, ExternalLink, Award, CheckCircle, Tag, Eye, X } from 'lucide-react';
import { researchPapers, personalInfo } from '../data/portfolioData';

export default function ResearchTab() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalPaper, setActiveModalPaper] = useState(null);

  const filters = ['All', 'Multimodal RAG', 'Quantum ML', 'Computer Vision', 'ESG Intelligence'];

  const filteredPapers = researchPapers.filter(paper => {
    if (selectedFilter === 'All') return true;
    return paper.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()));
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Publications & Preprints</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Research Contributions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Authoring papers spanning Multimodal RAG, Variational Quantum Machine Learning, and Computer Vision for Springer, IEEE, and Elsevier journals.
          </p>
        </div>

        <a
          href={personalInfo.scholar}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
        >
          <Globe className="w-4 h-4" />
          <span>Google Scholar Profile</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 mr-2 flex items-center space-x-1">
          <Tag className="w-3.5 h-3.5" />
          <span>Filter by Topic:</span>
        </span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === filter
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Papers Grid */}
      <div className="space-y-4">
        {filteredPapers.map((paper) => {
          const isPublished = paper.status === 'Published';
          const isPresented = paper.status === 'Presented';
          const isAccepted = paper.status === 'Accepted';
          
          let statusBadgeClass = "bg-amber-500/20 text-amber-300 border-amber-500/30";
          if (isPublished) statusBadgeClass = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
          if (isAccepted) statusBadgeClass = "bg-blue-500/20 text-blue-300 border-blue-500/30";
          if (isPresented) statusBadgeClass = "bg-purple-500/20 text-purple-300 border-purple-500/30";

          return (
            <div
              key={paper.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all space-y-4 group"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${statusBadgeClass}`}>
                      [{paper.status}]
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {paper.type} • {paper.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400">
                    {paper.venue}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveModalPaper(paper)}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Abstract</span>
                  </button>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors"
                    title="Open Publication Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {paper.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                {paper.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Abstract Modal Viewer */}
      {activeModalPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-700 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setActiveModalPaper(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">
                {activeModalPaper.venue}
              </span>
              <h3 className="text-xl font-bold text-slate-100">
                {activeModalPaper.title}
              </h3>
              <p className="text-xs text-slate-400">
                Author: Girisha Malni N | Status: [{activeModalPaper.status}]
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2 max-h-60 overflow-y-auto">
              <h4 className="font-bold text-slate-200">Abstract Summary:</h4>
              <p>{activeModalPaper.abstract}</p>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setActiveModalPaper(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
              >
                Close
              </button>
              <a
                href={activeModalPaper.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold"
              >
                <span>View Full Paper / Scholar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
