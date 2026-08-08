import React, { useState } from 'react';
import { FileText, Globe, ExternalLink, Award, Tag, Eye, X } from 'lucide-react';
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
      <div className="clean-card rounded-2xl p-6 sm:p-7 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
            <Award className="w-3.5 h-3.5" />
            <span>Peer-Reviewed Publications & Preprints</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Research Contributions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Papers spanning Multimodal RAG, Variational Quantum Machine Learning, and Computer Vision for Springer, IEEE, and Elsevier journals.
          </p>
        </div>

        <a
          href={personalInfo.scholar}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Google Scholar Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500 mr-1 flex items-center space-x-1">
          <Tag className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === filter
                ? 'bg-indigo-600 text-white shadow-sm font-bold'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
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
          
          let statusBadgeClass = "bg-amber-50 text-amber-700 border-amber-200";
          if (isPublished) statusBadgeClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
          if (isAccepted) statusBadgeClass = "bg-blue-50 text-blue-700 border-blue-200";
          if (isPresented) statusBadgeClass = "bg-purple-50 text-purple-700 border-purple-200";

          return (
            <div
              key={paper.id}
              className="clean-card rounded-xl p-5 bg-white space-y-3 group"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${statusBadgeClass}`}>
                      [{paper.status}]
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {paper.type} • {paper.location}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-xs font-bold text-indigo-600">
                    {paper.venue}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveModalPaper(paper)}
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Abstract</span>
                  </button>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white transition-colors border border-indigo-100"
                    title="Open Publication Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {paper.abstract}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1 border-t border-slate-100">
                {paper.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="clean-card rounded-2xl max-w-xl w-full p-6 bg-white space-y-4 relative shadow-xl">
            <button
              onClick={() => setActiveModalPaper(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 rounded-full bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-indigo-600 tracking-wider">
                {activeModalPaper.venue}
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                {activeModalPaper.title}
              </h3>
              <p className="text-xs text-slate-500">
                Author: Girisha Malni N | Status: [{activeModalPaper.status}]
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1.5 max-h-60 overflow-y-auto">
              <h4 className="font-bold text-slate-900">Abstract Summary:</h4>
              <p>{activeModalPaper.abstract}</p>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setActiveModalPaper(null)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
              >
                Close
              </button>
              <a
                href={activeModalPaper.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold"
              >
                <span>View Full Paper</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
