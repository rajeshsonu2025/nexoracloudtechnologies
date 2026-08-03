import { motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  Cloud,
  Container,
  GitBranch,
  Headphones,
  Layers,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

import heroImage from "@/assets/images/hero-cloud.jpg";

const floatingCards = [
  { label: "AWS", icon: Cloud, position: "left-[-6%] top-[12%]", delay: 0 },
  { label: "Docker", icon: Container, position: "left-[-10%] top-[52%]", delay: 0.6 },
  { label: "Kubernetes", icon: Boxes, position: "left-[8%] bottom-[-4%]", delay: 1.2 },
  { label: "Terraform", icon: Layers, position: "right-[-2%] top-[18%]", delay: 0.3 },
  { label: "CI/CD", icon: GitBranch, position: "right-[-3%] top-[58%]", delay: 0.9 },
  { label: "Linux", icon: Terminal, position: "right-[6%] bottom-[-5%]", delay: 1.5 },
];

const trustBadges = [
  { label: "Cloud Experts", icon: Sparkles },
  { label: "Enterprise Security", icon: ShieldCheck },
  { label: "24×7 Support", icon: Headphones },
  { label: "Modern Infrastructure", icon: ServerCog },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-surface-deep" />
        <div className="animate-aurora absolute -left-32 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-brand-cyan/20 blur-[120px]" />
        <div className="animate-aurora absolute right-[-10%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-brand-blue/25 blur-[130px] [animation-delay:3s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--brand-cyan)_8%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--brand-cyan)_8%,transparent)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            NexoraCloud Technologies
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Transform Your Business with{" "}
            <span className="text-gradient">Modern Cloud &amp; DevOps</span> Solutions
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Helping businesses build secure, scalable and automated cloud infrastructure using AWS,
            Azure, Google Cloud, Kubernetes and DevOps best practices.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gradient-brand glow-ring inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore Services
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="glass flex min-w-0 items-center gap-2 rounded-xl px-3 py-3 text-xs font-medium text-muted-foreground"
              >
                <Icon className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <span className="truncate">{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl px-10 lg:px-14"
        >
          <div className="glass glow-ring overflow-hidden rounded-3xl p-2">
            <img
              src={heroImage}
              alt="Isometric illustration of a cloud infrastructure network with servers and data flows"
              width={1200}
              height={1008}
              fetchPriority="high"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>

          {floatingCards.map(({ label, icon: Icon, position, delay }) => (
            <div
              key={label}
              className={`glass animate-float absolute ${position} hidden items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-foreground sm:flex`}
              style={{ animationDelay: `${delay}s` }}
            >
              <Icon className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}