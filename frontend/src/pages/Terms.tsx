import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FileText, Shield, AlertTriangle, Scale, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "Acceptance of Terms",
    content:
      "By accessing or using our services, you agree to be bound by these Terms and Conditions.",
  },
  {
    id: "usage",
    icon: Shield,
    title: "Use of Services",
    content:
      "You agree to use our services only for lawful purposes and in accordance with applicable laws.",
  },
  {
    id: "liability",
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content:
      "We are not liable for any indirect or consequential damages arising from the use of our services.",
  },
  {
    id: "governing",
    icon: Scale,
    title: "Governing Law",
    content:
      "These terms are governed by the laws applicable in your jurisdiction.",
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "Updates to Terms",
    content:
      "We may update these Terms from time to time. Continued use means you accept the updated terms.",
  },
];

export default function Terms() {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const glow = useTransform(
    [x, y],
    ([lx, ly]) => `radial-gradient(300px at ${lx}px ${ly}px, rgba(99,102,241,0.2), transparent 80%)`
  );

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const [active, setActive] = useState("");
  useEffect(() => {
    const observers = [];
    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(sec.id),
        { threshold: 0.6 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 origin-left z-50"
      />

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_50%)]" />

      {/* Cursor Glow */}
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0" />

      {/* Back */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:bg-white/[0.1] transition"
        >
          ← Back
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">

        {/* Hero */}
        <div className="text-center mb-28">
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Terms & Conditions
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Clear terms. Transparent policies.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Sidebar */}
          <div className="hidden lg:block fixed left-10 top-40 w-64">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`block px-3 py-2 rounded-lg text-sm transition ${
                    active === sec.id
                      ? "bg-indigo-500/20 text-indigo-400"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 lg:ml-72 space-y-20">
            {sections.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <motion.div
                  key={i}
                  id={sec.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-blue-500/40"
                >
                  <div className="rounded-3xl bg-black/70 backdrop-blur-2xl p-10 border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.1)]">
                    <div className="flex gap-5">
                      <div className="p-3 bg-white/10 rounded-xl h-12">
                        <Icon />
                      </div>

                      <div>
                        <h2 className="text-2xl font-semibold mb-3">
                          {sec.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                          {sec.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <a
            href="/contact"
            className="inline-block px-12 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Contact Support
          </a>

          <p className="mt-6 text-xs text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
