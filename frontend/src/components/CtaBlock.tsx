import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaBlock({ variant = 'default' }: { variant?: 'default' | 'final' }) {
  const isFinal = variant === 'final';

  return (
    <section className="relative py-20 px-6">
      {isFinal && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/4 blur-[150px] pointer-events-none" />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className={`max-w-4xl mx-auto text-center rounded-[2rem] p-14 md:p-20 relative ${
          isFinal ? 'bg-card border border-border shadow-xl shadow-primary/5' : ''
        }`}
      >
        <h2 className={`font-display font-bold text-foreground mb-6 tracking-tight ${isFinal ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'}`}>
          {isFinal ? (
            <>Stop Planning. <span className="text-gradient-neon">Start Building.</span></>
          ) : (
            <>Ready to <span className="text-gradient-neon">Accelerate?</span></>
          )}
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {isFinal ? 'Book a free 30-minute strategy call. No commitment, no sales pitch — just a clear roadmap for your product.' : 'Join 150+ companies who shipped faster with Webix Infotech.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl btn-gradient font-display font-semibold text-base hover:scale-105 transition-all duration-500">
            Book Free Strategy Call
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          {isFinal && (
            <button className="px-10 py-5 rounded-2xl border border-border text-foreground font-display font-semibold text-base hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-500">
              View Our Work
            </button>
          )}
        </div>
        {isFinal && (
          <p className="text-muted-foreground/60 text-xs font-body mt-8 tracking-wide">
            No credit card required · Response within 24 hours
          </p>
        )}
      </motion.div>
    </section>
  );
}
