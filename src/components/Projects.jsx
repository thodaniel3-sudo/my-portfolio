import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section relative">
      <div className="absolute inset-0 bg-grid-dark bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <SectionReveal>
          <p className="eyebrow mb-3">Selected Work</p>
          <h2 className="heading max-w-3xl">
            Engineering projects in materials, computation, and software.
          </h2>
        </SectionReveal>

        <div className="mt-14 space-y-4">
          {profile.projects.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 60}>
              <button
                onClick={() => setActive(p)}
                className="group w-full text-left card p-6 md:p-8 transition-all duration-500 hover:border-emerald-500/40 hover:bg-white/[0.03]"
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-1 font-display text-emerald-500/70 text-sm">
                    {p.number}
                  </div>

                  <div className="md:col-span-7">
                    <h3 className="font-display text-xl md:text-2xl text-ink-50 leading-tight group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-400 leading-relaxed max-w-2xl">
                      {p.short}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-wide uppercase px-2 py-1 rounded border border-white/8 text-ink-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-4 flex md:justify-end items-center">
                    <span className="inline-flex items-center gap-2 text-sm text-ink-300 group-hover:text-emerald-400 transition-colors">
                      View Project
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </div>
              </button>
            </SectionReveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}