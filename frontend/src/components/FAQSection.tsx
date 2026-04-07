import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'We provide website development, web applications, mobile apps, UI/UX design, and custom software solutions tailored to your business needs.',
  },
  {
    q: 'How long does a project take?',
    a: 'Project timelines depend on complexity. Small projects usually take 2–4 weeks, while larger applications may take 1–3 months.',
  },
  {
    q: 'Do you provide support after delivery?',
    a: 'Yes, we provide post-delivery support to ensure everything runs smoothly. Ongoing maintenance can also be arranged if needed.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Our pricing is flexible and depends on your project requirements. We provide a custom quote after understanding your needs.',
  },
  {
    q: 'Can you work with an existing project or idea?',
    a: 'Absolutely. Whether you have a new idea or an existing project, we can help design, develop, or improve it.',
  },
  {
    q: 'Do you offer free consultation?',
    a: 'Yes, we offer a free initial consultation to understand your requirements and guide you with the best approach.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'We work with modern technologies like React, Node.js, and cloud platforms, choosing the best tools based on your project needs.',
  },
];

export default function FAQSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-5">
            FAQs
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
            Frequently <span className="text-gradient-neon">Asked</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Everything you need to know before starting your project with us.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-[1.25rem] border border-border p-8 md:p-12 shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 text-base md:text-lg">
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}