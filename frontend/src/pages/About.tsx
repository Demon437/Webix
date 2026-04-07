import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import MeshGradientBackground from "@/components/MeshGradientBackground";
import FomoBanner from "@/components/FomoBanner";
import StickyCta from "@/components/StickyCta";
import TeamSection from "@/components/TeamSection";
import ImpactStats from "@/components/ImpactStats";
import CtaBlock from "@/components/CtaBlock";
import BentoSection from "@/components/BentoSection";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const stats = [
  { value: "1+", label: "Years in Business" },
  { value: "12+", label: "Projects Delivered" },
  { value: "5+", label: "Happy Clients" },
  { value: "15+", label: "Tech Experts" },
];

const values = [
  {
    icon: "🚀",
    title: "Innovation First",
    desc: "We constantly explore emerging technologies — AI, cloud, automation — to deliver future-proof solutions that keep our clients ahead of the curve.",
  },
  {
    icon: "🔒",
    title: "Security & Trust",
    desc: "Every product we build follows security-first principles. Data privacy, compliance, and system integrity are non-negotiable from day one.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    desc: "We don't just take briefs — we embed into your business, understand your goals, and act as a long-term technology partner, not a vendor.",
  },
  {
    icon: "📐",
    title: "Engineering Excellence",
    desc: "Clean architecture, rigorous code reviews, CI/CD pipelines, and automated testing — we engineer for reliability at scale, not just delivery.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    desc: "We respect timelines as much as budgets. Agile sprints, transparent communication, and proactive risk management keep projects on track.",
  },
  {
    icon: "📈",
    title: "Outcome-Driven",
    desc: "We measure success not by lines of code shipped, but by the real business results — revenue uplift, cost savings, and user adoption.",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Company Founded",
    desc: "Webix Infotech was founded with a clear vision to help businesses leverage modern technology for growth, efficiency, and digital transformation.",
  },
  {
    year: "2026",
    title: "Building the Foundation",
    desc: "Focused on building a strong technical foundation, assembling a skilled team, and defining processes to deliver high-quality digital solutions.",
  },
  {
    year: "2026",
    title: "First Client Engagements",
    desc: "Started collaborating with early clients, delivering websites and custom software solutions tailored to real business needs.",
  },
  {
    year: "2026",
    title: "Service Expansion",
    desc: "Expanded capabilities into web applications, mobile apps, and modern technologies to provide end-to-end development services.",
  },
  {
    year: "Future",
    title: "Scaling & Innovation",
    desc: "Aiming to grow into a trusted IT partner by continuously improving, adopting new technologies, and delivering impactful digital solutions.",
  },
];

const expertise = [
  { label: "Web & Mobile Development", pct: 95 },
  { label: "Cloud & DevOps", pct: 88 },
  { label: "AI / ML & Automation", pct: 82 },
  { label: "UI/UX Design", pct: 90 },
  { label: "Cybersecurity", pct: 78 },
  { label: "Enterprise ERP & CRM", pct: 85 },
];

const techBadges = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "AWS",
  "GCP",
  "Azure",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "TensorFlow",
  "FastAPI",
];

const whyUs = [
  {
    icon: "🎯",
    title: "Business-First Thinking",
    desc: "Every technical decision is mapped to a business outcome. We start with 'why', then figure out the 'how'.",
  },
  {
    icon: "🔁",
    title: "Agile & Transparent",
    desc: "Weekly demos, real-time dashboards, and open Slack channels — you always know exactly where your project stands.",
  },
  {
    icon: "🌍",
    title: "Global Standards, Local Rates",
    desc: "Silicon Valley-grade engineering with competitive pricing. You get world-class quality without the inflated agency markup.",
  },
  {
    icon: "🛡️",
    title: "Post-Launch Support",
    desc: "We don't disappear after go-live. Dedicated support plans, SLA-backed uptime, and proactive monitoring included.",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
const About = () => {
  return (
    <div className="relative min-h-screen w-full scroll-smooth">
      <MeshGradientBackground />
      <FomoBanner />
      <StickyCta />

      <main className="relative z-10 w-full">
        <div className="overflow-hidden">
          <Navbar />

          {/* ── HERO ── */}
          <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Who We Are
                  </span>

                  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.08] mb-6">
                    Building the Digital
                    <span className="text-primary block mt-1">
                      Backbone of Tomorrow
                    </span>
                  </h1>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    <strong className="text-gray-900 dark:text-white">
                      Webix Infotech
                    </strong>{" "}
                    is a full-service software engineering company headquartered
                    in Bilaspur, India. We design, develop, and deploy scalable
                    digital products — from enterprise platforms to AI-powered
                    applications — for businesses across industries and
                    geographies.
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    Founded in 2019, we've grown from a small dev shop into a
                    trusted technology partner for startups, SMEs, and
                    enterprise clients — combining deep technical expertise with
                    genuine business understanding.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                    >
                      Work With Us →
                    </a>
                    <a
                      href="/work"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 dark:border-white/15 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      See Our Work
                    </a>
                  </div>
                </div>

                {/* Right — Stat Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-center p-8 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 shadow-sm text-center"
                    >
                      <div className="text-5xl font-black text-primary mb-2">
                        {s.value}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── MISSION / VISION / VALUES STRIP ── */}
          <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/20">
                {[
                  {
                    label: "Our Mission",
                    text: "To empower businesses with engineering-grade digital solutions that accelerate growth, reduce operational friction, and create lasting competitive advantage.",
                  },
                  {
                    label: "Our Vision",
                    text: "To become the most trusted technology partner for ambitious businesses worldwide — known for delivery integrity, technical depth, and measurable business impact.",
                  },
                  {
                    label: "Our Culture",
                    text: "We operate with radical ownership, transparent communication, and a relentless bias for action. No politics. No hand-offs. Just engineers who care deeply about the outcomes they deliver.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="pt-8 md:pt-0 md:px-10 first:pl-0 last:pr-0"
                  >
                    <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                      {item.label}
                    </div>
                    <p className="text-white/85 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CORE VALUES ── */}
          <style>{`
            @keyframes fadeSlideUp {
              from { opacity: 0; transform: translateY(28px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .vc { animation: fadeSlideUp 0.55s ease both; }
            .vc:nth-child(1){animation-delay:0.05s}
            .vc:nth-child(2){animation-delay:0.13s}
            .vc:nth-child(3){animation-delay:0.21s}
            .vc:nth-child(4){animation-delay:0.29s}
            .vc:nth-child(5){animation-delay:0.37s}
            .vc:nth-child(6){animation-delay:0.45s}
            .vc-icon { transition: transform 0.4s cubic-bezier(.34,1.56,.64,1); }
            .vc:hover .vc-icon { transform: scale(1.2) rotate(-8deg); }
            .vc-bar { width: 0; transition: width 0.5s ease; }
            .vc:hover .vc-bar { width: 100%; }
            .vc-shine {
              position:absolute; top:0; left:-80%;
              width:50%; height:100%;
              background: linear-gradient(120deg,transparent,rgba(255,255,255,0.09),transparent);
              transition: left 0.6s ease;
              pointer-events:none; z-index:1;
            }
            .vc:hover .vc-shine { left:140%; }
            .vc-num {
              position:absolute; bottom:-0.25rem; right:1rem;
              font-size:4.5rem; font-weight:900; line-height:1;
              opacity:0.04; transition:opacity 0.3s;
              user-select:none; pointer-events:none;
            }
            .vc:hover .vc-num { opacity:0.09; }
          `}</style>

          <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                  What Drives Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  Our Core Values
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                  These aren't wall posters — they're the principles every team
                  member lives by, every single day.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    icon: "🚀",
                    title: "Innovation First",
                    num: "01",
                    accent: "#6366f1",
                    desc: "We constantly explore emerging technologies — AI, cloud, automation — to deliver future-proof solutions that keep our clients ahead of the curve.",
                  },
                  {
                    icon: "🔒",
                    title: "Security & Trust",
                    num: "02",
                    accent: "#10b981",
                    desc: "Every product we build follows security-first principles. Data privacy, compliance, and system integrity are non-negotiable from day one.",
                  },
                  {
                    icon: "🤝",
                    title: "True Partnership",
                    num: "03",
                    accent: "#f59e0b",
                    desc: "We don't just take briefs — we embed into your business, understand your goals, and act as a long-term technology partner, not a vendor.",
                  },
                  {
                    icon: "📐",
                    title: "Engineering Excellence",
                    num: "04",
                    accent: "#3b82f6",
                    desc: "Clean architecture, rigorous code reviews, CI/CD pipelines, and automated testing — we engineer for reliability at scale, not just delivery.",
                  },
                  {
                    icon: "⏱️",
                    title: "On-Time Delivery",
                    num: "05",
                    accent: "#ec4899",
                    desc: "We respect timelines as much as budgets. Agile sprints, transparent communication, and proactive risk management keep projects on track.",
                  },
                  {
                    icon: "📈",
                    title: "Outcome-Driven",
                    num: "06",
                    accent: "#8b5cf6",
                    desc: "We measure success not by lines of code shipped, but by the real business results — revenue uplift, cost savings, and user adoption.",
                  },
                ].map((v, i) => (
                  <div
                    key={i}
                    className="vc group relative rounded-2xl overflow-hidden cursor-default bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                  >
                    {/* shine sweep */}
                    <div className="vc-shine" />

                    {/* top accent line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${v.accent}, transparent)`,
                      }}
                    />

                    {/* radial glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 25% 25%, ${v.accent}14 0%, transparent 65%)`,
                      }}
                    />

                    {/* ghost number */}
                    <div className="vc-num" style={{ color: v.accent }}>
                      {v.num}
                    </div>

                    <div className="relative z-10 p-7">
                      {/* icon */}
                      <div
                        className="vc-icon inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-2xl"
                        style={{
                          background: v.accent + "18",
                          border: `1.5px solid ${v.accent}35`,
                        }}
                      >
                        {v.icon}
                      </div>

                      {/* title */}
                      <h3
                        className="text-lg font-bold mb-2 transition-colors duration-200"
                        style={{ color: "inherit" }}
                      >
                        <span
                          className="text-gray-900 dark:text-white group-hover:text-[--acc] transition-colors duration-200"
                          style={{ "--acc": v.accent } as React.CSSProperties}
                        >
                          {v.title}
                        </span>
                      </h3>

                      {/* desc */}
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {v.desc}
                      </p>

                      {/* bottom progress bar */}
                      <div className="mt-6 h-[2px] rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                        <div
                          className="vc-bar h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${v.accent}, ${v.accent}55)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── COMPANY JOURNEY ── */}
          {/* ── COMPANY JOURNEY ── */}
          <section className="py-24 bg-gray-50/60 dark:bg-white/[0.02]">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                  Our Journey
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  Just Getting Started
                </h2>

                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                  Webix Infotech is at the beginning of its journey — focused on
                  building strong foundations, delivering quality work, and
                  growing into a trusted technology partner.
                </p>
              </div>

              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 md:-translate-x-px" />

                <div className="flex flex-col gap-10">
                  {milestones.map((m, i) => (
                    <div
                      key={i}
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* dot */}
                      <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-primary text-white font-black text-xs flex items-center justify-center shadow-lg shadow-primary/30">
                        {m.year}
                      </div>

                      {/* card */}
                      <div
                        className={`ml-8 md:ml-0 md:w-[44%] p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm ${
                          i % 2 === 0
                            ? "md:mr-auto md:pr-10"
                            : "md:ml-auto md:pl-10"
                        }`}
                      >
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                          {m.title}
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXTRA TRUST LINE */}
              <div className="text-center mt-16 max-w-2xl mx-auto">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  We may be a new company, but our focus on quality, commitment,
                  and continuous learning drives us to deliver impactful digital
                  solutions from day one.
                </p>
              </div>
            </div>
          </section>  

          {/* ── EXPERTISE BARS ── */}
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                    Skills & Depth
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                    Technical Expertise
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
                    Our engineers hold deep expertise across the modern
                    technology stack — from product UI to backend infrastructure
                    and AI/ML pipelines.
                  </p>

                  <div className="flex flex-col gap-5">
                    {expertise.map((e, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          <span>{e.label}</span>
                          <span className="text-primary">{e.pct}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${e.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                    Tech Stack
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techBadges.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/15">
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      <strong className="text-primary">
                        We're tech-agnostic by design.
                      </strong>{" "}
                      We recommend the right tool for your specific problem —
                      not what's trendy or what we're most comfortable with.
                      Your product's success always comes first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── WHY WEBIX ── */}
          <section className="py-24 bg-gray-50/60 dark:bg-white/[0.02]">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-14">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  The Webix Difference
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                  Hundreds of dev shops exist. Here's why clients stay with us
                  and refer us to others.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {whyUs.map((w, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:border-primary/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      {w.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {w.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── TEAM ── */}
          <TeamSection />

          {/* ── IMPACT STATS ── */}
          <ImpactStats />

          {/* ── CTA ── */}
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="relative rounded-3xl overflow-hidden bg-primary px-8 py-16 md:px-16 text-center text-white shadow-2xl">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Let's Build Something
                    <br />
                    Great Together
                  </h2>
                  <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
                    Whether you're a startup with an idea or an enterprise
                    looking to modernize — we're ready to be your technology
                    partner.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Get In Touch →
                    </a>
                    <a
                      href="/work"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-base hover:border-white hover:bg-white/10 transition-colors"
                    >
                      View Our Work
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

export default About;
