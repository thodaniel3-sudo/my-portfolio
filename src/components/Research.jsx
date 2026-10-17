import {
  Atom,
  Cpu,
  BrainCircuit,
  Bot,
  Leaf,
  Layers,
  FlaskConical,
  Microscope,
  Car,
  Sliders,
  Database,
} from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

const iconMap = {
  'Materials Informatics': Database,
  'Computational Materials Science': Cpu,
  'Machine Learning for Materials': BrainCircuit,
  'AI in Engineering': Bot,
  'Sustainable Materials': Leaf,
  'Composite Materials': Layers,
  'Bio-based Materials': FlaskConical,
  'Materials Characterization': Microscope,
  'Automotive Materials': Car,
  'Materials Optimization': Sliders,
  'Data-driven Materials Engineering': Atom,
};

export default function Research() {
  return (
    <section id="research" className="section relative">
      <div className="absolute inset-0 bg-grid-dark bg-[size:80px_80px] opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <SectionReveal>
          <p className="eyebrow mb-3">Research Interests</p>
          <h2 className="heading max-w-3xl">
            Where materials engineering meets computational and data-driven thinking.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.researchInterests.map((item, i) => {
            const Icon = iconMap[item.title] || Atom;
            return (
              <SectionReveal key={item.title} delay={i * 40}>
                <div className="group card p-6 h-full transition-all duration-500 hover:border-emerald-500/40 hover:-translate-y-0.5 hover:bg-white/[0.03]">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] tracking-widest text-ink-600 font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-ink-50 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{item.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}