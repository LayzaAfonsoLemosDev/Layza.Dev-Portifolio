import { useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

function Home() {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title =
      language === 'pt' ? 'Layza Lemos | Developer' : 'Layza Lemos | Developer';
  }, [language]);

  return (
    <MainLayout language={language} onLanguageToggle={() => setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))}>
      <HeroSection language={language} />
      <ProjectsSection language={language} />
      <AboutSection language={language} />
      <ContactSection language={language} />
    </MainLayout>
  );
}

export default Home;
