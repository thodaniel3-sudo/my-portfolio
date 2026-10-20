import { useEffect, useState, useMemo } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon, Mail } from 'lucide-react';
import profile from '../config/profile.js';
import { useScrollSpy } from '../hooks/useScrollSpy.js';
import { useTheme } from '../context/ThemeContext.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // LOCK the array so it doesn't trigger infinite re-renders
  const sectionIds = useMemo(() => {
    return profile.nav.map((n) => n.href.replace('#', ''));
  }, []);
  
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink-950/70 border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a
          href="#home"
          onClick={go('#home')}
          className="flex items-center gap-2 font-display font-semibold tracking-tight shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <span className="text-ink-50 dark:text-ink-50">Daniel Thomas</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {profile.nav.map((item) => {
            const isActive = active === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={go(item.href)}
                className={`relative px-2 xl:px-3 py-2 text-[13px] xl:text-sm transition-colors ${
                  isActive ? 'text-emerald-400' : 'text-ink-300 hover:text-ink-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-2 right-2 -bottom-0.5 h-px bg-emerald-500/70" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <IconLink href={profile.github} label="GitHub">
            <Github size={16} />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <Linkedin size={16} />
          </IconLink>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-ink-300 hover:text-emerald-400 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={profile.email !== 'YOUR_EMAIL_HERE' ? `mailto:${profile.email}` : '#contact'}
            onClick={profile.email === 'YOUR_EMAIL_HERE' ? go('#contact') : undefined}
            className="btn-primary !px-3 xl:!px-4 !py-2 text-xs"
          >
            <Mail size={14} /> Contact
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-ink-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-ink-950/95 backdrop-blur-xl transition-all duration-400 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-x py-8 flex flex-col gap-1 overflow-y-auto h-full pb-20">
          {profile.nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={go(item.href)}
              className="py-3 border-b border-white/5 text-xl font-display font-medium text-ink-100 hover:text-emerald-400 transition-colors"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(12px)',
                opacity: open ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 40}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-6">
            <IconLink href={profile.github} label="GitHub">
              <Github size={18} />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </IconLink>
            <button
              onClick={toggleTheme}
              className="p-2 text-ink-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconLink({ href, label, children }) {
  const isPlaceholder = !href || href.startsWith('YOUR_');
  if (isPlaceholder) {
    return (
      <span
        title={`${label} — set in src/config/profile.js`}
        className="p-2 rounded-md border border-white/5 text-ink-500 cursor-not-allowed"
        aria-label={`${label} (not configured yet)`}
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-md border border-white/5 text-ink-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
    >
      {children}
    </a>
  );
}