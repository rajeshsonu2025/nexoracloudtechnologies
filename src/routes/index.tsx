import { createFileRoute } from "@tanstack/react-router";

import Home from "@/Pages/Home";

const description =
  "NexoraCloud Technologies delivers cloud engineering, DevOps automation, Kubernetes platforms and 24×7 managed infrastructure on AWS, Azure and Google Cloud.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexoraCloud Technologies | Cloud & DevOps Engineering Company" },
      { name: "description", content: description },
      { property: "og:title", content: "NexoraCloud Technologies | Cloud & DevOps Engineering" },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});
