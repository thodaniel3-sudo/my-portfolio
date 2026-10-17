import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import profile from '../config/profile.js';

export default function Footer() {
  const go = (href) => (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10">
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <a
              href="#home"
              onClick={go('#home')}
              className="inline-flex items-center gap-2 font-display font-semibold text-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              Daniel Thomas
            </a>
            <p className="mt-4 text-sm text-ink-400">{profile.title}</p>
            <p className="mt-1 text-xs tracking-wide text-ink-500">
              Materials Science • Materials Informatics • AI • Sustainable Materials
            </p>
          </div>

          <div className="md:text-center">
            <p className="eyebrow mb-4">Navigate</p>
            <div className="flex flex-wrap gap-4 md:justify-center text-sm text-ink-300">
              {profile.nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <p className="eyebrow mb-4">Connect</p>
            <div className="flex gap-3 md:justify-end">
              <FooterIcon href={profile.github} label="GitHub">
                <Github size={16} />
              </FooterIcon>
              <FooterIcon href={profile.linkedin} label="LinkedIn">
                <Linkedin size={16} />
              </FooterIcon>
              <FooterIcon
                href={
                  profile.email && profile.email !== 'YOUR_EMAIL_HERE'
                    ? `mailto:${profile.email}`
                    : ''
                }
                label="Email"
              >
                <Mail size={16} />
              </FooterIcon>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">{profile.footer.copyright}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-xs text-ink-400 hover:text-emerald-400 transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, label, children }) {
  const isPlaceholder = !href || href.startsWith('YOUR_');
  if (isPlaceholder) {
    return (
      <span
        title={`${label} — configure in src/config/profile.js`}
        className="w-9 h-9 rounded-md border border-white/5 flex items-center justify-center text-ink-600 cursor-not-allowed"
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-ink-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
    >
      {children}
    </a>
  );
}