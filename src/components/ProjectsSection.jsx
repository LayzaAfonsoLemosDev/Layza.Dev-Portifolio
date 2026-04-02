import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const projectSectionText = {
  pt: {
    eyebrow: 'Projetos',
    title: 'Projetos pensados para resolver, organizar e causar uma boa primeira impressao',
    description:
      'Cada projeto aqui nasce da mesma intencao: transformar informacao em interfaces claras, profissionais e agradaveis de navegar. O objetivo nao e so parecer moderno, e fazer sentido para quem usa.',
  },
  en: {
    eyebrow: 'Projects',
    title: 'Projects designed to solve, organize, and create a strong first impression',
    description:
      'Each project here is shaped by the same intention: turning information into clear, professional, and enjoyable interfaces. The goal is not just to look modern, but to make sense for the people using it.',
  },
};

function ProjectsSection({ language }) {
  const text = projectSectionText[language];

  return (
    <section id="projetos" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
