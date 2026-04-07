import { motion } from 'framer-motion';

const stats = [
  { value: '₹5L+', label: 'Value Delivered to Clients' },
  { value: '20%+', label: 'Avg. Efficiency Improvement' },
  { value: '2x', label: 'Faster Project Delivery' },
  { value: '100%', label: 'Client Satisfaction Focus' },
];

export default function ImpactStats() {
  return (
    <section className="relative py-26 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">Impact</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Numbers That <span className="text-gradient-neon">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-card rounded-[1.25rem] border border-border p-8 text-center hover-lift">
              <p className="text-3xl md:text-5xl font-display font-bold text-gradient-neon tracking-tight">{s.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground font-body mt-3 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
