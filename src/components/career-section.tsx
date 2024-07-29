"use client";
import VerticalTimeline from "@/lib/vertical_timeline";
import { OutlineButton, PrimaryButton } from "./ui/components/Button";
import { useEffect, useState } from "react";

export function CareerSection() {
  const [isLoading, setIsLoading] = useState(true);
  const data: TimelineEvent[] = [
    {
      date: "septembre 2021",
      event: "Baccalauréat",
      side: "left",
      description: "Lycée Madame de Sévignée, Charleville-Mézières",
    },
    {
      date: "janvier - octobre 2022",
      event: "RNCP31114",
      side: "left",
      image: "/images/logo-simplon.webp",
      description: "Développeur web & web mobile",
    },
    {
      date: "avril - mai 2021",
      event: "JCUBE.EU",
      side: "right",
      description: "Stage sur un projet Symfony 6",
    },
    {
      date: "janvier - octobre 2023",
      event: "RNCP31678",
      side: "left",
      image: "/images/logo-epsi.webp",
      description: "Concepteur développeur d'applications",
    },
    {
      date: "mai - juin 2023",
      event: "Comsea",
      side: "right",
      image: "/images/logo-comsea.webp",
      description: "Stage dans une agence de communication",
    },
    {
      date: "octobre 2023 - ...",
      event: "RNCP38837",
      side: "left",
      image: "/images/logo-epsi.webp",
      description: "Mastère Expert Informatique et Systèmes d'Information (EISI)",
    },
    {
      date: "octobre 2023 - ...",
      event: "Premier emploi",
      side: "right",
      image: "/images/logo-uimm.webp",
      description: "Alternance à l'UIMM Champagne-Ardenne",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`w-full md:flex md:items-center px-4 transition-all duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="container">
        <div className="sticky top-0 flex justify-between pt-6 pb-2 border-b border-black sm:border-none sm:bg-transparent bg-white">
          <h1 className="flex items-center text-xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
            Parcours
          </h1>
          <div className="flex space-x-2">
            <OutlineButton label="Retour" target="/" />
            <PrimaryButton label="Poursuivre" target="/technology" />
          </div>
        </div>
        <div className="flex justify-center py-4">
          <VerticalTimeline data={data} />
        </div>
      </div>
    </section>
  );
}
