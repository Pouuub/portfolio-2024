import { HeroSection } from "@/components/hero-section";
import Transition from "@/lib/transition";
import React from "react";

const LandingPage = () => {
  return (
    <main className="h-screen flex align-middle justify-center">
      <Transition>
        <HeroSection />
      </Transition>
    </main>
  );
};

export default LandingPage;
