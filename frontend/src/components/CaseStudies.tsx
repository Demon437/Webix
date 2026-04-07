import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: 'Fintech Dashboard',
    industry: 'Fintech',
    metric: 'Fast',
    metricLabel: 'Secure Transactions',
    desc: 'Designed and developed a modern payment dashboard with secure APIs and scalable backend architecture.',
    tags: ['Node.js', 'AWS', 'API'],
  },
  {
    client: 'Healthcare Platform',
    industry: 'HealthTech',
    metric: 'Reliable',
    metricLabel: 'System Design',
    desc: 'Built a structured healthcare system focusing on data security, performance, and clean user experience.',
    tags: ['Python', 'Cloud', 'UI/UX'],
  },
  {
    client: 'E-Commerce App',
    industry: 'E-Commerce',
    metric: 'Scalable',
    metricLabel: 'Growth Ready',
    desc: 'Created a responsive e-commerce platform with optimized performance and user-friendly shopping flow.',
    tags: ['React', 'Firebase', 'Payments'],
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-20 px-6 section-gray">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">
            Work
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            What We <span className="text-gradient-neon">Build</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Showcasing our capabilities through modern, scalable, and high-performance solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-card rounded-[1.25rem] border border-border p-10 hover-lift group flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] uppercase text-muted-foreground tracking-wider">
                  {c.industry}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {c.client}
              </h3>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {c.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-2xl font-display font-bold text-gradient-neon">
                  {c.metric}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {c.metricLabel}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-muted border border-border text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}