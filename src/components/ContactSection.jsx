import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

const contactText = {
  pt: {
    eyebrow: 'Contato',
    title: 'Se a ideia e transmitir profissionalismo, podemos comecar por aqui',
    description:
      'Estou construindo projetos com foco em sites modernos, boa experiencia de uso e apresentacao visual forte. Se quiser conversar sobre portfolio, landing page ou interface web, este e o melhor ponto de partida.',
  },
  en: {
    eyebrow: 'Contact',
    title: 'If the goal is to communicate professionalism, we can start here',
    description:
      'I am building projects focused on modern websites, strong user experience, and polished visual presentation. If you want to talk about a portfolio, landing page, or web interface, this is the best place to start.',
  },
};

function ContactSection({ language }) {
  const text = contactText[language];

  return (
    <section id="contato" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="panel-border overflow-hidden rounded-[2rem] bg-panel/75 p-6 shadow-card backdrop-blur-xl sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow={text.eyebrow}
            title={text.title}
            description={text.description}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {profile.socialLinks.map((item, index) => {
              const Icon = iconMap[item.label];

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="group rounded-[1.5rem] border border-white/10 bg-abyss/60 p-5 transition hover:-translate-y-1 hover:border-neon/40 hover:bg-white/[0.06]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 p-3 text-cyan transition group-hover:border-neon/40 group-hover:text-neon">
                      <Icon size={20} />
                    </span>
                    <ArrowUpRight className="text-mist transition group-hover:text-white" size={18} />
                  </div>
                  <p className="mt-6 font-display text-2xl font-semibold text-white">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-mist">{item.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
