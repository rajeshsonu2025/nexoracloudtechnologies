import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import cloudImage from "@/assets/images/svc-cloud.jpg";
import devopsImage from "@/assets/images/svc-devops.jpg";
import containersImage from "@/assets/images/svc-containers.jpg";
import monitoringImage from "@/assets/images/svc-monitoring.jpg";
import networkImage from "@/assets/images/svc-network.jpg";
import securityImage from "@/assets/images/svc-security.jpg";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "AWS Infrastructure",
    description:
      "Multi-account AWS landing zone for a fintech platform, with isolated environments and centralised logging.",
    image: cloudImage,
    alt: "Cloud network illustration representing an AWS infrastructure project",
    tech: ["AWS", "Terraform", "VPC", "IAM"],
  },
  {
    title: "CI/CD Pipeline",
    description:
      "Release pipeline that cut deployment time from four hours to eleven minutes across 30+ microservices.",
    image: devopsImage,
    alt: "Glowing pipeline graphic representing a CI/CD delivery project",
    tech: ["GitHub Actions", "Jenkins", "Docker", "Argo CD"],
  },
  {
    title: "Kubernetes Cluster",
    description:
      "Production EKS platform with autoscaling node groups, Helm-based delivery and hardened network policies.",
    image: containersImage,
    alt: "Glowing container cubes representing a Kubernetes cluster project",
    tech: ["Kubernetes", "Helm", "Istio", "EKS"],
  },
  {
    title: "Cloud Migration",
    description:
      "Lift-and-modernise migration of 120 on-premise virtual machines to Azure with zero business downtime.",
    image: networkImage,
    alt: "Networking hardware representing an on-premise to cloud migration project",
    tech: ["Azure", "VMware", "Ansible", "Site Recovery"],
  },
  {
    title: "Monitoring Dashboard",
    description:
      "Unified observability stack with SLO dashboards and alert routing that reduced MTTR by 62%.",
    image: monitoringImage,
    alt: "Analytics dashboard representing a monitoring platform project",
    tech: ["Prometheus", "Grafana", "Loki", "AlertManager"],
  },
  {
    title: "DevOps Automation",
    description:
      "Self-service environment provisioning that lets product teams spin up full stacks in under ten minutes.",
    image: securityImage,
    alt: "Security shield graphic representing a DevOps automation project",
    tech: ["Terraform", "Ansible", "Python", "GitOps"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Infrastructure we have designed and delivered"
          description="A selection of engagements across fintech, healthcare, retail and SaaS product companies."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:glow-ring"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={960}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-cyan transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  View Details
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}