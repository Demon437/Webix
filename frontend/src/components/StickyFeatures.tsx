import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Layers, Rocket, Target, Sparkles } from 'lucide-react';

const features = [
  { icon: Cpu, title: 'AI-Native Architecture', desc: 'Every system we build is designed with intelligence at its core — from predictive APIs to self-optimizing pipelines.', accent: 'from-primary to-accent' },
  { icon: Layers, title: 'Modular Scalability', desc: 'Microservice-first design ensures your platform scales effortlessly from MVP to millions of users.', accent: 'from-accent to-secondary' },
  { icon: Rocket, title: 'Rapid Deployment', desc: 'CI/CD pipelines and infrastructure-as-code cut your time-to-market by 60% without sacrificing quality.', accent: 'from-secondary to-primary' },
  { icon: Target, title: 'Outcome-Driven Design', desc: 'We measure success by your KPIs — conversion, retention, and revenue growth are built into every sprint.', accent: 'from-primary to-secondary' },
  { icon: Sparkles, title: 'Future-Proof Stack', desc: 'Built on technologies that evolve with you — no rewrites, no lock-in, no technical debt surprises.', accent: 'from-accent to-primary' },
];

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${features.length * 75}vh` }}
    >      <div className="sticky top-0 h-screen flex items-center overflow-hidden" style={{ height: `${features.length * 15}vh` }}>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">
              Why We're Different
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 tracking-tight leading-[1.05]">
              Features That <span className="text-gradient-neon">Redefine</span> What's Possible
            </motion.h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-md">
              We don't just build software. We engineer competitive advantages that compound over time.
            </p>
          </div>
          <div className="relative h-[420px]">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} total={features.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, total, progress }: { feature: (typeof features)[number]; index: number; total: number; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.05, end - 0.05, end], [80, 0, 0, -80]);
  const scale = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.95, 1, 1, 0.95]);
  const Icon = feature.icon;

  return (
    <motion.div style={{ opacity, y, scale }} className="absolute inset-0 flex items-center">
      <div className="bg-card rounded-[1.25rem] border border-border p-10 w-full shadow-lg shadow-primary/5">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-8 opacity-90`}>
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 tracking-tight">{feature.title}</h3>
        <p className="text-muted-foreground font-body text-base leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
}
