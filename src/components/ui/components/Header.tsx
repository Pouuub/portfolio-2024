import React from "react";
import { OutlineButton, PrimaryButton } from "./Button";
import Transition from "@/lib/transition";

interface HeaderProps {
  title: string;
  previous_page: string;
  next_page: string;
}
const Header = ({ title, previous_page, next_page }: HeaderProps) => {
  return (
    <div className="sticky top-0 flex justify-between py-4 px-4 border-b border-black sm:border-none sm:bg-transparent bg-white items-center z-50">
      <Transition>
        <h1 className="flex items-center text-xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">{title}</h1>
      </Transition>
      <div className="flex space-x-2">
        <OutlineButton label="Retour" target={previous_page} />
        <PrimaryButton label="Poursuivre" target={next_page} />
      </div>
    </div>
  );
};

export default Header;
