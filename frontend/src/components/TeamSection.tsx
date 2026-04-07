import { motion } from 'framer-motion';

const team = [
  { name: 'Prachi Agarwal', role: 'CEO & Founder', initials: 'PA' },
  { name: 'Aman Namdev', role: 'CTO & Co-Founder', initials: 'AN' },
  { name: 'We’re Hiring', role: 'Join Our Growing Team', initials: '+' },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 px-6 section-gray">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">
            Leadership
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Meet The <span className="text-gradient-neon">Founders</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A passionate team building impactful digital solutions for modern businesses.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-card rounded-[1.25rem] border border-border p-10 text-center group hover-lift relative overflow-hidden w-full max-w-sm"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

              <div className="relative z-10">
                
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                  <span className="text-2xl font-display font-bold text-gradient-neon">
                    {m.initials}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-display font-bold text-foreground">
                  {m.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-muted-foreground mt-2">
                  {m.role}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}