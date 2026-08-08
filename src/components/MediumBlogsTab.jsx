import React, { useState } from 'react';
import { BookOpen, ExternalLink, Clock, Calendar, Tag, ArrowUpRight } from 'lucide-react';
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
      <div className="clean-card rounded-2xl p-6 sm:p-7 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Storytelling & Technical Publications</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Medium Articles & Essays
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Writing at the intersection of AI Engineering, Quantum Computing, Carnatic Music, and Tea Flow State.
          </p>
        </div>

        <a
          href={personalInfo.medium}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-sm transition-all"
        >
          <span>Visit @23csec07.ngirishamalni</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500 mr-1 flex items-center space-x-1">
          <Tag className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </span>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              selectedTag === tag
                ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Medium Blog Thumbnail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredBlogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noreferrer"
            className="clean-card rounded-xl overflow-hidden bg-white hover:border-amber-400 transition-all duration-200 group flex flex-col justify-between"
          >
            {/* Blog Image Thumbnail with Touch Overlay */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 text-slate-800 border border-slate-200 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-between items-center text-[10px] font-semibold text-slate-700">
                <span className="flex items-center space-x-1 bg-white/90 px-2 py-0.5 rounded border border-slate-200 shadow-sm">
                  <Calendar className="w-3 h-3 text-amber-600" />
                  <span>{blog.date}</span>
                </span>
                <span className="flex items-center space-x-1 bg-white/90 px-2 py-0.5 rounded border border-slate-200 shadow-sm">
                  <Clock className="w-3 h-3 text-indigo-600" />
                  <span>{blog.readTime}</span>
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {blog.snippet}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                {blog.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-amber-800 border border-amber-200/60"
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
