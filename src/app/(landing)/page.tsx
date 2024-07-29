import { HeroSection } from "@/components/hero-section";
import Transition from "@/lib/transition";
import React from "react";

const LandingPage = () => {
  return (
    <main>
      <Transition>
        <HeroSection />
      </Transition>
    </main>
  );
};

export default LandingPage;
