import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Shield, Eye, X } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function CertificationsTab() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
            <Award className="w-5 h-5" />
          </div>
          <span>Certifications & Verified Credentials</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Professional certifications in Machine Learning, Airflow ETL, Deep Learning, and Computer Vision.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="clean-card rounded-xl p-5 bg-white space-y-3 flex flex-col justify-between group"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-medium text-slate-400">{cert.date}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-indigo-600 mt-0.5">
                  {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                {cert.details}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-indigo-600" />
                <span>View Badge</span>
              </button>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center space-x-1"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="clean-card rounded-2xl max-w-lg w-full p-6 bg-white space-y-4 relative shadow-xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 rounded-full bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-1 pt-1">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{selectedCert.title}</h3>
              <p className="text-xs font-bold text-indigo-600">{selectedCert.issuer}</p>
            </div>

            {/* Certificate Graphic Placeholder Frame */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Credential • {selectedCert.date}</span>
              </div>
              <p className="text-xs text-slate-700">
                Issued to: <strong className="text-slate-900 font-bold">Girisha Malni N</strong>
              </p>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                {selectedCert.details}
              </p>
            </div>

            <div className="flex justify-end space-x-2 pt-1">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
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
