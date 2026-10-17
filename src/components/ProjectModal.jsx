import { useEffect } from 'react';
import { X, Github, ExternalLink, Layers, Wrench, Target, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;
  const { detail } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6 bg-ink-950/85 backdrop-blur-md animate-fade-up"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[100vh] md:max-h-[90vh] overflow-y-auto bg-ink-900 border border-white/10 md:rounded-2xl shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="sticky top-4 ml-auto mr-4 z-10 flex w-9 h-9 items-center justify-center rounded-full border border-white/10 bg-ink-950/80 text-ink-300 hover:text-emerald-400 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="px-6 md:px-10 pb-10 -mt-8">
          <p className="eyebrow mb-3">Project {project.number}</p>
          <h3 className="font-display text-2xl md:text-4xl text-ink-50 leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-ink-400 text-sm">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-8">
            <Section title="Overview">{detail.overview}</Section>

            {detail.materials?.length > 0 && (
              <Section title="Materials & Data" icon={<Layers size={14} />}>
                <ul className="space-y-2">
                  {detail.materials.map((m, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-300">
                      <span className="text-emerald-500 mt-1.5">▪</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {detail.methods?.length > 0 && (
              <Section title="Methods & Approach" icon={<Wrench size={14} />}>
                <ul className="space-y-2">
                  {detail.methods.map((m, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-300">
                      <span className="text-emerald-500 mt-1.5">▪</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {detail.properties?.length > 0 && (
              <Section title="Properties Studied" icon={<Target size={14} />}>
                <div className="flex flex-wrap gap-2">
                  {detail.properties.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-3 py-1.5 rounded-md border border-white/10 text-ink-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            <Section title="Engineering Relevance">{detail.relevance}</Section>
            <Section title="Research Focus" icon={<Award size={14} />}>
              {detail.focus}
            </Section>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github size={16} /> View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
                       {!project.githubUrl && !project.liveUrl && (
              <div className="flex items-center gap-2 pt-2">
                <span className="w-8 h-px bg-emerald-500/50" />
                <p className="text-xs tracking-widest uppercase text-emerald-400 font-medium">
                  Where Materials Science Meets Artificial Intelligence
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children, icon }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-emerald-500">{icon}</span>}
        <p className="text-[11px] tracking-widest uppercase text-ink-500">{title}</p>
      </div>
      <div className="text-sm text-ink-300 leading-relaxed">{children}</div>
    </div>
  );
}