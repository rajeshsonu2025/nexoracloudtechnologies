import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

import client1 from "@/assets/images/team-2.jpg";
import client2 from "@/assets/images/team-3.jpg";
import client3 from "@/assets/images/team-4.jpg";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Arjun Mehta",
    company: "CTO, FinEdge Payments",
    image: client1,
    feedback:
      "NexoraCloud rebuilt our AWS foundation in nine weeks. Deployments that used to take a full evening now finish before our stand-up ends, and our audit findings dropped to zero.",
  },
  {
    name: "Karan Malhotra",
    company: "Head of IT, MediCore Hospitals",
    image: client2,
    feedback:
      "They migrated 120 workloads to Azure without a single minute of patient-facing downtime. The documentation they handed over is better than anything we had internally.",
  },
  {
    name: "Sandeep Rao",
    company: "VP Engineering, RetailNova",
    image: client3,
    feedback:
      "Our Kubernetes platform now absorbs festival-season traffic spikes automatically, and FinOps reviews cut our monthly cloud bill by 34%. Genuinely senior engineers.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What engineering leaders say about us"
          description="Long-term partnerships built on uptime, clarity and measurable delivery."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:glow-ring"
            >
              <Quote className="h-8 w-8 text-brand-cyan/60" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{testimonial.feedback}”
              </blockquote>

              <div
                className="mt-6 flex items-center gap-1"
                aria-label={`Rated 5 out of 5 by ${testimonial.name}`}
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-brand-cyan text-brand-cyan"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <figcaption className="mt-5 flex min-w-0 items-center gap-3 border-t border-border pt-5">
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{testimonial.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {testimonial.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}