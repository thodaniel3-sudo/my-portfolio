import { Compass } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function FutureDirection() {
  return (
    <section className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Future Direction</p>
          <h2 className="heading max-w-3xl">
            Where I intend to grow — as research goals, not claims.
          </h2>
        </SectionReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {profile.futureDirection.map((item, i) => (
            <SectionReveal key={item} delay={i * 40}>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.015] hover:border-emerald-500/40 transition-all duration-500">
                <Compass size={14} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-ink-200">{item}</span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}