import { FlaskConical, Briefcase, Rocket } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function Experience() {
  return (
    <section className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Experience & Training</p>
          <h2 className="heading max-w-3xl">
            Research exposure, academic activity, and industrial training.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {profile.researchExperience.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 60}>
              <div className="card p-6 md:p-8 h-full">
                <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-emerald-400 mb-5">
                  {i === 0 ? <FlaskConical size={18} /> : <Rocket size={18} />}
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
                  Industrial Training
                </p>
                <h3 className="font-display text-lg text-ink-50 mb-3">{item.institution}</h3>
                <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}