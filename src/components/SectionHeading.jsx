import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mb-10 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <span className="mb-3 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-mist">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
