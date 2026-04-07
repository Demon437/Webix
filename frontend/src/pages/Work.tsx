import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import MeshGradientBackground from '@/components/MeshGradientBackground';
import FomoBanner from '@/components/FomoBanner';
import StickyCta from '@/components/StickyCta';
import CaseStudies from '@/components/CaseStudies';
import TechStack from '@/components/TechStack';
import ProcessTimeline from '@/components/ProcessTimeline';
import CtaBlock from '@/components/CtaBlock';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const stats = [
  { value: "12+", label: "Projects Delivered" },
  { value: "5+", label: "Global Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "1+", label: "Years of Expertise" },
];

const projects = [
  {
    tag: "E-Commerce",
    title: "MultiVend — Multi-Vendor Marketplace",
    desc: "Built a scalable multi-vendor e-commerce platform with real-time inventory, Stripe & Razorpay payment gateways, seller analytics dashboard, and automated order fulfillment workflows.",
    outcomes: ["3× faster checkout", "40% drop in cart abandonment", "99.9% uptime"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    color: "#6366f1",
  },
  {
    tag: "Healthcare",
    title: "MediCore — Patient Management System",
    desc: "Developed a HIPAA-compliant healthcare platform featuring AI-powered diagnostics assistance, smart appointment scheduling, telemedicine integration, and encrypted patient record management.",
    outcomes: ["60% reduction in paperwork", "AI accuracy 94%", "500+ daily active users"],
    tech: ["React", "FastAPI", "MongoDB", "TensorFlow", "Azure"],
    color: "#10b981",
  },
  {
    tag: "Enterprise",
    title: "NexaERP — Corporate Operations Suite",
    desc: "Engineered a full-scale ERP covering HR, payroll, finance, procurement, and operations — with custom role-based access, real-time reporting, and third-party API integrations.",
    outcomes: ["35% cost reduction", "Unified 8 departments", "Live in 6 weeks"],
    tech: ["Vue.js", "Django", "MySQL", "Docker", "GCP"],
    color: "#f59e0b",
  },
  {
    tag: "Fintech",
    title: "PayLedger — Financial Dashboard",
    desc: "Designed a real-time financial analytics platform for SMEs with automated reconciliation, multi-currency support, fraud detection alerts, and GST-compliant invoice generation.",
    outcomes: ["10× faster reconciliation", "Zero fraud incidents", "₹0 manual errors"],
    tech: ["React", "Spring Boot", "Oracle DB", "Kafka", "AWS Lambda"],
    color: "#3b82f6",
  },
  {
    tag: "Education",
    title: "LearnFlow — LMS Platform",
    desc: "Created an adaptive learning management system with AI course recommendations, live class streaming, certificate generation, progress analytics, and gamified learning paths.",
    outcomes: ["2× course completion rate", "15K+ learners onboarded", "4.8★ rating"],
    tech: ["Next.js", "GraphQL", "Firebase", "WebRTC", "Vercel"],
    color: "#ec4899",
  },
  {
    tag: "Logistics",
    title: "TrackMate — Fleet & Delivery Platform",
    desc: "Built a real-time fleet management and last-mile delivery tracking system with live GPS, route optimization, driver app, and automated customer delivery notifications.",
    outcomes: ["28% fuel savings", "Real-time tracking", "50+ fleet vehicles"],
    tech: ["React Native", "Node.js", "PostGIS", "WebSocket", "GCP"],
    color: "#8b5cf6",
  },
];

const industries = [
  { name: "E-Commerce & Retail", icon: "🛒" },
  { name: "Healthcare & MedTech", icon: "🏥" },
  { name: "Fintech & Banking", icon: "💳" },
  { name: "Education & EdTech", icon: "🎓" },
  { name: "Real Estate & PropTech", icon: "🏢" },
  { name: "Logistics & Supply Chain", icon: "🚚" },
  { name: "SaaS & Cloud Products", icon: "☁️" },
  { name: "Manufacturing & ERP", icon: "⚙️" },
  { name: "Media & Entertainment", icon: "🎬" },
];

const results = [
  { value: "10×", label: "Average Client Growth", sub: "in 12 months post-launch" },
  { value: "40%", label: "Cost Reduction", sub: "through process automation" },
  { value: "3×", label: "Faster Time-to-Market", sub: "compared to traditional builds" },
  { value: "99.9%", label: "Uptime SLA", sub: "across all production systems" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CTO, RetailNova",
    quote:
      "Webix Infotech delivered our platform in 8 weeks — on time, on budget, and genuinely impressive quality. Their team understood our business, not just the tech.",
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Founder, MediCore Health",
    quote:
      "The healthcare platform they built for us is robust, compliant, and our doctors actually enjoy using it. That's rare. Highly recommend their team.",
    avatar: "PM",
  },
  {
    name: "James O'Brien",
    role: "VP Engineering, LogiTech Inc.",
    quote:
      "From architecture to deployment, the Webix team was thorough and professional. Our fleet tracking system handles 50K+ events/day without breaking a sweat.",
    avatar: "JO",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
const Work = () => {
  return (
    <div className="relative min-h-screen w-full scroll-smooth">
      <MeshGradientBackground />
      <FomoBanner />
      <StickyCta />

      <main className="relative z-10 w-full">
        <div className="overflow-hidden">
          <Navbar />

          {/* ── HERO ── */}
          <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32">
            <div className="container mx-auto px-4 max-w-6xl">
              {/* eyebrow */}
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Our Work & Case Studies
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 dark:text-white leading-[1.08] mb-6">
                We Build Products
                <span className="text-primary block mt-1">Businesses Rely On</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12 leading-relaxed">
                From complex enterprise systems to consumer-facing digital products —
                every project we ship is engineered for scale, speed, and real business impact.
              </p>

              {/* stat bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 shadow-sm"
                  >
                    <div className="text-4xl font-black text-primary mb-1">{s.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FEATURED PROJECTS ── */}
          <section className="py-24 bg-gray-50/60 dark:bg-white/[0.02]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Case Studies</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  Featured Projects
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                  Real-world problems, engineered solutions. Here's a selection of work we're proud of.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* color accent bar */}
                    <div className="h-1 w-full" style={{ backgroundColor: p.color }} />

                    <div className="flex flex-col flex-1 p-6">
                      {/* tag */}
                      <span
                        className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                        style={{ backgroundColor: p.color + "18", color: p.color }}
                      >
                        {p.tag}
                      </span>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                        {p.desc}
                      </p>

                      {/* outcomes */}
                      <div className="flex flex-col gap-1.5 mb-5">
                        {p.outcomes.map((o, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-green-500 font-bold text-base leading-none">✓</span>
                            {o}
                          </div>
                        ))}
                      </div>

                      {/* tech pills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/10">
                        {p.tech.map((t, k) => (
                          <span
                            key={k}
                            className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── RESULTS ── */}
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Impact</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  Results That Matter
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                  We don't just ship code — we deliver measurable business outcomes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map((r, i) => (
                  <div
                    key={i}
                    className="relative p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center overflow-hidden group hover:bg-primary/10 transition-colors duration-300"
                  >
                    <div className="text-5xl font-black text-primary mb-2">{r.value}</div>
                    <div className="text-base font-bold text-gray-800 dark:text-white mb-1">{r.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{r.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

       

          {/* ── PROCESS OVERVIEW ── */}
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-14">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">How We Work</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  Our Delivery Process
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                  A structured, transparent process that keeps projects on time and stakeholders informed.
                </p>
              </div>

              <div className="relative">
                {/* connector line */}
                <div className="hidden md:block absolute top-8 left-[calc(10%+16px)] right-[calc(10%+16px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {[
                    { step: "01", title: "Discovery", desc: "Requirement gathering, business analysis & scope definition" },
                    { step: "02", title: "Planning", desc: "Architecture design, sprint planning & milestone mapping" },
                    { step: "03", title: "Development", desc: "Agile sprints with weekly demos and continuous delivery" },
                    { step: "04", title: "QA & Testing", desc: "Automated + manual testing, performance & security audits" },
                    { step: "05", title: "Launch & Support", desc: "CI/CD deployment, monitoring and long-term maintenance" },
                  ].map((phase, i) => (
                    <div key={i} className="relative flex flex-col items-center text-center">
                      <div className="relative z-10 w-14 h-14 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center shadow-lg mb-4">
                        {phase.step}
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">{phase.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
       

          {/* ── CTA BLOCK ── */}
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="relative rounded-3xl overflow-hidden bg-primary px-8 py-16 md:px-16 text-center text-white shadow-2xl">
                {/* subtle pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Ready to Build Something<br />Remarkable?
                  </h2>
                  <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
                    Tell us your idea. We'll turn it into a digital product that scales,
                    performs, and drives measurable ROI.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Start a Project →
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-base hover:border-white hover:bg-white/10 transition-colors"
                    >
                      View Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FooterSection />
        </div>
      </main>
    </div>
  );
};

export default Work;