import { motion } from 'framer-motion';
import { Code2, Brain, Cloud, Smartphone, Shield, Zap } from 'lucide-react';

const services = [
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Intelligent systems that learn, adapt, and automate complex decisions at enterprise scale.' },
  { icon: Cloud, title: 'Cloud Architecture', desc: 'Scalable, resilient infrastructure built for modern enterprises and global reach.' },
  { icon: Code2, title: 'Custom Development', desc: 'Bespoke software engineered for your unique business challenges and growth goals.' },
  { icon: Smartphone, title: 'Mobile Solutions', desc: 'Cross-platform experiences that feel native and perform flawlessly on every device.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Zero-trust security frameworks protecting your most critical digital assets.' },
  { icon: Zap, title: 'Digital Transformation', desc: 'End-to-end modernization of legacy systems, workflows, and business processes.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Capabilities That <span className="text-gradient-neon">Matter</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-card rounded-[1.25rem] border border-border p-10 hover-lift group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-8 group-hover:bg-primary/12 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
