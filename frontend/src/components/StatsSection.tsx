import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '5+', label: 'Happy Clients' },
  { value: '1+', label: 'Years of Experience' },
  { value: '100%', label: 'Commitment to Quality' },
];

export default function StatsSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
            <p className="text-5xl md:text-6xl font-display font-bold text-gradient-neon tracking-tight">{s.value}</p>
            <p className="text-sm text-muted-foreground mt-3 font-body">{s.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="section-divider mt-32" />
    </section>
  );
}
