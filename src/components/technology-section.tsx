"use client";

import { OutlineButton, PrimaryButton } from "./ui/components/Button";
import { useEffect, useState } from "react";
import VerticalTimeline from "./ui/components/Timeline";
import MobileTimeline from "./ui/components/MobileTimeline";

export function TechnologySection() {
  const [isLoading, setIsLoading] = useState(true);
  const data: TimelineEvent[] = [
    {
      event: "macOS",
      image: "/images/logo-apple.webp",
      side: "right",
      description: "Découverte d'un système d'exploitation UNIX",
    },
    {
      event: "HTML5",
      image: "/images/logo-html5.webp",
      side: "left",
      description: "Introduction aux technologies web modernes",
    },
    {
      event: "CSS3",
      image: "/images/logo-css3.webp",
      side: "right",
      description: "Premiers pas dans le design web",
    },
    {
      event: "PHP",
      image: "/images/logo-php.webp",
      side: "left",
      description: "Création de pages dynamiques",
    },
    {
      event: "GitHub",
      image: "/images/logo-github.webp",
      side: "right",
      description: "Hébergement et versionning de code",
    },
    {
      event: "MAMP",
      image: "/images/logo-mamp.webp",
      side: "left",
      description: "Installation d'un serveur local",
    },
    {
      event: "MySQL",
      image: "/images/logo-mysql.webp",
      side: "right",
      description: "Gestion d'une base de données",
    },
    {
      event: "Bootstrap",
      image: "/images/logo-bootstrap.webp",
      side: "left",
      description: "Utilisation d'une librairie CSS",
    },
    {
      event: "JavaScript",
      image: "/images/logo-js.webp",
      side: "right",
      description: "Interactions avec le DOM",
    },
    {
      event: "Python",
      image: "/images/logo-python.webp",
      side: "left",
      description: "Base d'algorithme et de programmation",
    },
    {
      event: "Composer",
      image: "/images/logo-composer.webp",
      side: "right",
      description: "Gestion de dépendances PHP",
    },
    {
      event: "NPM",
      image: "/images/logo-npm.webp",
      side: "left",
      description: "Gestion de packages JavaScript",
    },
    {
      event: "Symfony",
      image: "/images/logo-symfony.webp",
      side: "right",
      description: "Développement d'application avec Symfony",
    },
    {
      event: "Sass",
      image: "/images/logo-sass.webp",
      side: "left",
      description: "CSS dynamique avec Sass",
    },
    {
      event: "Twig",
      image: "/images/logo-twig.webp",
      side: "right",
      description: "Création de templates",
    },
    {
      event: "Doctrine",
      image: "/images/logo-doctrine.webp",
      side: "left",
      description: "Mapping objet-relationnel",
    },
    {
      event: "Tailwind CSS",
      image: "/images/logo-tailwindcss.webp",
      side: "right",
      description: "Design web avec Tailwind",
    },
    {
      event: "Node.js",
      image: "/images/logo-nodejs.webp",
      side: "left",
      description: "Développement serveur avec Node.js",
    },
    {
      event: "TheArenaProject",
      image: "/images/logo-thearenaproject.webp",
      side: "right",
      description: "Concepts de programmation avancés",
    },
    {
      event: "TypeScript",
      image: "/images/logo-typescript.webp",
      side: "left",
      description: "JavaScript typé",
    },
    {
      event: "Docker",
      image: "/images/logo-docker.webp",
      side: "right",
      description: "Conteneurisation d'applications",
    },
    {
      event: "PostgreSQL",
      image: "/images/logo-postgresql.webp",
      side: "left",
      description: "Utilisation de PostgreSQL",
    },
    {
      event: "Next.js",
      image: "/images/logo-nextjs.svg",
      side: "right",
      description: "Framework React",
    },
    {
      event: "Strapi",
      image: "/images/logo-strapi.svg",
      side: "left",
      description: "CMS headless",
    },
    {
      event: "Prisma",
      image: "/images/logo-prisma.webp",
      side: "right",
      description: "ORM moderne",
    },
    {
      event: "Gitlab",
      image: "/images/logo-gitlab.webp",
      side: "left",
      description: "Gestion de dépôts",
    },
    {
      event: "Gitlab CI/CD",
      image: "/images/logo-gitlab-ci-cd.webp",
      side: "right",
      description: "Pipeline d'intégration et de déploiement continu",
    },
    {
      event: "Traefik",
      image: "/images/logo-traefik.webp",
      side: "left",
      description: "Mise en place d'un reverse proxy et d'outils de monitoring",
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
      className={`w-full md:flex md:items-center transition-all duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}
    >
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
