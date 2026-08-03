import { motion } from "motion/react";
import { Activity, Cpu, Headphones, Rocket, Workflow } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "99.9%", label: "Infrastructure Availability", icon: Activity },
  { value: "24×7", label: "Support", icon: Headphones },
  { value: "12+", label: "Cloud Technologies", icon: Cpu },
  { value: "100%", label: "Automation Focus", icon: Workflow },
];

export default function Stats() {
  return (
    <section aria-label="Company statistics" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:glow-ring"
            >
              <Icon
                className="mx-auto h-6 w-6 text-brand-cyan transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <p className="text-gradient mt-4 text-3xl font-bold sm:text-4xl">{value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}