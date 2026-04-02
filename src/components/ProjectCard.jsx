import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projectCardText = {
  pt: {
    outcome: 'O que entrega',
    demo: 'Demo',
  },
  en: {
    outcome: 'What it delivers',
    demo: 'Live demo',
  },
};

function ProjectCard({ project, index, language }) {
  const hasLiveDemo = project.demo && !project.demo.includes('example.com');
  const text = projectCardText[language];

  return (
    <motion.article
      className="panel-border group rounded-[1.75rem] bg-panel/70 p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-glow"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-start gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">{project.category[language]}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.name}</h3>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-mist">{project.description[language]}</p>

      <div className="mt-5 rounded-3xl border border-white/10 bg-base/60 p-4">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan">{text.outcome}</p>
        <p className="mt-2 text-sm leading-7 text-white">{project.outcome[language]}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-abyss/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-mist"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-cyan/40 hover:bg-cyan/10"
        >
          <Github size={16} />
          GitHub
        </a>
        {hasLiveDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-neon px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {text.demo}
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
