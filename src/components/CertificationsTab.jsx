import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Shield, Eye, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { certifications, honorsAndHackathons } from '../data/portfolioData';

export default function CertificationsTab() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Award className="w-6 h-6" />
          </div>
          <span>Certifications & Verified Credentials</span>
        </h2>
        <p className="text-sm text-slate-400">
          Professional certifications in Machine Learning, Apache Airflow ETL Pipelines, Deep Learning, and Computer Vision.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all space-y-4 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className={`p-2.5 rounded-xl bg-gradient-to-r ${cert.badgeColor} text-white shadow-md`}>
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-400">{cert.date}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-400 mt-0.5">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2">
                {cert.details}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-indigo-400" />
                <span>View Certificate Badge</span>
              </button>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-white flex items-center space-x-1"
              >
                <span>Verify</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card rounded-3xl max-w-xl w-full p-6 border border-slate-700 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 pt-2">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/30">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">{selectedCert.title}</h3>
              <p className="text-xs font-semibold text-indigo-400">{selectedCert.issuer}</p>
            </div>

            {/* Certificate Graphic Placeholder Frame */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/80 border border-slate-800 text-center space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Credential • {selectedCert.date}</span>
              </div>
              <p className="text-xs text-slate-300">
                Issued to: <strong className="text-white font-bold">Girisha Malni N</strong>
              </p>
              <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                {selectedCert.details}
              </p>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
