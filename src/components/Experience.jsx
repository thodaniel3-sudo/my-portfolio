import { useState } from 'react';
import { FlaskConical, Briefcase, Image as ImageIcon, X, ShieldCheck, FileText } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function Experience() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="experience" className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Experience & Training</p>
          <h2 className="heading max-w-3xl">Research, academic activity, and professional experience.</h2>
        </SectionReveal>

        {/* FIXED GRID HERE */}
        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {profile.researchExperience.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 60}>
              <div className="card p-6 md:p-8 h-full">
                <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-emerald-400 mb-5">
                  <FlaskConical size={18} />
                </div>
                <h3 className="font-display text-lg text-ink-50 mb-3">{item.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
              </div>
            </SectionReveal>
          ))}

          {profile.training.map((item, i) => (
            <SectionReveal key={item.institution} delay={(profile.researchExperience.length + i) * 60}>
              <div className="card p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-emerald-400 mb-5">
                    <Briefcase size={18} />
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-ink-500 mb-2">Training & Industrial Exposure</p>
                  <h3 className="font-display text-lg text-ink-50 mb-3">{item.institution}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
                </div>

                {item.images && item.images.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.images.map((img, idx) => {
                      const imgSrc = typeof img === 'string' ? img : img.src;
                      const imgLabel = typeof img === 'string' ? `View Image ${idx + 1}` : img.label;
                      
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(imgSrc)}
                          className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:border-emerald-500/40"
                        >
                          <ImageIcon size={14} /> {imgLabel}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* LEADERSHIP SECTION */}
        <SectionReveal delay={200}>
          <div className="mt-16">
            <h3 className="font-display text-2xl text-ink-50 mb-6">Leadership & Responsibilities</h3>
            <div className="grid lg:grid-cols-2 gap-4">
              {profile.leadership.map((item) => (
                <div key={item.role} className="card p-6 border-l-2 border-l-emerald-500 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-display text-lg text-ink-50">{item.role}</h4>
                      <span className="text-xs text-emerald-400 shrink-0">{item.date}</span>
                    </div>
                    <p className="text-xs text-ink-500 mb-3">{item.organization}</p>
                    <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {item.image && (
                    <button
                      onClick={() => setActiveImage(item.image)}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors w-fit bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:border-emerald-500/40"
                    >
                      <ImageIcon size={14} /> View Event Flyer
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* CERTIFICATIONS SECTION */}
        {profile.certifications && (
          <SectionReveal delay={300}>
            <div className="mt-16">
              <h3 className="font-display text-2xl text-ink-50 mb-6">Certifications</h3>
              <div className="grid lg:grid-cols-2 gap-4">
                {profile.certifications.map((cert) => (
                  <div key={cert.title} className="card p-6 border-l-2 border-l-electric-400 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-display text-lg text-ink-50">{cert.title}</h4>
                        <span className="text-xs text-electric-400 shrink-0">{cert.date}</span>
                      </div>
                      <p className="text-xs text-ink-500 mb-3">{cert.issuer}</p>
                      {cert.description && (
                        <p className="text-sm text-ink-400 leading-relaxed mb-4">{cert.description}</p>
                      )}
                    </div>
                    
                    {cert.pdf ? (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors w-fit bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:border-emerald-500/40"
                      >
                        <FileText size={14} /> View Certificate (PDF)
                      </a>
                    ) : cert.image ? (
                      <button
                        onClick={() => setActiveImage(cert.image)}
                        className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors w-fit bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:border-emerald-500/40"
                      >
                        <ShieldCheck size={14} /> View Certificate
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        )}
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink-950/90 backdrop-blur-md animate-fade-up"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Close image"
            >
              <X size={20} />
            </button>
            <img
              src={activeImage}
              alt="Certificate or Flyer"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}