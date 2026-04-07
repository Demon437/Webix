import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import MeshGradientBackground from '@/components/MeshGradientBackground';
import FomoBanner from '@/components/FomoBanner';
import StickyCta from '@/components/StickyCta';
import { useState } from 'react';
import axios from "axios";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const contactInfo = [
  {
    icon: "📍",
    label: "Our Office",
    value: " Aditya Gateway, MR10 Road, Indore, Madhya Pradesh 452010",
    sub: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  },
  {
    icon: "📧",
    label: "Email Us",
    value: "officialwebixinfotech@gmail.com",
    sub: "We reply within 4 business hours",
    href: "mailto:hello@webixinfotech.com",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+91 99268 20304",
    sub: "Mon – Sat, 10 AM – 6 PM IST",
    href: "tel:+919876543210",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat with us instantly",
    sub: "Fastest response channel",
    href: "https://wa.me/919876543210",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "AI / ML Solutions",
  "ERP & CRM Development",
  "E-Commerce Solutions",
  "Cybersecurity",
  "IT Consulting",
  "Other",
];

const budgets = [
  "Under ₹1 Lakh",
  "₹1L – ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹50L",
  "₹50L+",
  "Let's Discuss",
];

const faqs = [
  {
    q: "How quickly can you start on my project?",
    a: "Typically within 1–2 weeks of requirement sign-off and contract. For urgent projects, we can begin in 3–5 business days.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We love working with startups at ideation stage and with enterprises modernizing legacy systems. Our process scales to fit any stage.",
  },
  {
    q: "What engagement models do you offer?",
    a: "We offer Fixed-Price projects, Time & Material (T&M), and Dedicated Team models — whichever fits your budget and timeline best.",
  },
  {
    q: "Will I have a dedicated point of contact?",
    a: "Yes. Every project gets a dedicated Project Manager who handles communication, sprint demos, and escalations. No ping-pong between teams.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. We offer 3-month free bug support post-launch, plus optional retainer-based maintenance and monitoring plans.",
  },
  {
    q: "Can you sign an NDA before we share project details?",
    a: "Yes, we sign NDAs before any detailed discussion. Your ideas and business information stay completely confidential.",
  },
];

/* ─────────────────────────────────────────────
   FORM COMPONENT
───────────────────────────────────────────── */
const ContactForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/contact",
      form
    );

    console.log(res.data);

    setSubmitted(true);

    // optional reset
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
    });

  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  } finally {
    setLoading(false);
  }
};

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-4xl mb-6">
          ✅
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Received!</h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
          Thank you for reaching out. Our team will review your project details and get back to you within <strong>4 business hours</strong>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', timeline: '', message: '' }); }}
          className="mt-8 px-6 py-3 rounded-xl border border-gray-200 dark:border-white/15 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:border-primary/40 hover:text-primary transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all";
  const labelCls = "block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5";

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Full Name <span className="text-red-400">*</span></label>
          <input required name="name" value={form.name} onChange={handle} placeholder="Rahul Sharma" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Work Email <span className="text-red-400">*</span></label>
          <input required type="email" name="email" value={form.email} onChange={handle} placeholder="rahul@company.com" className={inputCls} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Company / Startup Name</label>
          <input name="company" value={form.company} onChange={handle} placeholder="Acme Corp" className={inputCls} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Service Required <span className="text-red-400">*</span></label>
          <select required name="service" value={form.service} onChange={handle} className={inputCls}>
            <option value="">Select a service...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Estimated Budget</label>
          <select name="budget" value={form.budget} onChange={handle} className={inputCls}>
            <option value="">Select budget range...</option>
            {budgets.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Expected Timeline</label>
        <input name="timeline" value={form.timeline} onChange={handle} placeholder="e.g. 3 months, ASAP, Q3 2025" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Project Details <span className="text-red-400">*</span></label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handle}
          rows={5}
          placeholder="Tell us about your project — what problem are you solving, who are your users, any tech preferences or constraints..."
          className={inputCls + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-primary text-white font-bold text-base hover:opacity-90 disabled:opacity-60 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Project Inquiry →"
        )}
      </button>

      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        🔒 Your information is 100% confidential. We'll reach out within 4 business hours.
      </p>
    </form>
  );
};

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */
const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
          >
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{f.q}</span>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-transform duration-200 ${open === i ? 'rotate-45 border-primary text-primary' : ''}`}>
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Contact = () => {
  return (
    <div className="relative min-h-screen w-full scroll-smooth">
      <MeshGradientBackground />
      <FomoBanner />
      <StickyCta />

      <main className="relative z-10 w-full">
        <div className="overflow-hidden">
          <Navbar />

          {/* ── HERO ── */}
          <section className="pt-28 pb-16 lg:pt-36">
            <div className="container mx-auto px-4 max-w-5xl text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Let's Start a Conversation
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.08] mb-6">
                Got a Project in Mind?
                <span className="text-primary block mt-1">Let's Talk.</span>
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Tell us what you're building. We'll respond with a detailed proposal, timeline, and honest advice — no sales pressure, no fluff.
              </p>
            </div>
          </section>

          {/* ── MAIN GRID ── */}
          <section className="py-12 pb-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">

                {/* ── FORM ── */}
                <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Project Inquiry Form</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Fill in the details and we'll get back to you within 4 hours.</p>
                  <ContactForm />
                </div>

                {/* ── SIDEBAR ── */}
                <div className="flex flex-col gap-6">

                  {/* contact cards */}
                  {contactInfo.map((c, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:border-primary/20 transition-colors group">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{c.value}</div>
                        )}
                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{c.sub}</div>
                      </div>
                    </div>
                  ))}

                  {/* social links */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Follow Us</div>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "LinkedIn", href: "#", icon: "in" },
                        { name: "Twitter / X", href: "#", icon: "𝕏" },
                        { name: "Instagram", href: "#", icon: "▲" },
                        { name: "GitHub", href: "#", icon: "⌥" },
                      ].map((s, i) => (
                        <a
                          key={i}
                          href={s.href}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-100 dark:border-white/10 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:border-primary/30 hover:text-primary transition-colors"
                        >
                          <span className="font-bold">{s.icon}</span> {s.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* trust badge */}
                  <div className="p-5 rounded-2xl bg-primary/5 border border-primary/15">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🛡️</span>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">NDA & Confidentiality</div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          We sign NDAs before any project discussion. Your idea, business data, and IP are fully protected from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* ── MAP ── */}
          <section className="pb-24">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-8">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">Find Us</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-1">Our Office Location</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Aditya Gateway, Sukhliya Road, Indore, Madhya Pradesh</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5668.452392338456!2d75.86234124558209!3d22.76698567991324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630330cd69a4fd%3A0xa7b7773a212a220e!2sADITYA%20GATEWAY!5e0!3m2!1sen!2sin!4v1774697457684!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Webix Infotech Office Location"
                />
              </div>
            </div>
          </section>

          {/* ── PROCESS STRIP ── */}
          <section className="py-16 bg-gray-50/60 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">What Happens After You Submit?</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No ghosting. No waiting 5 days. Here's exactly what to expect.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Review", desc: "We read your inquiry and understand your requirements within 2–4 hours.", icon: "📋" },
                  { step: "02", title: "Discovery Call", desc: "A 30-min call with our team to clarify goals, tech stack, and timeline.", icon: "📞" },
                  { step: "03", title: "Proposal", desc: "We send a detailed scope, timeline, and cost estimate within 48 hours.", icon: "📄" },
                  { step: "04", title: "Kickoff", desc: "Once aligned, we onboard your project and begin Sprint 1 within a week.", icon: "🚀" },
                ].map((p, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mx-auto mb-4">{p.icon}</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{p.step}</div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{p.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">FAQ</span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4">Common Questions</h2>
                <p className="text-gray-500 dark:text-gray-400">Everything you might want to know before reaching out.</p>
              </div>
              <FAQ />
            </div>
          </section>


          <FooterSection />
        </div>
      </main>
    </div>
  );
};

export default Contact;