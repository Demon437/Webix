// src/components/HeroSection.tsx

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextType from "./TextType";

// CrystalScene ko lazy load kiya gaya hai performance ke liye
const CrystalScene = lazy(() => import("./CrystalScene"));

export default function HeroSection() {
  // Intersection observer ka upyog karke check karein ki section dikh raha hai ya nahi
  const { ref, inView } = useInView({
    threshold: 0.1, // Jab 10% section dikhe tab trigger ho
    triggerOnce: false, // Scroll up/down karne par unmount/mount ho sake
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
      style={{ willChange: "transform" }} // GPU optimization ke liye
    >
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none transition-opacity duration-1000" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none transition-opacity duration-1000" />

      {/* Jab tak user scroll karke niche hai, 3D scene render nahi hoga (Save GPU) */}
      <Suspense fallback={<div className="absolute inset-0" />}>
        <div
          className={`absolute inset-0 ${inView ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700`}
        >
          <CrystalScene />
        </div>
      </Suspense>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel-deep rounded-[2rem] p-10 md:p-16 lg:p-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs md:text-sm font-body tracking-[0.4em] uppercase text-primary mb-8"
          >
            WEBIX INFOTECH
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-gray-900 dark:text-white">
              <span className="text-primary block">Webix Infotech</span>
              <TextType
                text={[
                  "Empowering Digital Innovation",
                  "Building Scalable IT Solutions",
                  "Transforming Ideas into Products",
                  "Driving Growth with Technology",
                ]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={1500}
                loop={true}
                showCursor
                cursorCharacter="|"
                className="text-primary block"
                variableSpeed={false}
                // TypeScript Error Fix: required prop add kiya gaya
                onSentenceComplete={() => { }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-200 text-base md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed font-medium"
          >
            We build secure, scalable, and intelligent IT solutions for
            startups, enterprises, and global brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button className="px-10 py-5 rounded-2xl btn-gradient font-display font-semibold text-base transition-transform hover:scale-105 active:scale-95">
              Start Your Project
            </button>
            <button className="px-10 py-5 rounded-2xl border border-border text-foreground font-display font-semibold text-base transition-all hover:bg-primary/5 hover:scale-105">
              View Case Studies
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
    </section>
  );
}