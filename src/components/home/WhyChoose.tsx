import { motion } from "motion/react";
import {
  Activity,
  BadgeCheck,
  Building2,
  Cog,
  Expand,
  PiggyBank,
  ServerCrash,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "Certified Engineers",
    icon: BadgeCheck,
    description: "AWS, Azure and CKA certified engineers on every delivery team.",
  },
  {
    title: "Enterprise Architecture",
    icon: Building2,
    description: "Reference architectures designed for governance, scale and audit.",
  },
  {
    title: "Cloud Security",
    icon: ShieldCheck,
    description: "Zero-trust identity, encryption everywhere and policy-as-code.",
  },
  {
    title: "High Availability",
    icon: ServerCrash,
    description: "Multi-AZ and multi-region designs targeting 99.9%+ uptime.",
  },
  {
    title: "Infrastructure Automation",
    icon: Cog,
    description: "Everything provisioned as code — repeatable and drift-free.",
  },
  {
    title: "Cost Optimisation",
    icon: PiggyBank,
    description: "Continuous FinOps reviews that keep cloud bills predictable.",
  },
  {
    title: "24×7 Monitoring",
    icon: Activity,
    description: "Round-the-clock observability with real humans on call.",
  },
  {
    title: "Scalable Solutions",
    icon: Expand,
    description: "Elastic platforms that absorb 10× growth without redesign.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why NexoraCloud"
          title="Why teams choose NexoraCloud Technologies"
          description="Engineering discipline, transparent communication and infrastructure you can hand over with confidence."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, icon: Icon, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:glow-ring"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary/60 transition-colors duration-300 group-hover:bg-gradient-brand">
                <Icon
                  className="h-5 w-5 text-brand-cyan transition-colors duration-300 group-hover:text-primary-foreground"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-5 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}