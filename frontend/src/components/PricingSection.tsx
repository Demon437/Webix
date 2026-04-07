import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹25,000+',
    period: 'per project',
    desc: 'Best for small businesses and MVPs',
    features: [
      'Website / App Development',
      'Responsive UI Design',
      'Basic SEO Setup',
      'Deployment Support',
      '15-day support',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '₹60,000+',
    period: 'per project',
    desc: 'Perfect for startups and growing products',
    features: [
      'Advanced Web / App Development',
      'Custom Features & Integrations',
      'Performance Optimization',
      'Priority Support',
      '1-month maintenance',
    ],
    highlighted: true,
  },
  {
    name: 'Custom',
    price: 'Flexible',
    period: 'pricing',
    desc: 'Tailored solutions based on your requirements',
    features: [
      'Custom Features & Integrations',
      'Scalable Architecture',
      'Dedicated Support',
      'Long-term Maintenance',
      'Consultation & Planning',
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 px-6 section-tint">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5">
            Pricing
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Simple & <span className="text-gradient-neon">Flexible</span>
          </h2>

          <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Transparent pricing designed for growing businesses. No hidden costs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative rounded-[1.25rem] p-10 flex flex-col hover-lift ${
                plan.highlighted
                  ? 'bg-card border-2 border-primary/20 shadow-xl shadow-primary/10'
                  : 'bg-card border border-border'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full btn-gradient text-xs font-semibold flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-foreground">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mt-2 mb-6">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlighted
                    ? 'btn-gradient'
                    : 'border border-border text-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {plan.name === 'Custom' ? 'Contact Us' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          *Final pricing depends on project scope and requirements
        </p>

      </div>
    </section>
  );
}