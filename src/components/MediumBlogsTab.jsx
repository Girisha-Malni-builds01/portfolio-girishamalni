import React, { useState } from 'react';
import { BookOpen, ExternalLink, Clock, Calendar, Tag, ArrowUpRight, Sparkles } from 'lucide-react';
import { mediumBlogs, personalInfo } from '../data/portfolioData';

export default function MediumBlogsTab() {
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', 'RAG', 'Carnatic Music', 'Quantum ML', 'Tea', 'Travel', 'Creative Writing'];

  const filteredBlogs = mediumBlogs.filter(blog => {
    if (selectedTag === 'All') return true;
    return blog.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()));
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Storytelling & Technical Publications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Medium Articles & Essays
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Writing at the intersection of AI Engineering, Quantum State Superposition, Carnatic Music Ragas, and Tea Flow State.
          </p>
        </div>

        <a
          href={personalInfo.medium}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
        >
          <span>Visit @23csec07.ngirishamalni</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 mr-2 flex items-center space-x-1">
          <Tag className="w-3.5 h-3.5" />
          <span>Filter Topic:</span>
        </span>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedTag === tag
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Medium Blog Thumbnail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBlogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noreferrer"
            className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-xl"
          >
            {/* Blog Image Thumbnail with Touch Overlay */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 text-amber-400 border border-slate-700 backdrop-blur-md group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] font-semibold text-slate-300">
                <span className="flex items-center space-x-1 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>{blog.date}</span>
                </span>
                <span className="flex items-center space-x-1 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700">
                  <Clock className="w-3 h-3 text-indigo-400" />
                  <span>{blog.readTime}</span>
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {blog.snippet}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {blog.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

          </a>
        ))}
      </div>

    </div>
  );
}
