import { Cloud, Github, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const columns = [
  {
    heading: "Company",
    links: ["About Us", "Leadership Team", "Careers", "Case Studies"],
  },
  {
    heading: "Services",
    links: ["Cloud Solutions", "DevOps Engineering", "Automation", "Monitoring"],
  },
  {
    heading: "Solutions",
    links: ["Cloud Migration", "Platform Engineering", "Security & Compliance", "FinOps"],
  },
  {
    heading: "Technologies",
    links: ["AWS", "Azure", "Kubernetes", "Terraform"],
  },
  {
    heading: "Quick Links",
    links: ["Privacy Policy", "Terms of Service", "Support", "Contact"],
  },
];

const socials = [
  { label: "LinkedIn", icon: Linkedin },
  { label: "GitHub", icon: Github },
  { label: "Twitter", icon: Twitter },
  { label: "YouTube", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_repeat(5,minmax(0,1fr))]">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2">
              <span className="bg-gradient-brand grid h-9 w-9 shrink-0 place-items-center rounded-lg">
                <Cloud className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
              </span>
              <span className="truncate font-display text-lg font-bold">
                Nexora<span className="text-brand-cyan">Cloud</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cloud engineering, DevOps and managed infrastructure services for businesses that need
              secure, automated and always-available platforms.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex min-w-0 items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <a href="mailto:hello@nexoracloud.com" className="truncate hover:text-foreground">
                  hello@nexoracloud.com
                </a>
              </li>
              <li className="flex min-w-0 items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <a href="tel:+919876543210" className="truncate hover:text-foreground">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex min-w-0 items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                <span className="truncate">Gurugram, Haryana, India</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={`NexoraCloud on ${label}`}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:bg-gradient-brand hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="min-w-0">
              <h3 className="text-sm font-semibold">{column.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-cyan"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} NexoraCloud Technologies. All rights reserved.</p>
          <p>Built for secure, scalable and automated cloud infrastructure.</p>
        </div>
      </div>
    </footer>
  );
}