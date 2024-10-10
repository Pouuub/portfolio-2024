"use client";
import VerticalTimeline from "./ui/components/Timeline";
import MobileTimeline from "./ui/components/MobileTimeline";

export function CareerSection() {
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
      date: "avril - mai 2022",
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
      event: "TheArenaProject",
      image: "/images/logo-thearenaproject.webp",
      side: "right",
      description: "Concepts de programmation avancés",
    },
    {
      date: "mai - juin 2023",
      event: "Comsea",
      side: "left",
      image: "/images/logo-comsea.webp",
      description: "Stage dans une agence de communication",
    },
    {
      date: "octobre 2023 - ...",
      event: "RNCP38837",
      side: "right",
      image: "/images/logo-epsi.webp",
      description: "Mastère Expert Informatique et Systèmes d'Information (EISI)",
    },
    {
      date: "octobre 2023 - ...",
      event: "Premier emploi",
      side: "left",
      image: "/images/logo-uimm.webp",
      description: "Alternance à l'UIMM Champagne-Ardenne",
    },
  ];

  return (
    <section className="w-full md:flex md:items-center transition-all duration-500">
      <div className="sm:container">
        <div className="justify-center py-4 hidden md:flex">
          <VerticalTimeline data={data} />
        </div>
        <div className="justify-center py-4 flex md:hidden">
          <MobileTimeline data={data} />
        </div>
      </div>
    </section>
  );
}
