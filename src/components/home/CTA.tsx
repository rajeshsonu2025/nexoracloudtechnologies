import { motion } from "motion/react";
import { ArrowRight, PhoneCall } from "lucide-react";

import ctaBackground from "@/assets/images/cta-bg.jpg";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border"
        >
          <img
            src={ctaBackground}
            alt=""
            aria-hidden="true"
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-surface-deep/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-deep via-surface-deep/60 to-transparent" />

          <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20 lg:text-left">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
              Ready to Modernize Your <span className="text-gradient">Infrastructure?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground lg:mx-0">
              Talk to a senior cloud engineer — not a sales rep. We will review your current setup
              and send back a practical modernisation roadmap.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="mailto:hello@nexoracloud.com"
                className="bg-gradient-brand glow-ring inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+919876543210"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}