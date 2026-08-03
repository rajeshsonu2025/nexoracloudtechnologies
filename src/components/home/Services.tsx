import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import cloudImage from "@/assets/images/svc-cloud.jpg";
import devopsImage from "@/assets/images/svc-devops.jpg";
import containersImage from "@/assets/images/svc-containers.jpg";
import monitoringImage from "@/assets/images/svc-monitoring.jpg";
import networkImage from "@/assets/images/svc-network.jpg";
import securityImage from "@/assets/images/svc-security.jpg";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Cloud Solutions",
    description:
      "Architecture, deployment and migration across the major public clouds with well-architected guardrails from day one.",
    image: cloudImage,
    alt: "Glowing cloud network illustration representing multi-cloud solutions",
    features: ["AWS", "Azure", "Google Cloud", "Cloud Migration"],
  },
  {
    title: "DevOps Engineering",
    description:
      "Automated build, test and release pipelines that ship changes to production safely, many times a day.",
    image: devopsImage,
    alt: "Abstract pipeline of glowing nodes representing CI/CD automation",
    features: ["Docker", "Jenkins", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Infrastructure Automation",
    description:
      "Every environment defined as code, versioned and reproducible — no snowflake servers, no manual drift.",
    image: containersImage,
    alt: "Grid of glowing containers representing infrastructure as code",
    features: ["Terraform", "Ansible", "IaC", "GitOps"],
  },
  {
    title: "Container Platform",
    description:
      "Production Kubernetes platforms with autoscaling, service mesh readiness and hardened workload isolation.",
    image: containersImage,
    alt: "Cluster of glowing cubes representing a Kubernetes container platform",
    features: ["Docker", "Kubernetes", "Helm", "Autoscaling"],
  },
  {
    title: "Monitoring",
    description:
      "Full-stack observability with actionable dashboards, SLOs and alerting that reaches the right engineer.",
    image: monitoringImage,
    alt: "Monitoring dashboard with glowing charts and metrics",
    features: ["Prometheus", "Grafana", "AlertManager", "Log Analytics"],
  },
  {
    title: "Networking",
    description:
      "Secure, high-throughput network design spanning on-premise data centres and cloud landing zones.",
    image: networkImage,
    alt: "Network switches and fibre cables glowing in a dark data centre",
    features: ["Cisco", "VPN", "Firewalls", "Load Balancers"],
  },
  {
    title: "Security",
    description:
      "Least-privilege access, encrypted data paths and tested recovery plans that satisfy enterprise audits.",
    image: securityImage,
    alt: "Glowing shield and padlock representing cloud security",
    features: ["IAM", "Cloud Security", "Backup", "Disaster Recovery"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="End-to-end cloud and DevOps capability"
          description="Seven engineering practices that cover the full lifecycle of modern infrastructure — design, build, automate, secure and operate."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:glow-ring"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  width={960}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-cyan transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}