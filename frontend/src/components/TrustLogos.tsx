import { motion } from 'framer-motion';

const logos = ['Microsoft', 'Google Cloud', 'AWS', 'Stripe', 'Shopify', 'Salesforce', 'HubSpot', 'Slack'];

export default function TrustLogos() {
  return (
    <section className="relative py-20 px-6">
      <div className="section-divider mb-20" />
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[11px] tracking-[0.35em] uppercase text-muted-foreground font-body mb-14">
          Trusted by teams backed by
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, type: 'spring' }}
              className="font-display font-semibold text-sm md:text-base tracking-widest bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent hover:scale-110 hover:rotate-1 transition-all duration-500 cursor-pointer drop-shadow"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
