import { motion } from "motion/react";

import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Requirement Gathering",
    description: "Workshops with your stakeholders to map workloads, constraints, compliance needs and success metrics.",
  },
  {
    title: "Architecture Design",
    description: "A documented target architecture with network topology, identity model, cost estimate and risk register.",
  },
  {
    title: "Cloud Deployment",
    description: "Landing zones and workloads provisioned through code, reviewed in pull requests and promoted per environment.",
  },
  {
    title: "Automation",
    description: "CI/CD pipelines, configuration management and self-healing routines replace every manual runbook step.",
  },
  {
    title: "Monitoring",
    description: "Dashboards, SLOs and alert routing go live before launch so nothing ships without observability.",
  },
  {
    title: "Optimization",
    description: "Continuous performance, reliability and cost tuning based on real production telemetry.",
  },
  {
    title: "Support",
    description: "24×7 managed operations with defined SLAs, monthly reviews and a named engineering contact.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Delivery Process"
          title="A predictable path from idea to production"
          description="Seven transparent stages, each with clear deliverables and sign-off — no black boxes."
        />

        <ol className="relative mt-14 space-y-6 before:absolute before:left-[1.35rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-brand before:opacity-40 sm:before:left-1/2">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 sm:grid-cols-2 sm:gap-10"
            >
              <div
                className={
                  index % 2 === 0
                    ? "sm:order-1 sm:pr-10 sm:text-right"
                    : "sm:order-2 sm:col-start-2 sm:pl-10"
                }
              >
                <div className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="bg-gradient-brand order-first grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-primary-foreground sm:absolute sm:left-1/2 sm:top-6 sm:-translate-x-1/2"
              >
                {index + 1}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}