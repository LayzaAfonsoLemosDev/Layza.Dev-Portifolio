import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, LayoutDashboard, Mail, Sparkles, Download } from 'lucide-react';
import { profile, rotatingTitles } from '../data/profile';

const heroMockup = {
  pt: {
    conceptLabel: 'Especialidades',
    firstImpression: 'Soluções',
    clearPresence: 'O que eu entrego',
    cards: [
      { label: 'Sistemas', value: 'Sistemas Web' },
      { label: 'Interfaces', value: 'Sites Profissionais' },
      { label: 'Mobile', value: 'Aplicativos' },
    ],
    primaryCta: 'Ver projetos',
    secondaryCta: 'Entrar em contato',
  },
  en: {
    conceptLabel: 'Specialties',
    firstImpression: 'Solutions',
    clearPresence: 'What I deliver',
    cards: [
      { label: 'Systems', value: 'Web Systems' },
      { label: 'Interfaces', value: 'Pro Websites' },
      { label: 'Mobile', value: 'Applications' },
    ],
    primaryCta: 'View projects',
    secondaryCta: 'Get in touch',
  },
};

function HeroSection({ language }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const texts = heroMockup[language];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % rotatingTitles[language].length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [language]);

  useEffect(() => {
    setTitleIndex(0);
  }, [language]);

  return (
    <section id="inicio" className="px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-panel/70 px-4 py-2 text-sm text-neon shadow-glow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            {profile.heroBadge[language]}
          </motion.span>

          <motion.h1
            className="font-display text-5xl font-bold leading-[0.92] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Layza Lemos
            <span className="mt-3 block max-w-xl text-2xl font-medium leading-tight text-mist sm:text-3xl">
              {profile.heroSubtitle[language]}
            </span>
          </motion.h1>

          <div className="mt-8 min-h-[3.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={rotatingTitles[language][titleIndex]}
                className="font-display text-lg font-medium uppercase tracking-[0.22em] text-cyan sm:text-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
              >
                {rotatingTitles[language][titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            className="mt-4 max-w-2xl text-lg leading-8 text-mist"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {profile.heroDescription[language]}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-abyss transition hover:scale-[1.02]"
            >
              {texts.primaryCta}
              <ArrowRight size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan/40 hover:bg-cyan/10"
            >
              {texts.secondaryCta}
              <Mail size={18} />
            </a>
            <a
              href="/curriculo-layza-lemos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan/40 hover:bg-cyan/10"
            >
              {language === 'pt' ? 'Baixar CV' : 'Resume'}
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {profile.highlights[language].map((item) => (
              <div
                key={item}
                className="panel-border rounded-3xl bg-white/[0.03] px-4 py-4 text-sm font-medium leading-6 text-white"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-neon/20 blur-3xl" />
          <div className="panel-border relative rounded-[2rem] bg-panel/70 p-5 shadow-card backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-base/80 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan">
                  {texts.conceptLabel}
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan">
                        {texts.firstImpression}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {texts.clearPresence}
                      </h3>
                    </div>
                    <span className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan">
                      <LayoutDashboard size={18} />
                    </span>
                  </div>


                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {texts.cards.map((card) => (
                      <div key={card.label} className="rounded-2xl bg-white/[0.04] p-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-mist">{card.label}</p>
                        <p className="mt-2 text-sm font-semibold text-white">{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  {profile.metrics[language].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-mist">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-display text-xl text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
