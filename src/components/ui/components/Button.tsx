import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  target?: string;
  blank?: boolean;
}
export const PrimaryButton = ({ label, target, blank }: ButtonProps): JSX.Element => {
  return (
    <>
      {target ? (
        <Link href={target} target={blank ? "_blank" : ""} className="cursor-pointer">
          <Button>{label}</Button>
        </Link>
      ) : (
        <Button>{label}</Button>
      )}
    </>
  );
};

export const OutlineButton = ({ label, target, blank }: ButtonProps): JSX.Element => {
  return (
    <>
      {target ? (
        <Link href={target} target={blank ? "_blank" : ""} className="cursor-pointer">
          <Button variant="outline">{label}</Button>
        </Link>
      ) : (
        <Button variant="outline">{label}</Button>
      )}
    </>
  );
};
