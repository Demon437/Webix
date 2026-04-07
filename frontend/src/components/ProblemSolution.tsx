import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ArrowDown } from 'lucide-react';

const problems = [
  'Outdated tech stack slowing your team down',
  'Months of development with no measurable ROI',
  'Security vulnerabilities left unpatched',
  'Scaling bottlenecks killing user experience',
];

const solutions = [
  'Modern architecture deployed in weeks, not months',
  'Data-driven development tied to business KPIs',
  'Zero-trust security baked into every layer',
  'Auto-scaling infrastructure that grows with you',
];

export default function ProblemSolution() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">The Problem</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Legacy Tech Is <span className="text-destructive">Costing You</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-5">
            <h3 className="text-xl font-display font-semibold text-destructive/80 mb-8">Without Webix</h3>
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-destructive/5 border border-destructive/10 hover:border-destructive/20 transition-colors duration-400">
                <XCircle className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" />
                <p className="text-sm md:text-base font-body text-muted-foreground">{p}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-5">
            <h3 className="text-xl font-display font-semibold text-primary mb-8">With Webix</h3>
            {solutions.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors duration-400">
                <CheckCircle className="w-5 h-5 text-primary/70 mt-0.5 shrink-0" />
                <p className="text-sm md:text-base font-body text-foreground/80">{s}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-20">
          <a href="#pricing" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl btn-gradient font-display font-semibold text-base hover:scale-105 transition-all duration-500">
            See How We Fix This <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
