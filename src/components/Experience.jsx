import { FlaskConical, Briefcase, Rocket, Users } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function Experience() {
  return (
    <section className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Experience & Training</p>
          <h2 className="heading max-w-3xl">
            Research, academic activity, and professional experience.
          </h2>
        </SectionReveal>

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
              <div className="card p-6 md:p-8 h-full">
                <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-emerald-400 mb-5">
                  <Briefcase size={18} />
                </div>
                <p className="text-[10px] tracking-widest uppercase text-ink-500 mb-2">
                  Training & Industrial Exposure
                </p>
                <h3 className="font-display text-lg text-ink-50 mb-3">{item.institution}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* LEADERSHIP SECTION */}
        <SectionReveal delay={200}>
          <div className="mt-16">
            <h3 className="font-display text-2xl text-ink-50 mb-6">Leadership & Responsibilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {profile.leadership.map((item, i) => (
                <div key={item.role} className="card p-6 border-l-2 border-l-emerald-500">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-display text-lg text-ink-50">{item.role}</h4>
                    <span className="text-xs text-emerald-400 shrink-0">{item.date}</span>
                  </div>
                  <p className="text-xs text-ink-500 mb-3">{item.organization}</p>
                  <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}