"use client";

import CallToAction from "@/components/CallToAction";
import ConnectedBanks from "@/components/ConnectedBanks";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { useRef } from "react";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    const element = featuresRef.current;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 200;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10">
      <Header onFeatureClick={scrollToFeatures} />
      <Hero />
      <CallToAction />
      <ConnectedBanks />
      <Features ref={featuresRef} />
      <Testimonials />
    </div>
  );
}
