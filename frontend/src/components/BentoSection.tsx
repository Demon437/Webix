import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Users, BarChart3, Rocket } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function MiniChart() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100];
  return (
    <div className="flex items-end gap-2 h-28 w-full">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-accent/60"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

function BentoCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-card rounded-[1.25rem] border border-border p-10 hover-lift ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function BentoSection() {
  return (
    <section className="relative py-20 px-6 section-tint">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">Why Us</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Built for the <span className="text-gradient-neon">Future</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[200px] md:auto-rows-[220px]">
          <BentoCard className="md:col-span-6 lg:col-span-7 row-span-2" delay={0}>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-8">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-body text-primary tracking-wide">MODERN APPROACH</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.05] mb-5 tracking-tight">
                  Smart & Scalable<br />
                  <span className="text-gradient-neon">Digital Solutions</span>
                </h3>
                <p className="text-muted-foreground font-body text-sm md:text-base max-w-md leading-relaxed">
                  We build fast, scalable, and user-friendly products tailored to your business needs.
                </p>
              </div>
              <div className="flex gap-3 mt-8">
                <div className="h-2 w-20 rounded-full bg-primary/40" />
                <div className="h-2 w-12 rounded-full bg-secondary/30" />
                <div className="h-2 w-8 rounded-full bg-accent/25" />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 lg:col-span-5 row-span-1" delay={0.1}>
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-5xl md:text-6xl font-display font-bold text-gradient-neon">
                  <AnimatedCounter target={12} suffix="+" />
                </p>
                <p className="text-muted-foreground text-sm font-body mt-2">Projects Completed</p>
              </div>
              <div className="w-px h-14 bg-border" />
              <div>
                <p className="text-5xl md:text-6xl font-display font-bold text-gradient-neon">
                  <AnimatedCounter target={5} suffix="+" />
                </p>
                <p className="text-muted-foreground text-sm font-body mt-2">Happy Clients</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 lg:col-span-5 row-span-1" delay={0.2}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-xs font-body text-muted-foreground tracking-wider uppercase">Growth</span>
                </div>
                <span className="text-xs font-body text-primary font-semibold">+15%</span>
              </div>
              <div className="flex-1 flex items-end">
                <MiniChart />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 lg:col-span-4 row-span-1" delay={0.3}>
            <div className="flex flex-col justify-between h-full">
              <Users className="w-9 h-9 text-secondary mb-4" />
              <div>
                <h4 className="text-xl font-display font-bold text-foreground mb-2">Small Focused Team</h4>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  A dedicated team focused on delivering quality work and building long-term relationships.
                </p>
              </div>
              <div className="flex -space-x-2.5 mt-5">
                {['from-primary to-accent', 'from-secondary to-primary', 'from-accent to-primary', 'from-primary to-secondary', 'from-secondary to-accent'].map((grad, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${grad} border-2 border-card flex items-center justify-center`}>
                    <span className="text-[10px] font-display font-bold text-primary-foreground">{['AK', 'SR', 'VM', 'PL', '+8'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-3 lg:col-span-3 row-span-1" delay={0.35}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Rocket className="w-9 h-9 text-primary mb-5" />
              <h4 className="text-lg font-display font-bold text-foreground mb-5">Ready to build?</h4>
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-gradient font-display font-semibold text-sm">
                Start Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-6 lg:col-span-5 row-span-1" delay={0.4}>
            <div className="flex flex-col justify-between h-full">
              <span className="text-[11px] font-body text-muted-foreground tracking-wider uppercase">Tech Stack</span>
              <div className="flex flex-wrap gap-2.5 mt-4">
                {['React', 'Node.js', 'Python', 'AWS', 'K8s', 'TensorFlow', 'Go', 'GraphQL'].map((t) => (
                  <span key={t} className="px-4 py-2 rounded-xl bg-muted/60 border border-border text-xs font-body text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
