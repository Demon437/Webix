import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg tracking-tight">
          <span className="text-gradient-neon">WEBIX</span>
          <span className="ml-1">INFOTECH</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full ${
                location.pathname === link.href
                  ? 'text-foreground after:w-full'
                  : 'text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="px-5 py-2 rounded-xl btn-gradient text-sm">
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur border border-white/10"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`block text-sm ${
                  location.pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <button className="w-full mt-3 px-5 py-2 rounded-xl btn-gradient text-sm">
              Let's Talk
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
