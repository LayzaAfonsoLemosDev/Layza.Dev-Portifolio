import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

const aboutText = {
  pt: {
    reason: 'Por que funciona',
    title: 'Pessoas se conectam com o que entendem rapido.',
    description:
      'Um bom site prende atencao quando reduz confusao, guia o olhar e transmite seguranca. E nisso que eu penso quando desenvolvo.',
    eyebrow: 'Sobre Mim',
    sectionTitle: 'Desenvolvimento web com intencao, cuidado visual e base tecnica',
    sectionDescription:
      'Nao penso em um site apenas como algo bonito. Penso em ritmo de leitura, percepcao de valor, confianca visual e experiencia fluida do primeiro ao ultimo scroll.',
  },
  en: {
    reason: 'Why it works',
    title: 'People connect with what they understand quickly.',
    description:
      'A strong website holds attention when it reduces confusion, guides the eye, and communicates confidence. That is how I think when I build.',
    eyebrow: 'About Me',
    sectionTitle: 'Web development with intention, visual care, and technical grounding',
    sectionDescription:
      'I do not see a website as something that only needs to look good. I think about reading rhythm, value perception, visual trust, and a fluid experience from the first to the last scroll.',
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
            {profile.principles[language].map((principle) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-white/10 bg-abyss/70 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-neon">{principle.title}</p>
                <p className="mt-2 text-sm leading-7 text-mist">{principle.description}</p>
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
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
