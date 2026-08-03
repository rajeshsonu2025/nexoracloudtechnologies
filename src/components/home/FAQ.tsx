import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "What cloud platforms does NexoraCloud support?",
    answer:
      "We design and operate infrastructure on AWS, Microsoft Azure, Google Cloud, DigitalOcean and VMware-based private clouds, including hybrid setups that span several of them.",
  },
  {
    question: "How long does a typical cloud migration take?",
    answer:
      "A focused workload migration usually runs four to six weeks, while a full data-centre exit typically spans three to six months. We start with a two-week assessment that produces a wave plan and a fixed-scope estimate.",
  },
  {
    question: "Can you work with our existing DevOps team?",
    answer:
      "Yes. Most engagements are collaborative: our engineers work inside your repositories and ticketing system, pair with your team and hand over documented, code-reviewed platforms rather than black boxes.",
  },
  {
    question: "Do you provide 24×7 production support?",
    answer:
      "We offer managed operations with 24×7 on-call coverage, defined response SLAs, monthly reliability reviews and a named lead engineer who knows your environment.",
  },
  {
    question: "How do you keep cloud costs under control?",
    answer:
      "Every engagement includes FinOps practices: rightsizing, autoscaling policies, storage lifecycle rules, commitment planning and per-team cost visibility. Clients typically see 20–40% savings in the first quarter.",
  },
  {
    question: "Is Kubernetes the right choice for our workloads?",
    answer:
      "Not always. We assess team maturity, workload shape and operational budget first, then recommend Kubernetes, managed container services or serverless — whichever gives you the lowest total cost of ownership.",
  },
  {
    question: "How do you secure cloud environments?",
    answer:
      "We implement least-privilege IAM, network segmentation, encryption in transit and at rest, secret management, policy-as-code guardrails and continuous posture scanning with remediation runbooks.",
  },
  {
    question: "What monitoring and alerting stack do you use?",
    answer:
      "Typically Prometheus, Grafana, Loki and AlertManager, or the cloud-native equivalents. We define SLOs and error budgets so alerts represent real user impact instead of noise.",
  },
  {
    question: "Can you migrate us from one cloud provider to another?",
    answer:
      "Yes. We handle AWS-to-Azure, Azure-to-GCP and on-premise-to-cloud moves using infrastructure as code, replication tooling and rehearsed cutovers with tested rollback paths.",
  },
  {
    question: "What happens after the project is delivered?",
    answer:
      "You receive full source code, architecture documentation, runbooks and a knowledge-transfer session. From there you can run it in-house or keep us on a managed support retainer.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free consultation. We review your current environment, discuss goals and constraints, and send back a written recommendation with scope, timeline and cost within a few business days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the questions we hear most"
          description="Cloud strategy, DevOps practice, migration risk and ongoing support — explained plainly."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35 }}
                className="glass overflow-hidden rounded-2xl"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold transition-colors hover:text-brand-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-base"
                  >
                    <span className="min-w-0">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-cyan transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {faq.answer}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}