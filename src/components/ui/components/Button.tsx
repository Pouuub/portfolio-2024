import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  label: string;
  target?: string;
  blank?: boolean;
}
export const PrimaryButton = ({ label, target, blank }: ButtonProps): JSX.Element => {
  return (
    <>
      {target ? (
        <Link href={target} target={blank ? "_blank" : ""}>
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
        <Link href={target} target={blank ? "_blank" : ""}>
          <Button variant="outline">{label}</Button>
        </Link>
      ) : (
        <Button variant="outline">{label}</Button>
      )}
    </>
  );
};
