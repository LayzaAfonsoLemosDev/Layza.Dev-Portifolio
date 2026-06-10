import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

const aboutText = {
  pt: {
    reason: 'Minha Base',
    title: 'Desenvolvimento com mentalidade de engenharia.',
    description:
      'Não construo apenas interfaces bonitas. Construo sistemas feitos para escalar, fáceis de manter e que resolvem problemas reais do seu negócio.',
    eyebrow: 'Sobre Mim',
    sectionTitle: 'Soluções web com intenção e base técnica sólida',
    sectionDescription:
      'Meu objetivo é transformar regras de negócios complexas em experiências fluidas. Faço isso unindo desenvolvimento web moderno com as melhores práticas corporativas de análise e arquitetura.',
  },
  en: {
    reason: 'My Foundation',
    title: 'Development with an engineering mindset.',
    description:
      'I do not just build pretty interfaces. I build systems designed to scale, easy to maintain, and that solve real problems for your business.',
    eyebrow: 'About Me',
    sectionTitle: 'Web solutions with intention and solid technical grounding',
    sectionDescription:
      'My goal is to turn complex business rules into fluid experiences. I do this by combining modern web development with enterprise best practices for analysis and architecture.',
  },
};

function AboutSection({ language }) {
  const text = aboutText[language];

  return (
    <section id="sobre" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="panel-border rounded-[2rem] bg-panel/65 p-6 shadow-card backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan">{text.reason}</p>
          <h3 className="mt-4 font-display text-3xl font-semibold text-white">
            {text.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-mist">{text.description}</p>
          <div className="mt-8 grid gap-4">
            {profile.experience[language].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-abyss/70 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-neon">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-mist">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow={text.eyebrow}
            title={text.sectionTitle}
            description={text.sectionDescription}
          />
          <div className="grid gap-5">
            {profile.about[language].map((paragraph, index) => (
              <motion.p
                key={paragraph}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-base leading-8 text-mist"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-12">
            <h4 className="font-display text-lg font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-panel/50 px-4 py-2 text-sm font-medium text-mist transition hover:bg-white/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
