import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function FooterSection() {
  return (
    <footer className="relative py-24 px-6 bg-card">
      <div className="section-divider mb-20" />

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">

          {/* Brand */}
          <div>
            <span className="font-display font-bold text-2xl tracking-tight">
              <span className="text-gradient-neon">WEBIX</span>
              <span className="text-foreground ml-1.5">INFOTECH</span>
            </span>

            <p className="text-muted-foreground text-sm mt-4 max-w-sm leading-relaxed">
              Building modern, scalable, and high-performance digital solutions for growing businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact + CTA */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">Get in Touch</p>

            <div className="flex flex-col gap-3 mb-6">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" /> officialwebixinfotech@gmail.com
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" /> +91 9926820304
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-gradient text-sm font-semibold hover:scale-[1.03] transition-all">
              Get a Quote <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-muted-foreground/60 text-xs">
            © {new Date().getFullYear()} Webix Infotech. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-xs text-muted-foreground/60 hover:text-foreground transition">
              Privacy
            </a>
            <a href="/terms" className="text-xs text-muted-foreground/60 hover:text-foreground transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}