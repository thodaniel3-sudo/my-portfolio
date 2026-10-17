import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">About</p>
          <h2 className="heading max-w-3xl">
            An engineer working at the intersection of materials, data, and computation.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <SectionReveal className="lg:col-span-7" delay={100}>
            <div className="space-y-5 body-text text-base md:text-lg">
              {profile.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="lg:col-span-5" delay={200}>
            <div className="card p-6 md:p-8 relative overflow-hidden">
              <Quote className="text-emerald-500/60 mb-4" size={22} />
              <p className="text-ink-200 text-sm md:text-base leading-relaxed">
                {profile.researchPhilosophy}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="eyebrow mb-2">Research Philosophy</p>
                <p className="text-xs text-ink-400">
                  Materials science • Computation • Data
                </p>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full" />
            </div>

            <div className="mt-6 card p-6 md:p-8">
              <p className="eyebrow mb-4">Profile Summary</p>
              <p className="text-ink-300 text-sm leading-relaxed">
                {profile.about.profileSummary}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}