import React, { useState } from 'react';
import { Music, Coffee, Compass, Camera, Feather, Play, Pause, Sparkles, X, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function PassionsTab() {
  const [isPlayingRaga, setIsPlayingRaga] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const ragas = [
    { name: "Kalyani", mood: "Auspicious, Uplifting, Expansive", time: "Evening Raga" },
    { name: "Hindolam", mood: "Meditative, Soothing, Serene", time: "Anytime / Dawn" },
    { name: "Charukesi", mood: "Melancholic & Emotional", time: "Night Raga" },
    { name: "Bhairavi", mood: "Majestic & Versatile", time: "Dawn / Concert Finale" }
  ];

  const galleryImages = [
    { src: personalInfo.images.outdoor, title: "Lakeside Reflection", desc: "Serene moments outdoors in South India." },
    { src: "/images/blog_carnatic.png", title: "Veena Harmonics", desc: "Classical instrument strings & raga swaras." },
    { src: "/images/tea_vibes.png", title: "Tea & Deep Focus", desc: "Artisanal loose-leaf brew on quiet mornings." },
    { src: "/images/travel_landscape.png", title: "Misty Tea Estates", desc: "Sunrise rays over Munnar hill slopes." }
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
            <Heart className="w-6 h-6" />
          </div>
          <span>Passions, Culture & Creative Space</span>
        </h2>
        <p className="text-sm text-slate-400">
          Carnatic music aesthetics, tea tasting rituals, travel logs, photography, and creative writing.
        </p>
      </div>

      {/* Carnatic Music Showcase */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 relative overflow-hidden space-y-6">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Music className="w-64 h-64 text-indigo-400" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider flex items-center space-x-1.5">
              <Music className="w-4 h-4" />
              <span>Carnatic Music Connoisseur</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              Veena Strings, Swara Math & Raga Vibrations
            </h3>
          </div>

          <button
            onClick={() => setIsPlayingRaga(!isPlayingRaga)}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
          >
            {isPlayingRaga ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlayingRaga ? "Pause Ambient Raga Vibe" : "Play Ambient Raga Vibe"}</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Carnatic music is a mathematical tapestry of 72 Melakarta ragas, microtonal gamakas, and intricate tala rhythmic cycles. The resonance of the Veena inspires how I think about algorithms, signal frequencies, and harmony in software design.
        </p>

        {/* Favorite Ragas Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ragas.map((raga, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1 hover:border-indigo-500/50 transition-colors">
              <span className="text-[10px] font-semibold text-indigo-400 uppercase">{raga.time}</span>
              <h4 className="text-sm font-bold text-slate-100">{raga.name}</h4>
              <p className="text-[11px] text-slate-400">{raga.mood}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tea & Travel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tea Rituals */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4 bg-gradient-to-br from-slate-900 to-amber-950/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">Tea Connoisseur</h3>
              <p className="text-xs text-amber-400 font-medium">Loose-Leaf Blends & Flow State</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Brewing tea is a mindful ritual. From Nilgiri Orthodox black tea to Darjeeling First Flush and spicy Masala Chai — a warm cup is my ultimate companion during late-night debugging and research writing.
          </p>
        </div>

        {/* Travel & Wanderlust */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4 bg-gradient-to-br from-slate-900 to-emerald-950/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">Wanderlust & Culture</h3>
              <p className="text-xs text-emerald-400 font-medium">Ottawa • Berlin • Himachal • Madurai</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Traveling refreshes perspective. Exploring research labs at Carleton University in Canada, attending cohorts in Himachal, or exploring Berlin's tech scene brings stories that enrich my work as a computer scientist.
          </p>
        </div>

      </div>

      {/* Photography & Visual Gallery */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-200 flex items-center space-x-2">
            <Camera className="w-5 h-5 text-purple-400" />
            <span>Photography Gallery</span>
          </h3>
          <span className="text-xs text-slate-400">Click photo to expand</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(img)}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 aspect-square relative group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <h4 className="text-xs font-bold text-white">{img.title}</h4>
                <p className="text-[10px] text-slate-300">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creative Writing & Poetry Snippet */}
      <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-3 bg-slate-900/60">
        <div className="flex items-center space-x-2 text-indigo-400">
          <Feather className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Poetry & Creative Writing Snippet</span>
        </div>
        <blockquote className="text-xs italic text-slate-300 border-l-2 border-indigo-500 pl-4 py-1 leading-relaxed">
          "Between the discrete zeroes of code and the continuous waves of ragas, lies the quiet art of learning — where every question asked is a bridge to somewhere new."
        </blockquote>
      </div>

      {/* Image Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-3xl w-full glass-card rounded-3xl overflow-hidden border border-slate-700 p-2">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/80 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={selectedPhoto.src} alt={selectedPhoto.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-base font-bold text-white">{selectedPhoto.title}</h3>
              <p className="text-xs text-slate-400">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
