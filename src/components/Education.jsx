import { GraduationCap, MapPin, Calendar, Award, Building2 } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function Education() {
  return (
    <section id="education" className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="heading max-w-3xl">Academic background.</h2>
        </SectionReveal>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/30 to-transparent" />

          <div className="space-y-10">
            {profile.education.map((ed, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-ink-950 border-2 border-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.6)]" />

                  <div className="card p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <p className="eyebrow mb-2">{ed.degree}</p>
                        <h3 className="font-display text-xl md:text-2xl text-ink-50">
                          {ed.field}
                        </h3>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        {ed.grade && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs">
                            <Award size={12} /> Grade: {ed.grade}
                          </span>
                        )}
                        {ed.award && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-xs">
                            <Award size={12} /> {ed.award}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-6 pt-6 border-t border-white/5">
                      <Info icon={<Building2 size={14} />} label="Institution" value={ed.institution} />
                      <Info icon={<MapPin size={14} />} label="Country" value={ed.country} />
                      <Info icon={<GraduationCap size={14} />} label="Department" value={ed.department} />
                      <Info icon={<Calendar size={14} />} label="Graduation" value={ed.graduation} />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-ink-500 mb-1.5">
        {icon} {label}
      </div>
      <p className="text-sm text-ink-200">{value}</p>
    </div>
  );
}