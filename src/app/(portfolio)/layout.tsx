"use client";
import Header, { HeaderProps } from "@/components/ui/components/Header";
import Transition from "@/lib/transition";
import { usePathname } from "next/navigation";
import React from "react";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const headerOptions: { [key: string]: HeaderProps } = {
    "/career": {
      title: "Parcours",
      previous_page: "/",
      next_page: "/technology",
    },
    "/technology": {
      title: "Technologies",
      previous_page: "/career",
      next_page: "/interests",
    },
    "/interests": {
      title: "Intêrets",
      next_label: "Accueil",
      previous_page: "/technology",
      next_page: "/",
    },
  };

  const { title, previous_label, next_label, previous_page, next_page } = headerOptions[pathname];

  return (
    <main>
      <Header
        title={title}
        previous_label={previous_label}
        next_label={next_label}
        previous_page={previous_page}
        next_page={next_page}
      />
      <Transition>{children}</Transition>
    </main>
  );
};

export default PortfolioLayout;
