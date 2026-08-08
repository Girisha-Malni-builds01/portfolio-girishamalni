import React, { useState } from 'react';
import { Music, Coffee, Compass, Camera, Feather, Play, Pause, X, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function PassionsTab() {
  const [isPlayingRaga, setIsPlayingRaga] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const ragas = [
    { name: "Kalyani", mood: "Auspicious, Uplifting", time: "Evening Raga" },
    { name: "Hindolam", mood: "Meditative, Soothing", time: "Anytime / Dawn" },
    { name: "Charukesi", mood: "Melancholic & Deep", time: "Night Raga" },
    { name: "Bhairavi", mood: "Majestic & Versatile", time: "Dawn / Finale" }
  ];

  const galleryImages = [
    { src: personalInfo.images.outdoor, title: "Lakeside Reflection", desc: "Serene moments outdoors in South India." },
    { src: "/images/blog_carnatic.png", title: "Veena Harmonics", desc: "Classical instrument strings & raga swaras." },
    { src: "/images/tea_vibes.png", title: "Tea & Deep Focus", desc: "Artisanal loose-leaf brew on quiet mornings." },
    { src: "/images/travel_landscape.png", title: "Misty Tea Estates", desc: "Sunrise rays over Munnar hill slopes." }
  ];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Section Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100">
            <Heart className="w-5 h-5" />
          </div>
          <span>Passions, Culture & Creative Space</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Carnatic music, tea rituals, travel wanderlust, photography, and creative writing.
        </p>
      </div>

      {/* Carnatic Music Showcase */}
      <div className="clean-card rounded-2xl p-6 bg-white space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-4">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase text-indigo-600 tracking-wider flex items-center space-x-1.5">
              <Music className="w-3.5 h-3.5" />
              <span>Carnatic Music Connoisseur</span>
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Veena Strings, Swara Math & Raga Harmonics
            </h3>
          </div>

          <button
            onClick={() => setIsPlayingRaga(!isPlayingRaga)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
          >
            {isPlayingRaga ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlayingRaga ? "Pause Raga Vibe" : "Play Ambient Raga Vibe"}</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Carnatic music is a mathematical tapestry of 72 Melakarta ragas, microtonal gamakas, and intricate tala rhythmic cycles. The resonance of the Veena inspires how I think about algorithms, signal frequencies, and harmony in software design.
        </p>

        {/* Favorite Ragas Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ragas.map((raga, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-0.5">
              <span className="text-[10px] font-bold text-indigo-600 uppercase">{raga.time}</span>
              <h4 className="text-xs font-bold text-slate-900">{raga.name}</h4>
              <p className="text-[11px] text-slate-500">{raga.mood}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tea & Travel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Tea Rituals */}
        <div className="clean-card rounded-xl p-5 bg-white space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Tea Connoisseur</h3>
              <p className="text-[11px] text-amber-600 font-medium">Loose-Leaf Blends & Focus</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Brewing tea is a mindful ritual. From Nilgiri Orthodox black tea to Darjeeling First Flush and spicy Masala Chai — a warm cup is my ultimate companion during research writing.
          </p>
        </div>

        {/* Travel & Wanderlust */}
        <div className="clean-card rounded-xl p-5 bg-white space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Wanderlust & Culture</h3>
              <p className="text-[11px] text-emerald-600 font-medium">Ottawa • Berlin • Himachal • Madurai</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Traveling refreshes perspective. Exploring research labs at Carleton University in Canada, attending cohorts in Himachal, or exploring Berlin brings stories that enrich my work.
          </p>
        </div>

      </div>

      {/* Photography & Visual Gallery */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
            <Camera className="w-4 h-4 text-purple-600" />
            <span>Photography Gallery</span>
          </h3>
          <span className="text-[11px] text-slate-400">Click photo to expand</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(img)}
              className="clean-card rounded-xl overflow-hidden aspect-square relative group cursor-pointer bg-white"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 text-white">
                <h4 className="text-xs font-bold">{img.title}</h4>
                <p className="text-[10px] text-slate-200">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creative Writing & Poetry Snippet */}
      <div className="clean-card rounded-xl p-5 bg-white space-y-2">
        <div className="flex items-center space-x-2 text-indigo-600">
          <Feather className="w-3.5 h-3.5" />
          <span className="text-xs font-bold uppercase tracking-wider">Poetry Snippet</span>
        </div>
        <blockquote className="text-xs italic text-slate-700 border-l-2 border-indigo-600 pl-3 py-0.5 leading-relaxed">
          "Between the discrete zeroes of code and the continuous waves of ragas, lies the quiet art of learning — where every question asked is a bridge to somewhere new."
        </blockquote>
      </div>

      {/* Image Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-2xl w-full clean-card rounded-2xl overflow-hidden p-2 bg-white shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-600 hover:text-slate-900 rounded-full bg-white/90 shadow z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img src={selectedPhoto.src} alt={selectedPhoto.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3 space-y-0.5">
              <h3 className="text-sm font-bold text-slate-900">{selectedPhoto.title}</h3>
              <p className="text-xs text-slate-500">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
