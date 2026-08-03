import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

import member1 from "@/assets/images/team-1.jpg";
import member2 from "@/assets/images/team-2.jpg";
import member3 from "@/assets/images/team-3.jpg";
import member4 from "@/assets/images/team-4.jpg";
import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Rajesh Yadav",
    role: "Founder & DevOps Engineer",
    image: member1,
    bio: "Builds automated delivery platforms and leads cloud strategy for every NexoraCloud engagement.",
    skills: ["AWS", "Terraform", "Kubernetes", "CI/CD"],
  },
  {
    name: "Rajesh Gupta",
    role: "Senior Cloud Engineer",
    image: member2,
    bio: "Designs resilient multi-region architectures and runs large-scale migrations to Azure and GCP.",
    skills: ["Azure", "GCP", "Networking", "IaC"],
  },
  {
    name: "Tej Singh Tewatia",
    role: "Data Analyst",
    image: member3,
    bio: "Turns infrastructure telemetry into cost, capacity and reliability insight leadership can act on.",
    skills: ["SQL", "Python", "Grafana", "FinOps"],
  },
  {
    name: "Vipin Yadav",
    role: "Software Developer",
    image: member4,
    bio: "Builds internal tooling, automation services and self-service portals for platform teams.",
    skills: ["React", "Node.js", "Docker", "APIs"],
  },
];

const socials = [
  { label: "LinkedIn", icon: Linkedin },
  { label: "GitHub", icon: Github },
  { label: "Twitter", icon: Twitter },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leadership Team"
          title="The engineers behind NexoraCloud"
          description="A small, senior team that stays hands-on with your infrastructure from kickoff to steady state."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:glow-ring"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-brand-cyan">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-2.5 py-1 text-[0.7rem] text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-2">
                  {socials.map(({ label, icon: Icon }) => (
                    <a
                      key={label}
                      href="#contact"
                      aria-label={`${member.name} on ${label}`}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:bg-gradient-brand hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}