import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Transition from "@/lib/transition";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio - A.Tourolle",
  description: "Candidature spontanée chez WebexpR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
