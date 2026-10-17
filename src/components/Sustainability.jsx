import { Leaf, Recycle, Car, CircleDollarSign, Gauge, Sprout } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

const focusIcons = [Recycle, Leaf, Sprout, Car, CircleDollarSign, Gauge];

export default function Sustainability() {
  return (
    <section className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Sustainability</p>
          <h2 className="heading max-w-3xl">{profile.sustainability.headline}</h2>
          <p className="mt-6 text-xl md:text-2xl font-display text-emerald-400">
            {profile.sustainability.statement}
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <p className="body-text mt-6 max-w-3xl">{profile.sustainability.description}</p>
        </SectionReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.sustainability.focusAreas.map((area, i) => {
            const Icon = focusIcons[i % focusIcons.length];
            return (
              <SectionReveal key={area} delay={i * 40}>
                <div className="group card p-6 flex items-center gap-4 hover:border-emerald-500/40 transition-all duration-500">
                  <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-ink-200">{area}</span>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}