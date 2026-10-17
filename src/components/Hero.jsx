import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles, MessageCircle, Facebook } from 'lucide-react';
import profile from '../config/profile.js';
import CrystalCanvas from './CrystalCanvas.jsx';

export default function Hero() {
  const go = (href) => (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const isEmailPlaceholder = profile.email === 'YOUR_EMAIL_HERE';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-grid-dark bg-[size:56px_56px] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/60 to-ink-950" />
      <div className="absolute inset-0">
        <CrystalCanvas />
      </div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-electric-500/5 blur-[120px]" />

      <div className="container-x relative z-10 w-full">
        {/* Split grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Profile Photo */}
          <div 
            className="lg:col-span-5 flex justify-center lg:justify-start animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative group">
              {/* Glowing animated background ring */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500/40 via-electric-500/20 to-transparent rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Image Frame */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-ink-900 shadow-2xl">
                <img
                  src="/daniel.png"
                  alt="Daniel Thomas"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="backdrop-blur-md bg-ink-950/60 border border-white/10 rounded-lg p-3">
                    <p className="text-emerald-400 text-xs font-medium tracking-wider uppercase mb-1">
                      Materials & Metallurgical Engineer
                    </p>
                    <p className="text-ink-50 font-display font-semibold text-lg">
                      Daniel Thomas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs mb-8 animate-fade-up">
              <Sparkles size={12} />
              <span className="tracking-widest uppercase">{profile.hero.eyebrow}</span>
            </div>

            <h1
              className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-ink-50 leading-[1.05] animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              Daniel
              <br />
              <span className="bg-gradient-to-r from-ink-50 via-ink-200 to-ink-400 bg-clip-text text-transparent">
                Thomas
              </span>
            </h1>

            <div
              className="mt-6 flex items-center gap-3 text-ink-200 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <span className="w-8 h-px bg-emerald-500" />
              <p className="text-base md:text-lg font-medium">{profile.title}</p>
            </div>

            <p
              className="mt-4 text-sm md:text-base tracking-wide text-ink-400 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              Materials Science • Materials Informatics • AI • Sustainable Materials
            </p>

            <p
              className="mt-8 max-w-xl text-base md:text-lg text-ink-300 leading-relaxed animate-fade-up"
              style={{ animationDelay: '360ms' }}
            >
              {profile.hero.headline}
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: '440ms' }}
            >
              <a href="#projects" onClick={go('#projects')} className="btn-primary">
                Explore My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" onClick={go('#contact')} className="btn-ghost">
                Let&apos;s Connect
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-5 text-sm text-ink-400 animate-fade-up"
              style={{ animationDelay: '500ms' }}
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-emerald-500 shrink-0" />
                {profile.location}
              </span>

              <span className="w-px h-4 bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-4">
                <SocialLink href={profile.github} icon={<Github size={14} />} label="GitHub" />
                <SocialLink href={profile.linkedin} icon={<Linkedin size={14} />} label="LinkedIn" />
                <SocialLink href={profile.facebook} icon={<Facebook size={14} />} label="Facebook" />
                <SocialLink
                  href={isEmailPlaceholder ? '' : `mailto:${profile.email}`}
                  icon={<Mail size={14} />}
                  label="Email"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  const isPlaceholder = !href || href.startsWith('YOUR_');
  if (isPlaceholder) {
    return (
      <span
        className="inline-flex items-center gap-2 text-ink-500 cursor-not-allowed"
        title="Set this in src/config/profile.js"
      >
        {icon} {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
    >
      {icon} {label}
    </a>
  );
}