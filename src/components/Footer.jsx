const footerText = {
  pt: {
    line1: 'Layza Lemos. Portfolio autoral focado em desenvolvimento web, UX e interfaces modernas.',
    line2: 'Construido com React, TailwindCSS e Framer Motion.',
  },
  en: {
    line1: 'Layza Lemos. Personal portfolio focused on web development, UX, and modern interfaces.',
    line2: 'Built with React, TailwindCSS, and Framer Motion.',
  },
};

function Footer({ language }) {
  const text = footerText[language];

  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <p>{text.line1}</p>
        <p>{text.line2}</p>
      </div>
    </footer>
  );
}

export default Footer;
