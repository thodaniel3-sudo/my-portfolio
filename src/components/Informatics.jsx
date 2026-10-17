import { Database, Cpu, Brain, Target, Sliders, GitBranch, ArrowDown } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

const pipelineIcons = [Database, Cpu, Brain, Target, Sliders, GitBranch];

export default function Informatics() {
  return (
       <section id="informatics" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent" />

      <div className="container-x relative">
        <SectionReveal>
          <p className="eyebrow mb-3">Materials Informatics</p>
          <h2 className="heading max-w-3xl">
            Materials + Data + AI — connecting composition, structure, and performance.
          </h2>
          <p className="body-text mt-6 max-w-2xl">
            Materials informatics links materials composition, structure, processing, properties,
            and performance through computational and data-driven methods — enabling faster
            prediction, optimization, and engineering decision-making.
          </p>
        </SectionReveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal delay={100}>
            <div className="space-y-3">
              {profile.informaticsPipeline.map((step, i) => {
                const Icon = pipelineIcons[i % pipelineIcons.length];
                const isLast = i === profile.informaticsPipeline.length - 1;
                return (
                  <div key={step}>
                    <div className="group flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.015] hover:border-emerald-500/40 hover:bg-emerald-500/[0.03] transition-all duration-500">
                      <div className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="font-display text-base md:text-lg text-ink-100">
                        {step}
                      </span>
                      <span className="ml-auto text-[10px] text-ink-600 font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {!isLast && (
                      <div className="flex justify-start pl-8 py-1 text-emerald-500/50">
                        <ArrowDown size={14} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl" />

              <p className="eyebrow mb-4">Why it matters</p>
              <p className="text-ink-300 leading-relaxed text-sm md:text-base">
                By pairing experimental materials engineering with computational tools, ML, and
                structured data pipelines, materials problems can be approached faster, with more
                information, and with better guidance for experiments and design decisions.
              </p>

              <div className="grid grid-cols-3 gap-3 mt-8">
                {['Composition', 'Structure', 'Properties'].map((label) => (
                  <div
                    key={label}
                    className="rounded-md border border-white/8 p-3 text-center"
                  >
                    <p className="text-[10px] tracking-widest uppercase text-ink-500 mb-1">
                      {label}
                    </p>
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
                  </div>
                ))}
              </div>

              <p className="text-xs text-ink-500 mt-6 italic">
                Personal research direction — not a claim of deployed commercial systems.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}