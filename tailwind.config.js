/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#050816',
        base: '#050816',
        midnight: '#091229',
        surface: '#0c1228',
        panel: '#111936',
        line: '#1b2548',
        accent: '#8b5cf6',
        neon: '#8b5cf6',
        glow: '#38bdf8',
        cyan: '#38bdf8',
        mist: '#aab4d0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.24)',
        card: '0 18px 40px rgba(3, 7, 18, 0.45)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(56,189,248,0.14), transparent 22%), radial-gradient(circle at top right, rgba(139,92,246,0.16), transparent 20%), linear-gradient(135deg, rgba(12,18,40,0.98), rgba(5,8,22,1))',
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
