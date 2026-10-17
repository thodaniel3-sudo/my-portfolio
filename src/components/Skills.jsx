import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="heading max-w-3xl">
            A working toolkit spanning materials engineering, computation, and software.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {profile.skills.map((group, i) => (
            <SectionReveal key={group.category} delay={i * 60}>
              <div className="card p-6 md:p-8 h-full">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-emerald-500 mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="font-display text-xl text-ink-50">{group.category}</h3>
                  </div>
                  <span className="shrink-0 text-[10px] tracking-widest uppercase text-ink-500 border border-white/10 px-2 py-1 rounded">
                    {group.level}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-md border border-white/8 bg-white/[0.02] text-ink-200 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}