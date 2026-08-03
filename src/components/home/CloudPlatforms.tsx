import { motion } from "motion/react";
import { Check, Cloud, CloudCog, Database, Server, Waves } from "lucide-react";

import SectionHeading from "./SectionHeading";

const platforms = [
  {
    name: "Amazon Web Services",
    icon: Cloud,
    description:
      "Landing zones, EKS, serverless and cost-optimised workloads built on AWS Well-Architected principles.",
  },
  {
    name: "Microsoft Azure",
    icon: CloudCog,
    description:
      "Enterprise Azure estates with AKS, Entra ID governance and hybrid connectivity to existing data centres.",
  },
  {
    name: "Google Cloud",
    icon: Database,
    description:
      "GKE platforms, data pipelines and secure VPC design for analytics-heavy and AI-ready workloads.",
  },
  {
    name: "DigitalOcean",
    icon: Waves,
    description:
      "Lean, predictable-cost infrastructure for startups and product teams that need to move fast.",
  },
  {
    name: "VMware",
    icon: Server,
    description:
      "Private cloud modernisation, vSphere operations and a clear path from virtual machines to containers.",
  },
];

const offerings = ["Services", "Migration", "Consulting", "Architecture"];

export default function CloudPlatforms() {
  return (
    <section id="platforms" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cloud Platforms"
          title="Certified expertise across every major platform"
          description="We meet you where your workloads already live — and design the roadmap for where they should go next."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map(({ name, icon: Icon, description }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:glow-ring"
            >
              <span className="bg-gradient-brand grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {offerings.map((offering) => (
                  <li key={offering} className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                    <Check className="h-3.5 w-3.5 shrink-0 text-brand-cyan" aria-hidden="true" />
                    <span className="truncate">{offering}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}