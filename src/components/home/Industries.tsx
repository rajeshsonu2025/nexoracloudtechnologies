import { motion } from "motion/react";
import {
  Banknote,
  Building,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Rocket,
  ShoppingBag,
  Truck,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const industries = [
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Banking", icon: Banknote },
  { name: "Retail", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "Startups", icon: Rocket },
  { name: "Government", icon: Building },
  { name: "Logistics", icon: Truck },
  { name: "IT Services", icon: Cpu },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Domain context that shapes better architecture"
          description="Compliance, latency and cost profiles differ by sector — our designs account for that from the start."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.06 }}
              className="glass group flex flex-col items-center gap-3 rounded-2xl px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:glow-ring"
            >
              <Icon
                className="h-7 w-7 text-brand-cyan transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}