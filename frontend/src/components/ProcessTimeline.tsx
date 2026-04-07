import { motion } from 'framer-motion';
import { Search, PenTool, Code2, TestTube, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Discovery', desc: 'Deep-dive into your business, users, and market to define scope and success criteria.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes, prototypes, and a design system crafted for conversion and delight.' },
  { icon: Code2, title: 'Engineering', desc: 'Agile sprints with daily standups, CI/CD pipelines, and transparent progress.' },
  { icon: TestTube, title: 'QA & Testing', desc: 'Automated + manual testing across devices, load scenarios, and edge cases.' },
  { icon: Rocket, title: 'Launch', desc: 'Zero-downtime deployment with monitoring, alerting, and rollback strategies.' },
  { icon: BarChart3, title: 'Growth', desc: 'Post-launch analytics, A/B testing, and iterative improvements driven by data.' },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-20 px-6 section-tint">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">How We Work</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Our <span className="text-gradient-neon">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, x: isLeft ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className={`relative flex items-center mb-20 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-md shadow-primary/20 z-10" />
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className="bg-card rounded-[1.25rem] border border-border p-8 hover-lift group">
                    <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 transition-all duration-500">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-[11px] font-body text-muted-foreground tracking-[0.2em] uppercase">Step {i + 1}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
