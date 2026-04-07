import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Great communication and smooth project delivery. The team understood our requirements clearly and executed well.",
    name: 'Early Client',
    role: 'Startup Founder',
  },
  {
    quote: "Professional approach with strong technical knowledge. Looking forward to working together again.",
    name: 'Business Owner',
    role: 'Small Business',
  },
  {
    quote: "Clean design, fast performance, and reliable support throughout the project.",
    name: 'Client',
    role: 'Entrepreneur',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-10" />

          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl md:text-3xl font-body text-foreground/80 leading-relaxed mb-10 italic">
                  "{testimonials[current].quote}"
                </p>

                <p className="font-display font-bold text-lg text-foreground">
                  {testimonials[current].name}
                </p>

                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[current].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current
                    ? 'bg-primary w-8'
                    : 'bg-border w-2 hover:bg-muted-foreground/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}