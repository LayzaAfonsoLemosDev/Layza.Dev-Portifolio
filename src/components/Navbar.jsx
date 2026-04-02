import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = {
  pt: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],
  en: [
    { label: 'Home', href: '#inicio' },
    { label: 'Projects', href: '#projetos' },
    { label: 'About', href: '#sobre' },
    { label: 'Contact', href: '#contato' },
  ],
};

function Navbar({ language, onLanguageToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled
    ? 'border-white/10 bg-abyss/80 shadow-card backdrop-blur-xl'
    : 'border-transparent bg-transparent';
  const currentNavItems = navItems[language];
  const languageLabel = language === 'pt' ? 'EN' : 'PT';
  const menuLabel = language === 'pt' ? 'Abrir menu' : 'Open menu';

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${navClass}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <a href="#inicio" className="font-display text-lg font-bold tracking-[0.2em] text-white">
          LAYZA<span className="text-cyan">.DEV</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {currentNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-mist transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onLanguageToggle}
            className="rounded-full border border-cyan/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan/50 hover:bg-cyan/10"
          >
            {languageLabel}
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={menuLabel}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-panel/95 p-4 shadow-card backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {currentNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm text-mist transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                onLanguageToggle();
                setIsOpen(false);
              }}
              className="mt-2 block w-full rounded-2xl border border-cyan/30 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-cyan/10"
            >
              {language === 'pt' ? 'Switch to English' : 'Mudar para portugues'}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
