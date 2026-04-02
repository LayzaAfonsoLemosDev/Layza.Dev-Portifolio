import Navbar from './Navbar';
import Footer from './Footer';

function MainLayout({ children, language, onLanguageToggle }) {
  return (
    <div className="relative overflow-hidden bg-mesh">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-80 h-80 w-80 rounded-full bg-neon/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
      </div>
      <Navbar language={language} onLanguageToggle={onLanguageToggle} />
      <main className="relative z-10">{children}</main>
      <Footer language={language} />
    </div>
  );
}

export default MainLayout;
