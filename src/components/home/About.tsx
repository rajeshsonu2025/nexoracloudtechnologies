import { motion } from "motion/react";
import {
  Cloud,
  Cog,
  GaugeCircle,
  LifeBuoy,
  Network,
  MoveRight,
  Workflow,
} from "lucide-react";

import aboutImage from "@/assets/images/about.jpg";
import SectionHeading from "./SectionHeading";

const capabilities = [
  { title: "Cloud Engineering", icon: Cloud },
  { title: "DevOps", icon: Workflow },
  { title: "Infrastructure Automation", icon: Cog },
  { title: "Networking", icon: Network },
  { title: "Managed Services", icon: LifeBuoy },
  { title: "Monitoring", icon: GaugeCircle },
  { title: "Cloud Migration", icon: MoveRight },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass glow-ring order-2 overflow-hidden rounded-3xl p-2 lg:order-1"
        >
          <img
            src={aboutImage}
            alt="Cloud engineers reviewing holographic infrastructure architecture dashboards"
            width={1200}
            height={900}
            loading="lazy"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <SectionHeading
            align="left"
            eyebrow="Company Overview"
            title="Engineering the cloud backbone of ambitious businesses"
            description="NexoraCloud Technologies is a cloud and DevOps engineering company that designs, automates and operates production-grade infrastructure. From first architecture diagram to day-two operations, our certified engineers deliver platforms that stay secure, observable and cost-efficient at any scale."
          />

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="glass flex min-w-0 items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-secondary"
              >
                <span className="bg-gradient-brand grid h-9 w-9 shrink-0 place-items-center rounded-lg">
                  <Icon className="h-4.5 w-4.5 text-primary-foreground" aria-hidden="true" />
                </span>
                <span className="truncate text-sm font-medium">{title}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}