import { motion } from "motion/react";
import { Banknote, Blocks, CloudUpload, Radar, ShieldCheck, Wallet } from "lucide-react";

import SectionHeading from "./SectionHeading";

const solutions = [
  {
    title: "Cloud Migration Programs",
    icon: CloudUpload,
    description:
      "Assessment, wave planning and zero-surprise cutovers that move legacy estates to the cloud without downtime.",
  },
  {
    title: "Platform Engineering",
    icon: Blocks,
    description:
      "Self-service internal platforms with golden paths, so product teams ship without waiting on infrastructure tickets.",
  },
  {
    title: "Site Reliability Engineering",
    icon: Radar,
    description:
      "SLOs, error budgets and incident response playbooks that keep availability measurable and predictable.",
  },
  {
    title: "Cloud Security & Compliance",
    icon: ShieldCheck,
    description:
      "Identity hardening, policy-as-code and continuous posture scanning aligned with enterprise audit requirements.",
  },
  {
    title: "FinOps & Cost Optimisation",
    icon: Wallet,
    description:
      "Rightsizing, commitment planning and per-team showback that typically cuts 20–40% off monthly cloud spend.",
  },
  {
    title: "Managed Cloud Operations",
    icon: Banknote,
    description:
      "Fully managed day-two operations: patching, backups, capacity planning and 24×7 on-call coverage.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Outcome-driven solutions, not just tooling"
          description="Each engagement is scoped around a measurable business result — faster releases, lower spend, higher uptime."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ title, icon: Icon, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:glow-ring"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Icon className="h-8 w-8 text-brand-cyan" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}