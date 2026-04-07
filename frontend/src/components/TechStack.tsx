import { motion } from 'framer-motion';

const categories = [
  { label: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'] },
  { label: 'Backend', techs: ['Node.js', 'Python', 'Go', 'GraphQL', 'gRPC'] },
  { label: 'Cloud & DevOps', techs: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
  { label: 'AI / ML', techs: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Hugging Face'] },
  { label: 'Data', techs: ['PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch', 'Snowflake'] },
];

export default function TechStack() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5 font-body">Our Arsenal</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Technology <span className="text-gradient-neon">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div key={cat.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: ci * 0.1 }} className="bg-card rounded-[1.25rem] border border-border p-10 hover-lift group">
              <h3 className="text-xl font-display font-bold text-foreground mb-8">{cat.label}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.techs.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-xl text-sm font-body font-medium bg-primary/6 text-primary border border-primary/12 transition-all duration-500 group-hover:border-primary/25 hover:scale-105">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
