import { Heart, Activity, Music, PenTool, Brain, Sparkles } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function Hobbies() {
  return (
    <section id="hobbies" className="section relative border-t border-white/5">
      <div className="container-x">
        <SectionReveal>
          <p className="eyebrow mb-3">Beyond Engineering</p>
          <h2 className="heading max-w-3xl">
            Hobbies & Interests
          </h2>
          <p className="body-text mt-4 max-w-xl">
            The activities that keep me balanced, creative, and mentally sharp outside of the laboratory.
          </p>
        </SectionReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.hobbies.map((hobby, i) => (
            <SectionReveal key={hobby.title} delay={i * 60}>
              <div className="group flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.015] hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all duration-500">
                <div className="mt-0.5 text-emerald-500/70 group-hover:text-emerald-400 transition-colors">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink-100 mb-1">{hobby.title}</h3>
                  <p className="text-xs text-ink-400 leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}