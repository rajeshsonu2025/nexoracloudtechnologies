import { motion } from "motion/react";

import SectionHeading from "./SectionHeading";

const technologies = [
  { name: "AWS", initials: "AWS" },
  { name: "Azure", initials: "AZ" },
  { name: "Google Cloud", initials: "GCP" },
  { name: "Docker", initials: "DK" },
  { name: "Kubernetes", initials: "K8s" },
  { name: "Terraform", initials: "TF" },
  { name: "Ansible", initials: "AN" },
  { name: "Linux", initials: "LX" },
  { name: "Git", initials: "GIT" },
  { name: "GitHub", initials: "GH" },
  { name: "GitLab", initials: "GL" },
  { name: "Jenkins", initials: "JK" },
  { name: "Prometheus", initials: "PR" },
  { name: "Grafana", initials: "GF" },
  { name: "Cisco", initials: "CS" },
  { name: "Nginx", initials: "NX" },
  { name: "Apache", initials: "AP" },
  { name: "MySQL", initials: "SQL" },
  { name: "PostgreSQL", initials: "PG" },
  { name: "Redis", initials: "RD" },
];

export default function TechnologyStack() {
  return (
    <section id="technology" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Stack"
          title="The tools our engineers run in production"
          description="A battle-tested toolchain covering compute, orchestration, automation, observability, networking and data."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map(({ name, initials }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: (index % 5) * 0.05 }}
              className="glass group flex min-w-0 items-center gap-3 rounded-xl px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:glow-ring"
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary/70 text-[0.65rem] font-bold tracking-tight text-brand-cyan transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-primary-foreground"
              >
                {initials}
              </span>
              <span className="truncate text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}