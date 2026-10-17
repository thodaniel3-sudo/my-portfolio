import { Mail, Github, Linkedin, Facebook, ArrowUpRight, MessageCircle } from 'lucide-react';
import profile from '../config/profile.js';
import SectionReveal from './SectionReveal.jsx';

export default function Contact() {
  const isEmailPlaceholder = profile.email === 'YOUR_EMAIL_HERE';
  const waNumber = profile.whatsapp ? profile.whatsapp.replace(/\D/g, '') : '';

  return (
    <section id="contact" className="section relative">
      <div className="container-x">
        <SectionReveal>
          <div className="card p-8 md:p-14 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-electric-500/5 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="heading">{profile.contact.headline}</h2>
              <p className="body-text mt-6 text-base md:text-lg">{profile.contact.text}</p>

              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <ContactCard
                  icon={<Mail size={16} />}
                  label="Email"
                  value={isEmailPlaceholder ? 'Set in profile.js' : profile.email}
                  href={isEmailPlaceholder ? '' : `mailto:${profile.email}`}
                />
                
                <ContactCard
                  icon={<MessageCircle size={16} />}
                  label="WhatsApp"
                  value="Send a message"
                  href={waNumber ? `https://wa.me/${waNumber}` : ''}
                />

                <ContactCard
                  icon={<Github size={16} />}
                  label="GitHub"
                  value={isUrlPlaceholder(profile.github) ? 'Set in profile.js' : 'View profile'}
                  href={profile.github}
                />
                
                <ContactCard
                  icon={<Linkedin size={16} />}
                  label="LinkedIn"
                  value={isUrlPlaceholder(profile.linkedin) ? 'Set in profile.js' : 'View profile'}
                  href={profile.linkedin}
                />

                <ContactCard
                  icon={<Facebook size={16} />}
                  label="Facebook"
                  value={isUrlPlaceholder(profile.facebook) ? 'Set in profile.js' : 'View profile'}
                  href={profile.facebook}
                />
              </div>

              <ContactForm email={profile.email} />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

function isUrlPlaceholder(url) {
  return !url || url.startsWith('YOUR_');
}

function ContactCard({ icon, label, value, href }) {
  const disabled = !href || href.startsWith('YOUR_');
  const Component = disabled ? 'div' : 'a';
  return (
    <Component
      href={!disabled ? href : undefined}
      target={!disabled && href.startsWith('http') ? '_blank' : undefined}
      rel={!disabled && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group flex items-start gap-3 p-4 rounded-lg border border-white/8 bg-white/[0.015] transition-all duration-500 ${
        disabled ? 'opacity-60 cursor-not-allowed' : 'hover:border-emerald-500/40 hover:bg-emerald-500/[0.03]'
      }`}
    >
      <div className="mt-0.5 text-emerald-400 shrink-0">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] tracking-widest uppercase text-ink-500 mb-1">{label}</p>
        <p className="text-sm text-ink-200 truncate flex items-center gap-1">
          {value}
          {!disabled && (
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </p>
      </div>
    </Component>
  );
}

function ContactForm({ email }) {
  const isPlaceholder = !email || email === 'YOUR_EMAIL_HERE';

  const onSubmit = (e) => {
    e.preventDefault();
    if (isPlaceholder) {
      alert(
        'Email not configured yet.\n\nOpen src/config/profile.js and replace YOUR_EMAIL_HERE with your real address.'
      );
      return;
    }
    const data = new FormData(e.target);
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio contact');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="mt-12 pt-10 border-t border-white/5">
      <p className="eyebrow mb-5">Send a message</p>

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          required
          name="name"
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-md bg-white/[0.02] border border-white/10 text-sm text-ink-100 placeholder:text-ink-500 focus:border-emerald-500/60 focus:outline-none transition-colors"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full px-4 py-3 rounded-md bg-white/[0.02] border border-white/10 text-sm text-ink-100 placeholder:text-ink-500 focus:border-emerald-500/60 focus:outline-none transition-colors"
        />
      </div>

      <input
        name="subject"
        placeholder="Subject"
        className="mt-3 w-full px-4 py-3 rounded-md bg-white/[0.02] border border-white/10 text-sm text-ink-100 placeholder:text-ink-500 focus:border-emerald-500/60 focus:outline-none transition-colors"
      />

      <textarea
        required
        name="message"
        rows={5}
        placeholder="Your message"
        className="mt-3 w-full px-4 py-3 rounded-md bg-white/[0.02] border border-white/10 text-sm text-ink-100 placeholder:text-ink-500 focus:border-emerald-500/60 focus:outline-none transition-colors resize-y"
      />

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          <Mail size={16} /> Send Message
        </button>
        <p className="text-xs text-ink-500">
          Opens your email client — no data is stored.
        </p>
      </div>
    </form>
  );
}