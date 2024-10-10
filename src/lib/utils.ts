import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateYearsSince(specificDate: Date): number {
  const currentDate: Date = new Date();

  const specificYear: number = specificDate.getFullYear();
  const currentYear: number = currentDate.getFullYear();

  let yearDifference: number = currentYear - specificYear;

  const currentMonth: number = currentDate.getMonth();
  const currentDay: number = currentDate.getDate();
  const specificMonth: number = specificDate.getMonth();
  const specificDay: number = specificDate.getDate();

  if (currentMonth < specificMonth || (currentMonth === specificMonth && currentDay < specificDay)) {
    yearDifference--;
  }

  return yearDifference;
}
