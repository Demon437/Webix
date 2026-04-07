import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Cookie,
  RefreshCw,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  { id: "collect", icon: ShieldCheck, title: "Information We Collect", content: "We collect personal and business information such as name, email, phone number, and project requirements when you interact with our services." },
  { id: "usage", icon: Database, title: "How We Use Data", content: "Your data is used to deliver services, improve user experience, provide support, and enhance our offerings." },
  { id: "security", icon: Lock, title: "Data Security", content: "We follow strict security practices including encryption, secure servers, and access control to safeguard your information." },
  { id: "cookies", icon: Cookie, title: "Cookies & Tracking", content: "We use cookies and analytics tools to understand user behavior and improve website performance." },
  { id: "rights", icon: Eye, title: "Your Rights", content: "You can request access, updates, or deletion of your personal data anytime by contacting us." },
  { id: "updates", icon: RefreshCw, title: "Policy Updates", content: "We may update this policy periodically. Changes will be reflected on this page." },
];

export default function Privacy() {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // cursor glow
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glow = useTransform(
    [x, y],
    ([lx, ly]) => `radial-gradient(300px at ${lx}px ${ly}px, rgba(59,130,246,0.2), transparent 80%)`
  );

  function handleMouseMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  // active section
  const [active, setActive] = useState("");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
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
      {/* PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 origin-left z-50"
      />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]" />

      {/* CURSOR GLOW */}
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0" />

      {/* FLOATING BACK BUTTON */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:bg-white/[0.1] transition"
        >
          {/* <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm">
            ←
          </span> */}
          <span className="text-sm text-gray-300 group-hover:text-white">Back</span>
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-28 relative"
        >
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[400px] h-[200px] bg-purple-500/20 blur-[120px] rounded-full" />
          </div>

          <h1 className="relative text-6xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Privacy Policy
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
            Built with trust. Designed with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <div className="hidden lg:block sticky top-32">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`block px-3 py-2 rounded-lg text-sm transition ${
                    active === sec.id
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-3 space-y-20">
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
                  whileHover={{ scale: 1.02 }}
                  className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-indigo-500/40"
                >
                  <div className="rounded-3xl bg-black/70 backdrop-blur-2xl p-10 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
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
        <motion.div className="mt-32 text-center" whileHover={{ scale: 1.05 }}>
          <a
            href="/contact"
            className="inline-block px-12 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition"
          >
            Contact Us
          </a>

          <p className="mt-6 text-xs text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
