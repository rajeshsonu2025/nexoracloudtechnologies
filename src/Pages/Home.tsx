import { lazy, Suspense } from "react";

import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Services from "@/components/home/Services";

const CloudPlatforms = lazy(() => import("@/components/home/CloudPlatforms"));
const Solutions = lazy(() => import("@/components/home/Solutions"));
const TechnologyStack = lazy(() => import("@/components/home/TechnologyStack"));
const WhyChoose = lazy(() => import("@/components/home/WhyChoose"));
const Process = lazy(() => import("@/components/home/Process"));
const Projects = lazy(() => import("@/components/home/Projects"));
const Industries = lazy(() => import("@/components/home/Industries"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const FAQ = lazy(() => import("@/components/home/FAQ"));
const Team = lazy(() => import("@/components/home/Team"));
const CTA = lazy(() => import("@/components/home/CTA"));
const Footer = lazy(() => import("@/components/home/Footer"));

function SectionFallback() {
  return <div className="h-40" aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-deep text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Suspense fallback={<SectionFallback />}>
          <CloudPlatforms />
          <Solutions />
          <TechnologyStack />
          <WhyChoose />
          <Process />
          <Projects />
          <Industries />
          <Testimonials />
          <FAQ />
          <Team />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}